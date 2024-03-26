import axios from 'axios';
import { BASE_URL, USER_API } from '../Constants/Api';

export const DashboardApi = {
    getAllPokemons(limit) {
        return axios.get(`${BASE_URL + USER_API}?limit=${limit}`);
    },

    getPokemonById(id) {
        return axios.get(`${BASE_URL + USER_API}${id}`);
    },

    // createNewClient(userData) {
    //     return axios.post(getApiUrl() + USER_API_BASE_CLIENTS_URL, { userData });
    // }

    // createNewClientUser(clientUser) {
    //     return axios.post(`${getApiUrl()}${USER_API_BASE_CLIENTS_USERS_URL}/createNewClientUser`, clientUser);
    // }

    // deleteClient(clientkey) {
    //     return axios.delete(`${getApiUrl()}${USER_API_BASE_CLIENTS_URL}/${clientkey}`);
    // }

    // updateClient(clientkey, userData) {
    //     return axios.put(`${getApiUrl()}${USER_API_BASE_CLIENTS_URL}/${clientkey}`, { userData });
    // }

    // getProspectiveClientsLoginCount(start, end) {
    //     return axios.get(getApiUrl() + USER_API_BASE_CLIENTS_URL + "/logs" + "/loginCount" + `?start=${start}&end=${end}`)
    // }
}

export default DashboardApi;