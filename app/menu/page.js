'use client'
import Link from 'next/link';
import React, { useState, useMemo, useEffect } from 'react';
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const DataReturner = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
};

export default function Menu() {
    const [sortOrder, setSortOrder] = useState('none');
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 9;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const products = await DataReturner();
            setData(products);
            setLoading(false);
        };
        fetchData();
    }, []);

    const sortedItems = useMemo(() => {
        let sorted = [...data];
        if (sortOrder === 'price-low-to-high') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'price-high-to-low') {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortOrder === 'name-a-to-z') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'name-z-to-a') {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        }
        return sorted;
    }, [data, sortOrder]);

    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedItems.slice(startIndex, endIndex);
    }, [currentPage, sortedItems, itemsPerPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-white">
            <section
                className="relative h-96 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=elegant%20restaurant%20table%20setting%20with%20Italian%20food%2C%20multiple%20dishes%2C%20pasta%2C%20pizza%2C%20wine%20glasses%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20authentic%20Italian%20restaurant%20atmosphere&width=1920&height=600&seq=menu-hero&orientation=landscape')`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                            Our Menu
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100">
                            Discover authentic Italian flavors crafted with passion and tradition
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-8">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="sort" className="text-gray-700 font-medium">Sort by:</label>
                            <select
                                id="sort"
                                value={sortOrder}
                                onChange={handleSortChange}
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                            >
                                <option value="none">None</option>
                                <option value="price-low-to-high">Price: Low to High</option>
                                <option value="price-high-to-low">Price: High to Low</option>
                                <option value="name-a-to-z">Name: A-Z</option>
                                <option value="name-z-to-a">Name: Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="flex justify-center items-center h-48">
                            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentItems.length > 0 ? (
                                currentItems.map((item) => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="h-48 bg-cover bg-center" style={{
                                            backgroundImage: `url('${item.image}')`
                                        }}></div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                                                <span className="text-2xl font-bold text-amber-600">₹{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                                            <a
                                                href={item.link || `/menu/detail/${item.id}`}
                                                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                            >
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-600 text-lg">
                                    No items found.
                                </div>
                            )}
                        </div>
                    )}
                    {totalPages > 1 && !loading && (
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
                                    className={`px-4 py-2 rounded-full ${currentPage === index + 1
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
                </div>
            </section>

            <section className="py-16 bg-amber-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Experience Our Cuisine?
                    </h2>
                    <p className="text-xl text-amber-100 mb-8">
                        Make a reservation today and let us take you on a culinary journey through Italy
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                        Make a Reservation
                    </Link>
                </div>
            </section>
        </div>
    );
}