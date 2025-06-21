
export interface Order {
  id?: string;
  name: string;
  address: string;
  wilaya: string;
  phone: string;
  product: string;
  timestamp?: Date;
  status?: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
}

export interface OrderResponse {
  success: boolean;
  message: string;
  orderId?: string;
  order?: Order;
}
