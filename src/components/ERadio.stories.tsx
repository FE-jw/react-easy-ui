import { ERadio } from './ERadio';

const meta = {
  title: 'Components/ERadio',
  component: ERadio,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;

export const Default = {
  args: {
    label: '기본 라디오'
  }
};

export const Checked = {
  args: {
    label: '선택된 라디오',
    value: true
  }
};

export const Disabled = {
  args: {
    label: '비활성화 라디오',
    isDisabled: true
  }
};

export const DisabledChecked = {
  args: {
    label: '비활성화 선택 상태',
    value: true,
    isDisabled: true
  }
};
