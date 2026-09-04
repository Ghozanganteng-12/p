import React, { useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function FetchData() {
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Data berhasil dimuat!');
    }, 2000);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Fetch Data</Text>

      <Pressable style={styles.fetchButton} onPress={handleFetch}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </Pressable>

      <Modal visible={loading} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <ActivityIndicator size="large" color="#2196F3" />
            <Text style={styles.loadingText}>Memuat data...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fetchButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 17,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 18,
    alignItems: 'center',
    minWidth: 220,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
  },
});
