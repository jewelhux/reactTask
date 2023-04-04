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
    setInput(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" value={storage} onChange={handleInputChange}></input>
      <button>Search by title</button>
    </div>
  );
}
