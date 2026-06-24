"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Filter, Search } from 'lucide-react';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products?category=${category}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-serif tracking-widest uppercase mb-2">The Collection</h1>
          <div className="w-16 h-1 bg-gold"></div>
        </div>

        <div className="mt-6 md:mt-0 flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-surface border border-border pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
            />
          </div>
          <button className="flex items-center gap-2 border border-border px-4 py-2 hover:border-gold transition-colors text-sm uppercase tracking-wider">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-8 border-b border-border mb-10 overflow-x-auto pb-4">
        {['all', 'Luxury Watches', 'Classic Watches', 'Sports Watches'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setCategory(cat)}
            className={`whitespace-nowrap uppercase tracking-widest text-xs font-bold pb-2 border-b-2 transition-colors ${category === cat ? 'border-gold text-gold' : 'border-transparent text-gray-500 hover:text-foreground'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.length > 0 ? products.map((product, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={product._id}
              className="group cursor-pointer"
            >
              <Link href={`/shop/${product.slug}`}>
                <div className="relative h-[400px] mb-6 bg-surface overflow-hidden border border-border">
                  <Image 
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif tracking-widest uppercase mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-1">{product.description}</p>
                  <p className="text-gold font-medium">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            </motion.div>
          )) : (
            <div className="col-span-full text-center py-20 text-gray-500 uppercase tracking-widest">
              No products found in this category.
            </div>
          )}
        </motion.div>
      )}

    </div>
  );
}
