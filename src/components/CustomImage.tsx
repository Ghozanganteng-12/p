import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default function CustomImage() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.imageContainer}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#2196F3"
          style={styles.imageLoader}
        />
      )}

      <Image
        source={{ uri: 'https://picsum.photos/400/250' }}
        style={styles.customImage}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 220,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  customImage: {
    width: '100%',
    height: '100%',
  },
  imageLoader: {
    position: 'absolute',
    zIndex: 2,
  },
});
