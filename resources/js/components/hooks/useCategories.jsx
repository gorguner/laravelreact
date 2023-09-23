import {useEffect, useState} from "react";
import axios from "axios";

function useCategories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/categories')
            .then(response => {
                setCategories(response.data.data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return { categories, isLoading, error };
}

export default useCategories;
