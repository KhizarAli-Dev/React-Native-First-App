import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <>
      <View>
        <View>
          <Text style={styles.headingText}>Flex Box</Text>
        </View>

        <View style={styles.container}>
          <View style={[styles.cardOne, styles.card]}>
            <Text style={styles.cardText}>FlatCard1</Text>
          </View>
          <View style={[styles.cardTwo, styles.card]}>
            <Text style={styles.cardText}>FlatCard2</Text>
          </View>
          <View style={[styles.cardThree, styles.card]}>
            <Text style={styles.cardText}>FlatCard3</Text>
          </View>
          <View style={[styles.cardFour, styles.card]}>
            <Text style={styles.cardText}>FlatCard4</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    padding:8
  },
  card: {
    width: '20%',
    height: 100,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  cardOne: {
    backgroundColor: '#136a8a',
  },
  cardTwo: {
    backgroundColor: '#00bf8f',
  },
  cardThree: {
    backgroundColor: '#6441A5',
  },
  cardFour: {
    backgroundColor: '#D38312',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal:8
  },
  cardText: {
    color: 'white',
  },
});
