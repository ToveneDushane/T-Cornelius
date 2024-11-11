import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const PaymentPage = ({ route, navigation }) => {
  const { item, quantity, totalPrice } = route.params;

  const handlePayment = () => {
    Alert.alert('Payment Successful', `You paid $${totalPrice}. Thank you for your order!`);
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>
      <Text>{item.name} x {quantity}</Text>
      <Text>Total Price: ${totalPrice}</Text>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
