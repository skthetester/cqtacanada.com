import Hero from "../../components/Hero";

const TEAM = [
  {
    name: "Parasar Saha",
    title: "Founder and CEO, Digy4",
    image: "/about/parasar-saha.jpg",
  },
  {
    name: "Chandni Tibrewal",
    title: "Sr. Quality Engineering Manager | Moneris",
    image: "/about/chandni-tibrewal.jpg",
  },
  {
    name: "Juan Orlarte",
    title: "Founder and CEO, Digita11yAccessible",
    image: "/about/juan-orlarte.jpg",
  },
  {
    name: "Vicky Hicks",
    title: "Director, Global Quality Engineering (QE) Practice",
    image: "/about/vicky-hicks.jpg",
  },
  {
    name: "Ari Rowland",
    title: "Accenture QE Practice Head",
    image: "/about/ari-rowland.jpg",
  },
  {
    name: "Sanjeev Balodia",
    title: "QA & AI Evangelist – HCL",
    image: "/about/sanjeev-balodia.jpg",
  },
  {
    name: "Navya Vohra",
    title: "iOS App Developer Mentor at Apple and CEC",
    image: "/about/navya-vohra.jpg",
  },
  {
    name: "Sivakumar Ganesan",
    title: "Senior Manager, Quality Engineering",
    image: "/about/sivakumar-ganesan.jpg",
  },
  {
    name: "Pushpinder Malhotra",
    title: "Senior QA Automation Manager for Northbridge Insurance",
    image: "/about/pushpinder-malhotra.jpg",
  },
  {
    name: "Ayush Anand",
    title: "Quality Engineering and DevOps leader",
    image: "/about/ayush-anand.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Empowering Excellence, Elevating Quality: Canada's Hub for Testing Innovation"
        subtitle=""
        image="/about-hero.jpg"
        overlay="red"
        ctaText="Join the Community"
        ctaLink="https://ca.linkedin.com/company/canadian-quality-and-testing-association"
      />

      {/* What We Stand For */}
      <section className="py-16 bg-white">
        <div className="site-container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#23242a' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Vision */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-10 shadow-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 border-2 border-gray-200">
                {/* Bulb Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                  <path d="M16 22v2m-2 0h4" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 20c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6z" stroke="#cc0000" strokeWidth="2"/>
                  <circle cx="16" cy="16" r="1.5" fill="#cc0000" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#23242a' }}>Vision</h3>
              <p className="text-lg text-center text-gray-800">
                Create a dynamic ecosystem that inspires growth, empowers individuals, advances quality, cultivates excellence, and ignites Canadian productivity and innovation.
              </p>
            </div>
            {/* Mission */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-10 shadow-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 border-2 border-gray-200">
                {/* Target Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                  <circle cx="16" cy="16" r="10" stroke="#cc0000" strokeWidth="2" />
                  <circle cx="16" cy="16" r="4" stroke="#cc0000" strokeWidth="2" />
                  <path d="M16 6v2m0 16v2m10-10h-2M6 16H4" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#23242a' }}>Mission</h3>
              <p className="text-lg text-center text-gray-800">
                Create a place where individuals are empowered to learn, connect with industry peers, and contribute to the advancement of quality practices!
              </p>
            </div>
            {/* Goal */}
            <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-10 shadow-md">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 border-2 border-gray-200">
                {/* Diamond Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="40" height="40">
                  <path d="M6 16l10-10 10 10-10 16-10-16z" stroke="#cc0000" strokeWidth="2" fill="none" />
                  <path d="M12 16l4 6 4-6" stroke="#cc0000" strokeWidth="2" fill="none" />
                  <path d="M16 6v20" stroke="#cc0000" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#23242a' }}>Goal</h3>
              <p className="text-lg text-center text-gray-800">
                Build awareness of the latest trends, tools, and strategies in quality engineering, and elevate the success stories of Canadian Quality leaders to inspire innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Behind the Scene */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="site-container max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ color: '#fff' }}>Team Behind the Scene</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-white" />
                <div className="font-bold text-lg text-white">{member.name}</div>
                <div className="text-gray-300 text-sm mt-1">{member.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-24 bg-white">
        <div className="site-container max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#23242a' }}>Our Pillars</h2>
            <p className="text-lg text-gray-800 mb-12 max-w-3xl">
              CQTA’s pillars—Connect, Collaborate, Build—foster a thriving Quality Engineering community. By promoting mentorship, networking, and events, CQTA enhances professional growth and strengthens the Canadian IT sector.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connect */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="22" stroke="#cc0000" strokeWidth="2" fill="#fff" />
                  <path d="M16 24l4 4 8-8" stroke="#cc0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="8" stroke="#cc0000" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#23242a' }}>Connect</h3>
              <p className="text-gray-700">
                Creating opportunities for professionals to build relationships and share knowledge in the Quality Engineering community.
              </p>
            </div>
            {/* Collaborate */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="32" height="32" rx="8" stroke="#cc0000" strokeWidth="2" fill="#fff" />
                  <circle cx="16" cy="16" r="3" stroke="#cc0000" strokeWidth="2" />
                  <circle cx="32" cy="16" r="3" stroke="#cc0000" strokeWidth="2" />
                  <circle cx="16" cy="32" r="3" stroke="#cc0000" strokeWidth="2" />
                  <circle cx="32" cy="32" r="3" stroke="#cc0000" strokeWidth="2" />
                  <path d="M16 16L32 16M16 32L32 32M16 16L16 32M32 16L32 32" stroke="#cc0000" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#23242a' }}>Collaborate</h3>
              <p className="text-gray-700">
                We foster teamwork and collaboration, empowering professionals to share best practices and solve problems together.
              </p>
            </div>
            {/* Build */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="22" stroke="#cc0000" strokeWidth="2" fill="#fff" />
                  <path d="M24 14v10l6 6" stroke="#cc0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 34h12" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 34v-4" stroke="#cc0000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#23242a' }}>Build</h3>
              <p className="text-gray-700">
                We foster growth and innovation through continuous improvement initiatives and development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="site-container">
          <div className="bg-gradient-to-r from-canada-red to-red-700 text-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>Let's Start the Conversation</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to connect, collaborate, or build with us? Reach out and join the CQTA community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ca.linkedin.com/company/canadian-quality-and-testing-association"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-canada-red px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Join the Community
              </a>
              <a
                href="/contact"
                className="inline-block bg-gray-800 !text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}