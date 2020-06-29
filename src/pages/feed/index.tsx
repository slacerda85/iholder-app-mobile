import React from 'react';
import index2 from './index2';
import { createStackNavigator } from '@react-navigation/stack';

const Index = () => {

  const Stack = createStackNavigator();

  return (    
    <Stack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1B1B1B',
        shadowColor: 'transparent',                    
      },        
    }}>
      <Stack.Screen name="Feed" component={index2} />
    </Stack.Navigator>  
  );
}

export default Index;