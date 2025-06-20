import React, { useState } from 'react';
import { Link2, Copy, BarChart3, Shield, Zap, TrendingUp, Users, Globe, Award, CheckCircle, Star, Clock, Eye } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Home: React.FC = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { user } = useAuth();

  const generateShortCode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const shortCode = generateShortCode();
    const newShortUrl = `https://rjlinks.app/${shortCode}`;
    
    // Save to local storage
    const links = JSON.parse(localStorage.getItem('rjlinks_links') || '[]');
    const newLink = {
      id: Date.now().toString(),
      originalUrl: url,
      shortCode,
      shortUrl: newShortUrl,
      clicks: 0,
      earnings: 0,
      createdAt: new Date().toISOString(),
      userId: user?.id || 'anonymous'
    };
    
    links.push(newLink);
    localStorage.setItem('rjlinks_links', JSON.stringify(links));
    
    setShortUrl(newShortUrl);
    setIsLoading(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const features = [
    {
      icon: <Link2 className="h-8 w-8 text-blue-500" />,
      title: 'Smart URL Shortening',
      description: 'Transform long URLs into clean, memorable links with our advanced algorithm that optimizes for both brevity and memorability.',
      details: 'Our intelligent system creates short codes that are easy to remember while maintaining uniqueness across millions of links.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: 'Advanced Analytics',
      description: 'Track clicks, locations, devices, referrers, and conversion rates with comprehensive real-time analytics dashboard.',
      details: 'Get detailed insights into your audience behavior, peak traffic times, geographic distribution, and device preferences.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: 'Revenue Monetization',
      description: 'Earn money from your shortened links with our industry-leading revenue sharing program and multiple monetization options.',
      details: 'Choose from display ads, affiliate integration, or premium content gates to maximize your earning potential.'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: 'Enterprise Security',
      description: 'Advanced security features protect your links from malicious activity with real-time threat detection and SSL encryption.',
      details: 'Our security system scans every link for malware, phishing attempts, and suspicious activity to protect your users.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Digital Marketing Manager',
      company: 'TechCorp',
      content: 'RJLinks has transformed our link management strategy. The analytics are incredibly detailed, and we\'ve increased our click-through rates by 40%.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'Content Creator',
      company: 'Independent',
      content: 'I\'ve earned over $2,000 this year just from my shortened links. The monetization features are game-changing for content creators.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Social Media Specialist',
      company: 'BrandFlow',
      content: 'The custom domains and branded links have significantly improved our brand recognition. Our clients love the professional appearance.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Social Media Marketing',
      description: 'Optimize your social media campaigns with trackable short links that provide detailed engagement metrics.',
      icon: <Users className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Email Campaigns',
      description: 'Improve email deliverability and track click-through rates with clean, professional short links.',
      icon: <Globe className="h-6 w-6 text-green-500" />
    },
    {
      title: 'Content Monetization',
      description: 'Turn your content sharing into a revenue stream with our advanced monetization features.',
      icon: <Award className="h-6 w-6 text-purple-500" />
    }
  ];

  const recentActivity = [
    { action: 'Link created', url: 'example.com/very-long-url', time: '2 minutes ago', clicks: 15 },
    { action: 'High traffic', url: 'marketing-guide.com', time: '5 minutes ago', clicks: 234 },
    { action: 'Revenue earned', url: 'affiliate-product.com', time: '10 minutes ago', clicks: 89 },
    { action: 'New user signup', url: 'welcome-page.com', time: '15 minutes ago', clicks: 45 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Long URLs Into
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Powerful Marketing Assets
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              RJLinks is the professional URL shortening platform trusted by over 100,000 marketers, 
              content creators, and businesses worldwide. Create trackable short links, gain deep audience 
              insights, and monetize your content with our comprehensive link management solution.
            </p>

            {/* URL Shortener Form */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste your long URL here to get started..."
                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:scale-100 shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Creating Link...</span>
                    </div>
                  ) : (
                    'Shorten & Track'
                  )}
                </button>
              </form>

              {/* Result */}
              {shortUrl && (
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-8 animate-fadeIn shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Professional Short Link is Ready!</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 p-4 bg-gray-50 rounded-lg border">
                      <p className="text-blue-600 font-medium break-all">{shortUrl}</p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                  {copySuccess && (
                    <p className="text-green-600 text-sm mt-2 animate-fadeIn flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Copied to clipboard! Start sharing your trackable link.
                    </p>
                  )}
                </div>
              )}
            </div>

            {!user && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <p className="text-gray-700 mb-4">
                  <span className="mr-2">🚀</span>
                  <strong>Unlock Premium Features:</strong> Sign up for free to access advanced analytics, 
                  custom domains, monetization tools, and detailed audience insights.
                </p>
                <a 
                  href="/signup" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Account
                  <Zap className="h-4 w-4 ml-2" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Activity Feed */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Activity Feed</h2>
            <p className="text-gray-600">See what's happening on RJLinks right now</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.url}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>{activity.clicks}</span>
                    </div>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why RJLinks is the Professional Choice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines powerful link management with advanced analytics 
              and monetization features to help you succeed in the digital marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-lg">{feature.description}</p>
                <p className="text-gray-500 text-sm">{feature.details}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Perfect for Every Use Case</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="mb-4">{useCase.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
                  <p className="text-blue-100">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Join thousands of successful marketers and content creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Links Shortened</div>
              <div className="text-sm text-gray-500 mt-1">Processed monthly</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">$250K+</div>
              <div className="text-gray-600 font-medium">User Earnings</div>
              <div className="text-sm text-gray-500 mt-1">Paid out this year</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
              <div className="text-sm text-gray-500 mt-1">Growing daily</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
              <div className="text-sm text-gray-500 mt-1">Guaranteed reliability</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How RJLinks Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Paste Your URL</h3>
              <p className="text-gray-600">
                Simply paste any long URL into our shortener. Our system instantly creates a clean, 
                professional short link that's perfect for sharing across all platforms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Share & Track</h3>
              <p className="text-gray-600">
                Share your short link anywhere and watch real-time analytics roll in. Track clicks, 
                locations, devices, and user behavior with our comprehensive dashboard.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Earn Revenue</h3>
              <p className="text-gray-600">
                Monetize your links with our revenue sharing program. Earn money from every click 
                while providing value to your audience through our safe, fast redirect system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted & Secure</h2>
            <p className="text-gray-600">Enterprise-grade security and compliance you can trust</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">SSL Encrypted</div>
              <div className="text-xs text-gray-500">256-bit encryption</div>
            </div>
            <div className="p-4">
              <CheckCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">GDPR Compliant</div>
              <div className="text-xs text-gray-500">Privacy protected</div>
            </div>
            <div className="p-4">
              <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">SOC 2 Certified</div>
              <div className="text-xs text-gray-500">Enterprise security</div>
            </div>
            <div className="p-4">
              <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">99.9% Uptime</div>
              <div className="text-xs text-gray-500">Always available</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Link Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 100,000 marketers, content creators, and businesses who are already 
            earning money and gaining valuable insights with RJLinks. Start your free account today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Free Account
            </a>
            <a
              href="/blog"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Learn Best Practices
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            No credit card required • Free forever plan available • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};