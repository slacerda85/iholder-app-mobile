import React, { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import {
    Text,
    Platform,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import api from '../../services/api';

const OperationScreen = () => {
    const [asset_ticker, setAsset_ticker] = useState('');
    const [price, setPrice] = useState('');
    const [qtd, setQtd] = useState('');
    const [fees, setFees] = useState('');
    const [date, setDate] = useState('');




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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput style={styles.TextInput}
                        placeholder="Código do Ativo"
                        placeholderTextColor='#AAA'
                        autoCapitalize='characters'
                        onChangeText={setAsset_ticker} />
                    <TextInput style={styles.TextInput}
                        placeholder="Quantidade"
                        placeholderTextColor='#AAA'
                        keyboardType='numeric'
                        onChangeText={setQtd} />
                    <TextInput style={styles.TextInput}
                        placeholder="Valor"
                        placeholderTextColor='#AAA'
                        keyboardType='numeric'
                        onChangeText={setPrice} />
                    <TextInput style={styles.TextInput}
                        placeholder="Taxas"
                        placeholderTextColor='#AAA'
                        keyboardType='numeric'
                        onChangeText={setFees} />
                    <TextInputMask
                        type={'datetime'} style={styles.TextInput}
                        placeholder="Data"
                        placeholderTextColor='#AAA'
                        value={date}
                        onChangeText={text => setDate(text)} />
                    <TouchableOpacity style={styles.TouchableOpacity}
                        onPress={sendData}>
                        <Text style={styles.buttonText}>Adicionar</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default OperationScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: "flex-end"
    },
    TextInput: {
        marginHorizontal: 14,
        marginTop: 16,
        padding: 8,
        backgroundColor: "#333",
        borderRadius: 8,
        fontSize: 16,
        color: "#FFF"
    },
    text: {
        marginHorizontal: 14,
        marginTop: 14,
        color: "#FFF",
        fontSize: 14
    },
    TouchableOpacity: {
        backgroundColor: "#4A4",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        padding: 8,
    }
});