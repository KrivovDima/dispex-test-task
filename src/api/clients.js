import axios from "axios";

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest',
  headers: {
    'Authorization': 'Bearer krivovdima',
  }
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
  },
  deleteClient(id) {
    return instance.delete(`/HousingStock/bind_client/${id}`);
  },
  addClient(clientData) {
    return instance.post('/HousingStock/client', {...clientData});
  },
  updateClientData(addressId, newClientData ) {
    return instance.put('/HousingStock/bind_client', {addressId, ...newClientData});
  }
}

