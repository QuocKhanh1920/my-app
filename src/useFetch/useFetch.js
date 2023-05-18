import { useEffect, useState } from 'react';

import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoadings, setIsLoadings] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });
                console.log(res);
                let data = res && res.data ? res.data : [];
                setData(data);
                setIsLoadings(false);
                setIsError(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log(e.message);
                } else {
                    setIsError(true);
                    setIsLoadings(false);
                    alert(e.message);
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 3000);

        return () => {
            ourRequest.cancel('Operation canceled by the user');
        };
    }, [url]);

    return {
        data,
        isError,
        isLoadings,
    };
};

export default useFetch;
