"use client";

import { siteConfig } from "@/lib/site-config";

export function Copyright() {
  const currentYear = new Date().getFullYear();
  const { startYear, suffix } = siteConfig.copyright;
  
  const yearDisplay = startYear === currentYear 
    ? currentYear 
    : `${startYear}–${currentYear}`;

  return (
    <p className="text-sm text-muted-foreground">
      © {yearDisplay} {siteConfig.name} - {suffix}
    </p>
  );
}