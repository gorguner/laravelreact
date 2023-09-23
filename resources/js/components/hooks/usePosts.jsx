import { useState, useEffect } from "react";
import axios from "axios";

function usePosts(query) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const stringifiedQuery = JSON.stringify(query);
    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/posts', {params: query})
            .then(response => {
                setPosts(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, [stringifiedQuery]);

    return { posts, isLoading, error };
}

export default usePosts;
