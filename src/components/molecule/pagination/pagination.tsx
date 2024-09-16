import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../../atom/button/button";

interface IPagination {
  total_pages: number;
  current_page: number;
  handlePageChange: (page: number) => void;
}
export default function Pagination({
  total_pages,
  current_page,
  handlePageChange,
}: IPagination) {
  return (
    <div className="flex xs:flex-col md:flex-row gap-4 xs:mt-4 md:mt-0">
      <div className="flex items-center gap-2 w-max">
        <Button
          className={"text-13 rounded-full bg-blue-400 p-1 text-white"}
          onClick={() => handlePageChange(1)}
          disabled={current_page === 1}
        >
          <ChevronsLeft />
        </Button>
        <Button
          className={"text-13 rounded-full bg-blue-400 p-1 text-white"}
          onClick={() => handlePageChange(current_page - 1)}
          disabled={current_page <= 1}
        >
          <ChevronLeft />
        </Button>

        <p className="text-13 font-semibold">Page 1 of {total_pages}</p>
        <Button
          className={"text-13 rounded-full bg-blue-400 p-1 text-white"}
          onClick={() => handlePageChange(current_page + 1)}
          disabled={current_page === total_pages || total_pages < 1}
        >
          <ChevronRight />
        </Button>

        <Button
          className={"text-13 rounded-full bg-blue-400 p-1 text-white"}
          onClick={() => handlePageChange(total_pages)}
          disabled={current_page === total_pages || total_pages < 1}
        >
          <ChevronsRight />
        </Button>
      </div>
      <div className="flex items-center gap-2 ml-5">
        <p className="text-13 font-semibold text-gray-600">Go to page:</p>
        <input
          onChange={(e) => handlePageChange(Number(e.target.value))}
          type="number"
          className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
        />
      </div>
    </div>
  );
}
