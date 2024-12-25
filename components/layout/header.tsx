"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Logo } from "@/components/layout/logo";
import { Navigation } from "@/components/layout/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="flex h-16 items-center">
          <div className="flex items-center mr-8">
            <Logo />
          </div>

          <div className="hidden sm:flex flex-1">
            <Navigation />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="sm:hidden">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:hidden">
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <Navigation variant="mobile" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}