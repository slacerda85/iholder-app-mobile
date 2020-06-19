import React, { useState } from 'react';
import {
    Text,
    Platform,
    View,
    ScrollView,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import api from '../../services/api';

const OperationScreen = () => { 
    const [asset_ticker, setAsset_ticker] = useState('');
    const [price, setPrice] = useState('');
    const [qtd, setQtd] = useState('');
    const [date, setDate] = useState('');
    const [fees, setFees] = useState('');

    
    const sendData = async () => {
        const data = {
            asset_ticker,
            price: Number(price),
            qtd: Number(qtd),
            date,
            fees: Number(fees)
        }


        await api.post('/operations', data);
    }
    

    return (
        <ScrollView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
            
            <Text style={styles.text}>Código do Ativo</Text>
            <TextInput style={styles.TextInput}
            autoCapitalize='characters'
            onChangeText={setAsset_ticker} />
            <Text style={styles.text}>Quantidade</Text>
            <TextInput style={styles.TextInput}
            keyboardType='numeric'
            onChangeText={setQtd} />
            <Text style={styles.text}>Valor</Text>
            <TextInput style={styles.TextInput}
            onChangeText={setPrice} />
            <Text style={styles.text}>Taxas</Text>
            <TextInput style={styles.TextInput}
            onChangeText={setFees} />
            <Text style={styles.text}>Data</Text>
            <TextInput style={styles.TextInput}
            onChangeText={setDate} />            
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={sendData}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default OperationScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000", 
        flex: 1,
    },
    TextInput: {        
        marginHorizontal: 14,
        marginTop: 8,
        padding: 8,
        backgroundColor: "#222",
        borderRadius: 5,
        fontSize: 16,
        color: "#FFF"
        
    },
    text: {
        paddingHorizontal: 5,
        marginHorizontal: 14,
        marginTop: 14,
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
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
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        padding: 8,
    }
});