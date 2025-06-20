import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last updated:</strong> January 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using RJLinks ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p>
                RJLinks is a URL shortening service that allows users to create shortened versions of long URLs. 
                The service includes analytics tracking, monetization features, and other related tools to help 
                users manage their links effectively.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p>Users are responsible for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Ensuring all URLs submitted comply with applicable laws and regulations</li>
                <li>Not using the service to shorten URLs that contain malicious, illegal, or harmful content</li>
                <li>Not attempting to circumvent or manipulate the service's security measures</li>
                <li>Maintaining the confidentiality of their account credentials</li>
                <li>Reporting any suspected abuse or violations of these terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Content</h2>
              <p>The following types of content are strictly prohibited:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Malware, viruses, or any malicious software</li>
                <li>Content that infringes on intellectual property rights</li>
                <li>Spam, phishing, or fraudulent content</li>
                <li>Adult content involving minors</li>
                <li>Content promoting violence, hate speech, or discrimination</li>
                <li>Illegal drugs, weapons, or other contraband</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy and Data Collection</h2>
              <p>
                We collect and process data as described in our Privacy Policy. By using our service, 
                you consent to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Monetization and Revenue Sharing</h2>
              <p>
                RJLinks offers monetization features that allow users to earn revenue from their shortened links. 
                Revenue sharing is subject to our separate monetization agreement and payment terms. 
                Users must comply with all applicable tax obligations related to earned revenue.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Account Termination</h2>
              <p>
                We reserve the right to terminate or suspend accounts that violate these terms of service. 
                Users may also delete their accounts at any time. Upon termination, all associated data 
                and shortened links may be permanently deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                The service is provided "as is" without warranty of any kind. We do not guarantee 
                uninterrupted service, accuracy of analytics data, or availability of shortened links. 
                Users use the service at their own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>
                In no event shall RJLinks be liable for any indirect, incidental, special, or consequential 
                damages arising out of the use or inability to use the service, even if we have been 
                advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of 
                significant changes via email or through the service interface. Continued use of 
                the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of 
                the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> legal@rjlinks.com</p>
                <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};