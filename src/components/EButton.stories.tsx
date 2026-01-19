import type { Meta, StoryObj } from '@storybook/react';
import { EButton } from './EButton';

const meta: Meta<typeof EButton> = {
  title: 'Components/EButton',
  component: EButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof EButton>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true
  }
};
