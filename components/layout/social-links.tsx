"use client";

import { Github, Instagram, Youtube, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const icons: Record<string, LucideIcon> = {
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {siteConfig.nav.social.map((link) => {
        const Icon = icons[link.icon];
        return (
          <Button
            key={link.title}
            variant="ghost"
            size="icon"
            className="h-9 w-9 hover:text-foreground"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
            >
              <Icon className="h-4 w-4" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}