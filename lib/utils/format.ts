import { format as formatDate } from "date-fns";
import { DATE_FORMAT } from "@/lib/constants";

export function formatDateTime(date: string | Date): string {
  return formatDate(new Date(date), DATE_FORMAT);
}