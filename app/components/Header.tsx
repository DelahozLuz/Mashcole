'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Property Management', href: '#', hasDropdown: true },
    { name: 'For Rent', href: '#' },
    { name: 'Residents', href: '#' },
    { name: 'Owners', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-[64px] py-3 lg:py-0 flex items-center justify-between min-h-[80px] lg:min-h-[131px]">
        
        <Link href="/" className="relative w-[140px] lg:w-[220px] h-[50px] lg:h-[80px] flex-shrink-0">
          <Image 
            src="/Logo-Mashcole.svg" 
            alt="Mashcole Logo" 
            fill
            priority
            className="object-contain" 
          />
        </Link>

        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6 text-[#204186]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`lg:hidden fixed inset-0 top-[80px] bg-white z-40 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-start p-4 gap-4 overflow-y-auto h-full">
            <div className="flex flex-col gap-2 w-full">
              <Link 
                href="#" 
                className="bg-[#F5C142] text-[#204186] px-4 py-3 rounded-lg font-bold text-sm text-center"
              >
                PAY ONLINE
              </Link>
              <Link 
                href="#" 
                className="bg-[#F0F7FF] text-[#204186] px-4 py-3 rounded-lg font-bold text-sm text-center"
              >
                EMPLOYEES
              </Link>
              <Link 
                href="tel:8188888052" 
                className="bg-[#008BE7] text-white px-4 py-3 rounded-lg font-bold text-sm text-center"
              >
                (818) 888-8052
              </Link>
            </div>
            <nav className="flex flex-col gap-3 w-full mt-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`flex items-center gap-2 text-base font-bold transition-colors py-2 border-b border-gray-100
                    ${link.hasDropdown ? 'text-[#008BE7]' : 'text-[#4A5568]'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end justify-center h-full gap-[20px]">
          
          <div className="flex items-center gap-[12px]">
            <Link 
              href="#" 
              className="bg-[#F5C142] text-[#204186] px-[20px] py-[8px] rounded-[6px] font-bold text-[12px] tracking-wide hover:brightness-105 transition"
            >
              PAY ONLINE
            </Link>
            
            <Link 
              href="#" 
              className="bg-[#F0F7FF] text-[#204186] px-[20px] py-[8px] rounded-[6px] font-bold text-[12px] tracking-wide hover:bg-blue-100 transition"
            >
              EMPLOYEES
            </Link>
            
            <Link 
              href="tel:8188888052" 
              className="bg-[#008BE7] text-white px-[20px] py-[8px] rounded-[6px] font-bold text-[12px] tracking-wide shadow-sm hover:brightness-110 transition flex items-center gap-2"
            >
              <div className="relative w-4 h-4">
                <Image 
                  src="/Icons Phone.png" 
                  alt="Phone" 
                  fill
                  className="object-contain invert brightness-0"
                />
              </div>
              (818) 888-8052
            </Link>
          </div>

          <nav className="flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`flex items-center gap-1.5 text-[17px] font-bold transition-colors
                  ${link.hasDropdown ? 'text-[#008BE7]' : 'text-[#4A5568] hover:text-[#008BE7]'}`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
