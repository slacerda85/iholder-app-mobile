import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PortfolioItem from '../../components/portfolio-item';
import api from '../../services/api';

interface Assets {
  ticker: string,
    isin: string,
    description: string,
    average_price: number,
    qtd: number,
    created_at: string,
    updated_at: string
}

const Portfolio = () => {
  const [assets, setAssets] = useState<Assets[]>([]);

  async function getData() {
    const { data } = await api.get('assets');
    setAssets(data);
  }

  useEffect(() => {
    getData();    
  },);
  

  return (
  <ScrollView style={styles.container}>
    
    <View>
      {assets.map((asset, index) => (<PortfolioItem
        key={index}
        ticker={asset.ticker}
        description={asset.description} 
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