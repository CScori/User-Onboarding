import React from 'react';
import Form from './CMPNT/Form'
import styled from 'styled-components'

const Back = styled.div`
background: dodgerblue;
height: 1000px;

`
function App() {
  return (
    <Back className="App">
    <Form />
    </Back>
  );
}

export default App;
