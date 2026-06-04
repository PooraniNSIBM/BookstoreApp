import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { CartProvider } from './src/context/CartContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <CartProvider>
      {Platform.OS !== 'web' && (
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      )}
      <AppNavigator />
    </CartProvider>
  );
}

// Made with Bob
