import axios from 'axios';
import { BASE_URL, INBOUND_API } from '../Constants/Api';

export const InboundApi = {
    // getInboundDeliveryData(limit) {
    //     return axios.get(`${BASE_URL + INBOUND_API}?limit=${limit}`);
    // },

    // getPokemonById(id) {
    //     return axios.get(`${BASE_URL + INBOUND_API}${id}`);
    // },

    getInboundDeliveryData() {
        return axios.get(`${BASE_URL + INBOUND_API}`);
    },
    createInboundDeliveryData(data) {
        return axios.post(`${BASE_URL + INBOUND_API}`, data);
    },
}

export default InboundApi;