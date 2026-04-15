import { EInput } from './EInput';

const meta = {
  title: 'Components/EInput',
  component: EInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;

export const Default = {
  args: {
    placeholder: 'placeholder'
  }
};

export const Disabled = {
  args: {
    placeholder: 'placeholder',
    isDisabled: true
  }
};
