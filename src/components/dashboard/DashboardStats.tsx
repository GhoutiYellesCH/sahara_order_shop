
import React from 'react';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  // Mock data with costs and profits
  const mockOrders = [
    { product: 'Théière Traditionnelle Kabyle', price: 2500, cost: 1800, customer: 'Ahmed Benali' },
    { product: 'Panier Artisanal Berbère', price: 1800, cost: 1200, customer: 'Fatima Khelifi' },
    { product: 'Tapis Ghardaïa Authentique', price: 4200, cost: 3000, customer: 'Yacine Mourad' },
    { product: 'Théière Traditionnelle Kabyle', price: 2500, cost: 1800, customer: 'Amina Sedki' },
    { product: 'Panier Artisanal Berbère', price: 1800, cost: 1200, customer: 'Mohamed Larbi' }
  ];

  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.price, 0);
  const totalCosts = mockOrders.reduce((sum, order) => sum + order.cost, 0);
  const totalProfit = totalRevenue - totalCosts;
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(1);

  const uniqueCustomers = [...new Set(mockOrders.map(order => order.customer))].length;

  const stats = [
    {
      name: 'Total Commandes',
      value: mockOrders.length.toString(),
      change: '+2 cette semaine',
      changeType: 'positive',
      icon: Package,
    },
    {
      name: 'Clients Uniques',
      value: uniqueCustomers.toString(),
      change: '+3 cette semaine',
      changeType: 'positive',
      icon: Users,
    },
    {
      name: 'Bénéfices (DA)',
      value: totalProfit.toLocaleString(),
      change: `Marge: ${profitMargin}%`,
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      name: 'Croissance',
      value: '12%',
      change: '+2.3% vs mois dernier',
      changeType: 'positive',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className={`text-sm ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
