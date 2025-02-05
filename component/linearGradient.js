import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';

const GradientScreen = () => {
  return (
    <LinearGradient
      colors={['#e5f2ed', '#ffffff']} // Màu gradient từ trên xuống dưới
      style={styles.container}
    >
      <Text style={styles.text}>Hello Gradient!</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default GradientScreen;
