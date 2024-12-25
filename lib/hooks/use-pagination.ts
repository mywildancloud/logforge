"use client";

import { useState, useMemo, useEffect } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when items change (due to filtering or search)
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Ensure current page is valid
  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));

  const currentItems = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, validCurrentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentItems,
    currentPage: validCurrentPage,
    totalPages,
    handlePageChange,
  };
}