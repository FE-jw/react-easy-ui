import { ERadioGroup } from './ERadioGroup';

const meta = {
  title: 'Components/ERadioGroup',
  component: ERadioGroup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;

const options = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'cherry', label: '체리' }
];

export const Default = {
  args: {
    name: 'fruit',
    options
  }
};

export const Vertical = {
  args: {
    name: 'fruit',
    options,
    direction: 'vertical'
  }
};

export const Horizontal = {
  args: {
    name: 'fruit',
    options,
    direction: 'horizontal'
  }
};

export const WithDefaultValue = {
  args: {
    name: 'fruit',
    options,
    value: 'banana'
  }
};

export const Disabled = {
  args: {
    name: 'fruit',
    options,
    isDisabled: true,
    value: 'apple'
  }
};

export const PartiallyDisabled = {
  args: {
    name: 'fruit',
    options: [
      { value: 'apple', label: '사과' },
      { value: 'banana', label: '바나나 (비활성)', isDisabled: true },
      { value: 'cherry', label: '체리' }
    ]
  }
};
