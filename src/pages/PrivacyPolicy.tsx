import React from 'react';
import { Shield, Lock, Eye, Database, Globe, Users, AlertTriangle, CheckCircle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const dataTypes = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'Personal Information',
      items: ['Name and email address', 'Account credentials', 'Payment information', 'Communication preferences']
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: 'Usage Data',
      items: ['URLs shortened and destinations', 'Click analytics and metrics', 'Device and browser information', 'Geographic location data']
    },
    {
      icon: <Database className="h-6 w-6 text-purple-500" />,
      title: 'Technical Data',
      items: ['IP addresses and session data', 'Cookies and tracking pixels', 'API usage and performance metrics', 'Security logs and fraud detection']
    }
  ];

  const rights = [
    { title: 'Access', description: 'Request copies of your personal data and understand how we use it' },
    { title: 'Rectification', description: 'Correct any inaccurate or incomplete personal information' },
    { title: 'Erasure', description: 'Request deletion of your personal data under certain circumstances' },
    { title: 'Portability', description: 'Receive your data in a structured format for transfer to another service' },
    { title: 'Objection', description: 'Object to our processing of your personal data for specific purposes' },
    { title: 'Restriction', description: 'Request limitation of how we process your personal data' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is fundamental to our mission. Learn how we collect, use, and protect your information.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <strong>Last updated:</strong> January 15, 2024 • <strong>Effective:</strong> January 15, 2024
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Eye className="h-6 w-6 mr-2 text-blue-600" />
            Privacy at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What We Collect</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Account information you provide</li>
                <li>• Link usage and analytics data</li>
                <li>• Device and browser information</li>
                <li>• Payment data (securely processed)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How We Use It</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Provide and improve our services</li>
                <li>• Generate analytics and insights</li>
                <li>• Process payments and earnings</li>
                <li>• Ensure security and prevent fraud</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Your Privacy</h2>
              <p className="text-lg leading-relaxed mb-6">
                At RJLinks, we believe privacy is a fundamental right. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our URL shortening and analytics platform. 
                We are committed to transparency and giving you control over your personal data.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  <strong>Key Principle:</strong> We only collect data that's necessary to provide our services 
                  and improve your experience. We never sell your personal information to third parties.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <p className="text-lg mb-8">
                We collect information in several ways to provide you with the best possible service experience:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {dataTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      {type.icon}
                      <h3 className="text-lg font-semibold text-gray-900 ml-2">{type.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Automatic Data Collection</h4>
                    <p className="text-yellow-800 text-sm">
                      Some information is collected automatically when you use our service, including IP addresses, 
                      browser types, and usage patterns. This helps us improve performance and security.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Create and manage shortened URLs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Provide detailed analytics and insights</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Process payments and revenue sharing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>Maintain account security and authentication</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Improvement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <span>Analyze usage patterns to improve features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <span>Detect and prevent fraud and abuse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <span>Provide customer support and assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                      <span>Send important service updates and notifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">We Never Sell Your Data</h3>
                <p className="text-red-800">
                  RJLinks does not sell, rent, or trade your personal information to third parties for marketing purposes. 
                  Your data is yours, and we respect that.
                </p>
              </div>
              
              <p className="mb-6">We may share your information only in these limited circumstances:</p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-gray-600 text-sm">
                    We work with trusted third-party service providers who help us operate our platform, 
                    such as payment processors, cloud hosting providers, and analytics services. These 
                    providers are contractually bound to protect your information.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                  <p className="text-gray-600 text-sm">
                    We may disclose information when required by law, such as in response to a court order, 
                    subpoena, or other legal process, or to protect our rights and the safety of our users.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
                  <p className="text-gray-600 text-sm">
                    In the event of a merger, acquisition, or sale of assets, your information may be 
                    transferred as part of that transaction, subject to the same privacy protections.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              <p className="text-lg mb-6">
                You have significant control over your personal information. Here are your rights:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">{right.title}</h4>
                    <p className="text-blue-800 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">How to Exercise Your Rights</h4>
                <p className="text-gray-700 text-sm mb-3">
                  To exercise any of these rights, contact us at privacy@rjlinks.com. We'll respond within 30 days 
                  and may need to verify your identity to protect your information.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">GDPR Compliant</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">CCPA Compliant</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">SOC 2 Certified</span>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="h-8 w-8 mr-3 text-blue-600" />
                Data Security and Protection
              </h2>
              <p className="text-lg mb-6">
                We implement industry-leading security measures to protect your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Encryption</h4>
                      <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest using AES-256 encryption</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Access Controls</h4>
                      <p className="text-gray-600 text-sm">Strict access controls and multi-factor authentication for all systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                      <p className="text-gray-600 text-sm">Independent security audits and penetration testing</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitoring</h4>
                      <p className="text-gray-600 text-sm">24/7 security monitoring and incident response</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Minimization</h4>
                      <p className="text-gray-600 text-sm">We only collect and retain data that's necessary for our services</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Secure Infrastructure</h4>
                      <p className="text-gray-600 text-sm">Enterprise-grade cloud infrastructure with redundancy and backups</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-lg mb-6">
                We use cookies and similar technologies to enhance your experience and provide our services:
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    Required for the website to function properly, including authentication and security features.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Functional Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    Enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                </div>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are subject to appropriate safeguards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions for countries with equivalent privacy protections</li>
                <li>Binding Corporate Rules for transfers within our corporate group</li>
                <li>Your explicit consent where required by law</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only as long as necessary to provide our services 
                and fulfill the purposes outlined in this privacy policy:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Account Data</h4>
                    <p className="text-gray-600 text-sm">Retained while your account is active and for 90 days after deletion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics Data</h4>
                    <p className="text-gray-600 text-sm">Aggregated analytics retained for up to 7 years for business insights</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Records</h4>
                    <p className="text-gray-600 text-sm">Payment and tax records retained as required by law (typically 7 years)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security Logs</h4>
                    <p className="text-gray-600 text-sm">Security and fraud prevention logs retained for up to 2 years</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 mb-4">
                  <strong>Age Restriction:</strong> Our services are not intended for individuals under the age of 13. 
                  We do not knowingly collect personal information from children under 13.
                </p>
                <p className="text-red-700 text-sm">
                  If we become aware that we have collected personal information from a child under 13, 
                  we will take immediate steps to delete such information. Parents who believe their 
                  child has provided information to us should contact us immediately.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material changes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications for significant changes</li>
                <li>30-day advance notice for material changes affecting your rights</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, 
                we're here to help:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">General Privacy Inquiries</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> privacy@rjlinks.com</p>
                      <p><strong>Response Time:</strong> Within 48 hours</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> dpo@rjlinks.com</p>
                      <p><strong>Address:</strong> 123 Tech Street<br />San Francisco, CA 94105</p>
                      <p><strong>EU Representative:</strong> Available upon request</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Contact:</strong> For urgent privacy or security concerns, 
                    call our 24/7 security hotline at +1 (555) 999-0000
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};