import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

// Api Service -> Where we call the backend

class ApiService {

    getOptions (){
        return axios.get ("" + BASE_URL + "/option");
    }

    convertNumber(converter){
        return axios.post("" + BASE_URL + "/convert", converter);
    }

}

export default new ApiService();