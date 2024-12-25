// Loader.js
import React from 'react';
import { TailSpin } from 'react-loader-spinner'; // Import the spinner

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        height="80"
        width="80"
        color="grey"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
