import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { NEUTRAL_1, NEUTRAL_5, NEUTRAL_7, WIDTH } from '../constants/constants';
import Icon from './Icon';
import heart from '../svg/heart.svg';
import wallet from '../svg/wallet.svg';
import users from '../svg/users.svg';

type TabBarProps = {
  paddingBottom: number;
};

export const TabMenu = (props: TabBarProps) => {
  const { paddingBottom } = props;
  return (
    <View style={[styles.container, { paddingBottom }]}>
      <View style={styles.tab}>
        <Icon icon={heart} width={24} height={24} />
        <Text style={styles.text}>Saved</Text>
      </View>
      <View style={styles.tab}>
        <Icon icon={wallet} width={24} height={24} />
        <Text style={[styles.text, styles.focusText]}>Investors</Text>
      </View>
      <View style={styles.tab}>
        <Icon icon={users} width={24} height={24} />
        <Text style={styles.text}>Matches</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: NEUTRAL_1,
    // height: 86,
    // borderColor: 'red',
    // borderWidth: 1,
    marginTop: 20,
    paddingTop: 13,
  },
  text: {
    marginTop: 2,
    color: NEUTRAL_5,
  },
  focusText: {
    color: NEUTRAL_7,
  },
  tab: {
    width: WIDTH / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
