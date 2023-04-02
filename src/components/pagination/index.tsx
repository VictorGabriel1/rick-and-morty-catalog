import React, { SetStateAction } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { ContainerPagination } from "./styles";

interface PaginationProps {
  totalPages?: number | null;
  currentPage: number;
  handleChangePage: React.Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  totalPages,
  currentPage,
  handleChangePage,
}: PaginationProps) {
  return (
    <ContainerPagination>
      <ResponsivePagination
        nextLabel="Next"
        previousLabel="Prev"
        onPageChange={(n) => handleChangePage(n)}
        current={currentPage}
        total={totalPages || 0}
      />
    </ContainerPagination>
  );
}
