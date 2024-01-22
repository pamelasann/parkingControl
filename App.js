import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './app/screens/Home';
import TecGDL from './app/screens/TecGDL';
import NotFound from './app/screens/NotFound';
import EIAD from './app/screens/EIAD'

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#275053',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleStyle: {
          fontSize: 16,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TecGDL"
        component={TecGDL}
        options={{
          title: false,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFound}
        options={{
          title: false,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="EIAD"
        component={EIAD}
        options={{
          title: false,
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {

  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
};
