import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OperationScreen from './operationScreen'
import MenuScreen from './menuScreen';

const Index = () => {
  
  const Stack = createStackNavigator();

  return (    
    <Stack.Navigator
    initialRouteName="Portfolio"
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#222222',
        shadowColor: 'transparent',                    
      },        
    }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Operações" component={OperationScreen} />
    </Stack.Navigator>  
  );
  
}

export default Index;