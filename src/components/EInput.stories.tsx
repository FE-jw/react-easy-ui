import type { Meta, StoryObj } from '@storybook/react';
import { EInput } from './EInput';

const meta: Meta<typeof EInput> = {
  title: 'Components/EInput',
  component: EInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof EInput>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder'
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'placeholder',
    isDisabled: true
  }
};
