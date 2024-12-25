"use client";

import { ExternalLink } from "lucide-react";

export function PoweredBy() {
  return (
    <a
      href="https://logforge.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      Powered by Logforge
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}