import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const categories = [
  'Matematika',
  'Bahasa Indonesia',
  'Pemrograman',
  'Database',
  'Jaringan',
];

export default function LearningPage() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Kategori Materi</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {categories.map((category) => (
          <View key={category} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.articleTitle}>Artikel Pembelajaran</Text>

      <ScrollView style={styles.articleScroll}>
        <Text style={styles.articleText}>
          React Native adalah framework yang digunakan untuk membuat aplikasi
          mobile menggunakan JavaScript dan React.

          {'\n\n'}

          Dalam React Native terdapat berbagai macam komponen seperti View,
          Text, Image, TextInput, Pressable, ScrollView, FlatList,
          SectionList, Modal, ActivityIndicator, Switch dan TouchableOpacity.

          {'\n\n'}

          Komponen-komponen tersebut dapat digunakan untuk membangun
          antarmuka aplikasi yang interaktif dan responsif.

          {'\n\n'}

          Dengan menggunakan ScrollView horizontal, pengguna dapat menggeser
          daftar kategori ke arah samping.

          {'\n\n'}

          Sedangkan ScrollView vertikal digunakan untuk membaca artikel
          panjang ke arah bawah.
        </Text>
      </ScrollView>
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
  horizontalScroll: {
    marginBottom: 20,
  },
  category: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleScroll: {
    height: 200,
  },
  articleText: {
    fontSize: 17,
    lineHeight: 27,
  },
});
