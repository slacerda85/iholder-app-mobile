import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
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

const Portfolio = ({ navigation }: any) => {
  const [assets, setAssets] = useState<Assets[]>([]);  

  useEffect(() => {
    api.get('assets').then(response => {
      setAssets(response.data);
    });
  }, []);
  

  return (
  <ScrollView style={styles.container}>
    
    <View>
      {assets.map((asset, index) => (<View><PortfolioItem
        key={index}
        ticker={asset.ticker}
        description={asset.description}        
      />      
      </View>
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
  }
})