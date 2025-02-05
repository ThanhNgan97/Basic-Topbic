import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DualColorScreen = () => {
  return (
    <LinearGradient 
      colors={['#e5f2ed', '#ffffff']} 
      locations={[0, 0.39]} // 39% màu xanh, 61% màu trắng
      style={styles.container}
    >
      {/* Nội dung của màn hình */}
      <Text style={styles.text}>Hello, Gradient!</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default DualColorScreen;
