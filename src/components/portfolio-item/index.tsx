import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import api, { bova } from '../../services/api';

interface Portfolio {
  asset_ticker: string,
  description: string,
  qtd: number,
  avg_price: number,
  lastPrice: number,
  profit: number,
  percent: number
}

const PortfolioItem = (asset: Portfolio) => {
  
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{asset.asset_ticker}
          <Text style={styles.description}> - {asset.description.substring(0, 25)}</Text></Text>
          <View style={styles.percentBox}>
            <Text style={styles.percent}>{asset.percent
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}%</Text>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.text}>Saldo Atual: <Text
            style={styles.textPrice}>R${(asset.qtd * asset.lastPrice)
              .toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</Text>
          </Text>
          <Text
            style={styles.textPrice}>R${asset.percent
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
    paddingHorizontal: 8,
    paddingVertical: 4,
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