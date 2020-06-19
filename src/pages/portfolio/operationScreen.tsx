import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

const OperationScreen = () => {

    

    return (
        <View>
            <Text>Quantidade</Text>
            <TextInput />
            <Text>Valor</Text>
            <TextInput />
            <Text>Data</Text>
            <TextInput />
            <Text>Taxas</Text>
            <TextInput />
            <TouchableOpacity>
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default OperationScreen;