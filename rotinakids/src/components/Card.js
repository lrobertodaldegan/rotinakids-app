import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
}from 'react-native';
import { Colors } from '../utils';


export default function Card({content}) {
  return (
    <View style={styles.wrap} elevation={5}>

      {content}

    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:Colors.white,
    borderRadius:10,
    marginLeft:10,
    width:screen.width - 20,
    paddingVertical:10,
    paddingHorizontal:20,
    marginBottom:10,
  }
});