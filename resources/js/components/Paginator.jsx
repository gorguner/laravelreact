import {useState} from "react";

const Paginator = ({meta, onClick}) => {

    return (
        <nav role="navigation" aria-label="Pagination Navigation" className="flex items-center justify-between mt-3">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700 leading-5">
                        Showing
                        <span>
                                <span className="font-medium"> {meta.from} </span>
                                to
                                <span className="font-medium"> {meta.to} </span>
                            </span>
                        of
                        <span className="font-medium"> {meta.total} </span>
                        results
                    </p>
                </div>

                <div>
                        <span className="relative z-0 inline-flex shadow-sm rounded-md">
                            {meta.links.map((link, index) =>
                                <button key={index}
                                        onClick={() => onClick(link.url)}
                                        dangerouslySetInnerHTML={{__html: link.label}}
                                        className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 first:rounded-l-md last:rounded-r-md"/>
                            )
                            }
                        </span>
                </div>
            </div>
        </nav>
    );
};

export default Paginator;