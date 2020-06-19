import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MenuScreen = ({ navigation }: any) =>{

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.text}>Adicionar Ativo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate('Operações')}
            >
            <Text style={styles.text}>Adicionar Operação</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000", 
      flex: 1,
    },
    TouchableOpacity: {
        backgroundColor: "#4A4",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: "#FFF",
        fontSize: 16,
        padding: 8,
    }
  })