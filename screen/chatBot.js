import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DualColorScreen = () => {
  return (
    <View style={styles.container}>
      {/* Phần trên - Màu xanh */}
      <View style={styles.topSection}>
        <Text style={styles.topText}>Phần trên màu xanh</Text>
      </View>
      
      {/* Phần dưới - Màu trắng */}
      <View style={styles.bottomSection}>
        <Text style={styles.bottomText}>Phần dưới màu trắng</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topSection: {
    flex: 1,
    backgroundColor: '#007BFF', // Màu xanh (bạn có thể thay đổi)
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Màu trắng
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default DualColorScreen;
