import RenameModal from "./modal/rename-modal/rename-modal";
import DeleteModal from "./modal/delete-modal/delete-modal";
import Table from "../../../../components/organisms/table/table";
import { useState } from "react";
import mockData from "../../../../constant/post-engagement.json";
import instagramSvg from "../../../../assets/svg/social-icons/instagram.svg";
import { Link } from "react-router-dom";
import { routes } from "../../../../constant/routes";
export default function PostEngagementTable() {
  const [renameModal, setRenameModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const handleRenameModal = () => {
    setRenameModal(!renameModal);
  };
  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  const columns = [
    {
      key: "icon",
      width: "20px",
      render: () => <img src={instagramSvg} alt="instagram" className="w-3.5 h-3.5" />,
    },
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
      width: "150px",
    },

    {
      key: "total_engaged/unique",
      dataIndex: "total_engaged/unique",
      title: "Engaged / Unique",
      width: "150px",
    },
    {
      key: "acquired_subscribers",
      dataIndex: "acquired_subscribers",
      title: "Acquired",
      width: "150px",
    },
    {
      key: "conversion_rate",
      dataIndex: "conversion_rate",
      title: "Conversion",
      width: "150px",
    },
    {
      key: "action",
      title: "Action",
      width: "20px",
      render: () => (
        <div role="listbox" className={"dropdown dropdown-bottom dropdown-end"}>
          <label tabIndex={0}>
            <button className="btn btn-xs btn-outline">Actions</button>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]"
            role="menu"
          >
            <li role="menuitem">
              <Link to={routes?.edit}>Edit</Link>
            </li>
            <li role="menuitem" onClick={handleRenameModal}>
              <p>Rename</p>
            </li>
            <li role="menuitem" onClick={handleDeleteModal}>
              <p>Delete</p>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4 lg:col-span-7 ">
      <Table
        tableName="Post Engagements"
        search_key={"name"}
        handleBulkAction={handleDeleteModal}
        columns={columns}
        dataSource={mockData}
      />
      {renameModal && <RenameModal onClose={() => setRenameModal(false)} />}
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} />}
    </div>
  );
}
