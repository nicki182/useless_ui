import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./drawer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DrawerLeft: Story = {
  args: {
    title: "Drawer Title",
    description: "Drawer Description",
    direction: "left",
    trigger: "Open Drawer",
  },
};

export const DrawerRight: Story = {
  args: {
    title: "Drawer Title",
    description: "Drawer Description",
    direction: "right",
    trigger: "Open Drawer",
  },
};

export const DrawerTop: Story = {
  args: {
    title: "Drawer Title",
    description: "Drawer Description",
    direction: "top",
    trigger: "Open Drawer",
  },
};
