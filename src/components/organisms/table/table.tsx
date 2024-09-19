import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../../lib/utils";
import TableHead, { ITableHeadProps } from "./components/table-header/table-header";
import Pagination from "./components/pagination/pagination";
import ArrowDownSolidIcon from "../../../assets/svg/common/arrow-down-solid.icon";

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
  const [filteredData, setFilteredData] = useState<T[]>(dataSource);
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<Array<T[keyof T]>>([]);

  const renderSortIcon = (column: keyof T) => {
    if (sortColumn === column) {
      return (
        <div className={`w-3 h-3 ${sortDirection === "desc" ? "rotate-180" : ""}`}>
          <ArrowDownSolidIcon />
        </div>
      );
    }
    return null;
  };

  const sortData = (data: T[], column: keyof T, direction: "asc" | "desc") => {
    return data.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return direction === "asc" ? valueA - valueB : valueB - valueA;
      }
      return 0;
    });
  };

  const toggleSort = (column: keyof T) => {
    if (sortColumn === column) {
      setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const toggleSelectAllRows = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(dataSource?.map(item => item[columns[1].key]));
    }
    setSelectAll(prev => !prev);
  };

  const filterAndPaginateData = () => {
    let filtered = dataSource;

    if (searchTerm.trim() && search_key) {
      filtered = dataSource?.filter(item =>
        item[search_key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const sorted = sortData(filtered, sortColumn as keyof T, sortDirection);
    const paginated = sorted?.slice((currentPage - 1) * 10, currentPage * 10);

    return { paginated, filtered };
  };

  const toggleSelectRow = (key: T[keyof T]) => {
    setSelectedRows(prev =>
      prev?.includes(key) ? prev.filter(row => row !== key) : [...prev, key]
    );
  };

  useEffect(() => {
    const { paginated } = filterAndPaginateData();
    setFilteredData(paginated);
  }, [searchTerm, sortColumn, sortDirection, currentPage, dataSource]);

  useEffect(() => {
    const { paginated } = filterAndPaginateData();
    if (selectAllRef.current) {
      if (selectedRows.length === 0) {
        selectAllRef.current.indeterminate = false;
        setSelectAll(false);
      } else if (selectedRows.length === paginated.length) {
        selectAllRef.current.indeterminate = false;
        setSelectAll(true);
      } else {
        selectAllRef.current.indeterminate = true;
      }
    }
  }, [selectedRows, filterAndPaginateData]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <TableHead
        handleSearch={handleSearchChange}
        handleBulkAction={handleBulkAction}
        tableName={tableName}
        searchTerm={searchTerm}
      />
      <div className="overflow-x-auto overflow-y-hidden bg-white rounded-2xl">
        <table className="table table-sm bg-base-100">
          <thead>
            <tr>
              <th className="w-5">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    onChange={toggleSelectAllRows}
                    checked={selectAll}
                    ref={selectAllRef}
                  />
                </label>
              </th>
              {columns.map(column => (
                <th
                  key={column.key}
                  className={cn(column?.dataIndex && "cursor-pointer")}
                  style={{ width: column?.width }}
                  onClick={() => column?.dataIndex && toggleSort(column.dataIndex)}
                >
                  <div className="flex items-center gap-1">
                    {column?.title}
                    {column?.dataIndex === sortColumn ? renderSortIcon(column.dataIndex) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={selectedRows.includes(item[columns?.[1]?.key])}
                        onChange={() => toggleSelectRow(item[columns?.[1]?.key])}
                      />
                    </label>
                  </td>
                  {columns.map(column => (
                    <td key={column.key} style={{ width: column?.width }}>
                      {column?.render
                        ? column.render(item[column.key])
                        : item[column.dataIndex!]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="text-center text-red-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-auto">
        <Pagination
          data_length={filterAndPaginateData()?.filtered?.length}
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
