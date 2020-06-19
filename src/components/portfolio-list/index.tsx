import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api, { bova } from '../../services/api';

import PortfolioItem from '../portfolio-item';

interface Ativos {
  id: number,
  ticker: string,
  isin: string,
  description: string,
  qtd: string
}

const PortfolioList = () => {
  const [assets, setAssets] = useState<Ativos[]>([]);
  

  useEffect(() => {
    api.get('assets').then(response => {
      setAssets(response.data);
    });
  }, []);
  
  return (
    <View>
      {assets.map(asset => (<PortfolioItem
        key={0}
        ticker={asset.ticker}
        description={asset.description}
        
      />))}
    </View>
  );
}

export default PortfolioList;

