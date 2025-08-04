import React from 'react';
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

/**
 * A server-side component that fetches all products from Firestore
 * and renders them in a responsive table.
 *
 * This component is an `async` function, which allows it to directly
 * make asynchronous calls like fetching data from a database.
 */
export default async function ProductsPage() {

    // Fetch all documents from the "products" collection.
    const querySnapshot = await getDocs(collection(db, "products"));

    // Map the query snapshot documents to a clean array of data objects.
    // Each object includes the document's auto-generated ID and its data.
    const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return (
        <div className='p-4 md:p-8 lg:p-12 min-h-screen bg-white '>
            <h1 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6">Product List</h1>
            <div className="relative overflow-x-scroll max-w-screen shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Id</th>
                            <th scope="col" className="px-6 py-3">Product Title</th>
                            <th scope="col" className="px-6 py-3">Product Description</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Product Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsData.map(item => (
                            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[150px]">
                                    {item.id}
                                </td>
                                <td className="px-6 py-4 min-w-[200px]">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 min-w-[300px]">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4 min-w-[100px]">
                                    ₹{item.price}
                                </td>
                                <td className="px-6 py-4 min-w-[150px]">
                                    {/* Conditionally join the categories array if it exists */}
                                    {Array.isArray(item.category) && item.category.join(', ')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
