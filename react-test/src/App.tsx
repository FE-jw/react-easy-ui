import { useState } from 'react';

// Components
import { EButton, EInput, EToggleSwitch } from './../../src';

export default function App() {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);

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
    </>
  );
}
