import { useState } from 'react';

// Components
import {
  EButton,
  EInput,
  ETextarea,
  EToggleSwitch,
  ECheckbox,
  ECheckboxGroup,
  ERadio,
  ERadioGroup,
  ESelect,
  type ECheckboxValue,
  type ERadioValue,
  type ESelectOption
} from './../../src';

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

  // RadioGroup
  const [radioValue, setRadioValue] = useState<ERadioValue>('banana');
  const radioOptions = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지', isDisabled: true },
    { value: 1, label: 1 }
  ];

  // Select
  const [selectValue, setSelectValue] = useState<ESelectOption['value']>('');
  const selectOptions: ESelectOption[] = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지', isDisabled: true },
    { value: 'grape', label: '포도' }
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
      <div className="flex gap-[10px]">
        <ERadio
          name="radio-single"
          label="Apple"
          onChange={status => {
            console.log(status);
          }}
        />
        <ERadio
          name="radio-single"
          label="Orange"
          isDisabled={true}
          onChange={status => {
            console.log(status);
          }}
        />
      </div>
      <ERadioGroup
        name="radio-group-1"
        options={radioOptions}
        value={radioValue}
        onChange={value => {
          console.log(value);
          setRadioValue(value);
        }}
      />
      <ERadioGroup
        name="radio-group-2"
        direction="vertical"
        options={radioOptions}
        value={radioValue}
        onChange={value => {
          console.log(value);
          setRadioValue(value);
        }}
      />
      <ECheckbox
        name={'all'}
        onChange={status => {
          console.log(status);
        }}
      />
      <ERadio
        name="testest"
        onChange={status => {
          console.log(status);
        }}
      />
      <div className="w-[300px] mt-[10px]">
        <ETextarea
          name="asd"
          placeholder="textarea"
          maxLength={500}
          showCounter={true}
          onChange={value => {
            console.log(value);
          }}
        />
      </div>
      <div className="w-[300px] mt-[10px]">
        <ETextarea placeholder="disabled" isDisabled={true} resize="both" />
      </div>
      <div className="w-[300px] mt-[10px]">
        <ETextarea placeholder="resize: none" resize="none" />
      </div>
      <div className="w-[300px] mt-[10px]">
        <ESelect
          options={selectOptions}
          value={selectValue}
          placeholder="Placeholder"
          onChange={value => {
            console.log(value);
            setSelectValue(value);
          }}
        />
      </div>
      <div className="w-[300px] mt-[10px]">
        <ESelect options={selectOptions} placeholder="disabled" isDisabled={true} />
      </div>
    </>
  );
}
