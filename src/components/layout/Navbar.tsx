"use client";

import Link from 'next/link';
import { ShoppingBag, User, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl tracking-widest uppercase text-gradient">
              Drip Check
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300">Home</Link>
            <Link href="/shop" className="text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300">Collection</Link>
            <Link href="/about" className="text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300">Heritage</Link>
            <Link href="/contact" className="text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-gold transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/dashboard" className="hover:text-gold transition-colors duration-300">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="hover:text-gold transition-colors duration-300 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-gold text-background text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-foreground hover:text-gold transition-colors duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-2xl tracking-widest uppercase text-gradient">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-gold transition-colors duration-300"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="flex flex-col space-y-6 text-xl tracking-widest uppercase font-serif">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors duration-300">Home</Link>
                <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors duration-300">Collection</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors duration-300">Heritage</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold transition-colors duration-300">Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
