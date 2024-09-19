import React, { ChangeEvent, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MediaLeftIcon,
  MediaRightIcon,
} from "../../../../../assets/svg/common/common.icon";

interface IPaginationProps {
  handlePageChange: (page: number) => void;
  currentPage: number;
  data_length: number;
}

export default function Pagination({
  currentPage,
  handlePageChange,
  data_length,
}: IPaginationProps) {
  const totalPages = Math.ceil(data_length / 10);
  const [page_number, setPageNumber] = useState<number>();

  const handlePageNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPageNumber(value);
    handlePageChange(value || 1);
  };

  const disableArrowButtons = () => ({
    left_arrows: currentPage === 1,
    right_arrows: currentPage === totalPages || currentPage > totalPages,
  });

  return (
    <div className="flex items-center justify-center gap-4 py-3.5">
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(1)}
        disabled={disableArrowButtons().left_arrows}
      >
        <MediaLeftIcon />
      </button>
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disableArrowButtons().left_arrows}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disableArrowButtons().right_arrows}
      >
        <ArrowRightIcon />
      </button>
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(totalPages)}
        disabled={disableArrowButtons().right_arrows}
      >
        <MediaRightIcon />
      </button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {currentPage} of {totalPages}
        </strong>
      </span>
      <span className="hidden items-center gap-1 md:flex">
        Go to page:
        <input
          type="number"
          className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
          value={page_number || ""}
          onChange={handlePageNumberChange}
        />
      </span>
    </div>
  );
}
