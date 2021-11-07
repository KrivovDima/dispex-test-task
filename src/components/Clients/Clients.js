import React, {useState} from 'react';
import SelectAddress from './SelectAddress/SelectAddress';
import styles from './Clients.module.css';
import {Button, Spin} from "antd";
import ClientsList from "./ClientsList/ClientsList";
import {useDispatch, useSelector} from "react-redux";
import ClientModal from "./ClientModal/ClientModal";
import {changeEditableClientData, changeInputMode} from "../../store/reducers/clientsReducer";


function Clients() {

  const [isVisibleClientModal, setIsVisibleClientModal] = useState(false);

  const dispatch = useDispatch();
  const currentFullAddress = useSelector(state => state.addresses.currentFullAddress);
  const addressStatus = useSelector(state => state.addresses.status);
  const clients = useSelector(state => state.clients.clients);
  const editableClientData = useSelector(state => state.clients.editableClientData);

  const handleSetIsVisibleClientModal = (value) => {
    setIsVisibleClientModal(value);
  }

  const handleOnClickAddClient = () => {
    dispatch(changeInputMode('addition'));
    setIsVisibleClientModal(true);
  }

  const handleEditClient = (id) => {
    dispatch(changeInputMode('editing'));
    dispatch(changeEditableClientData(id));
    setIsVisibleClientModal(true);
  }

  return (
    <div className={styles.wrapper}>
      <SelectAddress/>
      <div className={styles.spinWrapper}>
        {addressStatus === 'loading' && <Spin/>}
      </div>
      <div className={styles.btns}>
        <Button onClick={handleOnClickAddClient}
                type="primary"
                disabled={!currentFullAddress}
                >
          Добавить жильца
        </Button>
      </div>
      <ClientModal visible={isVisibleClientModal}
                   onClickClientModal={handleSetIsVisibleClientModal}
                   editableClientData={editableClientData}/>
      <ClientsList list={clients} editClient={handleEditClient}/>
    </div>
  );
}

export default Clients;







