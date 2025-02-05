import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import FinanceDashboard from './screen/dashboard';
import DualColorScreen from './screen/chatBot';
import ProfileScreen from './screen/profile'; // Thêm màn hình Profile
import MyTabBars from './controller/tabBar'; // Custom TabBar
import {LinearGradient} from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator cho FinanceDashboard
function FinanceStack() {
  return (
    <LinearGradient colors={['#e5f2ed', '#ffffff']} style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="FinanceDashboard"
          component={FinanceDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ 
            title: 'Profile', 
            headerTitleAlign: 'center',
            headerShown:false 
          }}
          
        />
      </Stack.Navigator>
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LinearGradient colors={['#e5f2ed', '#ffffff']} style={{ flex: 1 }}>
        <Tab.Navigator tabBar={(props) => <MyTabBars {...props} />}>
          <Tab.Screen
            name="Dashboard"
            component={FinanceStack}
            options={{
              tabBarLabel: 'Dashboard',
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Chatbot"
            component={DualColorScreen}
            options={{
              tabBarLabel: 'Chatbot',
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </LinearGradient>


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
