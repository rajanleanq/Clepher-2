import React, { useState } from "react";
import PeTableHead from "./table-head";
import Pagination from "../../../../components/molecule/pagination/pagination";
import RenameModal from "./modal/rename-modal/rename-modal";
import DeleteModal from "./modal/delete-modal/delete-modal";
import InstagramSvg from "../../../../assets/svg/social-icons/instagram.svg";
import mockData from "../../../../constant/post-engagement.json";
export default function PostEngagementTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [renameModal, setRenameModal] = useState<boolean>(false);
  const handleRename = () => {
    setRenameModal(!renameModal);
  };
  const handleDelete = () => {
    setDeleteModal(!deleteModal);
  };
  const handleDataChange = () => {
    return mockData?.slice((currentPage - 1) * 10, currentPage + 10);
  };
  return (
    <div className="w-full flex flex-col gap-4 lg:col-span-7">
      <PeTableHead />
      <div className="overflow-x-auto overflow-y-hidden bg-white rounded-2xl">
        <table className="table">
          <thead>
            <tr className="text-13">
              <th className="w-5">
                <label>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </label>
              </th>
              <th className="w-5"></th>
              <th className="w-[150px]">Name</th>
              <th className="w-[150px]">Total Engaged/Unique</th>
              <th className="w-[150px]">Acquired Subscribers</th>
              <th className="w-[150px]">Conversion Rate</th>
              <th className="w-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {handleDataChange()?.map((item) => (
              <tr key={item?.name}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox checkbox-sm" />
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
                    className="dropdown dropdown-bottom dropdown-end"
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
                        <a>Edit</a>
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
          </tbody>
        </table>
      </div>
      <div className="mx-auto">
        <Pagination
          current_page={currentPage}
          handlePageChange={(payload) => setCurrentPage(payload)}
          total_pages={Math.ceil(mockData.length / 10)}
        />
      </div>
      {renameModal && <RenameModal onClose={() => setRenameModal(false)} />}
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} />}
    </div>
  );
}
