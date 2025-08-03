import React from 'react'
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = async () => {

    const querySnapshot = await getDocs(collection(db, "products"));

    // Use .map() to create an array of data objects, including the document ID
    const Data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    // Calculate product price metrics
    const prices = Data.map(p => Number(p.price)).filter(price => !isNaN(price));
    const highestPrice = prices.length > 0 ? Math.max(...prices) : 0;
    const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const totalPrices = prices.reduce((sum, price) => sum + price, 0);
    const averagePrice = prices.length > 0 ? (totalPrices / prices.length).toFixed(2) : 0;

    // Calculate product counts by category
    const mainCourseCount = Data.filter(p => p.category === 'Main Course').length;
    function CategoryLengthCount({category}) {
        return Data.filter(p => p.category === category).length;
    }
    const vegCount = Data.filter(p => p.category === 'Veg').length;
    const indianCount = Data.filter(p => p.category === 'Indian').length;
    const nonVegCount = Data.filter(p => p.category === 'Non-Veg').length;

    return (
        <div className='md:p-10 p-1'>
            <div className='flex flex-wrap gap-5 justify-center'>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Total Product</h1>
                    <p className='text-md font-sans font-semibold p-2'>{Data.length} Products</p>
                </div>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Highest Price</h1>
                    <p className='text-md font-sans font-semibold p-2'>₹ {highestPrice}</p>
                </div>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Lowest Price</h1>
                    <p className='text-md font-sans font-semibold p-2'>₹ {lowestPrice}</p>
                </div>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Average Price</h1>
                    <p className='text-md font-sans font-semibold p-2'>₹ {averagePrice}</p>
                </div>
                {/* New category count cards */}
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Main Course</h1>
                    <p className='text-md font-sans font-semibold p-2'>{CategoryLengthCount('Main Course')} Products</p>
                </div>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Vegetarian</h1>
                    <p className='text-md font-sans font-semibold p-2'>{CategoryLengthCount('Veg')} Products</p>
                </div>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Indian</h1>
                    <p className='text-md font-sans font-semibold p-2'>{CategoryLengthCount('Indian')} Products</p>
                </div>
                <div className='md:p-5 p-2 md:m-5 m-1 md:shadow-2xl shadow-lg inline-block rounded-2xl text-center'>
                    <h1 className='text-xl font-serif font-extrabold p-2'>Non-Vegetarian</h1>
                    <p className='text-md font-sans font-semibold p-2'>{CategoryLengthCount('Non-Veg')} Products</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard