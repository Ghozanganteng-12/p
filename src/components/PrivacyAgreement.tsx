import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

export default function PrivacyAgreement() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Kebijakan Privasi</Text>

      <View style={styles.switchRow}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={styles.agreementText}>
          Saya menyetujui Syarat & Ketentuan
        </Text>
      </View>

      <Pressable
        disabled={!agreed}
        style={[
          styles.submitButton,
          !agreed && styles.submitDisabled,
        ]}
        onPress={() => alert('Berhasil Submit!')}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
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
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  agreementText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
