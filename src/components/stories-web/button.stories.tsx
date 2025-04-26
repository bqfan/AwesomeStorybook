import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: 'Components/ReactJS/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A button component is a graphical user interface element that enables users to act by clicking or tapping.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'This is a primary Button component example.  A button is a component that users can tap to trigger an action.',
      },
    },
  },
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
