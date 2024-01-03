import axios from "axios";
import baseURL from "../api"


async function getSeller() {
    try {
        
        const response = await axios.get(baseURL+'seller');
        return response.data
    } catch (error) {
        throw error;
    }
 
}

export default getSeller
