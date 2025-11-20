'use client';

import Hero from "../../components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import { generateSponsorshipBrochure, SponsorshipBrochureContent } from "../../../lib/pdf-generator";

export default function Sponsorship() {
  const handleDownloadBrochure = () => {
    const brochureContent: SponsorshipBrochureContent = {
      title: "CQTA Sponsorship Opportunities",
      subtitle: "Partner with CQTA to elevate your brand and contribute to the advancement of quality engineering across the nation.",
      intro: "Our sponsorship packages provide exceptional opportunities for brand exposure, industry leadership, and engagement with Canada's premier quality engineering community.",
      tiers: sponsorshipLevels,
      ctaTitle: "Join CQTA as a Sponsor",
      ctaText: "Showcase your commitment to quality engineering, connect directly with industry professionals, and gain exceptional recognition through a trusted national platform.",
      website: "cqtacanada.com",
      email: "contact@cqtacanada.com",
      contactLine: "Contact us today to discuss your sponsorship package!",
      contactLinks: [
        { label: "cqtacanada.com", url: "https://cqtacanada.com" },
        { label: "contact@cqtacanada.com", url: "mailto:contact@cqtacanada.com" }
      ]
    };
    const pdf = generateSponsorshipBrochure(brochureContent);
    pdf.save('cqta-sponsorship-opportunities.pdf');
  };

  const sponsorshipLevels = [
    {
      level: "Executive",
      price: "$7,000 CAD",
      highlight: true,
      features: [
        "All Gold, Silver & Bronze benefits",
        "Exclusive 30-minute speaker slot",
        "Opportunity to demo product(s)",
        "Sponsor CQTA Awards",
        "Highest tier branding & recognition"
      ],
      description: "Includes all benefits of Gold, Silver and Bronze sponsors with exclusive premium features"
    },
    {
      level: "Gold",
      price: "$5,000 CAD",
      highlight: false,
      popular: true,
      features: [
        "Participation as a panelist in discussions",
        "5 social media shoutouts (2 post-event)",
        "Recognition twice during the event",
        "Table booth at event venue",
        "6 complimentary event passes",
        "Post-event attendee contact list (opt-in)",
        "Branded swag in attendee kits"
      ],
      description: "Premium sponsorship with extensive brand exposure and engagement opportunities"
    },
    {
      level: "Silver",
      price: "$3,000 CAD",
      highlight: false,
      features: [
        "3 social media shoutouts (1 post-event)",
        "Recognition once during the event",
        "Table booth at event venue",
        "4 complimentary event passes",
        "Branded swag in attendee kits"
      ],
      description: "Ideal mid-tier sponsorship with excellent brand visibility"
    },
    {
      level: "Bronze",
      price: "$2,000 CAD",
      highlight: false,
      features: [
        "2 social media shoutouts (1 post-event)",
        "Recognition once during the event",
        "Sponsor logo displayed on event banner",
        "2 complimentary event passes",
        "Branded swag in attendee kits"
      ],
      description: "Entry-level sponsorship with solid brand exposure"
    },
    {
      level: "After Hours",
      price: "Contact CQTA",
      highlight: false,
      contactButton: true,
      features: [
        "Exclusive after-hours networking session sponsorship",
        "3 social media shoutouts (1 post-event)",
        "Recognition during after-hours session",
        "Table booth at the venue",
        "Post-event attendee contact list (opt-in)"
      ],
      description: "Exclusive sponsorship opportunity for the after-hours networking experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Hero 
          title="CQTA Sponsorship Opportunities" 
          subtitle="Partner with CQTA to elevate your brand and contribute to the advancement of quality engineering across the nation." 
          image="/hero-canada.jpg" 
          overlay="red"
          ctaText="Become a Sponsor"
          ctaLink="/contact"
        />
      </motion.div>
      
      <div className="py-16">
        <div className="site-container">
          {/* Introduction */}
          <motion.div
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Our sponsorship packages provide exceptional opportunities for brand exposure, industry leadership, 
              and engagement with Canada&apos;s premier quality engineering community.
            </p>
          </motion.div>

          {/* Sponsorship Cards - Top Row: Executive + Gold */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {sponsorshipLevels.slice(0, 2).map((tier, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105 ${
                    tier.highlight ? 'ring-4 ring-canada-red' : ''
                  } ${
                    tier.popular ? 'ring-4 ring-gray-700' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                >
                  {tier.highlight && (
                    <div className="bg-canada-red text-white text-center py-2 font-semibold text-sm">
                      PREMIUM TIER
                    </div>
                  )}
                  {tier.popular && (
                    <div className="bg-gray-700 text-white text-center py-2 font-semibold text-sm">
                      POPULAR CHOICE
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">{tier.level} Sponsor</h3>
                    <p className="text-3xl font-bold text-canada-red text-center mb-4">{tier.price}</p>
                    <p className="text-sm text-gray-600 text-center mb-6 italic min-h-12">{tier.description}</p>
                    <div className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-canada-red mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sponsorship Cards - Bottom Row: Silver, Bronze, After Hours */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {sponsorshipLevels.slice(2).map((tier, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.25 + index * 0.1, ease: 'easeOut' }}
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">{tier.level} Sponsor</h3>
                    {tier.contactButton ? (
                      <div className="flex justify-center mb-4">
                        <Link 
                          href="/contact" 
                          className="bg-canada-red !text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
                        >
                          Contact CQTA
                        </Link>
                      </div>
                    ) : (
                      <p className="text-3xl font-bold text-canada-red text-center mb-4">{tier.price}</p>
                    )}
                    <p className="text-sm text-gray-600 text-center mb-6 italic min-h-12">{tier.description}</p>
                    <div className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-canada-red mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="bg-gradient-to-r from-canada-red to-red-700 text-white rounded-lg shadow-xl p-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white" style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>Join CQTA as a Sponsor</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Showcase your commitment to quality engineering, connect directly with industry professionals, 
              and gain exceptional recognition through a trusted national platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-canada-red px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Become a Sponsor Today
              </Link>
              <button 
                onClick={handleDownloadBrochure}
                className="inline-block bg-gray-800 !text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors shadow-lg"
              >
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}