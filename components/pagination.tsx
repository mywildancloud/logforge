"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { generatePageNumbers } from "@/lib/utils/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = generatePageNumbers(currentPage, totalPages);

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 pt-8"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="h-8 w-8"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <div
                key={`${page}-${index}`}
                className="flex h-8 w-8 items-center justify-center"
              >
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
            );
          }

          return (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="icon"
              onClick={() => onPageChange(page as number)}
              disabled={currentPage === page}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={cn(
                "h-8 w-8 text-sm",
                currentPage === page && "pointer-events-none"
              )}
            >
              {page}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="h-8 w-8"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}