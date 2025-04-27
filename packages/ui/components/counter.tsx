import React, { useState } from 'react';
import { Button } from './button';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Button id="counter" type="button" onClick={() => setCount(count + 1)}>
      {count}
    </Button>
  );
};
