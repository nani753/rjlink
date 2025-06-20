import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Redirect: React.FC = () => {
  const { shortCode } = useParams();

  useEffect(() => {
    // Find the link and redirect
    const links = JSON.parse(localStorage.getItem('linkly_links') || '[]');
    const link = links.find((l: any) => l.shortCode === shortCode);
    
    if (link) {
      // Update click count
      const updatedLinks = links.map((l: any) => 
        l.shortCode === shortCode 
          ? { ...l, clicks: (l.clicks || 0) + 1 }
          : l
      );
      localStorage.setItem('linkly_links', JSON.stringify(updatedLinks));
      
      // Redirect to verification page first
      window.location.href = `/verify/${shortCode}`;
    } else {
      // Link not found, redirect to home
      window.location.href = '/';
    }
  }, [shortCode]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};