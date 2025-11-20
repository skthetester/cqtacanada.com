"use client";
// EventCard for rendering event details in the carousel
function EventCard({ event }: { event: typeof events[0] }) {
  const placeholder = "/placeholder-event.jpg";
  return (
    <div className="flex flex-row items-center gap-4 bg-neutral-900 rounded-xl p-3 w-full max-w-2xl shadow-lg min-h-0">
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        <img
          src={event.image || placeholder}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={e => { (e.target as HTMLImageElement).src = placeholder; }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 text-white">
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-white text-red-600 rounded-lg px-2 py-1 text-center font-bold text-sm min-w-12">
            <div className="text-xs">{event.dateShortMonth}</div>
            <div className="text-lg leading-none">{event.dateDay}</div>
          </div>
          <h3 className="text-base md:text-xl font-semibold leading-tight break-words whitespace-normal" style={{ wordBreak: 'break-word', maxWidth: '60vw' }}>{event.title}</h3>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a6 6 0 11-7.5 0m7.5 0A6 6 0 006.75 12v.75a3.75 3.75 0 003.75 3.75h3a3.75 3.75 0 003.75-3.75V12a6 6 0 00-7.5-5.25" />
          </svg>
          <span>{event.location}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium">Time:</span> {event.time}
        </div>
      </div>
    </div>
  );
}
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

import Carousel from '../components/Carousel';

// Dummy events array (to be managed/updated from admin UI later)
const events = [
  {
    title: 'Revolutionizing Software Quality: AI, Shift Left & DevOps Acceleration',
    date: '2025-06-04',
    dateShortMonth: 'JUN',
    dateDay: '04',
    location: 'OneEleven, 325 Front St W, Toronto, Ontario, Canada',
    time: '12:00 pm - 5:00 pm',
    image: '/events/2025-june-toronto.jpg',
  },
  {
    title: 'CQTA Annual Conference 2024',
    date: '2024-10-15',
    dateShortMonth: 'OCT',
    dateDay: '15',
    location: 'Toronto, ON',
    time: '9:00 am - 6:00 pm',
    image: '/events/2024-oct-toronto.jpg',
  },
  {
    title: 'Agile Testing Workshop',
    date: '2024-08-20',
    dateShortMonth: 'AUG',
    dateDay: '20',
    location: 'Vancouver, BC',
    time: '10:00 am - 3:00 pm',
    image: '/events/2024-aug-vancouver.jpg',
  },
  {
    title: 'AI in Testing Seminar',
    date: '2024-06-10',
    dateShortMonth: 'JUN',
    dateDay: '10',
    location: 'Montreal, QC',
    time: '1:00 pm - 5:00 pm',
    image: '/events/2024-jun-montreal.jpg',
  },
  {
    title: 'Automation Testing Bootcamp',
    date: '2025-03-20',
    dateShortMonth: 'MAR',
    dateDay: '20',
    location: 'Online',
    time: '10:00 am - 4:00 pm',
    image: '/events/2025-mar-online.jpg',
  },
  {
    title: 'CQTA Winter Summit 2025',
    date: '2025-02-15',
    dateShortMonth: 'FEB',
    dateDay: '15',
    location: 'Calgary, AB',
    time: '9:00 am - 5:00 pm',
    image: '/events/2025-feb-calgary.jpg',
  },
];

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
          ctaLink: 'https://ca.linkedin.com/company/canadian-quality-and-testing-association',
        }]}
      />

      {/* Main Content Sections */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* About Us Section */}
        <div className="py-16 bg-gray-50">
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
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        className="py-16 bg-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      >
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
      </motion.section>

      {/* Previous Events Section */}
      <motion.section
        className="py-16 section-alt-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="site-container">
          <h2 className="text-3xl font-bold text-center mb-12">Past Events</h2>
          <div className="w-full flex justify-center items-center min-h-0">
            <Carousel
              slides={
                [...events]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 6)
                  .map((event) => ({
                    image: event.image,
                    title: event.title,
                    subtitle: `${event.location} | ${event.time} | ${new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`,
                    overlay: 'black',
                  }))
              }
              autoPlay={false}
              showJoinButton={false}
            />
            {/* Removed overlay EventCard to prevent sticky black section */}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
