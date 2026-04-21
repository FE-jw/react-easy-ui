import { ESelect } from './ESelect';

const meta = {
  title: 'Components/ESelect',
  component: ESelect,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        height: '250px'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    )
  ]
};
export default meta;

const options = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'cherry', label: '체리' },
  { value: 'grape', label: '포도' }
];

export const Default = {
  args: {
    options,
    placeholder: '선택하세요'
  }
};

export const WithDefaultValue = {
  args: {
    options,
    value: 'banana'
  }
};

export const Disabled = {
  args: {
    options,
    placeholder: '선택하세요',
    isDisabled: true
  }
};

export const Searchable = {
  args: {
    options,
    placeholder: '선택하세요',
    searchable: true
  }
};

export const PartiallyDisabled = {
  args: {
    options: [
      { value: 'apple', label: '사과' },
      { value: 'banana', label: '바나나 (비활성)', isDisabled: true },
      { value: 'cherry', label: '체리' },
      { value: 'grape', label: '포도' }
    ],
    placeholder: '선택하세요'
  }
};
