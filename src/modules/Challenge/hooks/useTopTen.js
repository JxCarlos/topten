import { useState, useEffect } from "react";
// services
import { getTopTenServices } from '../services';

export const useTopTen = () => {
    const [topTen, setTopTen] = useState();
    const [sucessTopTen, setSuccessTopTen] = useState();
    const [errorTopTen, setErrorTopTen] = useState();

    const fetchTopTenSuccess = (response) => {
        setSuccessTopTen(true);
        setTopTen(response)
    }

    const fetchTopTenErrror = (error) => {
        setErrorTopTen(error)
    }

    const fetchTopTen = async () => {
        getTopTenServices()
        .then(fetchTopTenSuccess)
        .catch(fetchTopTenErrror)
    }

    useEffect(() => {
        fetchTopTen();
    },[]);

    return {
        topTen,
        sucessTopTen,
        errorTopTen
    }
}