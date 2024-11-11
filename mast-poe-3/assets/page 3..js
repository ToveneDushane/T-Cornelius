import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const OrderPage = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    const totalPrice = item.price * quantity;
    navigation.navigate('Payment', { item, quantity, totalPrice });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order {item.name}</Text>
      <Text>Price: ${item.price}</Text>

      <TextInput
        style={styles.input}
        value={String(quantity)}
        onChangeText={text => setQuantity(Number(text))}
        keyboardType="numeric"
      />
      <Text>Quantity</Text>

      <Button title="Proceed to Payment" onPress={handleOrder} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 100,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
});
