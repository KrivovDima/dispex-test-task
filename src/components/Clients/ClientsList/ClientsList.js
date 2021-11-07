import React from 'react';
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import styles from './ClientsList.module.css';
import {useDispatch, useSelector} from "react-redux";
import {sendingDeleteClient} from "../../../store/reducers/clientsReducer";

const {Meta} = Card;

function ClientsList(props) {


  const dispatch = useDispatch();

  const handleDeleteClient = (id) => {
    dispatch(sendingDeleteClient(id))
  }

  const currentFullAddress = useSelector(state => state.addresses.currentFullAddress)

  if (!props.list) {
    return <h3 className={styles.messageBox}>Список пуст</h3>
  }
  return (
    <>
      <h2>{currentFullAddress}</h2>
      <div className={styles.inner}>
        {props.list.map(client => {
          return (
            <Card
              key={client.id}
              style={{width: 350, marginBottom: 20}}

              actions={[
                <EditOutlined onClick={() => {props.editClient(client.id)}} key="edit"/>,
                <DeleteOutlined onClick={() => {handleDeleteClient(client.id)}} key="delete"/>,
              ]}
            >
              <Meta
                title={client.name}
                description={
                  <div>
                    <div>Phone:&nbsp;{client.phone}</div>
                    <div>Email:&nbsp;{client.email}</div>
                  </div>
                }
              />
            </Card>
          )
        })}
      </div>
    </>

  );
}

export default ClientsList;