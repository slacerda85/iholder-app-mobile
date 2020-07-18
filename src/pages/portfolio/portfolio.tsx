import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PortfolioItem from '../../components/portfolio-item';
import api from '../../services/api';
import NetWorth from '../../components/net-worth';
import Index from '../feed';

interface Portfolio {
  asset_ticker: string,
  description: string,
  qtd: number,
  avg_price: number,
  lastPrice: number,
  profit: number,
  percent: number
}

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [tick, setTick] = useState(false);

  async function getPortfolio() {
    const { data } = await api.get('portfolio');
    setPortfolio(data);
  }

  useEffect(() => {
    getPortfolio();
  }, [tick])

  useEffect(() => {
    setTimeout(() => {setTick(!tick)}, 3000)
  }, [tick])

  return (
    <ScrollView style={styles.container}>
      <NetWorth />
      <View>
        {portfolio.map((item, index) => <PortfolioItem
          key={index}
          asset_ticker={item.asset_ticker}
          avg_price={item.avg_price}
          description={item.description}
          lastPrice={item.lastPrice}
          percent={item.percent}
          profit={item.profit}
          qtd={item.qtd}
        />)}
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

