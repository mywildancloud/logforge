"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "./scroll-progress";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const show = scrollY > 500;
      setShow(show);

      // Calculate scroll progress
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / height) * 100, 100);
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="h-10 w-10 rounded-full shadow-md relative"
      >
        <ScrollProgress progress={progress} />
        <ArrowUp className="h-4 w-4 relative z-10" />
      </Button>
    </div>
  );
}