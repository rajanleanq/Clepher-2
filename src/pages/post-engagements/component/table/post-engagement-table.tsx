import React, { useState } from "react";
import PeTableHead from "./table-head";
import Pagination from "../../../../components/molecule/pagination/pagination";
import RenameModal from "./modal/rename-modal/rename-modal";
import DeleteModal from "./modal/delete-modal/delete-modal";

export default function PostEngagementTable() {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [renameModal, setRenameModal] = useState<boolean>(false);
  const handleRename = () => {
    setRenameModal(!renameModal);
  }
  const handleDelete = () => {
    setDeleteModal(!deleteModal);
  }
  return (
    <div className="w-full flex flex-col gap-4 lg:col-span-7">
      <PeTableHead />
      <div className="overflow-x-auto bg-white rounded-2xl">
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
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </label>
              </th>
              <td></td>
              <td>Apple, Inc.</td>
              <td>0/0</td>
              <td>0</td>
              <td>0%</td>
              <th>
                <div
                  role="listbox"
                  className="dropdown dropdown-bottom dropdown-end"
                >
                  <label tabIndex={0}>
                    <button className="btn btn-xs btn-outline">Actions</button>
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
          </tbody>
        </table>
      </div>
      <div className="mx-auto">
        <Pagination total_pages={2} />
      </div>
      {renameModal && <RenameModal onClose={() => setRenameModal(false)} />}
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} />}
    </div>
  );
}
