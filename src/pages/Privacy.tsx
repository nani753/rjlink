import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last updated:</strong> January 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Usage Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>URLs you shorten and their destinations</li>
                <li>Click data and analytics</li>
                <li>Device information and IP addresses</li>
                <li>Browser type and operating system</li>
                <li>Referrer URLs and user behavior patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Generate analytics and insights about link performance</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>With your explicit consent</li>
                <li>To service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and use personal information about you. 
                Our Cookie Policy provides detailed information about our use of cookies and how you can manage them.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Data Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services 
                and fulfill the purposes outlined in this privacy policy. We may also retain and use 
                your information to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are subject to appropriate safeguards, such as standard 
                contractual clauses or adequacy decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p>
                Our service may contain links to third-party websites or services. We are not responsible 
                for the privacy practices of these third parties. We encourage you to read their privacy 
                policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "Last updated" date. 
                Significant changes will be communicated via email or through our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> privacy@rjlinks.com</p>
                <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Data Protection Officer:</strong> dpo@rjlinks.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};