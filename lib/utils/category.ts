"use client";

import { Category } from "@/lib/types";

interface CategoryConfig {
  background: string;
  text: string;
  ring: string;
  icon: string;
}

const categoryStyles: Record<Category, CategoryConfig> = {
  feature: {
    background: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
    text: "text-emerald-700 dark:text-emerald-300",
    ring: "ring-1 ring-emerald-600/10 dark:ring-emerald-400/10",
    icon: "text-emerald-500"
  },
  improvement: {
    background: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
    text: "text-blue-700 dark:text-blue-300",
    ring: "ring-1 ring-blue-600/10 dark:ring-blue-400/10",
    icon: "text-blue-500"
  },
  fix: {
    background: "bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/50 dark:to-yellow-950/50",
    text: "text-amber-700 dark:text-amber-300",
    ring: "ring-1 ring-amber-600/10 dark:ring-amber-400/10",
    icon: "text-amber-500"
  },
  security: {
    background: "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/50 dark:to-rose-950/50",
    text: "text-red-700 dark:text-red-300",
    ring: "ring-1 ring-red-600/10 dark:ring-red-400/10",
    icon: "text-red-500"
  }
};

export function getCategoryStyles(category: Category): string {
  const styles = categoryStyles[category];
  return `${styles.background} ${styles.text} ${styles.ring}`;
}

export function getCategoryIconColor(category: Category): string {
  return categoryStyles[category].icon;
}