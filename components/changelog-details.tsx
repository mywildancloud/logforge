"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ChangelogDetailsProps {
  details: string[];
}

export function ChangelogDetails({ details }: ChangelogDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldCollapse = details.length > 5;
  const visibleDetails = shouldCollapse && !isExpanded ? details.slice(0, 5) : details;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {visibleDetails.map((detail, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="flex items-start"
          >
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
            <span>{detail}</span>
          </motion.li>
        ))}
      </ul>
      {shouldCollapse && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              Show {details.length - 5} more
            </>
          )}
        </Button>
      )}
    </motion.div>
  );
}