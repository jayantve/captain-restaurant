'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPlus,} from "react-icons/fa";
import { MdDashboard , MdDelete , MdDashboardCustomize   } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {UserButton } from '@clerk/nextjs'

export default function AdminNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/admin" className="text-2xl flex gap-2 font-bold text-amber-600 cursor-pointer" style={{ fontFamily: 'var(--font-pacifico)' }}>
                       <UserButton />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/admin" className="flex text-orange-500 hover:text-orange-700 transition-colors cursor-pointer">
                            <MdDashboard className='text-md mx-1' /> Dashboard
                        </Link>
                        <Link href="/admin/addProduct" className="flex text-orange-500 hover:text-orange-700 transition-colors cursor-pointer">
                            <FaPlus className='text-xl mx-1' /> Add / Update Product
                        </Link>
                        <Link href="/admin/delProduct" className="flex text-orange-500 hover:text-orange-700 transition-colors cursor-pointer">
                            <MdDelete  className='text-md mx-1' /> Remove Product
                        </Link>
                        <Link href="/admin/getProduct" className="flex text-orange-500 hover:text-orange-700 transition-colors cursor-pointer">
                            <MdDashboardCustomize  className='text-md mx-1' /> View Product
                        </Link>

                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <div className="w-6 h-6 flex items-center justify-center">
                            {isMenuOpen ? (
                                <IoMdCloseCircle className=" text-xl text-gray-700" />
                            ) : (
                                <GiHamburgerMenu className="ri-menu-line text-xl text-gray-700" />
                            )}
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/admin"
                                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/addProduct"
                                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Add / Update Product
                            </Link>
                            <Link
                                href="/admin/delProduct"
                                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Remove Product
                            </Link>
                            <Link
                                href="/admin/getProduct"
                                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                View Product
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}