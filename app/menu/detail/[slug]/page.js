import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

// This component is an Async Server Component, which allows it to fetch data directly.
// The `params` prop contains the dynamic route segments, in this case, the `slug`.
export default async function MenuItemDetail({ params }) {
    // The slug from the URL is the ID we need to search for.
    const slugId = params.slug;

    // Async function to fetch a single product from Firestore using a query.
    // This is more efficient than fetching all documents and then filtering.
    const getProductBySlug = async (slug) => {
        try {
            // Create a query to find a product where the 'id' field matches the slug.
            const q = query(collection(db, "products"), where("id", "==", slug));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                // Return the data for the first (and only) matching document.
                const doc = querySnapshot.docs[0];
                return {
                    id: doc.id, // This is the Firestore document ID
                    ...doc.data(), // This includes the custom 'id' field from your document data
                };
            } else {
                // If no document is found, return null.
                return null;
            }
        } catch (error) {
            console.error("Error fetching document by slug:", error);
            return null;
        }
    };

    const item = await getProductBySlug(slugId);

    // If the item is not found, render the built-in Next.js notFound page.
    if (!item) {
        notFound();
    }

    // Since the original code had 'cat' but didn't use it,
    // I'm keeping the original variable name for consistency.
    const cat = item.categories;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href="/menu"
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium cursor-pointer"
                        >
                            <div className="w-4 h-4 flex items-center justify-center mr-2">
                                <i className="ri-arrow-left-line"></i>
                            </div>
                            Back to Menu
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="h-96 lg:h-[500px] bg-cover bg-center rounded-lg shadow-lg" style={{
                            backgroundImage: `url('${item.imageUrl}')`
                        }}></div>

                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {item.name}
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-4xl font-bold text-amber-600">
                                    ₹{item.price}
                                </span>
                            </div>
                            <span className="flex flex-wrap gap-2 mt-4">
                                {/* This is the corrected line with the conditional check */}
                                {item.tags && item.tags.length > 0 && item.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className='text-sm text-white font-semibold bg-amber-600 px-3 py-1 rounded-full'
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Dish</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-amber-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Try This Dish?
                    </h2>
                    <p className="text-xl text-amber-100 mb-8">
                        Make a reservation today and experience the authentic flavors of Italy
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Make a Reservation
                        </Link>
                        <Link
                            href="/menu"
                            className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
