import { Poppins } from 'next/font/google';
import Carousel from '../components/Carousel';

const poppins = Poppins({ variable: '--font-poppins', subsets: ['latin'], weight: ['300','400','600','700'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Carousel
        slides={[{
          image: '/hero-canada.jpg',
          title: 'Empowering Quality Engineering in Canada',
          subtitle: 'Join the fastest-growing community of QE professionals shaping the future of testing.',
          overlay: 'red',
          ctaText: 'Join the community',
          ctaLink: 'https://www.linkedin.com/company/cqtacanada/',
        }]}
      />

      {/* Main Content Sections */}
      <section className="py-16">
          {/* About Us Section */}
          <section className="py-16 bg-gray-50">
            <div className="site-container max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">About us</h2>
              <p className="text-lg text-gray-800 text-center">
                The Canadian Quality and Testing Association (CQTA) is a non-profit organization which runs a national-level community forum dedicated to Quality Engineering (QE) in Canada. QE professionals represent around 30% of the IT workforce in the country. Our mission is to foster collaboration among diverse professionals in this field through events, mentorship programs, networking opportunities, and more. With over 1000+ members, including QE leaders from various parts of Canada, we are one of the fastest-growing social media groups in the QE space in Canada. Our goal is to make Canada the global hub for testing!
              </p>
              <div className="flex justify-center mt-8">
                <a
                  href="/about"
                  className="carousel-btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-900">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-300 rounded-xl p-8 flex flex-row items-center bg-transparent">
            <div className="mr-6 flex items-center justify-center w-20 h-20">
              {/* Group Icon (Members) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" width="192" height="192">
                <g stroke="#cc0000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="48" cy="40" r="12"/>
                  <path d="M24 80v-8c0-8.837 14.327-16 32-16s32 7.163 32 16v8"/>
                  <circle cx="24" cy="56" r="8"/>
                  <circle cx="72" cy="56" r="8"/>
                  <path d="M16 80v-4c0-4.418 7.163-8 16-8m48 12v-4c0-4.418-7.163-8-16-8"/>
                </g>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-white">1000+ Members and Growing</div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-xl p-8 flex flex-row items-center bg-transparent">
            <div className="mr-6 flex items-center justify-center w-20 h-20">
              {/* Circuit/Chip Icon (Bolder) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" width="192" height="192">
                <g stroke="#cc0000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="24" y="40" width="48" height="32" rx="8"/>
                  <path d="M48 40V24m0 48v-8m-16-8H16m64 0H64m-8-8V16m8 8V16m-8 64v-8m8 8v-8"/>
                </g>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-white">30% of IT Workforce in QE</div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-xl p-8 flex flex-row items-center bg-transparent">
            <div className="mr-6 flex items-center justify-center w-20 h-20">
              {/* Calendar/Star Icon for Events & Resources */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" width="192" height="192">
                <g stroke="#cc0000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <rect x="20" y="28" width="56" height="44" rx="8"/>
                  <path d="M32 28V20m32 8V20"/>
                  <rect x="20" y="40" width="56" height="32" rx="8"/>
                  <path d="M48 54l4.24 8.48 9.36 1.36-6.8 6.64 1.6 9.36L48 74.24l-8.4 4.6 1.6-9.36-6.8-6.64 9.36-1.36L48 54z" fill="#cc0000" stroke="#cc0000"/>
                </g>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-white">Industry-leading Events & Resources</div>
            </div>
          </div>
          </div>
        </div>
      </section>
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
