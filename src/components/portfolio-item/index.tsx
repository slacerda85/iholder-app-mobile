import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import api, { bova } from '../../services/api';

interface Asset {
  asset_ticker: string,
}

interface Balance {
  asset_ticker: string,
  qtd: number,
  avg_price: number,
}

interface Intraday {
  closPric: number,
  dtTm: string,
  prcFlcn: number
}

const PortfolioItem = (asset: Asset) => {
  const { asset_ticker } = asset;
  const [currentPrice, setCurrentPrice] = useState(0);
  const [qtd, setQtd] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [description, setDescription] = useState('teste');
  const [percent, setPercent] = useState('');
  const [rentab, setRentab] = useState('');

  async function getBalance() {
    const { data } = await api.get(`balance/${asset_ticker}`);
    const { qtd, avg_price } = data[0];
    setQtd(qtd);
    setAvgPrice(avg_price);
  }

  async function getPrice() {
    const { data } = await bova.get(asset.asset_ticker);
    const intraday: Intraday[] = await data.TradgFlr.scty.lstQtn;
    const lastPrice = intraday[intraday.length - 1].closPric;
    setCurrentPrice((lastPrice != undefined ? lastPrice : 0));
  }

  async function getDescription() {
    const { data } = await api.get(`assets/${asset_ticker}`);
    setDescription(data[0].description);
  }

  function getPercent() {
    const result = ((qtd * currentPrice - avgPrice) / avgPrice * 100);
    if (!isNaN(result)) {
      setPercent(result.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }))
    } else {
      setPercent((0).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }))
    }
  }

  function getRentab() {
    const rent = (((qtd * currentPrice) - avgPrice) >= 0 ? '+' : '-') +
    ((qtd * currentPrice) - avgPrice)
      .toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setRentab(rent);
  }

  useEffect(() => {
    getBalance();
  }, );

  useEffect(() => {
    getPrice();
  });

  useEffect(() => {
    getDescription();
  }, []);

  useEffect(() => {
    getPercent();
    getRentab();
  }, [])

  


  return (
    <TouchableWithoutFeedback onPress={() => { }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{asset.asset_ticker}
          <Text style={styles.description}> - {description}</Text></Text>
          <View style={styles.percentBox}>
            <Text style={styles.percent}>{percent}%</Text>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.text}>Saldo Atual: <Text
            style={styles.textPrice}>R${(qtd * currentPrice)
              .toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Text>
          </Text>
          <Text
            style={styles.textPrice}>{rentab}</Text>
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
  description: {
    color: '#999',
    fontSize: 12,
    fontWeight: "normal"
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