import {
  ArrowLeft,
  ArrowLeftIcon,
  ArrowLeftToLine,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";
import { Button } from "../../atom/button/button";

interface IPagination {
  total_pages: number;
}
export default function Pagination({ total_pages }: IPagination) {
  return (
    <div className="flex xs:flex-col md:flex-row gap-4 xs:mt-4 md:mt-0">
      <div className="flex items-center gap-2 w-max">
        <Button className={"text-13 rounded-full bg-blue-400 p-1 text-white"}>
          <ChevronsLeft />
        </Button>
        <Button className={"text-13 rounded-full bg-blue-400 p-1 text-white"}>
          <ChevronLeft />
        </Button>

        <p className="text-13 font-semibold">Page 1 of {total_pages}</p>
        <Button className={"text-13 rounded-full bg-blue-400 p-1 text-white"}>
          <ChevronRight />
        </Button>

        <Button className={"text-13 rounded-full bg-blue-400 p-1 text-white"}>
          <ChevronsRight />
        </Button>
      </div>
      <div className="flex items-center gap-2 ml-5">
        <p className="text-13 font-semibold text-gray-600">Go to page:</p>
        <input
          type="number"
          className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
          value="1"
        />
      </div>
    </div>
  );
}
