import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {addressesAndClientsReducer} from "./reducers/addressesAndClientsReducer";

const rootReducer = combineReducers({
  addressesAndClients: addressesAndClientsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;