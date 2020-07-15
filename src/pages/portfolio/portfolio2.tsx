import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PortfolioItem from '../../components/portfolio-item';
import api, { bova } from '../../services/api';
import NetWorth from '../../components/net-worth';

interface Intraday {
  closPric: number,
  dtTm: string,
  prcFlcn: number
}
interface Balance {
  asset_ticker: string,
  qtd: number,
  avg_price: number,
}
interface Portfolio{
  asset_ticker: string,
  description: string,
  price: number
}

const Portfolio = () => {
  const [balance, setBalance] = useState([]);
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

  async function getBalance() {
    const { data } = await api.get('balance');
    setBalance(data);
  }

  async function getPrices(asset: string) {
    const { data } = await bova.get(asset);
    const intraday: Intraday[] = await data.TradgFlr.scty.lstQtn;
    const lastPrice = intraday[intraday.length - 1].closPric;
    return ((lastPrice != undefined ? lastPrice : 0));
  }

  async function getDescription(asset_ticker: string) {
    const { data } = await api.get(`assets/${asset_ticker}`);
    return data.description;
  }

   async function mountPortfolio() {
    //preciso puxar pelo map a descrição, rentabilidade e porcentagem e colocar no objeto
     balance.map(async(item: Balance) => {
      const currentValue = await getPrices(item.asset_ticker);
      const description = await getDescription(item.asset_ticker);
      setPortfolio([...portfolio, {
        asset_ticker: item.asset_ticker,
        description: description,
        price: currentValue
      }])
    });      
  }
}

export default Portfolio;