import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type UserCardProps = {
  name: string;
  status: 'Aktif' | 'Alumni';
  imageUrl: string;
};

export default function UserCard({
  name,
  status,
  imageUrl,
}: UserCardProps) {
  return (
    <View style={styles.userCard}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />

      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text
          style={[
            styles.status,
            { color: status === 'Aktif' ? 'green' : 'gray' },
          ]}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 20,
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    fontSize: 20,
    fontWeight: '600',
  },
});
