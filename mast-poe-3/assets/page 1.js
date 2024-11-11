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

export default App;

import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const meatItems = [
  { id: 1, name: 'Grilled Chicken with chips,rolls and drink', price: 100 },
  { id: 2, name: 'Beef Burger with chips and drink', price: 120 },
  { id: 3, name: 'BBQ Ribs with chips and drink', price: 150 },
  { id: 4, name: 'Chicken Wings with chips and drink', price: 80 },
  { id: 5, name: 'Steak with chips and drink', price: 200 },
  { id: 6, name: 'Lamb Chops with chips and drink', price: 180 },
  { id: 7, name: 'Fish Tacos with chips and drink', price: 140 },
];

const veganItems = [
  { id: 1, name: 'Vegan Burger with chips', price: 90 },
  { id: 2, name: 'Vegan Tacos with chips', price: 70 },
  { id: 3, name: 'Lentil Soup with rice', price: 60 },
  { id: 4, name: 'Vegan Pizza', price: 110 },
  { id: 5, name: 'Falafel Plate with chip', price: 80 },
];

const MenuPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Meat Menu</Text>
      {meatItems.map(item => (
        <View key={item.id} style={styles.menuItem}>
          <Text>{item.name} - ${item.price}</Text>
          <Button
            title="Order"
            onPress={() => navigation.navigate('Order', { item })}
          />
        </View>
      ))}

      <Text style={styles.header}>Vegan Menu</Text>
      {veganItems.map(item => (
        <View key={item.id} style={styles.menuItem}>
          <Text>{item.name} - ${item.price}</Text>
          <Button
            title="Order"
            onPress={() => navigation.navigate('Order', { item })}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    marginBottom: 15,
  },
});
