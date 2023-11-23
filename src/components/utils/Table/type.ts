import { ColumnDef } from "@tanstack/react-table";

export interface TableProps {
  data: any;
  columns: any;
  filterStatus?: string;
  setFilterStatus?: () => void;
}
