import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./accordion";
import { isAnyTextInTheDocument } from "@useless/lib/utils";

describe("Accordion", () => {
  const options = [
    { label: "Option 1", content: "Content 1", value: "1" },
    { label: "Option 2", content: "Content 2", value: "2" },
    { label: "Option 3", content: "Content 3", value: "3" },
  ];

  it("renders all options", () => {
    render(<Accordion type="multiple" options={options} />);
    options.forEach((option) => {
      expect(screen.getByText(option.label));
    });
  });

  it("renders content when an option is clicked", async () => {
    render(<Accordion options={options} />);
    const user = userEvent.setup();

    const option1 = screen.getByText("Option 1");
    await user.click(option1);
    expect(
      isAnyTextInTheDocument(["Content 1", "Content 2", "Content 3"]),
    ).toBe(true);

    const option2 = screen.getByText("Option 2");
    await user.click(option2);

    expect(
      isAnyTextInTheDocument(["Content 1", "Content 2", "Content 3"]),
    ).toBe(true);

    const option3 = screen.getByText("Option 3");
    await user.click(option3);
    expect(
      isAnyTextInTheDocument(["Content 1", "Content 2", "Content 3"]),
    ).toBe(true);
  });
});
