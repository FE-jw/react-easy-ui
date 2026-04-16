import { ETextarea } from './ETextarea';

const meta = {
  title: 'Components/ETextarea',
  component: ETextarea,
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

export const ResizeNone = {
  args: {
    placeholder: 'placeholder',
    resize: 'none'
  }
};

export const CustomRows = {
  args: {
    placeholder: 'placeholder',
    rows: 8
  }
};
