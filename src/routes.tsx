import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './components/tabs';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#222222',
          shadowColor: 'transparent',                    
        },
        
      }}>
        <Stack.Screen name="iHolder App" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;