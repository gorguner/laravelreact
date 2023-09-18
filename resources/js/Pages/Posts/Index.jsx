export default function PostsIndex() {
    return (
        <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
            <div className="min-w-full align-middle">
                <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <span>ID</span>
                        </th>
                        <th>
                            <span>Title</span>
                        </th>
                        <th>
                            <span>Content</span>
                        </th>
                        <th>
                            <span>Created at</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="row bg-white border-b">
                        <td class="px-6 py-4">1</td>
                        <td>A</td>
                        <td class="px-6 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                        <td class="px-6 py-4">2022-01-01 13:43:47</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>B</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                        <td>2022-01-02 14:43:47</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>C</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                        <td>2022-01-03 15:43:47</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
}
