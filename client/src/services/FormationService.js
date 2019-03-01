import axios from "axios";
import UrlConfig from "../config/UrlConfig";

export default {
    async getFormations() {
        try {
            const res = await axios.get(`${UrlConfig.API}/Formations`)
            return res.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}