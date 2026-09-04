import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const subjects = [
  {
    title: 'Mata Pelajaran Kejuruan',
    data: [
      { name: 'Pemrograman', value: 90 },
      { name: 'Database', value: 85 },
      { name: 'Jaringan', value: 88 },
    ],
  },
  {
    title: 'Mata Pelajaran Umum',
    data: [
      { name: 'Matematika', value: 92 },
      { name: 'Bahasa Indonesia', value: 87 },
      { name: 'Bahasa Inggris', value: 89 },
    ],
  },
];

export default function StudentGrades() {
  return (
    <SectionList
      sections={subjects}
      keyExtractor={(item, index) => item.name + index}
      scrollEnabled={false}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.gradeItem}>
          <Text style={styles.subjectName}>{item.name}</Text>
          <Text style={styles.grade}>{item.value}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    borderRadius: 8,
  },
  gradeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subjectName: {
    fontSize: 17,
  },
  grade: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
});
