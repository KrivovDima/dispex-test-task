import {addressListAPI} from "../../api/clients";

const initialState = {
  streets: [],
  houses: [],
  houseFlats: [],
  selectedStreet: {},
  selectedHouse: {},
  selectedHouseFlat: {},
  currentFullAddress: '',
  status: 'idle', // maybe 'idle' | 'loading' | 'success'
}

export const addressesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-STREETS': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'ADD-HOUSES': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'ADD-HOUSE-FLATS': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'ADD-SELECTED-STREET': {
      const selectedStreet = state.streets.find(street => street.id === action.id);
      return {...state, selectedStreet: selectedStreet};
    }
    case 'ADD-SELECTED-HOUSE': {
      const selectedHouse = state.houses.find(house => house.id === action.id);
      return {...state, selectedHouse: selectedHouse};
    }
    case 'ADD-SELECTED-HOUSE-FLAT': {
      const selectedHouseFlat = state.houseFlats.find(flat => flat.id === action.id);
      return {...state, selectedHouseFlat: selectedHouseFlat};
    }
    case 'ADD-CURRENT-FULL-ADDRESS': {
      return {
        ...state,
        currentFullAddress: `${state.selectedStreet.name} ${state.selectedHouse.name} кв. ${state.selectedHouseFlat.name}`
      }
    }
    case 'CHANGE-ADDRESSES-STATUS': {
      return {...state, ...action.payload}
    }
    default: {
      return state
    }
  }
}

// actions creators

const addStreets = (streets) => ({type: 'ADD-STREETS', payload: {streets},})
const addHouses = (houses) => ({type: 'ADD-HOUSES', payload: {houses},})
const addHouseFlats = (houseFlats) => ({type: 'ADD-HOUSE-FLATS', payload: {houseFlats},})
export const addSelectedStreet = (id) => ({type: 'ADD-SELECTED-STREET', id,})
export const addSelectedHouse = (id) =>({type: 'ADD-SELECTED-HOUSE', id,})
export const addSelectedHouseFlat = (id) => ({type: 'ADD-SELECTED-HOUSE-FLAT', id,})
export const addCurrentFullAddress = () => ({type: 'ADD-CURRENT-FULL-ADDRESS'});
export const changeAddressesStatus = (status) => ({type: 'CHANGE-ADDRESSES-STATUS', payload: {status}});

// thunk creators

export const fetchStreets = () => async (dispatch) => {
  try {
    dispatch(changeAddressesStatus('loading'));
    const res = await addressListAPI.getStreets();
    dispatch(changeAddressesStatus('success'));
    dispatch(addStreets(res.data));
  } catch (e) {
    console.log(e);
  }
}
export const fetchHouses = (id) => async (dispatch) => {
  try {
    dispatch(changeAddressesStatus('loading'));
    const res = await addressListAPI.getHouses(id);
    dispatch(changeAddressesStatus('success'));
    dispatch(addHouses(res.data));
  } catch (e) {
    console.log(e);
  }
}
export const fetchHouseFlats = (id) => async (dispatch) => {
  try {
    dispatch(changeAddressesStatus('loading'));
    const res = await addressListAPI.getHouseFlats(id);
    dispatch(changeAddressesStatus('success'));
    dispatch(addHouseFlats(res.data));
  } catch (e) {
    console.log(e);
  }
}





