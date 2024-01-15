import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { BannerAd,BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2420598559068720/5033949228';

export default function AdBanner() {
  return (
    <View style={styles.topFoot}>
      <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.MEDIUM_RECTANGLE}
          requestOptions={{requestNonPersonalizedAdsOnly: false,}}
      />
    </View>
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topFoot:{
    marginBottom:screen.height * 0.14,
    justifyContent:'center',
    alignItems:'center'
  },
});