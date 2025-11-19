import Hero from '../../components/Hero';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services"
        overlay="black"
      />

      <section className="py-16">
        <div className="site-container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 18, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Canadian Quality and Testing Association (CQTA) website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 mb-4">
              CQTA provides:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Professional networking and community services for quality assurance professionals</li>
              <li>Educational events, workshops, and conferences</li>
              <li>Industry resources and best practices</li>
              <li>Partnership and sponsorship opportunities</li>
              <li>Newsletter and communication services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts and Registration</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Event Registration and Payments</h2>
            <p className="text-gray-700 mb-6">
              Event registrations are subject to availability. Payment terms, cancellation policies, and refund procedures will be specified for each event. Once registered, you will receive confirmation and further details via email.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Conduct</h2>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Use our services for any unlawful purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Distribute spam or unsolicited communications</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the services</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on the CQTA website, including text, graphics, logos, images, and software, is the property of CQTA or its content suppliers and is protected by Canadian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Third-Party Links and Services</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or services. We do not endorse or assume responsibility for any third-party content, products, or services. Your use of third-party services is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-6">
              CQTA services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, CQTA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold harmless CQTA, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your use of our services is also governed by our <a href="/privacy-policy" className="text-canada-red hover:underline">Privacy Policy</a>. Please review it to understand how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Modifications to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Canadian Quality and Testing Association</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Email: <a href="mailto:legal@cqtacanada.com" className="text-canada-red hover:underline">legal@cqtacanada.com</a>
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
