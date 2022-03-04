import React from 'react';
import { View, StyleSheet, Text, ImageBackground, BackHandler, StatusBar } from 'react-native';
import { Color, CustomButton } from '../Utils';

export default function Menu({ navigation }) {
  return (
    <ImageBackground source={require('../assets/1593899308.gif')} style={styles.root}>
      <StatusBar barStyle="dark-content" animated={true} hidden={false} backgroundColor={Color.offwhite} translucent={false} />
      <Text style={styles.title}>Memory Game</Text>
      <CustomButton onPress={() => navigation.navigate('game')} text={'▶️ Play'} />
      <CustomButton onPress={() => { }} text={'🔊 Sound'} />
      <CustomButton onPress={() => BackHandler.exitApp()} text={'🚪 Exit'} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: '#000'
  },
});
