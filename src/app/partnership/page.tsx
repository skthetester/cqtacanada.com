"use client";
import { motion } from 'framer-motion';
import Hero from "../../components/Hero";

export default function Partnership() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero title="Partnership Opportunities" subtitle="Partner with CQTA to reach Canada's software quality community." image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80" />
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Partnership Opportunities</h1>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Partner with CQTA?</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access to a network of over 500 software quality professionals across Canada</li>
              <li>Opportunities to showcase your products and services to industry leaders</li>
              <li>Collaborative events and workshops to drive innovation in testing</li>
              <li>Enhanced visibility in the Canadian software quality community</li>
              <li>Support for joint research and development initiatives</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Networking</h3>
                <p className="text-gray-600">Connect with industry experts and potential clients at our events.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Brand Exposure</h3>
                <p className="text-gray-600">Feature your logo and messaging across our platforms and events.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Thought Leadership</h3>
                <p className="text-gray-600">Present at our conferences and contribute to industry discussions.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Market Insights</h3>
                <p className="text-gray-600">Gain valuable insights into Canadian software quality trends.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}