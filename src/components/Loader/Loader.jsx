import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loaderContainer}>
    <Oval 
      height={50} 
      width={50} 
      color="#3f51b5" 
      ariaLabel="oval-loading"
      strokeWidth={4}
    />
  </div>
);

export default Loader;

