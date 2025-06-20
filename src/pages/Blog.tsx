import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, TrendingUp, Eye, Share2, BookOpen, Target, Zap } from 'lucide-react';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      slug: 'url-shortening-guide-2024',
      title: 'The Complete Guide to URL Shortening in 2024: Strategies, Tools, and Best Practices',
      excerpt: 'Master the art of URL shortening with our comprehensive guide. Learn advanced strategies, discover the best tools, and implement proven techniques that drive engagement and maximize your digital marketing ROI. From basic shortening to advanced analytics and monetization.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Marketing Strategy',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '12 min read',
      views: '15.2K',
      featured: true
    },
    {
      slug: 'monetize-short-links',
      title: 'How to Monetize Your Short Links: A Complete Revenue Generation Guide',
      excerpt: 'Transform your shortened URLs into a steady income stream with our detailed monetization guide. Explore affiliate marketing integration, ad revenue optimization, premium content gating, and advanced revenue sharing strategies that successful creators use to earn thousands monthly.',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'Monetization',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '15 min read',
      views: '12.8K',
      featured: true
    },
    {
      slug: 'link-analytics-tracking',
      title: 'Advanced Link Analytics: Beyond Basic Click Tracking for Data-Driven Marketing',
      excerpt: 'Unlock the full potential of link analytics with advanced tracking techniques. Learn how to measure conversion rates, analyze user behavior patterns, track geographic performance, implement UTM parameters effectively, and use data insights to optimize your marketing campaigns.',
      author: 'Emma Davis',
      date: '2024-01-10',
      category: 'Analytics',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read',
      views: '9.4K',
      featured: false
    },
    {
      slug: 'social-media-link-optimization',
      title: 'Social Media Link Optimization: Platform-Specific Strategies for Maximum Engagement',
      excerpt: 'Maximize your social media impact with platform-optimized short links. Discover specific strategies for Facebook, Twitter, Instagram, LinkedIn, TikTok, and YouTube. Learn about character limits, link preview optimization, and engagement-boosting techniques for each platform.',
      author: 'Alex Rivera',
      date: '2024-01-08',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      views: '11.7K',
      featured: false
    },
    {
      slug: 'email-marketing-short-links',
      title: 'Email Marketing with Short Links: Boost Open Rates and Track Performance Like a Pro',
      excerpt: 'Revolutionize your email marketing campaigns with strategic short link implementation. Learn how to improve deliverability, track click-through rates, implement A/B testing, create compelling call-to-action buttons, and segment your audience based on link engagement patterns.',
      author: 'Lisa Wong',
      date: '2024-01-03',
      category: 'Email Marketing',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min read',
      views: '7.3K',
      featured: false
    },
    {
      slug: 'conversion-optimization-strategies',
      title: 'Link Conversion Optimization: Turn More Clicks into Customers with These Proven Strategies',
      excerpt: 'Master the science of conversion optimization with advanced link strategies. Discover how to create compelling landing pages, implement smart redirect logic, use psychological triggers, optimize for mobile conversions, and track the entire customer journey from click to purchase.',
      author: 'David Park',
      date: '2024-01-01',
      category: 'Conversion',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '11 min read',
      views: '8.9K',
      featured: false
    },
    {
      slug: 'affiliate-marketing-success',
      title: 'Affiliate Marketing Success: How to Earn $10K+ Monthly with Strategic Link Placement',
      excerpt: 'Learn the insider secrets of successful affiliate marketers who earn five figures monthly. Discover the best affiliate programs, link placement strategies, audience targeting techniques, and conversion optimization tactics that top earners use to maximize their income.',
      author: 'Rachel Green',
      date: '2023-12-28',
      category: 'Affiliate Marketing',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '13 min read',
      views: '10.2K',
      featured: false
    },
    {
      slug: 'content-creator-monetization',
      title: 'Content Creator\'s Guide to Link Monetization: From Zero to $5K Monthly in 90 Days',
      excerpt: 'A step-by-step blueprint for content creators to monetize their audience through strategic link sharing. Learn how to build trust, choose profitable partnerships, create valuable content, and scale your earnings while maintaining authenticity and audience engagement.',
      author: 'James Miller',
      date: '2023-12-25',
      category: 'Content Creation',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '14 min read',
      views: '9.1K',
      featured: false
    }
  ];

  const categories = ['All', 'Marketing Strategy', 'Monetization', 'Analytics', 'Social Media', 'Email Marketing', 'Conversion', 'Affiliate Marketing', 'Content Creation'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const guides = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Marketing Strategy',
      description: 'Comprehensive guides on digital marketing, audience targeting, and campaign optimization.',
      count: '12 articles'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-500" />,
      title: 'Monetization',
      description: 'Learn how to turn your links into revenue streams with proven monetization strategies.',
      count: '8 articles'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      title: 'Analytics & Tracking',
      description: 'Master link analytics, conversion tracking, and data-driven decision making.',
      count: '15 articles'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Link Marketing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the digital marketing curve with expert insights, comprehensive guides, and proven strategies 
            for URL shortening, link analytics, monetization, and conversion optimization. Learn from industry leaders 
            and transform your link strategy into a powerful growth engine.
          </p>
        </div>

        {/* Guide Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">{guide.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <span className="text-sm text-blue-600 font-medium">{guide.count}</span>
            </div>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.readTime}</span>
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{post.views}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 group"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/80 text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(selectedCategory === 'All' ? regularPosts : filteredPosts.filter(post => !post.featured)).map((post, index) => (
            <article
              key={post.slug}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center text-sm text-gray-400">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Ahead of the Marketing Curve
            </h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Join over 25,000 marketers, content creators, and business owners who receive our weekly newsletter 
              packed with actionable insights, case studies, and the latest trends in link marketing and digital strategy.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h4 className="text-white font-semibold mb-3">What you'll get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-blue-100 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                  Weekly marketing insights & tips
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                  Exclusive case studies & data
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                  Early access to new features
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                  Industry trend analysis
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white/50 bg-white/90 text-gray-900 placeholder-gray-500"
              />
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                Subscribe Free
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe anytime. Join 25,000+ subscribers.
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Link Analytics', 'Social Media', 'Email Marketing', 'Conversion Optimization', 'Brand Building', 'Revenue Generation', 'Security', 'Mobile Marketing'].map((topic, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <span className="text-gray-700 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};