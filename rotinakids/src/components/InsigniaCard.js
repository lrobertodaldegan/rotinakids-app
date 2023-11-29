import React from 'react';
import {
    StyleSheet,
    Dimensions,
    ImageBackground,
}from 'react-native';
import { Colors } from '../utils';
import Label from './Label';
import Card from './Card';
import insignias from '../assets/img/insignias.png';

export default function InsigniaCard() {
  return (
    <Card content={
      <>
        <Label style={styles.title} size={20} value={'Medalhas'}/>
      
        <Label style={styles.desc} size={16}
            value={'As crianças ganham medalhas cada vez que vencem um desafio. Cada medalha varia de "madeira" até "super", de acordo com a dificudade dos desafios superados:'}/>
      
        <ImageBackground source={insignias} style={[styles.logo]} 
            resizeMode='contain'/>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:Colors.white,
    borderRadius:10,
    marginLeft:10,
    width:screen.width - 20,
  },
  title:{
    textAlign:'center',
    marginBottom:20,
    marginTop:10,
  },
  desc:{
    textAlign:'justify'
  },
  logo:{
    height:screen.height * 0.06,
    marginTop:10,
    marginBottom:20,
  },
});