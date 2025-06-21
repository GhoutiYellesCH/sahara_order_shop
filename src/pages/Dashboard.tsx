
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import OrdersTable from '../components/dashboard/OrdersTable';
import DashboardStats from '../components/dashboard/DashboardStats';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
          <p className="text-gray-600">Gérez vos commandes et suivez les statistiques</p>
        </div>
        
        <DashboardStats />
        <OrdersTable />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
