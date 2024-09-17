import { ChangeEvent } from "react";
import SearchSvg from "../../../../assets/svg/search.svg";
import DownArrowSvg from "../../../../assets/svg/down-arrow.svg";
//post engagement table head
export default function PeTableHead({
  searchValue,
  handleSearch,
  handleBulkDelete,
}: {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBulkDelete: () => void;
}) {
  return (
    <div className="mb-2 flex flex-row items-end gap-2 w-full">
      <div className="grow truncate">
        <h4 className="truncate text-xl">Post Engagements</h4>
      </div>
      <div className="form-control hidden md:flex">
        <div className="join items-center border border-neutral bg-base-100">
          <input
            onChange={handleSearch}
            value={searchValue}
            placeholder="Search…"
            type="text"
            className="input input-sm h-[30px] focus:outline-none join-item border-0"
          />
          <span className="join-item px-1">
            <img src={SearchSvg} alt="search" />
          </span>
        </div>
      </div>
      <div role="listbox" className="dropdown dropdown-end">
        <label>
          <button className="btn btn-sm btn-outline">
            Bulk Actions <img src={DownArrowSvg} alt="down-arrow" />
          </button>
        </label>
        <ul
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48"
          role="dropdown"
        >
          <li role="menuitem" className="w-full" onClick={handleBulkDelete}>
            <a>Delete</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
