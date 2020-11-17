import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login.js'
import History from './pages/History.js'
import Parameter from './pages/Parameter.js'
import Register from './pages/Register.js'
import Welcome from './pages/Welcome.js'
import Home from './pages/Home.js'
import CarLicencePlate from './pages/CarLicencePlate.js'
import PersonalData from './pages/PersonalData.js'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Parameter" component={Parameter}/>
        <Stack.Screen name="PersonalData" component={PersonalData} options={{headerShown:true}}/>
        <Stack.Screen name="CarLicencePlate" component={CarLicencePlate} options={{headerShown:true}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;