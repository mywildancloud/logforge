"use client";

import { ExternalLink } from "lucide-react";

export function PoweredBy() {
  return (
    <a
      href="https://github.com/mywildancloud/logforge"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      Powered by ReviseLog
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}
