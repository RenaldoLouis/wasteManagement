import axios from 'axios';
import { BASE_URL, DASHBOARD_API } from '../Constants/Api';

export const DashboardApi = {
    getAllWaste() {
        return axios.get(`${BASE_URL + DASHBOARD_API}`);
    },
}

export default DashboardApi;