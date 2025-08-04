'use client'

import React, { useState } from "react";
// Assuming deleteFirestoreDocument is correctly implemented and imported
import deleteFirestoreDocument from '@/database/DeleteProduct';

/**
 * A responsive form component for deleting a product from Firestore.
 * It features a loading state, user-friendly feedback messages,
 * and a mobile-first design using Tailwind CSS.
 */
export default function DelProducts() {
    // State to hold the product ID from the input field
    const [id, setId] = useState('');
    // State to manage a loading indicator on the button
    const [loading, setLoading] = useState(false);
    // State to display feedback messages (success or error) to the user
    const [message, setMessage] = useState(null);
    // State to determine the message color (e.g., 'text-red-500' for error)
    const [messageColor, setMessageColor] = useState('');

    /**
     * Handles form submission to delete the product.
     * @param {Event} e The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null); // Clear previous messages

        try {
            // Attempt to delete the document using the provided ID
            await deleteFirestoreDocument(id);
            setMessage(`Product with ID "${id}" successfully deleted.`);
            setMessageColor('text-green-600');
            setId(''); // Clear the input field on success
        } catch (error) {
            setMessage(`Error: Could not delete product. ${error.message}`);
            setMessageColor('text-red-600');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Delete a Product</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
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

                    <button
                        className={`w-full py-3 px-5 text-sm font-semibold rounded-lg shadow-md transition-colors duration-300 ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700 text-white focus:ring-4 focus:ring-red-300'
                        }`}
                        type="submit"
                        disabled={loading}
                        aria-label="Delete Product"
                    >
                        {loading ? 'Deleting...' : 'Delete'}
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
