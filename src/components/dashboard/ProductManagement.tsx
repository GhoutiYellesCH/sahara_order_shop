
import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Théière Traditionnelle Kabyle',
      price: 2500,
      cost: 1800,
      stock: 15,
      description: 'Théière artisanale en argile de Kabylie'
    },
    {
      id: 2,
      name: 'Panier Artisanal Berbère',
      price: 1800,
      cost: 1200,
      stock: 8,
      description: 'Panier tressé à la main par des artisans berbères'
    },
    {
      id: 3,
      name: 'Tapis Ghardaïa Authentique',
      price: 4200,
      cost: 3000,
      stock: 5,
      description: 'Tapis traditionnel de Ghardaïa aux motifs authentiques'
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    cost: '',
    stock: '',
    description: ''
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.cost) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseInt(newProduct.price),
        cost: parseInt(newProduct.cost),
        stock: parseInt(newProduct.stock) || 0,
        description: newProduct.description
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', cost: '', stock: '', description: '' });
      setIsAddDialogOpen(false);
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const getMargin = (price: number, cost: number) => {
    return (((price - cost) / price) * 100).toFixed(1);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Gestion des Produits</h3>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter Produit
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un Nouveau Produit</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom du Produit
                  </label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nom du produit"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix de Vente (DA)
                    </label>
                    <input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="2500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coût d'Achat (DA)
                    </label>
                    <input
                      type="number"
                      value={newProduct.cost}
                      onChange={(e) => setNewProduct({...newProduct, cost: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="1800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="Description du produit"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsAddDialogOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleAddProduct}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produit</TableHead>
              <TableHead>Prix de Vente</TableHead>
              <TableHead>Coût d'Achat</TableHead>
              <TableHead>Marge</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.description}</div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold">{product.price.toLocaleString()} DA</TableCell>
                <TableCell>{product.cost.toLocaleString()} DA</TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {getMargin(product.price, product.cost)}%
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.stock > 5 ? 'bg-green-100 text-green-800' : 
                    product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
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

export default ProductManagement;
