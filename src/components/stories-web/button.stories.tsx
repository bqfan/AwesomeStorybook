import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: 'Components/ReactJS/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      className="self-center px-8 py-2 bg-teal-700 rounded-lg web:hover:bg-teal-600 native:active:bg-teal-600 text-white text-lg font-bold"
      onClick={() => {
        alert("ReactJS Button!");
      }}
    >
    </Button>
  ),
  name: "Button",
  args: {
    children: "ReactJS Button",
    type: "button",
  },
};
