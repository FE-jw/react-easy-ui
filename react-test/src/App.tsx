import { useState } from 'react';

// Components
import { EButton, EInput, EToggleSwitch, ECheckbox, ECheckboxGroup, type ECheckboxValue } from './../../src';

export default function App() {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);

  // CheckboxGroup
  const [groupValues, setGroupValues] = useState<ECheckboxValue[]>(['banana']);
  const groupOptions = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지', isDisabled: true },
    { value: 1, label: 1 }
  ];

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, qui ad autem facere veniam odit nihil debitis eius
      eaque vel molestias velit iusto ipsum beatae, reiciendis expedita explicabo sit non.
      <EButton
        onClick={() => {
          console.log('primary');
        }}
      >
        primary
      </EButton>
      <EButton
        variant="secondary"
        isDisabled={false}
        onClick={() => {
          console.log('secondary');
        }}
      >
        secondary
      </EButton>
      <EButton isDisabled={true}>Disabled</EButton>
      <div className="flex gap-[10px] w-[600px]">
        <EInput type="search" placeholder="test" />
        <EInput type="search" placeholder="disabled" isDisabled={true} />
      </div>
      <EToggleSwitch value={toggleSwitch} isDisabled={false} onChange={setToggleSwitch} />
      <div className="flex gap-[10px]">
        <ECheckbox
          name={'fruit'}
          label={'Apple'}
          isDisabled={true}
          onChange={status => {
            console.log(status);
          }}
        />
        <ECheckbox
          name={'fruit'}
          label={'Orange'}
          onChange={status => {
            console.log(status);
          }}
        />
      </div>
      <ECheckboxGroup
        name="group-1"
        options={groupOptions}
        values={groupValues}
        onChange={value => {
          console.log(value);
          setGroupValues(value);
        }}
      />
      <ECheckboxGroup
        name="group-2"
        direction="vertical"
        options={groupOptions}
        values={groupValues}
        onChange={value => {
          console.log(value);
          setGroupValues(value);
        }}
      />
    </>
  );
}
