import React from 'react';
import SelectAddress from './SelectAddress/SelectAddress';
import styles from './Clients.module.css';


function Clients(props) {

  return (
    <div className={styles.wrapper}>
      <SelectAddress/>
    </div>
  );
}

export default Clients;







