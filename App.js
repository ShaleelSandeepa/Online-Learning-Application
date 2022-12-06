import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Web from './components/Web';
import Mobile from './components/Mobile';
import Standalone from './components/Standalone';
import colors from './Colors';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#6B6E6E',
        headerShadowVisible: false,
        statusBarHidden: false,
        tabBarStyle: {
          height: '8%',
          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          marginTop: -30,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -10,
          fontWeight: 'bold'
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerRight: () => (
          <View style={{marginRight: 20}}>
              <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={24} color="white" />
              </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Ionicons name="home" size={28} color={color} />
            ),
            
          }}
        />
        <Tab.Screen
          name="Web"
          component={Web}
          options={{
            tabBarLabel: 'Web',
            title: 'Web Application',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="application-brackets" size={28} color={color} />
            ),          
          }}
        />
        <Tab.Screen
          name="Mobile"
          component={Mobile}
          options={{
            tabBarLabel: 'Mobile',
            title: 'Mobile Application',
            tabBarIcon: ({color}) => (
              <AntDesign name="mobile1" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Standalone"
          component={Standalone}
          options={{
            tabBarLabel: 'Standalone',
            title: 'Standalone Application',
            tabBarIcon: ({color}) => (
              <Octicons name="desktop-download" size={28} color={color} />
            ),
          }}
        />               
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>     
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          statusBarHidden: false,
          headerShadowVisible: false,
          statusBarColor: colors.primary,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}>
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: 'LEARN CODING',              
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
                title: 'NEW MEMBER',
            }}
          />
          <Stack.Screen 
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
              headerBackVisible: false,
            }}
          />               
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style='light'/>
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