
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Order {
  id: string;
  customer: string;
  product: string;
  wilaya: string;
  phone: string;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  date: string;
  price: number;
  cost: number;
  profit: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  cost: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

interface Customer {
  name: string;
  phone: string;
  wilaya: string;
  orderCount: number;
  totalSpent: number;
  lastOrder: string;
}

interface DataContextType {
  orders: Order[];
  products: Product[];
  customers: Customer[];
  addOrder: (order: Order) => void;
  updateOrder: (id: string, updates: Partial<Order>) => void;
  deleteOrder: (id: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const initialOrders: Order[] = [
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
];

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Théière Traditionnelle Kabyle',
    price: 2500,
    cost: 1800,
    stock: 15,
    category: 'Céramique',
    description: 'Théière artisanale en céramique de Kabylie',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Panier Artisanal Berbère',
    price: 1800,
    cost: 1200,
    stock: 25,
    category: 'Vannerie',
    description: 'Panier traditionnel en fibres naturelles',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Tapis Ghardaïa Authentique',
    price: 4200,
    cost: 3000,
    stock: 8,
    category: 'Textile',
    description: 'Tapis traditionnel de Ghardaïa fait main',
    image: '/placeholder.svg'
  }
];

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Calculate customers from orders
  const customers: Customer[] = React.useMemo(() => {
    const customerMap = new Map<string, Customer>();
    
    orders.forEach(order => {
      const existing = customerMap.get(order.phone);
      if (existing) {
        existing.orderCount += 1;
        existing.totalSpent += order.price;
        if (new Date(order.date) > new Date(existing.lastOrder)) {
          existing.lastOrder = order.date;
        }
      } else {
        customerMap.set(order.phone, {
          name: order.customer,
          phone: order.phone,
          wilaya: order.wilaya,
          orderCount: 1,
          totalSpent: order.price,
          lastOrder: order.date
        });
      }
    });
    
    return Array.from(customerMap.values());
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders(prev => [...prev, order]);
  };

  const updateOrder = (id: string, updates: Partial<Order>) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, ...updates } : order
    ));
  };

  const deleteOrder = (id: string) => {
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, ...updates } : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <DataContext.Provider value={{
      orders,
      products,
      customers,
      addOrder,
      updateOrder,
      deleteOrder,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
