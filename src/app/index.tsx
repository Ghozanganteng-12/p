import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import CustomImage from '../components/CustomImage';
import FetchData from '../components/FetchData';
import LearningPage from '../components/LearningPage';
import LoginForm from '../components/LoginForm';
import ModeSelector from '../components/ModeSelector';
import MyButton from '../components/MyButton';
import PrivacyAgreement from '../components/PrivacyAgreement';
import ProductList from '../components/ProductList';
import StudentGrades from '../components/StudentGrades';
import UserCard from '../components/UserCard';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>React Native Components</Text>

      <Text style={styles.question}>Soal 1 - Profil Anggota</Text>
      <UserCard
        name="Andi Pratama"
        status="Aktif"
        imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <UserCard
        name="Siti Rahma"
        status="Alumni"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Text style={styles.question}>Soal 2 - Form Login</Text>
      <LoginForm />

      <Text style={styles.question}>Soal 3 - Katalog Produk</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daftar 50 Produk</Text>
        <ProductList />
      </View>

      <Text style={styles.question}>Soal 4 - Pembelajaran Interaktif</Text>
      <LearningPage />

      <Text style={styles.question}>Soal 5 - Custom Button</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>MyButton Variants</Text>
        <MyButton
          title="Primary"
          variant="primary"
          onPress={() => alert('Primary')}
        />
        <MyButton
          title="Success"
          variant="success"
          onPress={() => alert('Success')}
        />
        <MyButton
          title="Danger"
          variant="danger"
          onPress={() => alert('Danger')}
        />
      </View>

      <Text style={styles.question}>Soal 6 - Status Koneksi</Text>
      <FetchData />

      <Text style={styles.question}>Soal 7 - Galeri Foto</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Custom Image</Text>
        <CustomImage />
      </View>

      <Text style={styles.question}>Soal 8 - Dashboard Nilai</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nilai Siswa</Text>
        <StudentGrades />
      </View>

      <Text style={styles.question}>Soal 9 - Pilihan Kategori</Text>
      <ModeSelector />

      <Text style={styles.question}>Soal 10 - Kebijakan Privasi</Text>
      <PrivacyAgreement />

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomSpace: {
    height: 50,
  },
});
