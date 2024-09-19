import React, { useState, useEffect, useRef } from "react";
import arrowDownSolid from "../../../assets/svg/common/arrow-down-solid.svg";
import { cn } from "../../../lib/utils";
import TableHead, {
  ITableHeadProps,
} from "./components/table-header/table-header";
import Pagination from "./components/pagination/pagination";

export interface ITableProps<T> extends ITableHeadProps {
  columns: TableColumnsType<T>;
  dataSource: T[];
  search_key?: keyof T;
}

export type TableColumnsType<T> = Array<{
  key: string;
  dataIndex?: string;
  title?: string;
  render?: (data: T[keyof T]) => React.ReactNode;
  width?: string; // in px
}>;

export default function Table<T extends Record<string, any>>({
  columns,
  dataSource,
  search_key,
  handleBulkAction,
  tableName,
}: ITableProps<T>) {
  const selectAllRef = useRef<HTMLInputElement>(null);
  const [sortedData, setSortedData] = useState<T[]>(dataSource);
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<Array<T[keyof T]>>([]);

  const handleSortDirection = (column: keyof T) => {
    if (sortColumn === column) {
      return (
        <img
          src={arrowDownSolid}
          alt="arrow-down-solid"
          className={`w-3 h-3 ${sortDirection === "desc" ? "rotate-180" : ""}`}
        />
      );
    }
    return null;
  };

  const handleSortData = (
    data: T[],
    sortColumn: keyof T,
    sortDirection: "asc" | "desc"
  ) => {
    if (!sortColumn) return data;

    return data.sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
      }
      return 0;
    });
  };

  const handleSort = (column: keyof T) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSelectAllRows = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(dataSource?.map((item: T) => item[columns[1].key]));
    }
    setSelectAll(!selectAll);
  };

  const handleDataChange = () => {
    let data = dataSource;
    if (searchTerm.trim().length > 0 && search_key) {
      data = dataSource.filter((item) =>
        item[search_key]
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchTerm.toLowerCase())
      );
    }
    const sorted = handleSortData(data, sortColumn as keyof T, sortDirection);
    const paginatedData = sorted.slice(
      (currentPage - 1) * 10,
      currentPage * 10
    );
    return { data: paginatedData, originalData: data };
  };
  const handleSelectRow = (key: T[keyof T]) => {
    if (selectedRows.includes(key)) {
      setSelectedRows(selectedRows.filter((row) => row !== key));
    } else {
      setSelectedRows([...selectedRows, key]);
    }
  };

  useEffect(() => {
    const { data } = handleDataChange();
    setSortedData(data);
  }, [searchTerm, sortColumn, sortDirection, currentPage, dataSource]);

  useEffect(() => {
    const data = handleDataChange().data;
    if (selectAllRef.current) {
      if (selectedRows.length === 0) {
        selectAllRef.current.indeterminate = false;
        setSelectAll(false);
      } else if (selectedRows.length === data.length) {
        selectAllRef.current.indeterminate = false;
        setSelectAll(true);
      } else {
        selectAllRef.current.indeterminate = true;
      }
    }
  }, [selectedRows, handleDataChange]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="">
      <TableHead
        handleSearch={handleSearch}
        handleBulkAction={handleBulkAction}
        tableName={tableName}
        searchTerm={searchTerm}
      />
      <div className="overflow-x-auto overflow-y-hidden bg-white rounded-2xl">
        <table className="table table-sm bg-base-100 ">
          <thead>
            <tr>
              <th className="w-5">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    onChange={handleSelectAllRows}
                    checked={selectAll}
                    ref={selectAllRef}
                  />
                </label>
              </th>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={cn(`cursor-pointer`)}
                  style={{ width: column?.width }}
                  onClick={() =>
                    column?.dataIndex && handleSort(column.dataIndex)
                  }
                >
                  <div className="flex items-center gap-1">
                    {column?.title}{" "}
                    {column?.dataIndex && column.dataIndex === sortColumn
                      ? handleSortDirection(column.dataIndex)
                      : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={selectedRows.includes(item[columns[1].key])}
                        onChange={() => handleSelectRow(item[columns[1]?.key])}
                      />
                    </label>
                  </td>
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      style={{ width: column?.width }}
                    >
                      {column?.render
                        ? column?.render?.(item?.[column?.dataIndex!])
                        : item?.[column?.dataIndex!]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="text-center text-red-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-auto">
        <Pagination
          data_length={handleDataChange()?.originalData?.length}
          currentPage={currentPage}
          handlePageChange={(payload) => setCurrentPage(payload)}
        />
      </div>
    </div>
  );
}
