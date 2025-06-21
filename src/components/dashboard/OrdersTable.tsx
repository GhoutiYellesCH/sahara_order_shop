
import React, { useState } from 'react';
import { Eye, Edit, Trash2, Filter } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrdersTable = () => {
  const [orders] = useState([
    {
      id: 'DZ-1735069271-A7B3C9',
      customer: 'Ahmed Benali',
      product: 'Théière Traditionnelle Kabyle',
      wilaya: 'Alger',
      phone: '0551234567',
      status: 'pending',
      date: '2024-12-24',
      price: 2500,
      cost: 1800,
      profit: 700
    },
    {
      id: 'DZ-1735069272-X9Y2Z1',
      customer: 'Fatima Khelifi',
      product: 'Panier Artisanal Berbère',
      wilaya: 'Constantine',
      phone: '0661234567',
      status: 'confirmed',
      date: '2024-12-23',
      price: 1800,
      cost: 1200,
      profit: 600
    },
    {
      id: 'DZ-1735069273-M5N8P2',
      customer: 'Yacine Mourad',
      product: 'Tapis Ghardaïa Authentique',
      wilaya: 'Oran',
      phone: '0771234567',
      status: 'delivered',
      date: '2024-12-22',
      price: 4200,
      cost: 3000,
      profit: 1200
    }
  ]);

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };

    const labels = {
      pending: 'En attente',
      confirmed: 'Confirmée',
      delivered: 'Livrée',
      cancelled: 'Annulée'
    };

    return (
      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${badges[status as keyof typeof badges]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Commandes Récentes</h3>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filtrer
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Commande</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Produit</TableHead>
              <TableHead>Wilaya</TableHead>
              <TableHead>Prix</TableHead>
              <TableHead>Coût</TableHead>
              <TableHead>Bénéfice</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-xs">{order.id}</TableCell>
                <TableCell className="font-medium">{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.wilaya}</TableCell>
                <TableCell className="font-semibold">{order.price.toLocaleString()} DA</TableCell>
                <TableCell className="text-red-600">{order.cost.toLocaleString()} DA</TableCell>
                <TableCell className="font-semibold text-green-600">
                  +{order.profit.toLocaleString()} DA
                </TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersTable;
