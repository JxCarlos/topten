import { useState, useEffect } from "react";
import axios from 'axios';
// services
import { getCategoryServices } from '../services';

export const useCategory = () => {
    const [category, setCategory] = useState();
    const [sucessCategory, setSuccessCategory] = useState();
    const [errorCategory, setErrorCategory] = useState();

    const fetchCategorySuccess = (response) => {
        setSuccessCategory(true);
        setCategory(response)
    }

    const fetchCategoryErrror = (error) => {
        setErrorCategory(error)
    }

    const fetchCategory = async () => {
        getCategoryServices()
        .then(fetchCategorySuccess)
        .catch(fetchCategoryErrror)
    }

    useEffect(() => {
        fetchCategory();
    },[]);

    return {
        category,
        sucessCategory,
        errorCategory
    }
}