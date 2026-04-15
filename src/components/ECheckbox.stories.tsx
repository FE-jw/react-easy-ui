import { ECheckbox } from './ECheckbox';

const meta = {
  title: 'Components/ECheckbox',
  component: ECheckbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;

export const Default = {
  args: {
    text: '기본 체크박스'
  }
};

export const Checked = {
  args: {
    text: '선택된 체크박스',
    value: true
  }
};

export const Disabled = {
  args: {
    text: '비활성화 체크박스',
    isDisabled: true
  }
};

export const DisabledChecked = {
  args: {
    text: '비활성화 선택 상태',
    value: true,
    isDisabled: true
  }
};
