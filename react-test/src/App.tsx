import { useState } from 'react';

// Components
import { EButton, EInput, EToggleSwitch, ECheckbox, ECheckboxGroup } from './../../src';

export default function App() {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);

  // CheckboxGroup
  const [groupValues, setGroupValues] = useState<string[]>(['banana']);
  const groupOptions = [
    { value: 'apple', text: '사과' },
    { value: 'banana', text: '바나나' },
    { value: 'orange', text: '오렌지', isDisabled: true }
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
          text={'Apple'}
          isDisabled={true}
          onChange={status => {
            console.log(status);
          }}
        />
        <ECheckbox
          name={'fruit'}
          text={'Orange'}
          onChange={status => {
            console.log(status);
          }}
        />
      </div>
      <ECheckboxGroup name="group-1" options={groupOptions} values={groupValues} onChange={setGroupValues} />
      <ECheckboxGroup
        name="group-2"
        options={groupOptions}
        values={groupValues}
        direction="vertical"
        onChange={value => {
          console.log(value);
          setGroupValues(value);
        }}
      />
      <p style={{ fontSize: 13, color: '#555' }}>선택된 값: {groupValues.join(', ') || '없음'}</p>
    </>
  );
}
