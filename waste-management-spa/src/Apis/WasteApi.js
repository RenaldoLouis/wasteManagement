import axios from "axios";
import { BASE_URL, WASTE_API } from "../Constants/Api";

const WasteApi = {
    getAllWaste() {
        return axios.get(`${BASE_URL + WASTE_API}`)
    },

    geWasteById(id) {
        return axios.get(`${BASE_URL + WASTE_API}${id}`)
    }
}

export default WasteApi;