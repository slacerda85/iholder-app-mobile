import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" translucent />
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1B1B1B' }}>
    <Routes />
    </SafeAreaView>
    </>
  );
}

