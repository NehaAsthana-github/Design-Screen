import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './NewScreen';
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="new"  component={NewScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
      );
}

export default App