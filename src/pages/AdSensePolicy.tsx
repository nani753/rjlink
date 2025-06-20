import React from 'react';
import { Shield, DollarSign, Eye, AlertTriangle, CheckCircle, Globe, Users, TrendingUp } from 'lucide-react';

export const AdSensePolicy: React.FC = () => {
  const policies = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Content Quality Standards',
      description: 'We maintain high-quality, original content that provides value to our users.',
      details: [
        'Original, well-researched articles and guides',
        'Regular content updates and fresh material',
        'Professional writing and editing standards',
        'User-focused content that solves real problems'
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: 'User Experience Focus',
      description: 'Our platform prioritizes user experience with fast loading times and intuitive navigation.',
      details: [
        'Mobile-responsive design for all devices',
        'Fast page loading speeds (under 3 seconds)',
        'Clear navigation and site structure',
        'Accessible design following WCAG guidelines'
      ]
    },
    {
      icon: <Eye className="h-6 w-6 text-purple-500" />,
      title: 'Privacy & Transparency',
      description: 'We are committed to user privacy and transparent data practices.',
      details: [
        'Clear privacy policy and terms of service',
        'GDPR and CCPA compliance',
        'Transparent data collection practices',
        'User control over personal information'
      ]
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      title: 'Community Guidelines',
      description: 'We foster a safe, inclusive community environment for all users.',
      details: [
        'Zero tolerance for harmful or illegal content',
        'Active moderation and content review',
        'Community reporting mechanisms',
        'Regular policy updates and enforcement'
      ]
    }
  ];

  const adPlacements = [
    {
      location: 'Header Banner',
      description: 'Non-intrusive banner ads placed in the header area',
      specs: '728x90 or 320x50 for mobile'
    },
    {
      location: 'Sidebar',
      description: 'Relevant ads displayed in the sidebar of content pages',
      specs: '300x250 or 160x600'
    },
    {
      location: 'In-Content',
      description: 'Contextual ads placed within blog posts and articles',
      specs: '336x280 or responsive units'
    },
    {
      location: 'Footer',
      description: 'Additional ad space in the footer area',
      specs: '728x90 or 320x100 for mobile'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AdSense Compliance Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to maintaining Google AdSense compliance while providing exceptional user experience.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <strong>Last updated:</strong> January 15, 2024 • <strong>Policy Version:</strong> 2.1
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-green-900">AdSense Approved</h2>
          </div>
          <p className="text-green-800 mb-6">
            RJLinks has been approved for Google AdSense and maintains strict compliance with all AdSense policies 
            and guidelines. We are committed to providing a safe, high-quality advertising environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-800">Policy Compliance</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">A+</div>
              <div className="text-sm text-green-800">Content Quality Rating</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
              <div className="text-sm text-green-800">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Our Policies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our AdSense Compliance Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    {policy.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{policy.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{policy.description}</p>
                  <ul className="space-y-2">
                    {policy.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Content Guidelines */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Quality Guidelines</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Original Content Creation</h3>
                <p className="text-gray-700 mb-4">
                  All content on RJLinks is original, well-researched, and provides genuine value to our users. 
                  We maintain a team of professional writers and editors who ensure content quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Standards:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Minimum 1,500 words per article</li>
                      <li>• Professional editing and proofreading</li>
                      <li>• Fact-checking and source verification</li>
                      <li>• Regular content updates and revisions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Digital marketing strategies</li>
                      <li>• URL shortening best practices</li>
                      <li>• Analytics and data insights</li>
                      <li>• Business growth techniques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Content</h3>
                <p className="text-gray-700 mb-4">
                  We strictly prohibit content that violates AdSense policies or could harm our users:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Strictly Forbidden:</h4>
                    <ul className="space-y-1 text-sm text-red-800">
                      <li>• Adult or explicit content</li>
                      <li>• Violence or harmful activities</li>
                      <li>• Illegal drugs or substances</li>
                      <li>• Hate speech or discrimination</li>
                      <li>• Copyrighted material without permission</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Carefully Monitored:</h4>
                    <ul className="space-y-1 text-sm text-yellow-800">
                      <li>• User-generated content</li>
                      <li>• External link destinations</li>
                      <li>• Comment sections and forums</li>
                      <li>• Third-party integrations</li>
                      <li>• Affiliate marketing content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ad Placement Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advertisement Placement Strategy</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our ad placement strategy balances revenue optimization with user experience, ensuring ads are 
              relevant, non-intrusive, and clearly distinguishable from content.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adPlacements.map((placement, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{placement.location}</h3>
                  <p className="text-gray-700 mb-3">{placement.description}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-sm font-medium text-blue-900">Specifications: </span>
                    <span className="text-sm text-blue-800">{placement.specs}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Ad Quality Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    All ads clearly labeled as advertisements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    No misleading or deceptive advertising
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    Relevant to our audience and content
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    Mobile-optimized and responsive
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    Fast loading and non-intrusive
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    Regular performance monitoring
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Experience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">User Experience Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">
                  Fast loading times, optimized images, and efficient code ensure excellent performance.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-sm text-gray-600">
                  SSL encryption, secure hosting, and regular security audits protect user data.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-sm text-gray-600">
                  WCAG 2.1 compliant design ensures accessibility for users with disabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Monitoring and Compliance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Monitoring and Compliance</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Audits</h3>
                <p className="text-gray-700 mb-4">
                  We conduct regular audits to ensure continued compliance with AdSense policies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Monthly content quality reviews
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Weekly ad placement optimization
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Daily traffic and engagement monitoring
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Quarterly policy compliance checks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Annual third-party security audits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Continuous performance optimization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reporting and Transparency</h3>
                <p className="text-gray-700 mb-4">
                  We maintain transparency with our users and advertisers through regular reporting:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Monthly traffic and engagement reports</li>
                    <li>• Quarterly compliance and quality assessments</li>
                    <li>• Annual transparency reports on data usage</li>
                    <li>• Real-time incident reporting and resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AdSense Compliance Contact</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
              <p className="text-lg text-gray-700 mb-6">
                For questions about our AdSense compliance, advertising policies, or to report concerns:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Compliance Team</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> compliance@rjlinks.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Advertising Inquiries</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> ads@rjlinks.com</p>
                    <p><strong>Business Hours:</strong> Mon-Fri 9AM-6PM PST</p>
                    <p><strong>Partnership Opportunities:</strong> partnerships@rjlinks.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> This policy is regularly updated to reflect changes in AdSense guidelines 
                  and industry best practices. Last review: January 15, 2024
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};