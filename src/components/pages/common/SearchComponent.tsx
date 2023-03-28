import React, { useEffect, useState } from 'react';

export function SearchComponent() {
  const [storage, storageChange] = useState('');

  useEffect(() => {
    const startInput = localStorage.getItem('jikSearch') ?? '';
    if (startInput || startInput === '') {
      storageChange(startInput);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    storageChange(event.target.value);
    localStorage.setItem('jikSearch', event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" value={storage} onChange={handleInputChange}></input>
      <button>Search</button>
    </div>
  );
}
