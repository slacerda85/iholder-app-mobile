import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PortfolioScreen from './portfolioScreen';
import operationScreen from './operationScreen';

const Portfolio = () => {

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
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen name="Operações" component={operationScreen} />
    </Stack.Navigator>  
  );
}
export default Portfolio;