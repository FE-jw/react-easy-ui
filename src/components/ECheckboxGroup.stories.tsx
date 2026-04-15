import { useState } from 'react';
import { ECheckboxGroup } from './ECheckboxGroup';

const meta = {
  title: 'Components/ECheckboxGroup',
  component: ECheckboxGroup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;

const options = [
  { value: 'apple', text: '사과' },
  { value: 'banana', text: '바나나' },
  { value: 'cherry', text: '체리' },
];

export const Default = {
  args: {
    name: 'fruit',
    options,
  }
};

export const Vertical = {
  args: {
    name: 'fruit',
    options,
    direction: 'vertical',
  }
};

export const Horizontal = {
  args: {
    name: 'fruit',
    options,
    direction: 'horizontal',
  }
};

export const WithDefaultValues = {
  args: {
    name: 'fruit',
    options,
    values: ['apple', 'cherry'],
  }
};

export const Disabled = {
  args: {
    name: 'fruit',
    options,
    isDisabled: true,
    values: ['banana'],
  }
};

export const PartiallyDisabled = {
  args: {
    name: 'fruit',
    options: [
      { value: 'apple', text: '사과' },
      { value: 'banana', text: '바나나 (비활성)', isDisabled: true },
      { value: 'cherry', text: '체리' },
    ],
  }
};

export const Controlled = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['apple']);
    return (
      <div>
        <ECheckboxGroup
          name="fruit-controlled"
          options={options}
          values={selected}
          onChange={setSelected}
        />
        <p style={{ marginTop: 12, fontSize: 13, color: '#555' }}>
          선택된 값: {selected.join(', ') || '없음'}
        </p>
      </div>
    );
  }
};
