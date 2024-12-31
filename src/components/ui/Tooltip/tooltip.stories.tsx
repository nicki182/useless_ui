import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./tooltip";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextTooltip: Story = {
  args: {
    content: "Tooltip",
    label: "Button",
  },
};
export const ComponentTooltip: Story = {
  args: {
    content: <div>Tooltip</div>,
    label: <button>Button</button>,
  },
};
