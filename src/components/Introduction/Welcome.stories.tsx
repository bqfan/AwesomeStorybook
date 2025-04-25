// stories/Introduction/Welcome.stories.tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction/Welcome',
  component: () => <div>Welcome to the Storybook!</div>,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
