"use client";

import { GitCommit } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <GitCommit className="h-6 w-6" />
      <span className="font-bold inline-block">{siteConfig.name}</span>
    </Link>
  );
}