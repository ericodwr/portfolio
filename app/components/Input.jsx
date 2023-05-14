'use client';

import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div>
      <input type="file" onChange={(e) => console.log(e)} />
    </div>
  );
};

export default Input;
