import Axios from "axios";
import TOP_TEN_SERVICES from '../constants/endpoints';
 
export const getTopTenServices = () => {
   return Axios({
        url: TOP_TEN_SERVICES,
    })
}