import { useArgs } from '@storybook/preview-api';
import { EToggleSwitch } from './EToggleSwitch';

const meta = {
  title: 'Components/EToggleSwitch',
  component: EToggleSwitch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: function Render() {
    const [{ value }, updateArgs] = useArgs();
    return <EToggleSwitch value={value} onChange={newValue => updateArgs({ value: newValue })} />;
  }
};
export default meta;

export const False = {
  args: {
    value: false
  }
};

export const True = {
  args: {
    value: true
  }
};

export const Disabled = {
  args: {
    value: false,
    isDisabled: true
  }
};
