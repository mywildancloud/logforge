"use client";

import { ChangelogEntry } from "@/components/changelog-entry";
import { ChangelogFilter } from "@/components/changelog-filter";
import { SearchBar } from "@/components/search-bar";
import { PoweredBy } from "@/components/layout/powered-by";
import { Pagination } from "@/components/pagination";
import { useState, useMemo } from "react";
import { changelogData } from "@/lib/data";
import { usePagination } from "@/lib/hooks/use-pagination";
import { ITEMS_PER_PAGE } from "@/lib/constants";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChangelog = useMemo(() => {
    return changelogData.filter((entry) => {
      const matchesFilter = filter === "all" || entry.category === filter;
      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch = entry.title.toLowerCase().includes(searchTerm) ||
        entry.description.toLowerCase().includes(searchTerm);
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePagination(filteredChangelog, ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1300px] px-4 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Changelog</h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[600px]">
              New updates and improvements to our platform.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar onSearch={setSearchQuery} />
            <ChangelogFilter currentFilter={filter} onFilterChange={setFilter} />
          </div>

          <div className="space-y-8 pt-4">
            {currentItems.map((entry, index) => (
              <ChangelogEntry key={`${entry.version}-${index}`} {...entry} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}

          <div className="flex justify-center pt-8">
            <PoweredBy />
          </div>
        </div>
      </div>
    </main>
  );
}