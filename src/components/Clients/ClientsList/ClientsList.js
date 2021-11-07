import React from 'react';
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import styles from './ClientsList.module.css';

const {Meta} = Card;

function ClientsList(props) {
  if (!props.list) {
    return <div>Список пуст</div>
  }
  return (
    <div className={styles.wrapper}>
      {props.list.map(client => {
        return (
          <Card
            key={client.id}
            style={{width: 350, marginBottom: 20}}

            actions={[
              <EditOutlined key="edit"/>,
              <DeleteOutlined key="delete"/>,
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
  );
}

export default ClientsList;