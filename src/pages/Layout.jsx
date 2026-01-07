
import React from 'react';
import PremiumNav from '@/components/navigation/PremiumNav';
import PremiumFooter from '@/components/footer/PremiumFooter';
import ScrollToTop from '@/components/ScrollToTop';

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0A]">
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #0A0A0A;
            color: #F8F8F8;
          }
          
          ::selection {
            background-color: rgba(255, 255, 255, 0.2);
            color: #F8F8F8;
          }
          
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #0A0A0A;
          }
          
          ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
      
      <PremiumNav />
      
      <main>
        {children}
      </main>
      
      <PremiumFooter />
      </div>
    </>
  );
}
