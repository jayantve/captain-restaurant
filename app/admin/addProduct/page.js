'use client';

import writeProductData from "@/database/AddProduct";
import React, { useState } from "react";

/**
 * A responsive form component for adding a new product to Firestore.
 * It features a loading state, user-friendly feedback messages,
 * and a mobile-first design using Tailwind CSS.
 */
export default function AddProductsForm() {
    // State hooks to manage form input values
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // State for managing UI feedback and loading state
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [messageColor, setMessageColor] = useState('');

    /**
     * Handles form submission to write a new product to Firestore.
     * @param {Event} e The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null); // Clear previous messages

        // Process the comma-separated category string into an array
        const categoriesArray = category
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');

        try {
            // Attempt to add the new product data
            await writeProductData(id, name, desc, price, categoriesArray , imageUrl);

            // Set success message and clear form fields
            setMessage(`Product "${name}" successfully added!`);
            setMessageColor('text-green-600');
            setId('');
            setName('');
            setDesc('');
            setPrice('');
            setCategory('');
            setImageUrl('');

        } catch (error) {
            // Set error message if the submission fails
            setMessage(`Error: Could not add product. ${error.message}`);
            setMessageColor('text-red-600');
        } finally {
            // Re-enable the form button
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Add a New Product</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Product ID Input */}
                    <div className="relative z-0 w-full group">
                        <input
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            type="text"
                            name="product_id"
                            id="product_id"
                            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="product_id"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 bg-gray-50 px-1"
                        >
                            Product ID
                        </label>
                    </div>

                    {/* Product Name Input */}
                    <div className="relative z-0 w-full group">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="product_name"
                            id="product_name"
                            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="product_name"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 bg-gray-50 px-1"
                        >
                            Product Name
                        </label>
                    </div>

                    {/* Product Description Input */}
                    <div className="relative z-0 w-full group">
                        <input
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            type="text"
                            name="product_desc"
                            id="product_desc"
                            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="product_desc"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 bg-gray-50 px-1"
                        >
                            Description
                        </label>
                    </div>

                    {/* Product Price Input */}
                    <div className="relative z-0 w-full group">
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            name="product_price"
                            id="product_price"
                            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="product_price"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 bg-gray-50 px-1"
                        >
                            Price
                        </label>
                    </div>

                    {/* Product Category Input */}
                    <div className="relative z-0 w-full group">
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            name="product_category"
                            id="product_category"
                            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="product_category"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 bg-gray-50 px-1"
                        >
                            Category (comma separated)
                        </label>
                    </div>

                    <div className="relative z-0 w-full group">
                        <input
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            type="text"
                            name="product_image"
                            id="product_image"
                            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="product_image"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2.5 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-600 bg-gray-50 px-1"
                        >
                            Image Url
                        </label>
                    </div>

                    <button
                        className={`w-full py-3 px-5 text-sm font-semibold rounded-lg shadow-md transition-colors duration-300 ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-4 focus:ring-blue-300'
                        }`}
                        type="submit"
                        disabled={loading}
                        aria-label="Add Product"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                {/* Feedback Message */}
                {message && (
                    <div className={`mt-4 text-center text-sm font-medium ${messageColor}`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}
