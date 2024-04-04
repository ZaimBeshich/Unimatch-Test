import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NEUTRAL_1, TAB_BLACK_2 } from '../constants/constants';
import { Investors } from '../screens/Investors';
import { TabMenu } from '../components/TabMenu';
import { Header } from 'components/Header';

export const MainNavigator: FC = () => {
  //! Display dashboard navigator
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: TAB_BLACK_2,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Header />
      <Investors />
      <TabMenu paddingBottom={insets.bottom} />
    </View>
  );
};

export default MainNavigator;
