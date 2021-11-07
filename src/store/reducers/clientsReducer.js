import {clientsAPI} from "../../api/clients";
import {addCurrentFullAddress} from "./addressesReducer";

const initialState = {
  inputMode: '', // maybe 'addition' | 'editing'
  editableClientData: {clientId: null, name: '', phone: '', email: '',},
  clients: [],
  status: 'idle', // maybe idle 'loading' | 'success'
}

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-INPUT-MODE': {
      return {...state, ...action.payload};
    }
    case 'ADD-CLIENTS': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'DELETE-CLIENT': {
      return {
        ...state,
        clients: state.clients.filter(client => client.id !== action.id),
      }
    }
    case 'CHANGE-EDITABLE-CLIENT-DATA': {
      if (action.id === null) {
        return {...state, editableClientData: {clientId: null, name: '', phone: '', email: '',}};
      } else {
        const currentClientData = state.clients.find(cl => cl.id === action.id);
        return {
          ...state,
          editableClientData: {
            clientId: currentClientData.id,
            name: currentClientData.name,
            phone: currentClientData.phone,
            email: currentClientData.email,
          },
        };
      }
    }
    case 'ADD-CLIENT': {
      return {
        ...state,
        clients: [action.clientData, ...state.clients],
      }
    }
    case 'UPDATE-CLIENT': {
      const {resultClientData, clientId} = action.newClientData;
      resultClientData.id = action.newClientData.clientId;
      return {
        ...state,
        clients: state.clients.map(cl => {
          if (cl.id === action.newClientData.clientId) {
            return resultClientData;
          } else {
            return cl;
          }
        })
      }
    }
    case 'CHANGE-CLIENTS-STATUS': {
      return {...state, ...action.payload}
    }
    default: {
      return state;
    }
  }
}

// action creators

export const changeInputMode = (inputMode) => ({type: 'CHANGE-INPUT-MODE', payload: {inputMode},});
export const deleteClient = (id) => ({type: 'DELETE-CLIENT', id,});
const addClients = (clients) => {
  return {
    type: 'ADD-CLIENTS',
    payload: {clients},
  }
}
export const changeEditableClientData = (id) => ({type: 'CHANGE-EDITABLE-CLIENT-DATA', id,});
const addClient = (clientData) => ({type: 'ADD-CLIENT', clientData,});
const updateClient = (newClientData) => ({type: 'UPDATE-CLIENT', newClientData,});
export const changeClientsStatus = (status) => ({type: 'CHANGE-CLIENTS-STATUS', payload: {status}});

// thunk creators

export const fetchClients = (addressId) => async (dispatch) => {
  try {
    const res = await clientsAPI.getClients(addressId);
    dispatch(addCurrentFullAddress());
    dispatch(addClients(res.data));
  } catch (e) {
    console.log(e);
  }
}
export const sendingDeleteClient = (id) => async (dispatch) => {
  try {
    await clientsAPI.deleteClient(id);
    dispatch(deleteClient(id));
  } catch (e) {
    console.log(e);
  }
}
export const sendingAddClient = (clientData) => async (dispatch) => {
  try {
    const res = await clientsAPI.addClient(clientData);
    const finalData = {id: res.data.id, ...clientData};
    dispatch(addClient(finalData));
  } catch (e) {
    console.log(e);
  }
}
export const sendingUpdateClientData = (addressId, clientData) => async (dispatch) => {
  try {
    await clientsAPI.updateClientData(addressId, clientData);
    dispatch(updateClient(clientData));
  } catch (e) {
    console.log(e);
  }
}