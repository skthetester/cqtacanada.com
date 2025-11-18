import Hero from '../../components/Hero';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us"
        overlay="white"
      />

      <section className="py-16">
        <div className="site-container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 18, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              The Canadian Quality and Testing Association (CQTA) collects information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Professional information (company, job title, industry)</li>
              <li>Account credentials when you register for events or services</li>
              <li>Payment information for event registrations and memberships</li>
              <li>Communication preferences and newsletter subscriptions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services and events</li>
              <li>Process registrations and payments</li>
              <li>Send you newsletters, updates, and promotional materials</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Service providers who assist in our operations (payment processors, email services)</li>
              <li>Event partners and sponsors (with your consent)</li>
              <li>Professional advisors and legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand user preferences. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Canadian Quality and Testing Association</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Email: <a href="mailto:privacy@cqtacanada.com" className="text-canada-red hover:underline">privacy@cqtacanada.com</a>
              </p>
              <p className="text-gray-700">
                Or visit our <a href="/contact" className="text-canada-red hover:underline">Contact page</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
