// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  LinkIcon,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-black text-gray-300 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {/* Brand Section */}
        <div className="transition-transform hover:scale-105">
          <Link to="/" className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              RJLinks
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            Powerful URL shortener with insights & monetization. Trusted by 100K+ marketers.
          </p>
        </div>

        {/* Product Links */}
        <div className="transition-opacity hover:opacity-100 opacity-90">
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">URL Shortener</Link></li>
            <li><Link to="/blog" className="hover:text-white">Analytics</Link></li>
            <li><Link to="/about" className="hover:text-white">Custom Domains</Link></li>
            <li><Link to="/contact" className="hover:text-white">API Access</Link></li>
            <li><Link to="/blog" className="hover:text-white">Monetization</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="transition-opacity hover:opacity-100 opacity-90">
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/sitemap" className="hover:text-white">Site Map</Link></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">API Docs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="transition-transform hover:scale-105">
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/adsense-policy" className="hover:text-white">AdSense Policy</Link></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white">DMCA</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-3 md:mb-0 text-center md:text-left">
            © 2024 RJLinks. Built for speed, scale & style. 🚀
          </p>
          <div className="flex items-center gap-5 text-gray-400">
            <a href="#" className="hover:text-blue-500 transition"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-sky-400 transition"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-pink-500 transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-700 transition"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
