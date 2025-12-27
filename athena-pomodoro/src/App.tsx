//PascalCase
//Ex: App
//Ex: HeaderHeading
//Ex: ExemploDeComponente

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading>Olá Mundo!</Heading>
      <Heading>Teste</Heading>
    </>
  );
}
