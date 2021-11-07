import React, {useEffect} from 'react';
import AddressItem from "./AddressItem/AddressItem";
import styles from './SelectAddress.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
  addCurrentFullAddress,
  addSelectedHouse, addSelectedHouseFlat,
  addSelectedStreet, fetchHouseFlats,
  fetchHouses,
  fetchStreets
} from "../../../store/reducers/addressesReducer";
import {fetchClients} from "../../../store/reducers/clientsReducer";

function SelectAddress(props) {
  const dispatch = useDispatch();
  const {
    streets,
    houses,
    houseFlats,
    selectedStreet,
    selectedHouse,
    selectedHouseFlat,
  } = useSelector(state => state.addresses);

  useEffect(() => {
    dispatch(fetchStreets());
  }, [dispatch])

  const changeSelectedStreet = (id) => {
    dispatch(addSelectedStreet(id));
  }

  const onBlurStreet = () => {
    if (!selectedStreet.id) {
      return
    }
    dispatch(fetchHouses(selectedStreet.id));
  }

  const changeSelectedHouse = (id) => {
    dispatch(addSelectedHouse(id));
  }

  const onBlurHouse = () => {
    if (!selectedHouse.id) {
      return
    }
    dispatch(fetchHouseFlats(selectedHouse.id));
  }

  const changeSelectedHouseFlat = (id) => {
    dispatch(addSelectedHouseFlat(id));
    dispatch(addCurrentFullAddress());
    dispatch(fetchClients(id));
  }

  return (
    <div className={styles.wrapper}>
      <AddressItem onBlur={onBlurStreet}
                   onChange={changeSelectedStreet}
                   list={streets}
                   placeholder='Улица'/>
      <AddressItem onBlur={onBlurHouse}
                   onChange={changeSelectedHouse}
                   list={houses}
                   placeholder='Дом'/>
      <AddressItem onChange={changeSelectedHouseFlat}
                   list={houseFlats}
                   placeholder='Кв./офис'/>
    </div>
  );
}

export default SelectAddress;

