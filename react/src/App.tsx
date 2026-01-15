import { EButton } from './../../src/components/EButton';

export default function App() {
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, qui ad autem facere veniam odit nihil debitis eius
      eaque vel molestias velit iusto ipsum beatae, reiciendis expedita explicabo sit non.
      <EButton
        onClick={() => {
          console.log('EButton');
        }}
      >
        asd
      </EButton>
    </>
  );
}
