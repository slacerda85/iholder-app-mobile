import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
Alert } from 'react-native';
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

interface Operation {
  id: number,
  asset_id: number,
  price: number,
  qtd: number,
  date: string,
  fees: number,
  total_operation_cost: number
}


const PortfolioItem = (asset: Asset,) => {
  const [price, setPrice] = useState(0);
  const [qtd, setQtd] = useState(0);
  const [worth, setWorth] = useState(0);

  async function getOperations() {
    const { data }: { data: Operation[] } = await api.get(`operations/${asset.ticker}`);
    const sumQtd = data.reduce((acc, curr) => acc + curr.qtd, 0);
    const sumValue = data.reduce((acc, curr) => acc + curr.total_operation_cost, 0);
    setWorth(sumValue);
    setQtd(sumQtd);
  }


  useEffect(() => {
    try {
      bova.get(asset.ticker).then(response => {
        const intraday: Intraday[] = response.data.TradgFlr.scty.lstQtn;
        const lastPrice = intraday[intraday.length - 1].closPric;
        setPrice((lastPrice != undefined ? lastPrice : 0));
      })
    } catch (error) {
      Alert.alert('Ops', 'Houve um erro.')
    }
  },);

  useEffect(() => {
    getOperations();
    
  },)

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{asset.ticker} - {asset.description}</Text>
          <View style={styles.percentBox}>
            <Text style={styles.percent}>{((qtd * price - worth) / worth * 100)
              .toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}%</Text>              
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.text}>Saldo Atual: <Text
            style={styles.textPrice}>R${(qtd * price)
              .toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Text>
          </Text>
          <Text
            style={styles.textPrice}>{(((qtd * price) - worth) >= 0 ? '+' : '-') + ((qtd * price) - worth)
              .toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    fontSize: 14,
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
    paddingTop: 4,
    color: "#4A4",
    fontWeight: "bold",
  },
})