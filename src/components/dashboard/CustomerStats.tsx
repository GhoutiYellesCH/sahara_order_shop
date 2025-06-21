
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CustomerStats = () => {
  // Mock customer data with order counts and totals
  const customerStats = [
    {
      name: 'Ahmed Benali',
      phone: '0551234567',
      wilaya: 'Alger',
      orderCount: 3,
      totalSpent: 7500,
      lastOrder: '2024-12-24'
    },
    {
      name: 'Fatima Khelifi',
      phone: '0661234567',
      wilaya: 'Constantine',
      orderCount: 2,
      totalSpent: 3600,
      lastOrder: '2024-12-23'
    },
    {
      name: 'Yacine Mourad',
      phone: '0771234567',
      wilaya: 'Oran',
      orderCount: 1,
      totalSpent: 4200,
      lastOrder: '2024-12-22'
    },
    {
      name: 'Amina Sedki',
      phone: '0551987654',
      wilaya: 'Blida',
      orderCount: 2,
      totalSpent: 5000,
      lastOrder: '2024-12-21'
    },
    {
      name: 'Mohamed Larbi',
      phone: '0662345678',
      wilaya: 'Sétif',
      orderCount: 1,
      totalSpent: 1800,
      lastOrder: '2024-12-20'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Statistiques Clients</h3>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Wilaya</TableHead>
              <TableHead>Nb. Commandes</TableHead>
              <TableHead>Total Dépensé</TableHead>
              <TableHead>Dernière Commande</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customerStats.map((customer) => (
              <TableRow key={customer.phone}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.wilaya}</TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {customer.orderCount}
                  </span>
                </TableCell>
                <TableCell className="font-semibold">{customer.totalSpent.toLocaleString()} DA</TableCell>
                <TableCell>{customer.lastOrder}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerStats;
