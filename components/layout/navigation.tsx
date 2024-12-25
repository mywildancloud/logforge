"use client";

import * as React from "react";
import { mainNavItems, mobileNavItems } from "@/lib/navigation";
import { NavigationLink } from "./navigation-link";

interface NavigationProps {
  className?: string;
  variant?: "default" | "mobile";
}

export function Navigation({ className, variant = "default" }: NavigationProps) {
  const items = variant === "mobile" ? mobileNavItems : mainNavItems;
  
  return (
    <nav className={className}>
      <div className={variant === "mobile" ? "space-y-2" : "flex items-center gap-6"}>
        {items.map((item) => (
          <NavigationLink
            key={item.href}
            href={item.href}
            isExternal={item.isExternal}
            className={
              variant === "mobile"
                ? "flex w-full px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                : "text-sm font-medium transition-colors hover:text-foreground/80"
            }
          >
            {item.title}
          </NavigationLink>
        ))}
      </div>
    </nav>
  );
}