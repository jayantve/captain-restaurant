'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://ik.imagekit.io/edvqduwc5k/captain-resturant/image-5')`        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Welcome to {process.env.NEXT_PUBLIC_NAME}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Experience authentic Indian cuisine crafted with passion and served with love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                View Our Menu
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Make Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose {process.env.NEXT_PUBLIC_NAME}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on delivering an exceptional dining experience with fresh ingredients, 
              traditional recipes, and impeccable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-restaurant-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source the finest ingredients daily from local suppliers to ensure every dish 
                is made with the freshest produce and highest quality meats.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chef-hat-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Chefs</h3>
              <p className="text-gray-600">
                Our skilled chefs bring decades of experience in Italian cuisine, combining 
                traditional techniques with modern culinary innovations.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Warm Atmosphere</h3>
              <p className="text-gray-600">
                Enjoy your meal in our cozy, welcoming environment designed to make every 
                guest feel like family in our Italian home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most beloved creations that keep guests coming back for more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=delicious%20homemade%20pasta%20carbonara%20with%20crispy%20pancetta%2C%20creamy%20sauce%2C%20fresh%20parmesan%20cheese%2C%20elegant%20white%20plate%20presentation%2C%20professional%20food%20photography%2C%20warm%20restaurant%20lighting%2C%20Italian%20cuisine&width=400&height=300&seq=carbonara-dish&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pasta Carbonara</h3>
                <p className="text-gray-600 mb-4">
                  Traditional Roman pasta with crispy pancetta, farm-fresh eggs, 
                  and aged Pecorino Romano cheese.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$18</span>
                  <Link 
                    href="/menu/pasta-carbonara"
                    className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=wood-fired%20margherita%20pizza%20with%20fresh%20mozzarella%2C%20basil%20leaves%2C%20tomato%20sauce%2C%20crispy%20crust%2C%20authentic%20Italian%20pizza%20presentation%2C%20professional%20food%20photography%2C%20warm%20restaurant%20lighting&width=400&height=300&seq=margherita-pizza&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Margherita Pizza</h3>
                <p className="text-gray-600 mb-4">
                  Classic Neapolitan pizza with San Marzano tomatoes, 
                  fresh mozzarella, and aromatic basil leaves.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">₹ 16</span>
                  <Link 
                    href="/menu/margherita-pizza"
                    className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=classic%20tiramisu%20dessert%20with%20mascarpone%20cheese%2C%20ladyfinger%20cookies%2C%20espresso%2C%20cocoa%20powder%20dusting%2C%20elegant%20dessert%20presentation%2C%20professional%20food%20photography%2C%20warm%20restaurant%20lighting%2C%20Italian%20dessert&width=400&height=300&seq=tiramisu-dessert&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tiramisu</h3>
                <p className="text-gray-600 mb-4">
                  The perfect end to your meal - layers of espresso-soaked 
                  ladyfingers and rich mascarpone cream.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$9</span>
                  <Link 
                    href="/menu/tiramisu"
                    className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Dine With Us?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join us for an unforgettable culinary experience. Reserve your table today 
            and taste the difference of authentic Italian cuisine.
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
              Browse Menu
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}