import React, { useEffect, useRef, useState } from 'react';
import { InputProps } from '../../utils/type';

export function SearchComponent({ setInput }: InputProps) {
  const [storage, storageChange] = useState(localStorage.getItem('jikSearch') ?? '');
  const storageRef = useRef<string>();

  useEffect(() => {
    storageRef.current = storage;
  }, [storage]);

  useEffect(() => {
    return () => {
      localStorage.setItem('jikSearch', storageRef.current || '');
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    storageChange(event.target.value);
    localStorage.setItem('jikSearch', event.target.value || '');
  };

  const handleInputSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem('jikSearch', storage || '');
    setInput(storage);
  };

  return (
    <form className="search-bar" onSubmit={handleInputSubmit}>
      <input type="text" value={storage} onChange={handleInputChange}></input>
      <button onClick={handleInputSubmit}>Search by title</button>
    </form>
  );
}
