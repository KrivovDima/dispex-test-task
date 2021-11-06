import React from 'react';

function ClientsList(props) {
  if (!props.list) {
    return <div>Что то пошло не так обратитесь в поддержку</div>
  }
  return (
    <div>
      {props.list.map(client => {
        return <div>{JSON.stringify(client)}</div>
      })}
    </div>
  );
}

export default ClientsList;