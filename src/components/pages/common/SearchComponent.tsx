import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { inputNameWrite } from '../../../store/features/inputNameSlice';

export function SearchComponent() {
  const textInputSelector = useAppSelector((state) => state.inputName);
  const dispatch = useAppDispatch();
  const [storage, storageChange] = useState(textInputSelector.value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    storageChange(event.target.value);
  };

  const handleInputSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(inputNameWrite(storage));
  };

  return (
    <form className="search-bar" onSubmit={handleInputSubmit}>
      <input type="text" value={storage} onChange={handleInputChange}></input>
      <button type="submit">Search by title</button>
    </form>
  );
}
