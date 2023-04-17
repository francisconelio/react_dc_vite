import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputText } from './components/InputText'
import { MyTitle } from './components/MyTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyTitle titulo='Teste react' />
      {/* <h1> Olá meu nome é Nélio</h1> */}

      <InputText
        id="nome"
        name='nome'
        placeholder='nome'
      />
      <br />
      <InputText
        id='sobrenome'
        name='sobrenome'
        placeholder='sobrenome'
      />
    </>
  );
};

export default App
