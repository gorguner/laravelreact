import PostItem from "../Pages/Posts/PostItem.jsx";

const PostsTable = ({posts, orderColumn, orderDirection, toggleSort}) => {

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => toggleSort('id')}>
                    <span>ID</span>
                    {orderColumn === 'id' && (orderDirection === 'asc' ?
                        <svg className="w-4 h-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 15l7-7 7 7"/>
                        </svg>
                        : <svg className="w-4 h-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg"
                               fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 9l-7 7-7-7"/>
                        </svg>)}
                </th>
                <th className="cursor-pointer" onClick={() => toggleSort('title')}>
                    <span>Title</span>
                    {orderColumn === 'title' && (orderDirection === 'asc' ?
                        <svg className="w-4 h-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 15l7-7 7 7"/>
                        </svg>
                        : <svg className="w-4 h-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg"
                               fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 9l-7 7-7-7"/>
                        </svg>)}
                </th>
                <th><span>Category</span></th>
                <th><span>Content</span></th>
                <th><span>Created at</span></th>
            </tr>
            </thead>
            <tbody>
            {posts?.data?.map(post => (
                <PostItem key={post.id} post={post}/>
            ))}
            </tbody>
        </table>
    );
}

export default PostsTable;