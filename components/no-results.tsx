"use client";

import { Search } from "lucide-react";

interface NoResultsProps {
  searchQuery: string;
}

export function NoResults({ searchQuery }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4 rounded-full bg-muted p-3">
        <Search className="h-6 w-6 text-muted-foreground" />
      </div>
      <h2 className="mb-2 text-lg font-semibold">No results found</h2>
      <p className="text-sm text-muted-foreground max-w-[400px]">
        No updates found for &quot;{searchQuery}&quot;. Try adjusting your search term or filter.
      </p>
    </div>
  );
}
