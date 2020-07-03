import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PortfolioItem from '../../components/portfolio-item';
import api from '../../services/api';
import NetWorth from '../../components/net-worth';

interface Portfolio {
  asset_ticker: string,
  qtd: number,
  avg_price: number  
  created_at: string,
  updated_at: string
}

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);  

  useEffect(() => {

    const fetchData = async () => {
    const response = await api.get('balance');
    setPortfolio(response.data);
    }

    fetchData();
  }, );
  
  return ( 
  <ScrollView style={styles.container}>
    <NetWorth />
    <View>
      {portfolio.map((asset, index) => (<PortfolioItem
        key={index}
        asset_ticker={asset.asset_ticker}
      />      
      ))}
    </View>    
  </ScrollView>
  
  );
}

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000", 
    flex: 1,
  },
  button: {
    backgroundColor: "#4A4",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 10,
        borderRadius: 8,
  },
  text: {
    color: "#FFF",
        fontSize: 16,
        padding: 8,
        fontWeight: "bold"
  },  
  TouchableOpacity: {
    backgroundColor: "#4A4",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 10,
    borderRadius: 8,
},
})