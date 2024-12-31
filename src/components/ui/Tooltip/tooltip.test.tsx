import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  //   it("renders the tooltip trigger", () => {
  //     render(<Tooltip label="Hover me" content="Text" />);
  //     expect(screen.getByText("Hover me")).toBeInTheDocument();
  //   });

  it("shows the tooltip content on hover", async () => {
    render(<Tooltip label="Hover me" content="Text" />);
    const trigger = screen.getByText("Hover me");
    await act(async () => {
      await userEvent.hover(trigger); // Simulate hover
    });
    await waitFor(() => expect(screen.getAllByText("Text")).not.toBeNull());
  });

  //   it("hides the tooltip content when not hovered", async () => {
  //     render(<Tooltip label="Hover me" content="Text" />);
  //     const trigger = screen.getByText("Hover me");
  //     await act(async () => {
  //       await userEvent.hover(trigger); // Simulate hover
  //     });
  //     expect(await screen.getAllByText("Text")).toBeInTheDocument();
  //     await act(async () => {
  //       const hovering = setTimeout(() => {
  //         userEvent.hover(trigger); // Simulate hover
  //       }, 1000);
  //       clearTimeout(hovering);
  //     });
  //     expect(screen.queryAllByText("Text")).not.toBeInTheDocument();
  //   });
});
