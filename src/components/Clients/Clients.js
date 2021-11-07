import React from 'react';
import SelectAddress from './SelectAddress/SelectAddress';
import styles from './Clients.module.css';
import {Button} from "antd";
import ClientsList from "./ClientsList/ClientsList";
import {useDispatch, useSelector} from "react-redux";
import {fetchClients} from "../../store/reducers/addressesAndClientsReducer";


function Clients(props) {

  const dispatch = useDispatch();
  const selectAddressId = useSelector(state => state.addressesAndClients.selectedHouseFlat.id);
  const clients = useSelector(state => state.addressesAndClients.clients);

  const watchClients = () => {
    dispatch(fetchClients(selectAddressId))
  }


  return (
    <div className={styles.wrapper}>
      <SelectAddress/>
      <div className={styles.btns}>
        <Button onClick={watchClients} type="primary">Показать клиентов</Button>
      </div>
      <ClientsList list={clients}/>
    </div>
  );
}

export default Clients;







