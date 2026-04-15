import { EButton } from './EButton';

const meta = {
  title: 'Components/EButton',
  component: EButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Primary = {
  args: {
    children: 'Primary',
    variant: 'primary'
  }
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
};

export const Disabled = {
  args: {
    children: 'Disabled',
    isDisabled: true
  }
};
