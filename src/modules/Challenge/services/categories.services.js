import Axios from "axios";
import CATEGORIES_SERVICES from '../constants/endpoints';
 
export const getCategoryServices = () => {
   return Axios({
        url: CATEGORIES_SERVICES,
    })
}