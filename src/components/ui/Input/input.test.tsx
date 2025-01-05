import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Input } from "./input";

describe("Input component", () => {
  it("renders without crashing", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("accepts and displays the correct value", () => {
    const value = "test value";
    render(<Input value={value} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("eulav tset");
  });

  it("calls onChange handler when value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<Input className={className} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass(className);
  });

  it("forwards ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
