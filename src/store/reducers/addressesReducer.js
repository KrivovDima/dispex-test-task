import {addressListAPI, clientsAPI} from "../../api/clients";

const initialState = {
  streets: [],
  houses: [],
  houseFlats: [],
  selectedStreet: {},
  selectedHouse: {},
  selectedHouseFlat: {},
  currentFullAddress: '',
  status: 'idle', // maybe 'idle' 'loading' | 'success'
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

const addStreets = (streets) => {
  return {
    type: 'ADD-STREETS',
    payload: {streets},
  }
}
const addHouses = (houses) => {
  return {
    type: 'ADD-HOUSES',
    payload: {houses},
  }
}
const addHouseFlats = (houseFlats) => {
  return {
    type: 'ADD-HOUSE-FLATS',
    payload: {houseFlats},
  }
}
export const addSelectedStreet = (id) => {
  return {
    type: 'ADD-SELECTED-STREET',
    id,
  }
}
export const addSelectedHouse = (id) => {
  return {
    type: 'ADD-SELECTED-HOUSE',
    id,
  }
}
export const addSelectedHouseFlat = (id) => {
  return {
    type: 'ADD-SELECTED-HOUSE-FLAT',
    id,
  }
}
export const addCurrentFullAddress = () => ({type: 'ADD-CURRENT-FULL-ADDRESS'});
export const changeAddressesStatus = (status) => ({type: 'CHANGE-ADDRESSES-STATUS', payload: {status}});

// thunk creators

export const fetchStreets = () => async (dispatch) => {
  try {
    const res = await addressListAPI.getStreets();
    dispatch(addStreets(res.data));
  } catch (e) {
    console.log(e);
  }

}
export const fetchHouses = (id) => async (dispatch) => {
  try {
    const res = await addressListAPI.getHouses(id);
    dispatch(addHouses(res.data));
  } catch (e) {
    console.log(e);
  }

}
export const fetchHouseFlats = (id) => async (dispatch) => {
  try {
    const res = await addressListAPI.getHouseFlats(id);
    dispatch(addHouseFlats(res.data));
  } catch (e) {
    console.log(e);
  }
}





