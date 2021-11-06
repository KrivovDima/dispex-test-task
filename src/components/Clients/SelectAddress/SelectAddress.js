import React, {useEffect} from 'react';
import AddressItem from "./AddressItem/AddressItem";
import styles from './SelectAddress.module.css';
import {useDispatch, useSelector} from "react-redux";
import {
  addSelectedHouse, addSelectedHouseFlat,
  addSelectedStreet, fetchHouseFlats,
  fetchHouses,
  fetchStreets
} from "../../../store/reducers/addressesAndClientsReducer";

function SelectAddress(props) {
  const dispatch = useDispatch();
  const {
    streets,
    houses,
    houseFlats,
    selectedStreet,
    selectedHouse,
  } = useSelector(state => state.addressesAndClients);

  useEffect(() => {
    dispatch(fetchStreets());
  }, [dispatch])

  const changeSelectedStreet = (id) => {
    dispatch(addSelectedStreet(id));
  }

  const onBlurStreet = () => {
    dispatch(fetchHouses(selectedStreet.id));
  }

  const changeSelectedHouse = (id) => {
    dispatch(addSelectedHouse(id));
  }

  const onBlurHouse = () => {
    dispatch(fetchHouseFlats(selectedHouse.id));
  }

  const changeSelectedHouseFlat = (id) => {
    dispatch(addSelectedHouseFlat(id));
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

