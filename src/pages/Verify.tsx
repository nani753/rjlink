import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export const Verify: React.FC = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [isVerified, setIsVerified] = useState(false);
  const [originalUrl, setOriginalUrl] = useState('');

  useEffect(() => {
    // Find the original URL
    const links = JSON.parse(localStorage.getItem('linkly_links') || '[]');
    const link = links.find((l: any) => l.shortCode === shortCode);
    
    if (link) {
      setOriginalUrl(link.originalUrl);
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsVerified(true);
            // Redirect after verification
            setTimeout(() => {
              window.location.href = link.originalUrl;
            }, 2000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      // Link not found, redirect to home
      navigate('/');
    }
  }, [shortCode, navigate]);

  const handleSkip = () => {
    if (originalUrl) {
      window.location.href = originalUrl;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
            {isVerified ? (
              <CheckCircle className="h-8 w-8 text-white" />
            ) : (
              <Shield className="h-8 w-8 text-white" />
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isVerified ? 'Verification Complete!' : 'Link Verification'}
          </h2>
          
          <p className="text-gray-600 mb-8">
            {isVerified 
              ? 'Redirecting you to your destination...'
              : 'We\'re verifying this link for your safety. Please wait a moment.'
            }
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200">
          {!isVerified ? (
            <>
              {/* Countdown */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                  <span className="text-2xl font-bold text-blue-600">{countdown}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Verifying link security...</span>
                </div>
              </div>

              {/* Security Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Malware scan complete</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Phishing protection active</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SSL certificate verified</span>
                </div>
              </div>

              {/* Destination Preview */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium text-gray-700">Destination:</span>
                </div>
                <p className="text-sm text-gray-600 break-all">{originalUrl}</p>
              </div>

              {/* Skip Button */}
              <button
                onClick={handleSkip}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Skip Verification (Continue at your own risk)
              </button>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Link Verified Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  This link has been verified as safe. You will be redirected automatically.
                </p>
                
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-800">
                    <strong>Destination:</strong> {originalUrl}
                  </p>
                </div>

                <button
                  onClick={handleSkip}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Continue Now
                </button>
              </div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="text-center text-sm text-gray-500">
          <p>
            This verification step helps protect you from malicious links.
            <br />
            Powered by <span className="font-medium text-blue-600">Linkly Security</span>
          </p>
        </div>
      </div>
    </div>
  );
};