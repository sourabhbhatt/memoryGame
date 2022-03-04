import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Modal } from 'react-native';
import { OPENED, CLOSED, CustomButton } from '../Utils'
import Card from '../components/Card';
import ScoreBoard from '../screens/Score';
const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function Game({ navigation }) {
  const [cards, setCards] = useState([]);
  const [tries, setTries] = useState(0);
  const [matches, setMatches] = useState(0);
  const [openCards, setOpenCards] = useState(0);
  const [gameState, setGameState] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fillCards();
  }, []);
  const fillCards = () => {
    let list = [];
    while (list.length !== 16) {
      const index = Math.floor(Math.random() * 100) % 8;
      console.log('index', index);
      const value = data[index];
      if (list.filter(e => e.value === value).length < 2)
        list.push({
          value,
          status: CLOSED,
          vanished: false,
          id: list.length.toString(),
        });
      else continue;
    }
    setCards(list);
  };
  useEffect(() => {
    if (openCards >= 2) checkMatch();
    else setGameState(true);
  }, [openCards]);

  useEffect(() => {
    if (matches === 8) {
      setGameState(false);
      setModalVisible(!modalVisible);
    }
  }, [matches]);

  const checkMatch = () => {
    let matched = false;
    const couple = cards.filter(e => e.status === OPENED);
    if (couple[0].value === couple[1].value) {
      setMatches(matches + 1);
      matched = true;
    }
    setTries(tries + 1);
    setTimeout(() => {
      let list = cards;
      list.forEach(e => {
        e.status = CLOSED;
        if (couple.find(val => val.id === e.id) && matched) e.vanished = true;
      });
      setCards([...list]);
      setOpenCards(0);
      setGameState(true);
    }, 1000);
  };

  const handleCardOpened = id => {
    setGameState(false);
    let list = cards;
    const card = list.find(e => e.id === id);
    card.status = OPENED;
    setCards([...list]);
    setOpenCards(openCards + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { }}
      >
        <View style={styles.centeredView}>
          <Text style={[styles.text,{fontSize:20}]}>{`Congratuations! you have won the game.`}</Text>
          <CustomButton onPress={() => { setModalVisible(!modalVisible); navigation.goBack() }} text={'Okay'} />
        </View>
      </Modal>

      <ScoreBoard matches={matches} tries={tries} />
      {cards.map((item, i) => {
        return (
          <Card
            key={i.toString()}
            id={item.id}
            title={item.value}
            style={styles.card}
            cardState={item.status}
            vanished={item.vanished}
            clickable={gameState}
            cardOpened={handleCardOpened}
          />
        );
      })}
    </ScrollView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  root: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  card: {
    margin: '0.5%',
    width: '24%',
    height: 80,
  },
  scorecard: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  text: { color: '#000' },
  centeredView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  }
});
