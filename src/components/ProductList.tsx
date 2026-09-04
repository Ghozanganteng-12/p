import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = Array.from({ length: 50 }, (_, index) => ({
  id: String(index + 1),
  name: `Produk ${index + 1}`,
  price: `Rp ${(index + 1) * 10000}`,
}));

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  productItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 17,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
