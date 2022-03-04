import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
export const OPENED = 1;
export const CLOSED = 0;

export const Color = {
    white: '#fff',
    offwhite: 'rgba(245, 245, 245,1.0)',
    black: '#000',
    red: 'red',
    buttonColor: 'rgba(171, 71, 188,0.8)'
}

export const CustomButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity style={style.btn} onPress={onPress}>
            <Text style={style.btnTitle}>{text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btn: {
        marginVertical: 10,
        minWidth: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 11,
        backgroundColor: Color.buttonColor,
        borderRadius: 5,
        elevation:2
    },
    btnTitle: {
        color: Color.black,
        fontSize: 18,
        fontWeight: 'bold'
    },
})