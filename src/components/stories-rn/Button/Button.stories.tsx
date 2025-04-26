import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { MyButton } from "./Button";

const meta = {
  title: "Components/React Native/Button",
  component: MyButton,
  parameters: {
    docs: {
      description: {
        component: 'A button component is a graphical user interface element that enables users to act by clicking or tapping.',
      },
    },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is a basic Button component example.  A button is a component that users can tap to trigger an action.',
      },
    },
  },
  args: {
    onPress: () => {},
    text: "React Native Button",
  },
};
