import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableCell, TableRow } from "./table";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TableDefault: Story = {
  args: {
    rows: invoices.map((invoice) => ({
      id: invoice.invoice,
      cells: [
        { content: invoice.invoice, props: { className: "font-medium" } },
        { content: invoice.paymentStatus },
        { content: invoice.paymentMethod },
        { content: invoice.totalAmount, props: { className: "text-right" } },
      ],
    })),
    columns: [
      { content: "Invoice", props: { className: "w-[100px]" }, id: "invoice" },
      { content: "Status", id: "paymentStatus" },
      { content: "Method", id: "paymentMethod" },
      {
        content: "Amount",
        props: { className: "text-right" },
        id: "totalAmount",
      },
    ],
  },
};
export const TableFooter: Story = {
  args: {
    rows: invoices.map((invoice) => ({
      id: invoice.invoice,
      cells: [
        { content: invoice.invoice, props: { className: "font-medium" } },
        { content: invoice.paymentStatus },
        { content: invoice.paymentMethod },
        { content: invoice.totalAmount, props: { className: "text-right" } },
      ],
    })),
    columns: [
      { content: "Invoice", props: { className: "w-[100px]" }, id: "invoice" },
      { content: "Status", id: "paymentStatus" },
      { content: "Method", id: "paymentMethod" },
      {
        content: "Amount",
        props: { className: "text-right" },
        id: "totalAmount",
      },
    ],
    footer: (
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    ),
  },
};
