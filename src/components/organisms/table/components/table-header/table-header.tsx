import SearchSvg from "../../../../../assets/svg/common/search.svg";
import DownArrowSvg from "../../../../../assets/svg/common/down-arrow.svg";

export interface ITableHeadProps {
  searchTerm?: string;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBulkAction: () => void;
  tableName:string
}
export default function TableHead({
  handleSearch,
  searchTerm,
  handleBulkAction,
  tableName
}: ITableHeadProps) {
  return (
    <div className="mb-2 flex flex-row items-end gap-2 w-full">
      <div className="grow truncate">
        <h4 className="truncate text-xl">{tableName}</h4>
      </div>
      <div className="form-control hidden md:flex">
        <div className="join items-center border border-neutral-900 bg-base-100">
          <input
            onChange={handleSearch}
            value={searchTerm}
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
        <button className="btn btn-sm btn-outline">
          Bulk Actions <img src={DownArrowSvg} alt="down-arrow" />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={handleBulkAction}>
            <p>Delete</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
