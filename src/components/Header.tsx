import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { GREY_TEXT, NEUTRAL_1, NEUTRAL_7, WIDTH } from '../constants/constants';
import profile from '../images/profile.png';
import comments from '../svg/comments.svg';
import bell from '../svg/bell.svg';
import Icon from './Icon';

// type HeaderProps = {
//   paddingTop: number;
// };

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profile} style={styles.img} />
        <View>
          <Text style={styles.topText}>Good night,</Text>
          <Text style={styles.bottomText}>Julia</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <Icon icon={bell} width={24} height={24} />
        <Icon icon={comments} width={24} height={24} style={styles.rightIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 14,
    marginBottom: 5,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'cover',
    width: 52,
    height: 52,
    marginRight: 14,
  },
  topText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: GREY_TEXT,
  },
  bottomText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: NEUTRAL_7,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  rightIcon: {
    marginLeft: 32,
  },
});
