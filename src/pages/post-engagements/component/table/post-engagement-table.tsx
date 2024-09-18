import React, { useEffect, useRef } from "react";
import PeTableHead from "./table-head";
import Pagination from "../../../../components/molecule/pagination/pagination";
import RenameModal from "./modal/rename-modal/rename-modal";
import DeleteModal from "./modal/delete-modal/delete-modal";
import InstagramSvg from "../../../../assets/svg/social-icons/instagram.svg";
import mockData from "../../../../constant/post-engagement.json";
import { cn } from "../../../../lib/utils";
import { routes } from "../../../../constant/routes";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  IPostEngagementProps,
  setDeleteModal,
  setRenameModal,
  setSelectAll,
  setSelectedRows,
  setSortColumn,
  setSortDirection,
} from "../../../../redux/features/postEngagementSlice";

export default function PostEngagementTable() {
  const dispatch = useDispatch();
  const {
    searchTerm,
    currentPage,
    selectedRows,
    selectAll,
    sortColumn,
    sortDirection,
    renameModal,
    deleteModal,
  } = useSelector((state: RootState) => state.postEngagement);

  const selectAllRef = useRef<HTMLInputElement>(null);
  const handleRename = () => {
    dispatch(setRenameModal(!renameModal));
  };

  const handleDelete = () => {
    dispatch(setDeleteModal(!deleteModal));
  };

  const handleSelectRow = (name: string) => {
    if (selectedRows.includes(name)) {
      let filtered_data = selectedRows.filter((row) => row !== name);
      dispatch(setSelectedRows(filtered_data));
    } else {
      dispatch(setSelectedRows([...selectedRows, name]));
    }
  };

  const handleSelectAllRows = () => {
    const data = handleDataChange().data;
    if (selectAll) {
      dispatch(setSelectedRows([]));
    } else {
      dispatch(setSelectedRows(data?.map((item) => item.name)));
    }
    dispatch(setSelectAll(!selectAll));
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      let newSortDirection = sortDirection === "asc" ? "desc" : "asc";
      dispatch(setSortDirection(newSortDirection as "asc" | "desc"));
    } else {
      dispatch(setSortColumn(column as keyof IPostEngagementProps));
      dispatch(setSortDirection("asc"));
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
      <PeTableHead />
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
              <th
                className="w-[150px] cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name{" "}
                {sortColumn === "name" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="w-[150px] cursor-pointer"
                onClick={() => handleSort("total_engaged/unique")}
              >
                Total Engaged/Unique{" "}
                {sortColumn === "total_engaged/unique" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="w-[150px] cursor-pointer"
                onClick={() => handleSort("acquired_subscribers")}
              >
                Acquired Subscribers{" "}
                {sortColumn === "acquired_subscribers" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="w-[150px] cursor-pointer"
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
                          <p>Rename</p>
                        </li>
                        <li role="menuitem" onClick={handleDelete}>
                          <p>Delete</p>
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
          total_pages={Math.ceil(handleDataChange()?.totalPages / 10)}
        />
      </div>
      {renameModal && (
        <RenameModal onClose={() => dispatch(setRenameModal(false))} />
      )}
      {deleteModal && (
        <DeleteModal onClose={() => dispatch(setDeleteModal(false))} />
      )}
    </div>
  );
}
