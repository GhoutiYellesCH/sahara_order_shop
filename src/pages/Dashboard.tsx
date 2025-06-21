
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import OrdersTable from '../components/dashboard/OrdersTable';
import DashboardStats from '../components/dashboard/DashboardStats';
import CustomerStats from '../components/dashboard/CustomerStats';
import ProductManagement from '../components/dashboard/ProductManagement';
import Settings from '../components/dashboard/Settings';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
          <p className="text-gray-600">Gérez vos commandes, produits et suivez les statistiques</p>
        </div>
        
        <DashboardStats />
        <OrdersTable />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <CustomerStats />
          <ProductManagement />
        </div>
        
        <Settings />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
