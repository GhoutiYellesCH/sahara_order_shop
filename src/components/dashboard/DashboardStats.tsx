
import React from 'react';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      name: 'Total Commandes',
      value: '12',
      change: '+2 cette semaine',
      changeType: 'positive',
      icon: Package,
    },
    {
      name: 'Nouveaux Clients',
      value: '8',
      change: '+3 cette semaine',
      changeType: 'positive',
      icon: Users,
    },
    {
      name: 'Revenus (DA)',
      value: '24,500',
      change: '+15% ce mois',
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
