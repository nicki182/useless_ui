/** @jest-environment jsdom */
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./button";

describe("Button component", () => {
  it("renders the Button component", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass(
      "bg-primary text-primary-foreground h-9 px-4 py-2",
    );
  });

  it("applies custom variant and size", () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>,
    );
    const button = screen.getByText("Delete");
    expect(button).toHaveClass(
      "bg-destructive text-destructive-foreground h-10 rounded-md px-8",
    );
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a different component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="#">Link</a>
      </Button>,
    );
    const link = screen.getByText("Link");
    expect(link.tagName).toBe("A");
  });

  it("is disabled when the disabled prop is set", () => {
    render(<Button disabled>Can`t click me</Button>);
    const button = screen.getByText("Can`t click me");
    expect(button).toBeDisabled();
  });
});
