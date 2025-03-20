import { useEffect, useState, useCallback } from 'react';

export const useFetch = (url) => {
        const [data, setData] = useState();
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState();

        const fetchData = useCallback(async () => {
            setIsLoading(true);
            setError();
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setError('Failed to fetch data');
                } else {
                    const data = await response.json();
                    setData(data);
                }
           } catch (error) {
                setError(error)
           }
           setIsLoading(false);
        }, [url])

        useEffect(() => {
            fetchData()
        }, [fetchData])

        return { data, isLoading, error, refetch: fetchData  };
}