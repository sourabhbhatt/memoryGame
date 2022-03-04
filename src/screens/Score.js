import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color } from '../Utils';

export default function Score({ matches, tries }) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Matches : {matches}</Text>
            <Text style={styles.text}>Tries : {tries}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingBottom: 30,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
    },
    text: {
        color: '#000',
        fontWeight:'bold'
    }
});
