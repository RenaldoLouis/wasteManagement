import axios from 'axios';
import { BASE_URL, USER_API } from '../Constants/Api';

export const InboundApi = {
    // getInboundDeliveryData(limit) {
    //     return axios.get(`${BASE_URL + USER_API}?limit=${limit}`);
    // },

    // getPokemonById(id) {
    //     return axios.get(`${BASE_URL + USER_API}${id}`);
    // },

    getInboundDeliveryData() {
        return axios.get(`${BASE_URL + USER_API}`);
    },
    createInboundDeliveryData() {
        return axios.post(`${BASE_URL + USER_API}`);
    },
}

export default InboundApi;