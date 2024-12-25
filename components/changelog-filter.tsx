"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

interface ChangelogFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { label: "All updates", value: "all" },
  { label: "Features", value: "feature" },
  { label: "Improvements", value: "improvement" },
  { label: "Bug fixes", value: "fix" },
  { label: "Security", value: "security" },
];

export function ChangelogFilter({ currentFilter, onFilterChange }: ChangelogFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[140px] justify-between">
          <Filter className="mr-2 h-4 w-4" />
          {filters.find(f => f.value === currentFilter)?.label || "Filter"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {filters.map((filter) => (
          <DropdownMenuItem
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className="cursor-pointer"
          >
            {filter.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}