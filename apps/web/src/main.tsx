import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './theme.css';
import typescriptLogo from '/typescript.svg';
import { Button } from '@repo/ui';
import { StartGameForm } from './forms/StartGameForm';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StartGameForm isOpen={isOpen} onOpenChange={setIsOpen} onSubmit={console.log} />

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
        </a>
        <div className="card">
          <Button onClick={() => setIsOpen(true)}>Open that form!</Button>
        </div>
      </div>
    </>
  );
};

createRoot(document.getElementById('app')!).render(<App />);
