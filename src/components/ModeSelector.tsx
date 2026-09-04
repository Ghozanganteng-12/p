import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const modes = ['Light Mode', 'Dark Mode', 'System Default'];

export default function ModeSelector() {
  const [selectedMode, setSelectedMode] = useState('System Default');

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Pilih Mode</Text>

      {modes.map((mode) => (
        <TouchableOpacity
          key={mode}
          style={[
            styles.modeItem,
            selectedMode === mode && styles.modeSelected,
          ]}
          onPress={() => setSelectedMode(mode)}
        >
          <Text
            style={[
              styles.modeText,
              selectedMode === mode && styles.modeTextSelected,
            ]}
          >
            {mode}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.selectedText}>
        Pilihan: {selectedMode}
      </Text>
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
  modeItem: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  modeSelected: {
    backgroundColor: '#2196F3',
  },
  modeText: {
    fontSize: 17,
    fontWeight: '600',
  },
  modeTextSelected: {
    color: '#fff',
  },
  selectedText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
