import React from 'react';
import { Users, Target, Award, Globe, Shield, Zap, TrendingUp, Heart, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in digital marketing and tech startups. Former VP of Marketing at TechFlow, led growth from $1M to $50M ARR.',
      expertise: 'Growth Strategy, Digital Marketing, Product Vision'
    },
    {
      name: 'Mike Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Senior Engineer at Google with 12+ years building scalable systems. Expert in distributed architecture and security.',
      expertise: 'System Architecture, Security, Performance Optimization'
    },
    {
      name: 'Emma Davis',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Product strategy expert with a passion for user experience. Previously led product teams at Spotify and Airbnb.',
      expertise: 'Product Strategy, UX Design, Data Analytics'
    },
    {
      name: 'Alex Rivera',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Growth marketing specialist with proven track record. Built marketing teams at 3 successful SaaS startups.',
      expertise: 'Growth Marketing, Content Strategy, Community Building'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Links Shortened Monthly', icon: Globe, description: 'Processing millions of URLs with 99.9% uptime' },
    { number: '100K+', label: 'Active Users Worldwide', icon: Users, description: 'Growing community across 150+ countries' },
    { number: '99.9%', label: 'Service Uptime', icon: Target, description: 'Enterprise-grade reliability and performance' },
    { number: '4.9/5', label: 'User Satisfaction', icon: Award, description: 'Based on 10,000+ customer reviews' }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'RJLinks was born from the vision to make link sharing more intelligent and profitable.'
    },
    {
      year: '2021',
      title: 'First Million Links',
      description: 'Reached our first major milestone with 1 million shortened links and 10,000 users.'
    },
    {
      year: '2022',
      title: 'Monetization Launch',
      description: 'Introduced revenue sharing program, helping users earn their first $100K collectively.'
    },
    {
      year: '2023',
      title: 'Enterprise Features',
      description: 'Launched custom domains, team collaboration, and advanced analytics for businesses.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Serving 100K+ users worldwide with $250K+ in user earnings and 10M+ monthly links.'
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Transparency & Trust',
      description: 'We believe in clear, honest communication about how our service works, how data is used, and how revenue is shared. No hidden fees, no surprise changes.',
      commitment: 'We publish quarterly transparency reports and maintain open communication channels with our community.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Innovation & Excellence',
      description: 'We continuously push the boundaries of what\'s possible with link management, incorporating cutting-edge technologies and user feedback into every update.',
      commitment: 'Our engineering team dedicates 20% of their time to experimental features and emerging technologies.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'User Success First',
      description: 'Your success is our success. We\'re committed to providing tools, insights, and support that help you achieve your goals, whether personal or professional.',
      commitment: 'We offer 24/7 support and maintain a 95% customer satisfaction rate with response times under 2 hours.'
    }
  ];

  const achievements = [
    'Featured in TechCrunch as "Top 10 Marketing Tools of 2024"',
    'Winner of the SaaS Innovation Award 2023',
    'Certified SOC 2 Type II compliant for enterprise security',
    'Recognized by G2 as a High Performer in URL Shortening',
    'Featured case studies in Harvard Business Review',
    'ISO 27001 certified for information security management'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}RJLinks
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how the world shares and monetizes links. Since 2020, 
            we've been empowering marketers, content creators, and businesses to turn every shared URL 
            into a powerful marketing asset that drives engagement, provides insights, and generates revenue.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                RJLinks was founded in 2020 when our team recognized a fundamental gap in the digital marketing landscape. 
                Traditional URL shorteners were solving only half the problem – they made links shorter, but they weren't 
                helping users understand their audience or monetize their content effectively.
              </p>
              
              <p>
                Our founders, Sarah Johnson and Mike Chen, came from backgrounds in digital marketing and software engineering 
                respectively. Sarah had spent over a decade helping companies grow their online presence, while Mike had 
                built scalable systems at Google that handled billions of requests. Together, they saw an opportunity to 
                create something revolutionary.
              </p>
              
              <p>
                The vision was ambitious: build a platform that wouldn't just shorten links, but would provide deep insights 
                into audience behavior, enable sophisticated monetization strategies, and help users build stronger connections 
                with their communities. They wanted to democratize access to enterprise-level link intelligence.
              </p>
              
              <p>
                What started as a simple idea in a San Francisco coffee shop has grown into a global platform serving over 
                100,000 users across 150+ countries. We've processed over 10 million links, helped our users earn more than 
                $250,000 in revenue sharing, and built a community of marketers, creators, and entrepreneurs who are 
                transforming how they engage with their audiences.
              </p>
              
              <p>
                Today, RJLinks is trusted by everyone from individual content creators to Fortune 500 companies. Our platform 
                has been featured in major publications, won industry awards, and most importantly, has helped thousands of 
                users achieve their business goals through smarter link management.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower every link with intelligence and profitability. We believe that every shared URL 
              should provide value back to the sharer, whether through actionable insights, meaningful engagement, 
              or sustainable revenue. Our mission is to democratize access to enterprise-level link intelligence 
              and monetization tools.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A world where content creators, marketers, and businesses can maximize the value of every interaction. 
              We envision a future where sharing a link isn't just about directing traffic, but about building 
              meaningful relationships, understanding audiences deeply, and creating sustainable income streams 
              that benefit everyone in the ecosystem.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">{value.description}</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-blue-800 font-medium">Our Commitment: {value.commitment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 font-medium">Expertise</p>
                  <p className="text-sm text-gray-700">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recognition & Achievements</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Built for Scale & Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-blue-100">
                  SOC 2 Type II compliant with end-to-end encryption, regular security audits, 
                  and enterprise-grade data protection.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-blue-100">
                  Global CDN with sub-100ms response times, 99.9% uptime SLA, 
                  and infrastructure that scales automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-blue-100">
                  Serving users in 150+ countries with localized experiences, 
                  multi-language support, and regional compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
            Join over 100,000 marketers, content creators, and businesses who are already transforming 
            their link strategy with RJLinks. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Free Account
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Our Team
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • Enterprise plans available • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};