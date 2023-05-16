import { useEffect, useState } from 'react';

import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoadings, setIsLoadings] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                try {
                    let res = await axios.get(url);
                    console.log(res);
                    let data = res && res.data ? res.data : [];
                    setData(data);
                    setIsLoadings(false);
                    setIsError(false);
                } catch (e) {
                    setIsError(true);
                    setIsLoadings(false);
                    alert(e.message);
                }
            }
            fetchData();
        }, 3000);
    }, []);

    return {
        data,
        isError,
        isLoadings,
    };
};

export default useFetch;
