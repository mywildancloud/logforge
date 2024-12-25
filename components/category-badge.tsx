"use client";

import { Badge } from "@/components/ui/badge";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

const categoryStyles: Record<Category, string> = {
  feature: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-600/10 dark:ring-emerald-400/10",
  improvement: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 text-blue-700 dark:text-blue-300 ring-1 ring-blue-600/10 dark:ring-blue-400/10",
  fix: "bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50 text-amber-700 dark:text-amber-300 ring-1 ring-amber-600/10 dark:ring-amber-400/10",
  security: "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/50 dark:to-rose-950/50 text-red-700 dark:text-red-300 ring-1 ring-red-600/10 dark:ring-red-400/10"
};

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <Badge 
      variant="outline"
      className={cn(
        "px-3 py-1 capitalize font-medium transition-colors duration-200",
        categoryStyles[category],
        className
      )}
    >
      {category}
    </Badge>
  );
}