import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'; // Import thư viện icon Entypo

const { width } = Dimensions.get('window');

const MyTabBars = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // **Chọn icon dựa trên route.name**
        const iconName =
          route.name === 'Dashboard'
            ? 'home' // Icon cho Dashboard
            : route.name === 'Chatbot'
            ? 'chat' // Icon "chat" cho Chatbot
            : 'circle';

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.activeTab]}
          >
            {/* Hiển thị icon tương ứng */}
            <Entypo name={iconName} size={24} color={isFocused ? '#fff' : '#4A628A'} />
            {/* Hiển thị label của tab
            {isFocused && <Text style={styles.activeLabel}>{label}</Text>} */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Style cho TabBar
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 150, // Chiều rộng 60% màn hình
    height: 70,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeTab: {
    backgroundColor: '#B9E5E8',
    borderRadius: 100,
    width:60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5

  },

});

export default MyTabBars;
