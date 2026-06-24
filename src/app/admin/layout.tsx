import Link from 'next/link';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-surface border-r border-border hidden md:flex flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/admin" className="font-serif text-xl tracking-widest uppercase text-gradient">
            Drip Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-gold bg-gold/10 rounded border border-gold/20 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium tracking-wide">Dashboard</span>
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">
            <Package className="w-5 h-5" />
            <span className="font-medium tracking-wide">Products</span>
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium tracking-wide">Orders</span>
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium tracking-wide">Customers</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border bg-surface flex items-center justify-between px-6">
          <h2 className="text-lg font-medium tracking-wider">Overview</h2>
          <button className="text-gray-400 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>
        </header>
        <div className="p-6 flex-1 overflow-auto bg-background">
          {children}
        </div>
      </main>
    </div>
  );
}
