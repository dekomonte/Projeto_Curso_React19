//PascalCase
//Ex: App
//Ex: HeaderHeading
//Ex: ExemploDeComponente

import './styles/theme.css';
import './styles/global.css';
import { Fragment } from 'react/jsx-runtime';

export function App() {
  console.log('Oi');

  return (
    <Fragment>
      <h1>PascalCase</h1>
      <p>Ex: App</p>
      <p>Ex: HeaderHeading</p>
      <p>Ex: ExemploDeComponente</p>
    </Fragment>
  );
}
