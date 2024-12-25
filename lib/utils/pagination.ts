export function generatePageNumbers(currentPage: number, totalPages: number) {
  const pages = [];
  const showEllipsis = totalPages > 7;
  
  if (!showEllipsis) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pages.push(1);
  
  if (currentPage > 3) {
    pages.push("ellipsis-start");
  }
  
  // Show pages around current page
  for (let i = Math.max(2, currentPage - 1); 
       i <= Math.min(currentPage + 1, totalPages - 1); 
       i++) {
    pages.push(i);
  }
  
  if (currentPage < totalPages - 2) {
    pages.push("ellipsis-end");
  }
  
  // Always show last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }
  
  return pages;
}