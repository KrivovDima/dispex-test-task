import React, {useState} from 'react';
import SelectAddress from './SelectAddress/SelectAddress';
import styles from './Clients.module.css';
import {Button} from "antd";
import ClientsList from "./ClientsList/ClientsList";
import {useDispatch, useSelector} from "react-redux";
import ClientModal from "./ClientModal/ClientModal";
import {changeEditableClientData, changeInputMode, fetchClients} from "../../store/reducers/clientsReducer";


function Clients(props) {

  const [isVisibleClientModal, setIsVisibleClientModal] = useState(false);

  const dispatch = useDispatch();
  const selectAddressId = useSelector(state => state.addresses.selectedHouseFlat.id);
  const clients = useSelector(state => state.clients.clients);
  const editableClientData = useSelector(state => state.clients.editableClientData);

  const watchClients = () => {
    dispatch(fetchClients(selectAddressId));
  }

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
      <div className={styles.btns}>
        <Button className={styles.btn}
                onClick={handleOnClickAddClient}
                type="primary"
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







