import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export type ButtonVariant = 'primary' | 'success' | 'danger';

type MyButtonProps = {
  title: string;
  onPress: () => void;
  variant: ButtonVariant;
};

export default function MyButton({
  title,
  onPress,
  variant,
}: MyButtonProps) {
  const backgroundColor =
    variant === 'primary'
      ? '#2196F3'
      : variant === 'success'
        ? '#4CAF50'
        : '#F44336';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
