import React, { useEffect, useRef, useState } from "react";
import PeTableHead from "./table-head";
import Pagination from "../../../../components/molecule/pagination/pagination";
import RenameModal from "./modal/rename-modal/rename-modal";
import DeleteModal from "./modal/delete-modal/delete-modal";
import InstagramSvg from "../../../../assets/svg/social-icons/instagram.svg";
import mockData from "../../../../constant/post-engagement.json";
import { cn } from "../../../../lib/utils";
import { routes } from "../../../../constant/routes";

interface IPostEngagementProps {
  name: string;
  "total_engaged/unique": string;
  acquired_subscribers: string;
  conversion_rate: string;
}

export default function PostEngagementTable() {
  const selectAllRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [renameModal, setRenameModal] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<Array<string>>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<
    keyof IPostEngagementProps | null
  >(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleRename = () => {
    setRenameModal(!renameModal);
  };

  const handleDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const handleBulkDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const handleSelectRow = (name: string) => {
    if (selectedRows.includes(name)) {
      setSelectedRows(selectedRows.filter((row) => row !== name));
    } else {
      setSelectedRows([...selectedRows, name]);
    }
  };

  const handleSelectAllRows = () => {
    const data = handleDataChange().data;
    console.log(data);
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data?.map((item) => item.name));
    }
    setSelectAll(!selectAll);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // If the same column is clicked, toggle the sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set the new column and reset the sort direction to ascending
      setSortColumn(column as keyof IPostEngagementProps);
      setSortDirection("asc");
    }
  };

  const sortedData = (
    data: IPostEngagementProps[],
    sortColumn: keyof IPostEngagementProps,
    sortDirection: "asc" | "desc"
  ) => {
    if (!sortColumn) return data;

    return data.sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (sortDirection === "asc") {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  };

  const handleDataChange = () => {
    let data = mockData;

    if (searchTerm?.trim()?.length > 0) {
      data = mockData?.filter((item) =>
        item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }
    const sorted = sortedData(
      data,
      sortColumn as keyof IPostEngagementProps,
      sortDirection
    );

    const paginatedData = sorted?.slice(
      (currentPage - 1) * 10,
      currentPage * 10
    );

    return { data: paginatedData, totalPages: data?.length };
  };
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

  return (
    <div className="w-full flex flex-col gap-4 lg:col-span-7">
      <PeTableHead
        handleBulkDelete={handleBulkDelete}
        handleSearch={(e) => setSearchTerm(e.target.value)}
        searchValue={searchTerm}
      />
      <div className="overflow-x-auto overflow-y-hidden bg-white rounded-2xl">
        <table className="table">
          <thead>
            <tr className="text-13">
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
              <th className="w-5"></th>
              <th className="w-[150px]" onClick={() => handleSort("name")}>
                Name{" "}
                {sortColumn === "name" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="w-[150px]"
                onClick={() => handleSort("total_engaged/unique")}
              >
                Total Engaged/Unique{" "}
                {sortColumn === "total_engaged/unique" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="w-[150px]"
                onClick={() => handleSort("acquired_subscribers")}
              >
                Acquired Subscribers{" "}
                {sortColumn === "acquired_subscribers" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="w-[150px]"
                onClick={() => handleSort("conversion_rate")}
              >
                Conversion Rate{" "}
                {sortColumn === "conversion_rate" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="w-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {handleDataChange()?.data?.length > 0 &&
              handleDataChange()?.data?.map((item, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={selectedRows.includes(item?.name)}
                        onChange={() => handleSelectRow(item?.name)}
                      />
                    </label>
                  </th>
                  <td>
                    <img src={InstagramSvg} alt="instagram" />
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.["total_engaged/unique"]}</td>
                  <td>{item?.acquired_subscribers}</td>
                  <td>{item?.conversion_rate}%</td>
                  <th>
                    <div
                      role="listbox"
                      className={cn(
                        "dropdown dropdown-bottom dropdown-end",
                        (index === handleDataChange()?.data?.length - 1 ||
                          index === handleDataChange()?.data?.length - 2) &&
                          "dropdown-top"
                      )}
                    >
                      <label tabIndex={0}>
                        <button className="btn btn-xs btn-outline">
                          Actions
                        </button>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]"
                        role="menu"
                      >
                        <li role="menuitem">
                          <a href={routes?.edit}>Edit</a>
                        </li>
                        <li role="menuitem" onClick={handleRename}>
                          <a>Rename</a>
                        </li>
                        <li role="menuitem" onClick={handleDelete}>
                          <a>Delete</a>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
              ))}
            {handleDataChange()?.data?.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-red-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-auto">
        <Pagination
          current_page={currentPage}
          handlePageChange={(payload) => setCurrentPage(payload)}
          total_pages={Math.ceil(handleDataChange()?.totalPages / 10)}
        />
      </div>
      {renameModal && <RenameModal onClose={() => setRenameModal(false)} />}
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} />}
    </div>
  );
}
