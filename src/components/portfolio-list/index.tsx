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
  const [ativos, setAtivos] = useState<Ativos[]>([]);
  

  useEffect(() => {
    api.get('ativos').then(response => {
      setAtivos(response.data);
    });
  }, []);
  
  return (
    <View>
      {ativos.map(ativo => (<PortfolioItem
        key={ativo.id}
        ticker={ativo.ticker}
        description={ativo.description}
        
      />))}
    </View>
  );
}

export default PortfolioList;

