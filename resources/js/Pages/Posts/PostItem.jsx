const PostItem = ({post}) => {
    return (
        <tr className="row bg-white border-b">
            <td className="px-6 py-4">{post.id}</td>
            <td>{post.title}</td>
            <td>{post.category.name}</td>
            <td className="px-6 py-4">{post.content}</td>
            <td className="px-6 py-4">{post.created_at}</td>
        </tr>
    );
}
export default PostItem;
