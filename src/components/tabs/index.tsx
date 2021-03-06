import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from '@react-native-community/blur';

import Feed from '../../pages/feed';
import Portfolio from '../../pages/portfolio';
import Menu from '../../pages/menu';
import Search from '../../pages/search';
import Notifications from '../../pages/notifications';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'ios-home';

            if (route.name === 'Feed') {
              iconName = focused ? 'newspaper' : 'newspaper';
            } else if (route.name === 'Portfolio') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu';
            } else if (route.name === 'Busca') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Notificações') {
              iconName = focused ? 'bell' : 'bell-outline';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: { borderTopColor: '#444444' },
          activeTintColor: '#4A4',
          inactiveTintColor: '#CCC',
          activeBackgroundColor: '#1B1B1B',
          inactiveBackgroundColor: '#1B1B1B',
        }}
        
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Busca" component={Search} />
        <Tab.Screen name="Notificações" component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

export default MyTabs;