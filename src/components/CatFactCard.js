import React from 'react';
import { View, Text } from 'react-native';
import {catfactcard_style} from '../styles/catfactcard_style';

function CatFactCard({ data }) {
    return (
        <View style={catfactcard_style.container}>
            <Text style={catfactcard_style.text}>{data.text}</Text>
        </View>
    )
}

export {CatFactCard};
