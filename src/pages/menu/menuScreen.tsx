import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MenuScreen = () =>{

    return (
        <View>
            <TouchableOpacity>
            <Text>Adicionar Ativo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Text>Adicionar Operação</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MenuScreen;