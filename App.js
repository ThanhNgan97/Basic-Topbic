import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import FinanceDashboard from './screen/dashboard';
import DualColorScreen from './screen/chatBot';
import MyTabBars from './controller/tabBar'; // Custom TabBar

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBars {...props} />}>
        <Tab.Screen
          name="Dashboard"
          component={FinanceDashboard}
          options={{
            tabBarLabel: 'Dashboard', // Đúng thuộc tính tabBarLabel
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chatbot"
          component={DualColorScreen}
          options={{
            tabBarLabel: 'Chatbot', // Đúng thuộc tính tabBarLabel
            headerShown: false,
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
