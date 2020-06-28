import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const NetWorth = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
            <Text style={styles.title}>Patrimônio Líquido:</Text>
            <Text style={styles.value}>R${'XXX,XX'}</Text>
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
        margin: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#222222',

    },
    title: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 16
    },
    value: {
        fontWeight: 'bold',
        color: '#4A4',
        fontSize: 18
    }
})