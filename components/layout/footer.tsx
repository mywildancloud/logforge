"use client";

import { SocialLinks } from "@/components/layout/social-links";
import { Copyright } from "@/components/layout/copyright";

export function Footer() {
  return (
    <footer className="border-t bg-background/95">
      <div className="mx-auto max-w-[1300px] px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Copyright />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}