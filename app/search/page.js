'use client';

import Link from 'next/link';
import { IoCloseCircle } from "react-icons/io5";
import { useState, useEffect, useMemo } from 'react';
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

// Function to fetch data from Firestore
const DataReturner = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
};

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('name-asc'); // State for sorting: 'price-high', 'price-low', 'name-asc', 'name-desc'
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const itemsPerPage = 9;

    // Fetch data from Firebase on component mount
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const products = await DataReturner();
                setData(products);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]);
            } finally {
                // Introduce a small delay to prevent the UI from flickering
                setTimeout(() => setIsLoading(false), 300);
            }
        };
        fetchData();
    }, []);

    const filteredAndSortedItems = useMemo(() => {
        let filteredItems = data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.tags && item.tags.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())))
        );

        // Apply sorting based on the 'sortBy' state
        switch (sortBy) {
            case 'price-high':
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case 'price-low':
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case 'name-asc':
                filteredItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }

        return filteredItems;
    }, [searchQuery, sortBy, data]);

    const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredAndSortedItems.slice(startIndex, endIndex);
    }, [currentPage, filteredAndSortedItems, itemsPerPage]);

    const handleSearchChange = (e) => {
        setIsLoading(true);
        setSearchQuery(e.target.value);
        setCurrentPage(1);
        setTimeout(() => setIsLoading(false), 300);
    };

    const handleSortChange = (e) => {
        setIsLoading(true);
        setSortBy(e.target.value);
        setCurrentPage(1);
        setTimeout(() => setIsLoading(false), 300);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setSearchQuery('');
        setCurrentPage(1);
        setTimeout(() => setIsLoading(false), 300);
    };

    return (
        <div className="min-h-screen bg-white">
            <section
                className="relative h-80 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://readdy.ai/api/search-image?query=restaurant%20kitchen%20with%20chef%20preparing%20multiple%20dishes%2C%20search%20concept%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20Italian%20restaurant%20atmosphere%2C%20cooking%20process&width=1920&height=500&seq=search-hero&orientation=landscape')`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                            Search Our Menu
                        </h1>
                        <p className="text-xl text-gray-100">
                            Find your perfect dish from our authentic collection
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="relative mb-6 text-md text-orange-600/90 font-semibold">
                            <div className="w-5 h-5 flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <i className="ri-search-line"></i>
                            </div>
                            <input
                                type="text"
                                placeholder="Search for dishes, ingredients, or keywords..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-900 hover:text-orange-900 cursor-pointer"
                                >
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <IoCloseCircle className='text-xl text-orange-500' />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        {/* Summary of results */}
                        {filteredAndSortedItems.length > 0 && (
                            <div className="text-gray-600">
                                Found {filteredAndSortedItems.length} {filteredAndSortedItems.length === 1 ? 'dish' : 'dishes'}
                                {searchQuery && ` for "${searchQuery}"`}
                            </div>
                        )}
                        
                        {/* Sort dropdown */}
                        <div className="flex items-center space-x-2">
                            <label htmlFor="sortBy" className="text-gray-700 text-sm">Sort by:</label>
                            <select
                                id="sortBy"
                                value={sortBy}
                                onChange={handleSortChange}
                                className="px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="price-low">Price (Low to High)</option>
                                <option value="price-high">Price (High to Low)</option>
                            </select>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="text-center py-12">
                            <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600">Searching our menu...</p>
                        </div>
                    ) : filteredAndSortedItems.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                                <i className="ri-search-line text-2xl text-gray-400"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                            <p className="text-gray-600 mb-6">
                                We couldn&apos;t find any dishes matching &quot;{searchQuery}&quot;. Try different keywords or check out our full menu.
                            </p>
                            <Link
                                href="/menu"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                            >
                                View Full Menu
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {currentItems.map((item) => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="h-48 bg-cover bg-center" style={{
                                            backgroundImage: `url('${item.image}')`
                                        }}></div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-2">
                                                {item.categories && item.categories.length > 0 && (
                                                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                                                        {item.categories[0]}
                                                    </span>
                                                )}
                                                <span className="text-2xl font-bold text-amber-600">₹{item.price}</span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                                            <Link
                                                href={item.link || `/menu/detail/${item.id}`}
                                                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="flex justify-center mt-12 space-x-2">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-full bg-amber-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`px-4 py-2 rounded-full ${
                                                currentPage === index + 1
                                                    ? 'bg-amber-800 text-white'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-amber-100'
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-full bg-amber-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <section className="py-16 bg-amber-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Found Something You Love?
                    </h2>
                    <p className="text-xl text-amber-100 mb-8">
                        Make a reservation today and experience authentic Indian and Chinese cuisine
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Make a Reservation
                        </Link>
                        <Link
                            href="/menu"
                            className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}