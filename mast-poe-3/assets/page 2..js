import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const meatItems = [
  { id: 1, name: 'Grilled Chicken', price: 10 },
  { id: 2, name: 'Beef Burger', price: 12 },
  { id: 3, name: 'BBQ Ribs', price: 15 },
  { id: 4, name: 'Chicken Wings', price: 8 },
  { id: 5, name: 'Steak', price: 20 },
  { id: 6, name: 'Lamb Chops', price: 18 },
  { id: 7, name: 'Fish Tacos', price: 14 },
];

const veganItems = [
  { id: 1, name: 'Vegan Burger', price: 9 },
  { id: 2, name: 'Vegan Tacos', price: 7 },
  { id: 3, name: 'Lentil Soup', price: 6 },
  { id: 4, name: 'Vegan Pizza', price: 11 },
  { id: 5, name: 'Falafel Plate', price: 8 },
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
