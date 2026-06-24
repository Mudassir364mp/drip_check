import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl tracking-widest uppercase text-gradient mb-6">Drip Check</h3>
            <p className="text-gray-400 max-w-sm">
              Time Defines Style. We curate the most exquisite luxury timepieces for those who appreciate true craftsmanship and elegance.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase text-foreground mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/shop" className="hover:text-gold transition-colors duration-300">New Arrivals</Link></li>
              <li><Link href="/shop?category=luxury" className="hover:text-gold transition-colors duration-300">Luxury Collection</Link></li>
              <li><Link href="/shop?category=sports" className="hover:text-gold transition-colors duration-300">Sports Watches</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors duration-300">Our Heritage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase text-foreground mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-gold transition-colors duration-300">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-gold transition-colors duration-300">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-gold transition-colors duration-300">Returns</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Drip Check. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
