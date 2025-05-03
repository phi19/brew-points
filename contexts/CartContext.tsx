// context/CartContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Alert } from 'react-native';

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: string; // Price string like "3,58€"
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  currentShopId: string | null;
  addToCart: (product: Product, shopId: string) => void;
  getItemCount: () => number;
  getCartTotal: () => string; // Function to get formatted total price
  // Add other functions later if needed
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

// Helper function to parse European currency string
const parsePrice = (priceString: string): number => {
    if (!priceString) return 0;
    try {
        // Remove currency symbol (€), trim whitespace, replace comma with dot
        const cleanedString = priceString.replace(/€/g, '').trim().replace(/,/g, '.');
        const price = parseFloat(cleanedString);
        return isNaN(price) ? 0 : price; // Return 0 if parsing failed
    } catch (e) {
        console.error("Error parsing price:", priceString, e);
        return 0;
    }
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentShopId, setCurrentShopId] = useState<string | null>(null);

  const addToCart = (product: Product, shopId: string) => {
    // ... (existing addToCart logic with reset check) ...
    // Check if adding from a different shop
    if (currentShopId !== null && currentShopId !== shopId && cartItems.length > 0) {
      Alert.alert(
        "Clear Cart?",
        `Your cart contains items from a different shop. Adding this item will clear your current cart.`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "OK",
            onPress: () => {
              console.log(`Cart reset. Adding item ${product.name} from shop ${shopId}`);
              const newItem: CartItem = { ...product, quantity: 1 };
              setCartItems([newItem]);
              setCurrentShopId(shopId);
            },
          },
        ]
      );
      return;
    }

    // If same shop or cart is empty
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        console.log(`Increasing quantity for ${product.name}`);
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        console.log(`Adding new item ${product.name} to cart`);
        const newItem: CartItem = { ...product, quantity: 1 };
        return [...prevItems, newItem];
      }
    });

    if (currentShopId === null || cartItems.length === 0) {
        setCurrentShopId(shopId);
    }
  };

  const getItemCount = () => {
     return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  // --- Calculate Total Price Function ---
  const getCartTotal = (): string => {
    const total = cartItems.reduce((sum, item) => {
        const price = parsePrice(item.price); // Use helper function
        return sum + price * item.quantity;
    }, 0);

    // Format back to string with comma and Euro symbol
    return `${total.toFixed(2).replace('.', ',')}€`;
  };
  // ------------------------------------

  useEffect(() => {
     console.log("Cart Updated:", JSON.stringify(cartItems, null, 2));
     console.log("Current Shop ID:", currentShopId);
  }, [cartItems, currentShopId]);

  return (
    <CartContext.Provider
        value={{
            cartItems,
            currentShopId,
            addToCart,
            getItemCount,
            getCartTotal // Provide the new function
        }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  // ... (useCart hook remains the same) ...
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};