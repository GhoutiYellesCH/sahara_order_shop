
import { z } from 'zod';

// Algerian phone number validation: starts with 05, 06, or 07, followed by 8 digits
const algerianPhoneRegex = /^0[567][0-9]{8}$/;

// List of Algerian wilayas for validation
const algerianWilayas = [
  'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar',
  'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger',
  'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
  'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh',
  'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued',
  'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent',
  'Ghardaïa', 'Relizane'
];

// Available products for validation
const availableProducts = [
  'Théière Traditionnelle Kabyle',
  'Panier Artisanal Berbère',
  'Tapis Ghardaïa Authentique'
];

export const orderValidationSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\u0600-\u06FF\s]+$/, 'Le nom ne peut contenir que des lettres et espaces'),
    
  address: z
    .string()
    .min(5, 'L\'adresse doit contenir au moins 5 caractères')
    .max(200, 'L\'adresse ne peut pas dépasser 200 caractères'),
    
  wilaya: z
    .string()
    .refine((val) => algerianWilayas.includes(val), {
      message: 'Veuillez sélectionner une wilaya valide'
    }),
    
  phone: z
    .string()
    .regex(algerianPhoneRegex, {
      message: 'Le numéro de téléphone doit être au format algérien (05, 06 ou 07 suivi de 8 chiffres)'
    }),
    
  product: z
    .string()
    .refine((val) => availableProducts.includes(val), {
      message: 'Veuillez sélectionner un produit valide'
    })
});

export type OrderValidationInput = z.infer<typeof orderValidationSchema>;

/**
 * Validates order data and returns parsed result
 * @param data - Raw order data to validate
 * @returns Validation result with success status and data/errors
 */
export function validateOrderData(data: unknown) {
  try {
    const validatedOrder = orderValidationSchema.parse(data);
    return {
      success: true,
      data: validatedOrder,
      errors: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      };
    }
    
    return {
      success: false,
      data: null,
      errors: [{ field: 'general', message: 'Erreur de validation inconnue' }]
    };
  }
}

/**
 * Generates a unique order ID
 * @returns String - Unique order identifier
 */
export function generateOrderId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `DZ-${timestamp}-${randomStr}`.toUpperCase();
}

/**
 * Sanitizes input data by trimming whitespace and normalizing case
 * @param data - Raw input data
 * @returns Sanitized data object
 */
export function sanitizeOrderInput(data: any) {
  return {
    name: data.name?.trim(),
    address: data.address?.trim(),
    wilaya: data.wilaya?.trim(),
    phone: data.phone?.trim().replace(/\s+/g, ''), // Remove all spaces from phone
    product: data.product?.trim()
  };
}

/**
 * Simulates order processing for frontend demo
 * This will be replaced with actual API calls when backend is connected
 */
export function processOrder(orderData: OrderValidationInput): Promise<{ success: boolean; orderId?: string; message: string }> {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const orderId = generateOrderId();
      
      console.log('=== ORDER SIMULATION ===');
      console.log('Order ID:', orderId);
      console.log('Customer:', orderData.name);
      console.log('Product:', orderData.product);
      console.log('Wilaya:', orderData.wilaya);
      console.log('Phone:', orderData.phone);
      console.log('Address:', orderData.address);
      console.log('Status: Pending (Cash on Delivery)');
      console.log('=======================');
      
      resolve({
        success: true,
        orderId: orderId,
        message: 'Commande créée avec succès! Vous serez contacté pour la livraison.'
      });
    }, 1000);
  });
}
