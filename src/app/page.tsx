"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80"
            alt="Luxury Watch Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif uppercase tracking-widest mb-6"
          >
            Time Defines <span className="text-gradient">Style.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light"
          >
            Discover our exclusive collection of premium timepieces. Crafted for those who demand excellence and unparalleled elegance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/shop" className="px-8 py-4 bg-gold hover:bg-gold-light text-background font-bold tracking-wider uppercase text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
              Shop Now
            </Link>
            <Link href="/about" className="px-8 py-4 border border-gold text-gold hover:bg-gold/10 font-bold tracking-wider uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
              Explore Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif tracking-widest uppercase mb-4">Featured Collection</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-surface border border-border group overflow-hidden cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={`https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80`}
                  alt="Watch"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 border border-gold text-gold uppercase tracking-widest text-xs font-bold glass-panel">
                    Quick View
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif tracking-widest uppercase mb-2">Gold Horizon</h3>
                <p className="text-gold font-medium mb-4">$4,999</p>
                <button className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors duration-300 border-b border-gray-600 hover:border-gold pb-1">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-surface py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif tracking-widest uppercase mb-6">The Drip Check Heritage</h2>
            <p className="text-gray-400 mb-6 font-light leading-relaxed">
              Founded on the principles of precision and absolute luxury, Drip Check has redefined what it means to wear a timepiece. Every watch in our collection is a testament to uncompromising quality and visionary design.
            </p>
            <Link href="/about" className="inline-flex items-center text-gold hover:text-gold-light tracking-widest uppercase text-sm font-bold group">
              Read Our Story 
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full">
            <Image 
              src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80"
              alt="Watchmaking"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
