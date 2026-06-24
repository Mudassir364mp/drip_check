"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ShoppingBag, Heart, Shield, RotateCcw, Clock } from 'lucide-react';

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params.slug;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For this mock, we just fetch all and find the one. 
    // In production, we would have a specific GET /api/products/[slug] route.
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();
        const found = data.find((p: any) => p.slug === slug);
        setProduct(found);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-32 text-xl font-serif">Product Not Found</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-[500px] md:h-[700px] border border-border bg-surface"
        >
          <Image 
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-8">
            <p className="text-gold tracking-widest uppercase text-xs font-bold mb-4">
              {product.category?.name || 'Luxury Watch'}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6">
              {product.name}
            </h1>
            <p className="text-2xl font-light mb-8">${product.price.toLocaleString()}</p>
            <div className="w-12 h-[1px] bg-border mb-8"></div>
            <p className="text-gray-400 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="flex-1 bg-gold hover:bg-gold-light text-background font-bold tracking-widest uppercase text-sm py-4 flex items-center justify-center gap-2 transition-colors">
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </button>
            <button className="px-6 py-4 border border-border hover:border-gold hover:text-gold transition-colors flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-border text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-foreground uppercase tracking-wider mb-1">5 Year Warranty</p>
                <p className="text-xs">Comprehensive coverage</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-foreground uppercase tracking-wider mb-1">Free Returns</p>
                <p className="text-xs">Within 30 days</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
