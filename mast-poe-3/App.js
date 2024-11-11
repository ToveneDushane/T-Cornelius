import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import PaymentPage from './PaymentPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuPage} />
        <Stack.Screen name="Order" component={OrderPage} />
        <Stack.Screen name="Payment" component={PaymentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



