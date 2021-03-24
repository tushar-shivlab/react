import axios from 'axios';
import ApiInstance from '../config/config.json';

async function post(url, data) {
    url = ApiInstance.API_URL + url;
    const axiosInstance = await axios.post(url, data);

    return axiosInstance;
}

export default post;
