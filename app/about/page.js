'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=cozy%20restaurant%20kitchen%20with%20chefs%20cooking%2C%20warm%20lighting%2C%20professional%20kitchen%20equipment%2C%20traditional%20Italian%20cooking%20atmosphere%2C%20bustling%20restaurant%20kitchen%20scene%2C%20culinary%20team%20preparing%20food&width=1920&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              A passion for authentic Italian cuisine passed down through generations
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Nonna&apos;s Kitchen to Your Table
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {process.env.NEXT_PUBLIC_NAME} began as a dream in 1952 when Giuseppe and Maria Rossini emigrated 
                from the hills of Tuscany to New York. With nothing but their grandmother&apos;s 
                recipes and an unwavering passion for authentic Italian cuisine, they opened 
                a small trattoria in Little Italy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Three generations later, their legacy continues under the guidance of their 
                grandson, Chef Marco Rossini. Every dish we serve honors the traditional 
                techniques and flavors that Giuseppe and Maria brought from the old country, 
                while embracing modern culinary innovations.
              </p>
              <p className="text-lg text-gray-600">
                Today, {process.env.NEXT_PUBLIC_NAME} stands as a testament to the enduring power of family 
                tradition, quality ingredients, and the belief that food is love made visible.
              </p>
            </div>
            <div className="h-96 bg-cover bg-center rounded-lg" style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=vintage%20Italian%20family%20restaurant%20old%20photograph%2C%20black%20and%20white%20historical%20photo%2C%20traditional%20Italian%20family%20in%20restaurant%20setting%2C%20nostalgic%20restaurant%20history%2C%20authentic%20Italian%20heritage%2C%20family%20legacy&width=600&height=400&seq=family-history&orientation=landscape')`
            }}></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great food is more than just sustenance - it&apos;s a celebration 
              of culture, tradition, and the connections we make around the table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fresh & Local</h3>
              <p className="text-gray-600">
                We partner with local farmers and suppliers to source the freshest ingredients, 
                supporting our community while ensuring the highest quality in every dish.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Time-Honored Tradition</h3>
              <p className="text-gray-600">
                Every recipe is rooted in generations of Italian culinary tradition, 
                prepared with the same care and attention as our ancestors did.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-group-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Family First</h3>
              <p className="text-gray-600">
                We treat every guest as part of our extended family, creating a warm, 
                welcoming atmosphere where memories are made and bonds are strengthened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people who make {process.env.NEXT_PUBLIC_NAME} a special place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20chef%20portrait%2C%20middle-aged%20Italian%20man%20in%20chef%20uniform%2C%20warm%20smile%2C%20experienced%20head%20chef%2C%20professional%20headshot%2C%20restaurant%20kitchen%20background%2C%20confident%20chef%20posture&width=300&height=300&seq=chef-marco&orientation=squarish')`
              }}></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Chef Marco Rossini</h3>
              <p className="text-amber-600 font-medium mb-4">Head Chef & Owner</p>
              <p className="text-gray-600">
                Third-generation chef carrying on the family tradition with passion and innovation. 
                Trained in Milan and brings 20 years of culinary expertise to every dish.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20sous%20chef%20portrait%2C%20young%20Italian%20woman%20in%20chef%20uniform%2C%20confident%20expression%2C%20skilled%20sous%20chef%2C%20professional%20headshot%2C%20restaurant%20kitchen%20background%2C%20culinary%20professional&width=300&height=300&seq=chef-sofia&orientation=squarish')`
              }}></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Chef Sofia Benedetti</h3>
              <p className="text-amber-600 font-medium mb-4">Sous Chef</p>
              <p className="text-gray-600">
                Specializes in traditional pasta making and regional Italian cuisine. 
                Her creativity and attention to detail ensure every plate is a masterpiece.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20restaurant%20manager%20portrait%2C%20elegant%20woman%20in%20business%20attire%2C%20welcoming%20smile%2C%20experienced%20restaurant%20manager%2C%20professional%20headshot%2C%20restaurant%20dining%20room%20background%2C%20hospitality%20professional&width=300&height=300&seq=manager-lucia&orientation=squarish')`
              }}></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lucia Moretti</h3>
              <p className="text-amber-600 font-medium mb-4">Restaurant Manager</p>
              <p className="text-gray-600">
                Ensures every guest receives exceptional service and has a memorable dining experience. 
                Her warm hospitality embodies the spirit of Italian welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re honored to be recognized for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Italian Restaurant</h3>
              <p className="text-gray-600">New York Dining Awards 2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Michelin Recommended</h3>
              <p className="text-gray-600">Michelin Guide 2022-2024</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer&apos;s Choice</h3>
              <p className="text-gray-600">OpenTable Diners&apos; Choice 2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-plant-line text-3xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Dining</h3>
              <p className="text-gray-600">Green Restaurant Certification 2023</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}