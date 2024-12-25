"use client";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import * as React from "react";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export function NavigationLink({ 
  href, 
  children, 
  className, 
  isExternal 
}: NavigationLinkProps) {
  const isExternalLink = isExternal || href.startsWith('http');

  if (isExternalLink) {
    return (
      <a
        href={href}
        className={cn("flex items-center gap-1", className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ExternalLink className="h-3 w-3" />
      </a>
    );
  }

  return (
    <Link href={href} className={cn("flex items-center gap-1", className)}>
      {children}
    </Link>
  );
}