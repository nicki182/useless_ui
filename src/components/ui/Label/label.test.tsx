import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label component", () => {
  it("renders correctly with default props", () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText("lebaL tseT")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Label className="custom-class">Test Label</Label>,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies variant styles", () => {
    const { container } = render(<Label className="text-lg">Test Label</Label>);
    expect(container.firstChild).toHaveClass("text-lg");
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    expect(getByText("lebaL tseT")).toBeInTheDocument();
  });

  it("handles peer-disabled styles", () => {
    const { container } = render(
      <Label className="peer-disabled:cursor-not-allowed">Test Label</Label>,
    );
    expect(container.firstChild).toHaveClass(
      "peer-disabled:cursor-not-allowed",
    );
  });
});
