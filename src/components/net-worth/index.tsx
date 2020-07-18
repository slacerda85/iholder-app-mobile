import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import api, { bova } from '../../services/api';

const NetWorth = () => {

  const [total, setTotal] = useState({
    "lastValue": 0,
  "avgPrice": 0,
  "profit": 0,
  "percent": 0
  });

  async function getTotal() {
    const { data } = await api.get('networth');
    setTotal(data);
  }

  useEffect(() => {
    getTotal()
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.header} >
        <Text style={styles.title}>Patrimônio Líquido:</Text>
        <View style={styles.percentBox}>
  <Text style={styles.percentText}>{total.percent.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}%</Text>
        </View></View>
        <View style={styles.header} >
        <Text style={styles.value}>R${total.lastValue.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Text>
              <Text style={styles.profit} >R${total.profit.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Text></View>
      </View>
    </View>
  );
}

export default NetWorth;

const styles = StyleSheet.create({
  container: {
  },
  box: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#222222',

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'left'
  },
  value: {
    fontWeight: 'bold',
    color: '#4A4',
    fontSize: 18
  },

  profit: {
    paddingTop: 8,
    fontWeight: 'bold',
    color: '#4A4',
    fontSize: 14
  },
  percentBox: {
    borderRadius: 4,
    backgroundColor: "#4A4",
  },
  percentText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
})