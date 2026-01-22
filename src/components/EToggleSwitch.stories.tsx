import type { Meta, StoryObj } from '@storybook/react';
import { EToggleSwitch } from './EToggleSwitch';

const meta: Meta<typeof EToggleSwitch> = {
  title: 'Components/EToggleSwitch',
  component: EToggleSwitch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof EToggleSwitch>;

export const False: Story = {
  args: {
    value: false
  }
};

export const True: Story = {
  args: {
    value: true
  }
};

export const DisabledFalse: Story = {
  args: {
    value: false,
    isDisabled: true
  }
};

export const DisabledTrue: Story = {
  args: {
    value: true,
    isDisabled: true
  }
};
