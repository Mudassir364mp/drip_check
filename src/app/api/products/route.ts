import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Product } from '@/models/Product';

const MOCK_PRODUCTS = [
  {
    _id: 'mock_1',
    name: 'The Obsidian Chronograph',
    slug: 'obsidian-chronograph',
    description: 'A masterpiece of precision, featuring a matte black finish with gold accents.',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80'],
    category: { name: 'Luxury Watches' },
    stock: 5,
    featured: true,
  },
  {
    _id: 'mock_2',
    name: 'Gold Horizon Automatic',
    slug: 'gold-horizon-automatic',
    description: 'Timeless elegance. A solid gold bezel with a transparent back to view the automatic movement.',
    price: 4999,
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80'],
    category: { name: 'Classic Watches' },
    stock: 2,
    featured: true,
  }
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    let query = {};
    if (category && category !== 'all') {
      query = { category };
    }

    try {
      await dbConnect();
      const products = await Product.find(query).populate('category');
      
      // If no products in DB yet, return mock watches
      if (products.length === 0) {
        return NextResponse.json(MOCK_PRODUCTS);
      }

      return NextResponse.json(products);
    } catch (dbError) {
      // If MongoDB is not running, fallback to returning mock data
      console.warn("MongoDB connection failed, returning mock data:", dbError);
      return NextResponse.json(MOCK_PRODUCTS);
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

