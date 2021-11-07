import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {addressesReducer} from "./reducers/addressesReducer";
import {clientsReducer} from "./reducers/clientsReducer";

const rootReducer = combineReducers({
  addresses: addressesReducer,
  clients: clientsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;