"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChangelogDetails } from "./changelog-details";
import { VersionBadge } from "./version-badge";
import { CategoryBadge } from "./category-badge";
import { Category } from "@/lib/types";
import { formatDateTime } from "@/lib/utils/format";

interface ChangelogEntryProps {
  date: string;
  version: string;
  title: string;
  description: string;
  category: Category;
  details?: string[];
}

export function ChangelogEntry({ 
  date, 
  version, 
  title, 
  description, 
  category, 
  details 
}: ChangelogEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <VersionBadge version={version} />
              <time dateTime={date} className="text-sm text-muted-foreground">
                {formatDateTime(date)}
              </time>
            </div>
            <CategoryBadge category={category} />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed max-w-[65ch]">{description}</p>
          {details && <ChangelogDetails details={details} />}
        </CardContent>
      </Card>
    </motion.div>
  );
}