import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

import PortfolioItem from '../portfolio-item';

interface Assets {
  ticker: string,
    isin: string,
    description: string,
    average_price: number,
    qtd: number,
    created_at: string,
    updated_at: string
}

const PortfolioList = () => {
  const [assets, setAssets] = useState<Assets[]>([]);
  

  useEffect(() => {
    api.get('assets').then(response => {
      setAssets(response.data);
    });
  }, []);
  
  return (
    <View>
      {assets.map((asset, index) => (<PortfolioItem
        key={index}
        ticker={asset.ticker}
        description={asset.description}        
      />))}
    </View>
  );
}

export default PortfolioList;

