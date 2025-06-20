import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Terms } from './pages/Terms';
import { TermsOfService } from './pages/TermsOfService';
import { Privacy } from './pages/Privacy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Verify } from './pages/Verify';
import { Redirect } from './pages/Redirect';
import { AdSensePolicy } from './pages/AdSensePolicy';
import { Sitemap } from './pages/Sitemap';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen relative overflow-hidden">
          <AnimatedBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/adsense-policy" element={<AdSensePolicy />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/verify/:shortCode" element={<Verify />} />
                <Route path="/r/:shortCode" element={<Redirect />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;