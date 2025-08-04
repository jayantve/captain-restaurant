import React from 'react';
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

/**
 * A server-side component that fetches all product data from Firestore,
 * calculates key metrics, and renders a responsive dashboard of cards.
 */
export default async function Dashboard() {

    // Fetch all documents from the "products" collection on the server.
    const querySnapshot = await getDocs(collection(db, "products"));

    // Map the query snapshot documents to an array of product data objects.
    const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    // --- Data Processing and Metric Calculation ---

    // Extract prices, ensuring they are valid numbers.
    const prices = productsData.map(p => Number(p.price)).filter(price => !isNaN(price));

    const highestPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const totalPrices = prices.reduce((sum, price) => sum + price, 0);
    const averagePrice = prices.length > 0 ? (totalPrices / prices.length).toFixed(2) : 0;

    // A more robust way to count products by category, handling arrays.
    const countByCategory = (categoryName) => {
        return productsData.filter(p => p.category && p.category.includes(categoryName)).length;
    };

    // Define the metrics to display in a structured array.
    const metrics = [
        { title: 'Total Products', value: `${productsData.length} Products`, color: 'blue' },
        { title: 'Highest Price', value: `₹ ${highestPrice}`, color: 'green' },
        { title: 'Lowest Price', value: `₹ ${lowestPrice}`, color: 'red' },
        { title: 'Average Price', value: `₹ ${averagePrice}`, color: 'yellow' },
        { title: 'Main Course', value: `${countByCategory('Main Course')} Products`, color: 'purple' },
        { title: 'Vegetarian', value: `${countByCategory('Veg')} Products`, color: 'teal' },
        { title: 'Indian', value: `${countByCategory('Indian')} Products`, color: 'orange' },
        { title: 'Non-Vegetarian', value: `${countByCategory('Non-Veg')} Products`, color: 'indigo' },
    ];

    // Tailwind CSS color map for dynamic styling.
    const colorMap = {
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        red: 'bg-red-500',
        yellow: 'bg-yellow-500',
        purple: 'bg-purple-500',
        teal: 'bg-teal-500',
        orange: 'bg-orange-500',
        indigo: 'bg-indigo-500',
    };

    return (
        <div className='min-h-screen p-4 sm:p-8 md:p-12 bg-gray-100'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10'>Product Dashboard</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {metrics.map((metric, index) => (
                    <div 
                        key={index} 
                        className={`p-6 rounded-2xl shadow-lg text-white text-center transition-transform transform hover:scale-105 ${colorMap[metric.color]}`}
                    >
                        <h2 className='text-lg font-semibold mb-2'>{metric.title}</h2>
                        <p className='text-4xl font-extrabold'>{metric.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
