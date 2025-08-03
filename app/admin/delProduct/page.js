'use client'
import React, { useState } from "react"
import deleteFirestoreDocument from '@/database/DeleteProduct'

export default function delProducts() {
    const [id, setId] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await deleteFirestoreDocument(id);
        } catch (error) {
            alert(`Some error occured ${error} `)
        }
    };

    return (
        <>
            <form className="max-w-md mx-auto p-1 my-10" onSubmit={handleSubmit} >
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                        name="product_id"
                        id="product_id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="product_id" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product ID</label>
                </div>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit" >Delete</button>
            </form>
        </>
    )
}