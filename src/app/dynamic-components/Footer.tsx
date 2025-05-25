'use client';

import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Triggers when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`w-full bg-black py-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex h-full items-center justify-center gap-4">
        <a href="/" className="text-white hover:text-gray-300 text-sm">
          © 2025 Study-Genius
        </a>
        <div className="h-4 w-px bg-gray-500"></div>
        <a href="/credit-and-used-repo.html" className="text-white hover:text-gray-300 text-sm">
          Credits
        </a>
      </div>
    </footer>


  );
};

export default Footer;
