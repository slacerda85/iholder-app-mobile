import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OperationScreen from './operationScreen'
import MenuScreen from './menuScreen';
import AddAssetScreen from './addAssetScreen';

const Index = () => {
  
  const Stack = createStackNavigator();

  return (    
    <Stack.Navigator
    initialRouteName="Menu"
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1B1B1B',
        shadowColor: 'transparent',                    
      },        
    }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Operações" component={OperationScreen} />
      <Stack.Screen name="AdicionarAtivos" component={AddAssetScreen} />
    </Stack.Navigator>  
  );
  
}

export default Index;