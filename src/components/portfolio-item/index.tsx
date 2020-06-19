import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api, { bova } from '../../services/api';

interface Asset {
  ticker: string,
  description: string,
  percent?: number,  
}

interface Intraday {
  closPric: number,
  dtTm: string,
  prcFlcn: number
}

interface Total {
  id: number,
  asset_id: number,
  price: number,
  qtd: number,
  date: string,
  fees: number
}


const PortfolioItem = (asset: Asset) => {
  const [price, setPrice] = useState(0);
  const [qtd, setQtd] = useState(0)

  useEffect(() => {
    bova.get(asset.ticker).then(response => {
      const intraday: Intraday[] = response.data.TradgFlr.scty.lstQtn;
      setPrice(intraday[intraday.length - 1].closPric);
    })
  }, []);

  useEffect(() => {
    api.get('operations').then(response => {
      const total:Total[] = response.data;
      const soma = total.reduce((acc, curr) => acc + curr.qtd, 0);
      setQtd(soma);
    });
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{asset.ticker} - {asset.description}</Text>
        <View style={styles.percentBox}>
          <Text style={styles.percent}>{asset.percent}25,00%</Text>
        </View>
      </View>
      <View >
        <Text style={styles.text}>Saldo Atual: <Text
          style={styles.textPrice}>R${(qtd * price)
            .toLocaleString('pt-BR', {
            minimumFractionDigits: 2,      
            maximumFractionDigits: 2,
          })}</Text>
        </Text>
      </View>
    </View>
  );
}

export default PortfolioItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
    borderBottomColor: "#444",
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    color: "#FFF"
  },
  percentBox: {
    borderRadius: 4,
    backgroundColor: "#4A4",
  },
  percent: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    padding: 4,
    borderRadius: 4,
  },
  text: {
    color: "#CCC",
    fontSize: 14,
  },
  textPrice: {
    color: "#4A4",
    fontWeight: "bold",
  }
})