import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Table } from "./table";

describe("Table component", () => {
  const columns = [
    { id: "col1", content: "Column 1" },
    { id: "col2", content: "Column 2" },
  ];

  const rows = [
    {
      id: "row1",
      cells: [{ content: "Row 1 Cell 1" }, { content: "Row 1 Cell 2" }],
    },
    {
      id: "row2",
      cells: [{ content: "Row 2 Cell 1" }, { content: "Row 2 Cell 2" }],
    },
  ];

  it("renders table with columns and rows", () => {
    const { getByText } = render(<Table columns={columns} rows={rows} />);

    // Check if columns are rendered
    columns.forEach((column) => {
      expect(getByText(column.content)).toBeInTheDocument();
    });

    // Check if rows are rendered
    rows.forEach((row) => {
      row.cells.forEach((cell) => {
        expect(getByText(cell.content)).toBeInTheDocument();
      });
    });
  });

  it("renders table caption if provided", () => {
    const caption = "Table Caption";
    const { getByText } = render(
      <Table columns={columns} rows={rows} caption={caption} />,
    );

    expect(getByText(caption)).toBeInTheDocument();
  });

  it("renders table footer if provided", () => {
    const footer = "Table Footer";
    const { getByText } = render(
      <Table columns={columns} rows={rows} footer={footer} />,
    );

    expect(getByText(footer)).toBeInTheDocument();
  });
  // TODO: Fix random height test
  //   it("applies random height to table rows", () => {
  //     const { getAllByRole } = render(<Table columns={columns} rows={rows} />);

  //     const tableRows = getAllByRole("row");
  //     tableRows.forEach((row) => {
  //       expect(row).toHaveClass(/h-\[\drem\]/);
  //     });
  //   });
});
