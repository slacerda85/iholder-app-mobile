import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Stacks = (props: any) => {

  return (    
      <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#222222',
          shadowColor: 'transparent',                    
        },        
      }}>
        <Stack.Screen name={props.name} component={props.component} />
      </Stack.Navigator>    
  );
}

export default Stacks;