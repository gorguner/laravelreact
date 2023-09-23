const CategoryFilter = ({categories, onChange}) => {
    const categoryoptions = categories.map((category) => {
        return <option key={category.id} value={category.id}>{category.name}</option> // Added a key prop
    });
    return (
        <select onChange={onChange}
                className="mt-1 w-full sm:mt-0 sm:w-1/4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>All Categories</option>
            {categoryoptions}
        </select>
    );
}

export default CategoryFilter;