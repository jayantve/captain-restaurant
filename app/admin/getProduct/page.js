import React from 'react';
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default async function getProducts() {

    const querySnapshot = await getDocs(collection(db, "products"));

    // Use .map() to create an array of data objects, including the document ID
    const Data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return (
        <div className='mx-auto max-w-screen overflow-x-scroll '>
            <div className="relative overflow-x-auto">
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
                        {Data.map(item => (
                            <tr key={item.id} className="bg-white border-b border-gray-200">
                                <td className="px-6 py-4 min-w-[150px]">
                                    {item.id}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[20px]">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 min-w-xs">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4 min-w-[100px]">
                                    ₹{item.price}
                                </td>
                                <td className="px-6 py-4 min-w-[150px]">
                                    {item.category && item.category.join(', ')} 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}