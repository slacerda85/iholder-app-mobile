import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portfolio from './portfolio';

const Index = () => {

  const Stack = createStackNavigator();

  return (    
    <Stack.Navigator
    initialRouteName="Portfolio"
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1B1B1B',
        shadowColor: 'transparent',                    
      },        
    }}>
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>  
  );
}
export default Index;