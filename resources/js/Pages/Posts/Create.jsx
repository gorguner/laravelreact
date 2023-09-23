import React, { useState } from 'react';
import CategoryFilter from "../../components/CategoryFilter.jsx";
import useCategories from "../../components/hooks/useCategories.jsx";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

const PostsCreate = () => {
    const navigate = useNavigate();

    // Declare state variables using useState
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const { categories, isLoading: categoriesLoading, error: categoriesError } = useCategories();
    const [errors, setErrors] = useState({});

    // Event Handlers
    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleContentChange = (event) => setContent(event.target.value);
    const handleCategoryChange = (event) => setCategoryId(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/posts', {
            title: title,
            content: content,
            category_id: categoryId,
        }).then(response =>  navigate('/')).catch(error => setErrors(error.response.data.errors));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className="block font-medium text-sm text-gray-700">
                    Title
                </label>
                <input value={title} onChange={handleTitleChange} id="title" type="text" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                <div className="text-red-600 mt-1">
                    {errors['title']}
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="content" className="block font-medium text-sm text-gray-700">
                    Content
                </label>
                <textarea value={content} onChange={handleContentChange} id="content" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                <div className="text-red-600 mt-1">
                    {errors['content']}
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="category" className="block font-medium text-sm text-gray-700">
                    Category
                </label>
                <CategoryFilter categories={categories} onChange={handleCategoryChange}/>
                <div className="text-red-600 mt-1">
                    {errors['category_id']}
                </div>
            </div>
            <div className="mt-4">
                <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">
                    Save
                </button>
            </div>
        </form>
    );
};

export default PostsCreate;
