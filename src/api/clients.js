import axios from "axios";

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest',
});

export const addressListAPI = {
  getStreets() {
    return instance.get('/Request/streets');
  },
  getHouses(id) {
    return instance.get(`/Request/houses/${id}`);
  },
  getHouseFlats(id) {
    return instance.get(`/Request/house_flats/${id}`);
  },
}

export const clientsAPI = {
  getClients(addressId) {
    return instance.get(`/HousingStock/clients?addressId=${addressId}`);
  }
}