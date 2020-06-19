import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stacks = () => {
  const Stack = createStackNavigator();

  return (    
      <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#222222',
          shadowColor: 'transparent',                    
        },        
      }}>
        
      </Stack.Navigator>    
  );
}

export default Stacks;