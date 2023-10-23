import React, { FC } from 'react';
import Button from './components/Button';
import './components/Button.css';

const handleClick = () => {
  console.log('Finally.');
};

const App: FC = () => {
  return (
    <div className="App">
      <div className="Button">
        <h1>Čauko Fery</h1>
        <Button buttonText="Click me" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
