import React from 'react';
import preloader from '../../../assets/img/preloader.gif';

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
