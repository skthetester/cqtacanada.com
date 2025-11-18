import { Poppins } from 'next/font/google';
import Carousel from '../components/Carousel';

const poppins = Poppins({ variable: '--font-poppins', subsets: ['latin'], weight: ['300','400','600','700'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Carousel />

      {/* Font demos */}
      <section className="py-16">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-center mb-8">Font combinations — samples</h2>

          <div className="grid gap-8">
            {/* 1: Inter (body) + Poppins (headings) */}
            <div className="p-6 rounded-lg border bg-white shadow-sm">
              <div className={`${poppins.variable} font-sans`}>
                <h3 className="text-2xl font-extrabold mb-2" style={{ fontFamily: 'Poppins, var(--font-inter)' }}>Inter (body) + Poppins (headings)</h3>
                <p className="text-base text-gray-700">This sample uses the site default body font (Inter) with Poppins applied to headings for a modern, polished look. The headline above is rendered using Poppins while the paragraph below falls back to Inter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 section-alt-1">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-white text-center max-w-4xl mx-auto">
            CQTA Canada is dedicated to fostering a vibrant community of software quality assurance professionals.
            We provide resources, networking opportunities, and advocacy to elevate the standards of software testing
            and quality engineering in Canada. Join us in building a future where quality is paramount in software development.
          </p>
        </div>
      </section>

      {/* Previous Events Section */}
      <section className="py-16 section-alt-2">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-center mb-12">Previous Events</h2>
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
