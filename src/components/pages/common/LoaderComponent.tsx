import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export function LoaderComponent() {
  return (
    <div className="spinner-wrapper">
      <TailSpin
        height="40"
        width="40"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="spinner"
        visible={true}
      />
    </div>
  );
}
