export interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  description: string;
  category: string;
  details?: string[];
}

export type Category = "feature" | "improvement" | "fix" | "security";

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}