export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">CQTA's Background</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2020, CQTA Canada emerged from the growing need for a dedicated community focused on software quality engineering.
            Our founders, experienced QA professionals from across Canada, recognized the importance of collaboration and knowledge sharing
            in advancing the field of software testing.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To advance software quality engineering practices and support testing professionals in Canada by providing educational resources,
            networking opportunities, and advocacy for industry standards.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading voice for software quality assurance in Canada, fostering innovation and excellence in testing methodologies
            that ensure reliable, high-quality software products for users worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}