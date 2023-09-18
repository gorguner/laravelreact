import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem.jsx";
import Paginator from "../../components/Paginator.jsx";

const PostIndex = () => {
    const [posts, setPosts] = useState(null);  // start with null
    const [isLoading, setIsLoading] = useState(true);  // loading state

    const fetchPosts = (page = 1) => {
        axios.get('/api/posts', { params: { page } })
            .then(response => {
                setPosts(response.data);
                setIsLoading(false);  // set loading to false once data is fetched
            })
            .catch(error => {
                console.error("There was an error fetching posts:", error);
                setIsLoading(false);  // set loading to false if there's an error
            });
    }

    useEffect(() => {
        fetchPosts(1);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;  // or show a spinner
    }

    const gotoPageHandler = (url) =>  {
        const fullUrl = new URL(url);
        const page= fullUrl.searchParams.get('page');
        fetchPosts(page);
    }

    return (
        <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
            <div className="min-w-full align-middle">

                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <span>ID</span>
                        </th>
                        <th><span>Title</span></th>
                        <th><span>Content</span></th>
                        <th><span>Created at</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts?.data?.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                    </tbody>
                </table>
                <Paginator
                    meta={posts?.meta}
                    onClick={gotoPageHandler}
                />

            </div>
        </div>
    );
}

export default PostIndex;
