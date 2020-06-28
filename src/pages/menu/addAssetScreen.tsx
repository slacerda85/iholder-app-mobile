import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import api from '../../services/api';

const AddAssetScreen = () => {

    const [ticker, setTicker] = useState('');
    const [isin, setIsin] = useState('');
    const [description, setDescription] = useState('');

    const sendData = async () => {
        const data = {
            ticker,
            isin,
            description
        }

       await api.post('/assets', data);

       setTicker('');
       setIsin('');
       setDescription('');
    }

    return (<KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TextInput style={styles.TextInput}
                        placeholder="Código do Ativo"
                        placeholderTextColor='#AAA'
                        value={ticker}
                        autoCapitalize='characters'
                        onChangeText={setTicker} />
                    <TextInput style={styles.TextInput}
                        placeholder="ISIN"
                        placeholderTextColor='#AAA'
                        value={isin}
                        keyboardType='default'
                        autoCapitalize='characters'
                        onChangeText={setIsin} />
                    <TextInput style={styles.TextInput}
                        placeholder="Descrição"
                        placeholderTextColor='#AAA'
                        value={description}
                        keyboardType='default'
                        onChangeText={setDescription} />
                    
                    <TouchableOpacity style={styles.TouchableOpacity}
                        onPress={sendData}>
                        <Text style={styles.buttonText}>Adicionar</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>);
}

export default AddAssetScreen;

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
})