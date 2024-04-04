import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import {
  GREY_TEXT,
  NEUTRAL_1,
  NEUTRAL_2,
  NEUTRAL_7,
  WIDTH,
} from '../constants/constants';

import heart from '../svg/heart.svg';
import loader from '../images/loader.png';
import loaderBack from '../images/loaderBack.png';
import Icon from './Icon';

export const TopSection = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={loader}
          style={{ width: 52, position: 'absolute' }}
          resizeMode="contain"
        />

        <Text style={styles.text}>84%</Text>
        <Text style={styles.text}>matching</Text>
      </View>
      <View>
        <Icon icon={heart} width={24} height={24} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>7k saved it</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  textContainer: {
    backgroundColor: NEUTRAL_2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: NEUTRAL_7,
  },
});
