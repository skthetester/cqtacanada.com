export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to CQTA Canada
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Advancing software quality engineering and supporting testing professionals across Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Join Newsletter
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            CQTA Canada is dedicated to fostering a vibrant community of software quality assurance professionals.
            We provide resources, networking opportunities, and advocacy to elevate the standards of software testing
            and quality engineering in Canada. Join us in building a future where quality is paramount in software development.
          </p>
        </div>
      </section>

      {/* Previous Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Previous Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">CQTA Annual Conference 2024</h3>
              <p className="text-gray-600 mb-2">Date: October 15, 2024</p>
              <p className="text-gray-600 mb-2">Location: Toronto, ON</p>
              <p className="text-gray-700">A comprehensive event featuring keynote speakers, workshops, and networking sessions focused on the latest trends in software quality engineering.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Agile Testing Workshop</h3>
              <p className="text-gray-600 mb-2">Date: August 20, 2024</p>
              <p className="text-gray-600 mb-2">Location: Vancouver, BC</p>
              <p className="text-gray-700">Hands-on workshop exploring agile testing methodologies and best practices for modern development teams.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI in Testing Seminar</h3>
              <p className="text-gray-600 mb-2">Date: June 10, 2024</p>
              <p className="text-gray-600 mb-2">Location: Montreal, QC</p>
              <p className="text-gray-700">Discussion on the role of artificial intelligence and machine learning in automated testing and quality assurance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
