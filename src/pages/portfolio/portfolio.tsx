import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PortfolioList from '../../components/portfolio-list';


const Portfolio = () => {
  return (
  <ScrollView style={styles.container}>  
    <PortfolioList />
  </ScrollView>
  );
}

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000", 
    flex: 1,
  }
})