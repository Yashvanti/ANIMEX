import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  onNavClick?: (href: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Team', href: '#team' },
  ];

  const handleLinkClick = (href: string) => {
    if (onNavClick) onNavClick(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-16',
        isScrolled ? 'bg-black/40 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleLinkClick('#')}>
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-black text-2xl">A</span>
          </div>
          <span className="text-white font-black text-2xl tracking-tighter hidden sm:block">ANIMEX</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 bg-white/[0.03] backdrop-blur-2xl px-10 py-3 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-[13px] font-bold text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <a 
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="hidden sm:block px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-black rounded-full hover:scale-105 active:scale-95 transition-all duration-300 text-[12px] uppercase tracking-widest shadow-xl shadow-indigo-500/30 text-center"
          >
            Let's Talk
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="w-full px-6 py-3 bg-white text-dark font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm mt-2 text-center"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
