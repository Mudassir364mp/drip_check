"use client";

import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$124,500', icon: DollarSign, trend: '+12.5%' },
    { label: 'Orders', value: '450', icon: ShoppingCart, trend: '+5.2%' },
    { label: 'Products', value: '24', icon: Package, trend: '0%' },
    { label: 'Customers', value: '1,240', icon: Users, trend: '+18.1%' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className="bg-surface border border-border p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
              <div className="p-3 bg-gold/10 rounded-full">
                <stat.icon className="w-5 h-5 text-gold" />
              </div>
            </div>
            <p className={`text-sm ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-gray-500'}`}>
              {stat.trend} from last month
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-surface border border-border p-6 h-96 flex items-center justify-center">
          <p className="text-gray-500">Revenue Chart Placeholder</p>
        </div>
        <div className="bg-surface border border-border p-6 h-96 flex flex-col">
          <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Order List Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
