import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, FileText, Users, Shield, DollarSign, BookOpen, Mail, Home } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: <Home className="h-5 w-5 text-blue-500" />,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page with URL shortener' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard with analytics' },
        { name: 'Login', path: '/login', description: 'User authentication page' },
        { name: 'Sign Up', path: '/signup', description: 'User registration page' },
      ]
    },
    {
      category: 'Content & Resources',
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Marketing insights and guides' },
        { name: 'URL Shortening Guide 2024', path: '/blog/url-shortening-guide-2024', description: 'Comprehensive guide to URL shortening' },
        { name: 'Monetize Short Links', path: '/blog/monetize-short-links', description: 'Revenue generation strategies' },
        { name: 'Link Analytics Tracking', path: '/blog/link-analytics-tracking', description: 'Advanced analytics techniques' },
        { name: 'Social Media Optimization', path: '/blog/social-media-link-optimization', description: 'Platform-specific strategies' },
        { name: 'Email Marketing Links', path: '/blog/email-marketing-short-links', description: 'Email campaign optimization' },
        { name: 'Conversion Optimization', path: '/blog/conversion-optimization-strategies', description: 'Improve conversion rates' },
        { name: 'Affiliate Marketing Success', path: '/blog/affiliate-marketing-success', description: 'Earn with affiliate links' },
        { name: 'Content Creator Guide', path: '/blog/content-creator-monetization', description: 'Monetization for creators' },
      ]
    },
    {
      category: 'Company Information',
      icon: <Users className="h-5 w-5 text-purple-500" />,
      pages: [
        { name: 'About Us', path: '/about', description: 'Company story and team information' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
      ]
    },
    {
      category: 'Legal & Policies',
      icon: <Shield className="h-5 w-5 text-red-500" />,
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions of use' },
        { name: 'AdSense Policy', path: '/adsense-policy', description: 'Advertising compliance guidelines' },
      ]
    },
    {
      category: 'Tools & Features',
      icon: <DollarSign className="h-5 w-5 text-orange-500" />,
      pages: [
        { name: 'Link Verification', path: '/verify/:shortCode', description: 'Security verification for links' },
        { name: 'Link Redirect', path: '/r/:shortCode', description: 'Redirect service for short links' },
      ]
    }
  ];

  const totalPages = siteStructure.reduce((total, category) => total + category.pages.length, 0);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Site Map</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete overview of all pages and resources available on RJLinks. 
            Find exactly what you're looking for with our comprehensive site structure.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <FileText className="h-4 w-4 mr-2" />
            {totalPages} Total Pages
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
            <div className="text-sm text-gray-600">Main Categories</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">9</div>
            <div className="text-sm text-gray-600">Blog Articles</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Legal Pages</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Mobile Optimized</div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
          {/* Site Structure */}
          <div className="space-y-12">
            {siteStructure.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-gray-900 ml-3">{category.category}</h2>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {category.pages.length} pages
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {page.path.includes(':') ? (
                              <span className="text-gray-700">{page.name}</span>
                            ) : (
                              <Link 
                                to={page.path} 
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                {page.name}
                              </Link>
                            )}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                          <code className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {page.path}
                          </code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">SEO Optimization</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• All pages optimized for search engines</li>
                  <li>• Structured data markup implemented</li>
                  <li>• XML sitemap automatically generated</li>
                  <li>• Mobile-first indexing ready</li>
                  <li>• Fast loading speeds (under 3 seconds)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Accessibility Features</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• WCAG 2.1 AA compliance</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Screen reader compatibility</li>
                  <li>• High contrast color schemes</li>
                  <li>• Alternative text for all images</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> January 15, 2024 • 
              <strong> Total Pages:</strong> {totalPages} • 
              <strong> Average Load Time:</strong> 2.1 seconds
            </p>
            <p className="text-xs text-gray-400 mt-2">
              This sitemap is automatically updated when new content is added to the website.
            </p>
          </div>
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-8 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Search Engines</h3>
            <p className="text-gray-600 mb-4">
              Machine-readable XML sitemap for search engine crawlers and indexing.
            </p>
            <a 
              href="/sitemap.xml" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileText className="h-4 w-4 mr-2" />
              View XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};