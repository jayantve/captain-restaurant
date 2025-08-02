"use client";

import writeProductData from "@/database/AddProduct";
import React, { useState } from "react";

export default function Home() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoriesArray = category
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');

    writeProductData( id, name, desc, price, categoriesArray // Renamed to categories to reflect the change
    );
  };

  return (
    <> 
    <div className="my-10 px-1 ">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
          {/* Added onChange handler for the ID input */}
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

        <div className="relative z-0 w-full mb-5 group">
          {/* Added onChange handler for the name input */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="product_name"
            id="product_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="product_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          {/* Added onChange handler for the description input */}
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            name="product_desc"
            id="product_desc"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="product_desc" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          {/* Added onChange handler for the price input */}
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="product_price"
            id="product_price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="product_price" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          {/* The input's value is now a string representation of the categories, and the
              onChange handler processes the comma-separated string into an array on submit. */}
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="product_category"
            id="product_category"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
          />
          <label htmlFor="product_category" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
    </>
  );
}
