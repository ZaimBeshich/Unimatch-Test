import React, { FC } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { NEUTRAL_7, WIDTH } from '../constants/constants';
import videoMock from '../images/videoMock.png';
import maskGradient from '../images/maskGradient.png';
import { TopSection } from 'components/TopSection';

export const Investors: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={videoMock}
        style={styles.videoMockBlock}
        imageStyle={styles.videoMock}>
        <ImageBackground source={maskGradient} style={styles.maskGradient}>
          <TopSection />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 20,
    // borderColor: 'red',
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 15,
  },
  videoMockBlock: {
    flex: 1,
    // borderRadius: 20,
  },
  videoMock: {
    resizeMode: 'cover',
    borderRadius: 20,
  },
  maskGradient: {
    flex: 1,
    marginBottom: -1,
    borderRadius: 20,
  },
});
