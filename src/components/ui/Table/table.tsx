import React from "react";
import {
  Table as T,
  TableBody,
  TableCaption,
  TableCell,
  TableCellProps,
  TableFooter,
  TableHead,
  TableHeader,
  TableHeadProps,
  TableRow,
  TableRowProps,
} from "./components";
interface Column {
  id: string;
  content: React.ReactNode;
  props?: TableHeadProps;
}
interface Row {
  id: string;
  cells: { content: React.ReactNode; props?: TableCellProps }[];
}
interface TableProps {
  columns: Column[];
  rows: Row[];
  caption?: React.ReactNode;
  footer?: React.ReactNode;
}
function Table({ columns, rows, caption, footer }: TableProps) {
  return (
    <T>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.id} {...column.props}>
              {column.content}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            className={`h-[${+Math.floor(Math.random() * 10)}rem]`}
            key={row.id}
          >
            {row.cells.map((cell, index) => (
              <TableCell key={index} {...cell.props}>
                {cell.content}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {footer && <TableFooter>{footer}</TableFooter>}
    </T>
  );
}

export { TableCell, type TableCellProps, Table, TableRow, type TableRowProps };
