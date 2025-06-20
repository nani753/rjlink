import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Link, DollarSign, Eye, TrendingUp, Calendar, Copy, ExternalLink } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [links, setLinks] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalLinks: 0,
    totalClicks: 0,
    totalEarnings: 0,
    todayClicks: 0,
    monthlyEarnings: 0
  });

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = () => {
    const allLinks = JSON.parse(localStorage.getItem('rjlinks_links') || '[]');
    const userLinks = allLinks.filter((link: any) => link.userId === user?.id);
    
    // Generate some sample data for demonstration
    const enhancedLinks = userLinks.map((link: any) => ({
      ...link,
      clicks: Math.floor(Math.random() * 1000) + 10,
      earnings: (Math.floor(Math.random() * 1000) + 10) * 0.001,
      clicksToday: Math.floor(Math.random() * 50) + 1
    }));
    
    setLinks(enhancedLinks);
    
    const totalClicks = enhancedLinks.reduce((sum: number, link: any) => sum + link.clicks, 0);
    const totalEarnings = enhancedLinks.reduce((sum: number, link: any) => sum + link.earnings, 0);
    const todayClicks = enhancedLinks.reduce((sum: number, link: any) => sum + link.clicksToday, 0);
    
    setStats({
      totalLinks: enhancedLinks.length,
      totalClicks,
      totalEarnings,
      todayClicks,
      monthlyEarnings: totalEarnings * 0.8
    });
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  const chartData = [
    { name: 'Jan', clicks: 400, earnings: 24 },
    { name: 'Feb', clicks: 300, earnings: 18 },
    { name: 'Mar', clicks: 600, earnings: 36 },
    { name: 'Apr', clicks: 800, earnings: 48 },
    { name: 'May', clicks: 500, earnings: 30 },
    { name: 'Jun', clicks: 900, earnings: 54 },
  ];

  const pieData = [
    { name: 'Direct', value: 400, color: '#3B82F6' },
    { name: 'Social', value: 300, color: '#8B5CF6' },
    { name: 'Email', value: 200, color: '#10B981' },
    { name: 'Other', value: 100, color: '#F59E0B' },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user.name}! Here's your link performance.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Links</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalLinks}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Link className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalClicks.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-3xl font-bold text-gray-900">${stats.totalEarnings.toFixed(2)}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Clicks</p>
                <p className="text-3xl font-bold text-gray-900">{stats.todayClicks}</p>
              </div>
              <div className="p-3 bg-amber-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Click Analytics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Click Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clicks" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Earnings Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Links */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Links</h3>
          {links.length === 0 ? (
            <div className="text-center py-8">
              <Link className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No links created yet</p>
              <p className="text-sm text-gray-400">Create your first short link to start earning!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {links.slice(0, 5).map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        rjlinks.app/{link.shortCode}
                      </p>
                      <button
                        onClick={() => copyToClipboard(`https://rjlinks.app/${link.shortCode}`)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{link.originalUrl}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-gray-400 flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{link.clicks} clicks</span>
                      </span>
                      <span className="text-xs text-gray-400 flex items-center space-x-1">
                        <DollarSign className="h-3 w-3" />
                        <span>${link.earnings.toFixed(3)}</span>
                      </span>
                      <span className="text-xs text-gray-400 flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(link.createdAt).toLocaleDateString()}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={link.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};