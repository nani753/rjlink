import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, DollarSign, Users, Globe } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const keyTerms = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'User Responsibilities',
      description: 'Guidelines for acceptable use and account management'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      title: 'Monetization Terms',
      description: 'Revenue sharing, payments, and earning requirements'
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: 'Content Policies',
      description: 'Prohibited content and security requirements'
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      title: 'Service Availability',
      description: 'Uptime guarantees and service level commitments'
    }
  ];

  const prohibitedContent = [
    'Malware, viruses, or malicious software',
    'Phishing, fraud, or deceptive practices',
    'Copyright or trademark infringement',
    'Adult content involving minors',
    'Hate speech, harassment, or discrimination',
    'Illegal drugs, weapons, or contraband',
    'Spam or unsolicited commercial content',
    'Content promoting violence or terrorism'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clear, fair terms that protect both you and our community while enabling you to earn from your links.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <strong>Last updated:</strong> January 15, 2024 • <strong>Effective:</strong> January 15, 2024
          </div>
        </div>

        {/* Key Terms Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyTerms.map((term, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">{term.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{term.title}</h3>
              <p className="text-sm text-gray-600">{term.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement Overview</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <p className="text-blue-800 font-medium">
                  <strong>Welcome to RJLinks!</strong> These Terms of Service ("Terms") govern your use of our 
                  URL shortening platform and related services. By using RJLinks, you agree to these terms.
                </p>
              </div>
              <p className="text-lg leading-relaxed">
                These Terms constitute a legally binding agreement between you and RJLinks. They cover important 
                topics including your rights and responsibilities, our monetization program, content policies, 
                and how disputes are resolved. Please read them carefully.
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg mb-6">
                RJLinks provides a comprehensive URL shortening platform that includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">URL shortening and custom aliases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Real-time analytics and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Custom domains and branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Team collaboration tools</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Monetization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Revenue sharing program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Affiliate marketing integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Premium content gating</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Performance-based bonuses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Responsibilities</h2>
              <p className="text-lg mb-6">
                As a RJLinks user, you agree to use our services responsibly and in compliance with all applicable laws:
              </p>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                      <span>Provide accurate and complete registration information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                      <span>Maintain the security and confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                      <span>Notify us immediately of any unauthorized account access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                      <span>Keep your contact information current and accurate</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Ensure all shortened URLs comply with applicable laws and regulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Respect intellectual property rights and obtain necessary permissions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Avoid creating misleading or deceptive short links</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                      <span>Report any suspicious or abusive content you encounter</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Use</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
                      <span>Use our services within reasonable limits and not for automated abuse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
                      <span>Respect our rate limits and API usage guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
                      <span>Not attempt to circumvent security measures or access restrictions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1" />
                      <span>Cooperate with our security and fraud prevention measures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prohibited Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Content and Activities</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Zero Tolerance Policy</h3>
                    <p className="text-red-800">
                      We have a zero-tolerance policy for content that violates our guidelines. 
                      Violations may result in immediate account suspension or termination.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg mb-6">The following types of content and activities are strictly prohibited:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedContent.map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Monetization Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-8 w-8 mr-3 text-green-600" />
                Monetization and Revenue Sharing
              </h2>
              <p className="text-lg mb-6">
                Our monetization program allows eligible users to earn revenue from their shortened links:
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Eligibility Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                        <span className="text-sm text-green-800">Account in good standing for 30+ days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                        <span className="text-sm text-green-800">Minimum 1,000 monthly clicks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                        <span className="text-sm text-green-800">Compliance with all content policies</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                        <span className="text-sm text-green-800">Valid tax information on file</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                        <span className="text-sm text-green-800">Verified payment method</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                        <span className="text-sm text-green-800">Geographic eligibility (see list)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Sharing Structure</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-semibold text-gray-900">Tier</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Monthly Clicks</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Revenue Share</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Bonus</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Starter</td>
                          <td className="py-2">1K - 10K</td>
                          <td className="py-2">60%</td>
                          <td className="py-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Growth</td>
                          <td className="py-2">10K - 100K</td>
                          <td className="py-2">70%</td>
                          <td className="py-2">$50 monthly</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">Pro</td>
                          <td className="py-2">100K - 1M</td>
                          <td className="py-2">80%</td>
                          <td className="py-2">$200 monthly</td>
                        </tr>
                        <tr>
                          <td className="py-2">Elite</td>
                          <td className="py-2">1M+</td>
                          <td className="py-2">85%</td>
                          <td className="py-2">$500 monthly</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Schedule</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Monthly payments on the 15th</li>
                        <li>• Minimum payout threshold: $50</li>
                        <li>• Net 30 payment terms</li>
                        <li>• Automatic tax document generation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Methods</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• PayPal (worldwide)</li>
                        <li>• Bank transfer (US, EU, UK)</li>
                        <li>• Wire transfer (enterprise)</li>
                        <li>• Cryptocurrency (select regions)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability and Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Service Level Agreement</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• 99.9% uptime guarantee</li>
                    <li>• Sub-100ms global response times</li>
                    <li>• 24/7 monitoring and alerting</li>
                    <li>• Automatic failover and redundancy</li>
                    <li>• Service credits for downtime</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Customer Support</h3>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li>• 24/7 email support</li>
                    <li>• Live chat during business hours</li>
                    <li>• Phone support for premium users</li>
                    <li>• Comprehensive documentation</li>
                    <li>• Community forums and tutorials</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Rights</h3>
                  <p className="text-gray-700 mb-4">
                    RJLinks and all related trademarks, service marks, logos, and intellectual property 
                    are owned by us or our licensors. You may not use our intellectual property without 
                    our express written permission.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                  <p className="text-gray-700 mb-4">
                    You retain ownership of any content you submit to our service. By using RJLinks, 
                    you grant us a limited license to process, store, and display your content as 
                    necessary to provide our services.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">DMCA Compliance</h3>
                  <p className="text-gray-700 mb-4">
                    We respect intellectual property rights and comply with the Digital Millennium 
                    Copyright Act (DMCA). If you believe your copyright has been infringed, please 
                    contact our DMCA agent at dmca@rjlinks.com.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers and Limitations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers and Limitations</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Service Disclaimer</h3>
                    <p className="text-yellow-800 text-sm">
                      Our services are provided "as is" without warranties of any kind. While we strive 
                      for excellence, we cannot guarantee uninterrupted service or complete accuracy of 
                      analytics data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                  <p className="text-gray-600 text-sm">
                    In no event shall RJLinks be liable for any indirect, incidental, special, or 
                    consequential damages, including lost profits, arising from your use of our services.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Content</h4>
                  <p className="text-gray-600 text-sm">
                    We are not responsible for the content of websites linked through our service. 
                    Users access third-party content at their own risk.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Force Majeure</h4>
                  <p className="text-gray-600 text-sm">
                    We are not liable for any failure to perform due to circumstances beyond our 
                    reasonable control, including natural disasters, government actions, or network failures.
                  </p>
                </div>
              </div>
            </section>

            {/* Account Termination */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Termination</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by You</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Delete your account anytime from settings</li>
                    <li>• 30-day grace period for data recovery</li>
                    <li>• Final payment processed within 60 days</li>
                    <li>• Export your data before deletion</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by Us</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Violation of terms or policies</li>
                    <li>• Fraudulent or abusive activity</li>
                    <li>• Extended period of inactivity</li>
                    <li>• Legal or regulatory requirements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Disputes</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                  <p className="text-gray-700 text-sm">
                    These Terms are governed by the laws of the State of California, United States, 
                    without regard to conflict of law principles. Any disputes will be resolved in 
                    the courts of San Francisco County, California.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We encourage resolving disputes through direct communication. For formal disputes:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• First, contact our support team</li>
                    <li>• Mediation through agreed mediator</li>
                    <li>• Binding arbitration if mediation fails</li>
                    <li>• Class action waiver applies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>
              <p className="mb-4">
                We may update these Terms from time to time to reflect changes in our services, 
                legal requirements, or business practices. We will provide notice of material changes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>30-day advance notice via email for significant changes</li>
                <li>Prominent notice on our website and in our app</li>
                <li>Opportunity to review changes before they take effect</li>
                <li>Right to terminate your account if you disagree with changes</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="mb-6">
                Questions about these Terms? We're here to help:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Legal Department</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> legal@rjlinks.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Response Time:</strong> Within 5 business days</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Mailing Address</h4>
                    <div className="space-y-1 text-sm">
                      <p>RJLinks Legal Department</p>
                      <p>123 Tech Street, Suite 400</p>
                      <p>San Francisco, CA 94105</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Notice:</strong> All legal notices must be sent in writing to the address above 
                    or via email to legal@rjlinks.com to be considered valid.
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