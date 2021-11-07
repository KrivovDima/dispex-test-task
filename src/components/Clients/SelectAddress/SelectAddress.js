import React, {useEffect} from 'react';
import AddressItem from "./AddressItem/AddressItem";
import styles from './SelectAddress.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
  addCurrentFullAddress,
  addSelectedHouse,
  addSelectedHouseFlat,
  addSelectedStreet,
  fetchHouseFlats,
  fetchHouses,
  fetchStreets
} from "../../../store/reducers/addressesReducer";
import {fetchClients} from "../../../store/reducers/clientsReducer";

function SelectAddress() {
  const dispatch = useDispatch();
  const {
    streets,
    houses,
    houseFlats,
    status,
  } = useSelector(state => state.addresses);

  useEffect(() => {
    dispatch(fetchStreets());
  }, [dispatch])

  const changeSelectedStreet = (id) => {
    dispatch(addSelectedStreet(id));
    dispatch(fetchHouses(id));
  }

  const changeSelectedHouse = (id) => {
    dispatch(addSelectedHouse(id));
    dispatch(fetchHouseFlats(id));
  }

  const changeSelectedHouseFlat = (id) => {
    dispatch(addSelectedHouseFlat(id));
    dispatch(addCurrentFullAddress());
    dispatch(fetchClients(id));
  }

  return (
    <div className={styles.wrapper}>
      <AddressItem disabled={status === 'loading'}
                   onChange={changeSelectedStreet}
                   list={streets}
                   placeholder='Улица'/>
      <AddressItem disabled={status === 'loading'}
                   onChange={changeSelectedHouse}
                   list={houses}
                   placeholder='Дом'/>
      <AddressItem disabled={status === 'loading'}
                   onChange={changeSelectedHouseFlat}
                   list={houseFlats}
                   placeholder='Кв./офис'/>
    </div>
  );
}

export default SelectAddress;

