import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height 100px;
`;

const Text = styled.h1`
  color: red;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text> Hellow </Text>
      </BoxOne>
      <BoxTwo>
        <Input />
        <Input />
        <Input />
        <Input />
      </BoxTwo>
    </Father>
  );
}

export default App;
