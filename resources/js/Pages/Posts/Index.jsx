import { useState } from "react";
import Paginator from "../../components/Paginator.jsx";
import Loading from "../../components/Loading.jsx";
import CategoryFilter from "../../components/CategoryFilter.jsx";
import PostsTable from "../../components/PostsTable.jsx";
import usePosts from "../../components/hooks/usePosts.jsx";
import useCategories from "../../components/hooks/useCategories.jsx";

const ALL_CATEGORIES = "All Categories";

const PostsIndex = () => {
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState(null);
    const [orderColumn, setOrderColumn] = useState('id');
    const [orderDirection, setOrderDirection] = useState('desc');

    const query = { page, category_id: categoryId, order_column: orderColumn, order_direction: orderDirection };
    const { posts, isLoading: postsLoading, error: postsError } = usePosts(query);
    const { categories, isLoading: categoriesLoading, error: categoriesError } = useCategories();

    if (postsLoading || categoriesLoading) {
        return <Loading/>;
    }

    if (postsError || categoriesError) {
        return <div>Error loading data</div>;
    }

    const gotoPageHandler = (url) => {
        const fullUrl = new URL(url);
        setPage(fullUrl.searchParams.get('page'));
    }

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value === ALL_CATEGORIES ? null : e.target.value;
        setPage(1);
        setCategoryId(selectedCategoryId);
    };

    const toggleSort = (column) => {
        if (orderColumn === column) {
            const newDirection = orderDirection === 'asc' ? 'desc' : 'asc';
            setOrderDirection(newDirection);
        } else {
            setOrderColumn(column);
            setOrderDirection('desc');
        }
    };

    return (
        <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
            <div className="min-w-full align-middle">
                <div className="mb-4">
                    <CategoryFilter categories={categories} onChange={handleCategoryChange}/>
                </div>
                <PostsTable posts={posts} orderColumn={orderColumn} orderDirection={orderDirection} toggleSort={toggleSort} />
                <Paginator
                    meta={posts.meta}
                    onClick={gotoPageHandler}
                />
            </div>
        </div>
    );
}

export default PostsIndex;
