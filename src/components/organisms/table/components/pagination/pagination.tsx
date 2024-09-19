import React, { ChangeEvent, useState } from "react";
import arrowLeft from "../../../../../assets/svg/common/arrow-left.svg";
import arrowRight from "../../../../../assets/svg/common/arrow-right.svg";
import mediaLeft from "../../../../../assets/svg/common/media-left.svg";
import mediaRight from "../../../../../assets/svg/common/media-right.svg";

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
  const calculateTotalPages = () => {
    return Math.ceil(data_length / 10);
  };
  const [page_number, setPageNumber] = useState<number>();
  const handlePageNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPageNumber(Number(value));
    if (!value) {
      handlePageChange(1);
    } else {
      handlePageChange(Number(value));
    }
  };
  const handleDisableArrows = () => {
    let left_arrows: boolean = false;
    let right_arrows: boolean = false;
    if (calculateTotalPages() <= 1 || currentPage === 1) {
      left_arrows = true;
    }
    if (calculateTotalPages() <= 1 || currentPage === calculateTotalPages()) {
      right_arrows = true;
    }
    return {
      left_arrows,
      right_arrows,
    };
  };
  return (
    <div className="flex items-center justify-center gap-4 py-3.5">
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(1)}
        disabled={handleDisableArrows()?.left_arrows}
      >
        <img src={mediaLeft} alt="media-left" className="w-5 h-5 " />
      </button>
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={handleDisableArrows()?.left_arrows}
      >
        <img src={arrowLeft} alt="arrow-left" className="w-5 h-5" />
      </button>
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={handleDisableArrows()?.right_arrows}
      >
        <img src={arrowRight} alt="arrow-right" className="w-5 h-5" />
      </button>
      <button
        className="btn btn-circle btn-primary btn-sm"
        onClick={() => handlePageChange(calculateTotalPages())}
        disabled={handleDisableArrows()?.right_arrows}
      >
        <img src={mediaRight} alt="media-right" className="w-5 h-5" />
      </button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>1 of {calculateTotalPages()}</strong>
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
