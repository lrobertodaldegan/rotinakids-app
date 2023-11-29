import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
}from 'react-native';
import Label from './Label';
import Card from './Card';
import { insignias } from '../utils/Insignias';

export default function InsigniaListItemCard({insigniaId, label}) {

  const renderInsignia = () => {
    for(let i = 0; i < insignias.length; i++){
      if(insignias[i].id === insigniaId)
        return <ImageBackground source={insignias[i].icon} style={[styles.logo]} resizeMode='contain'/>
    }

    return <></>
  }

  return (
    <Card content={
      <View style={styles.wrap}>
        {renderInsignia()}
      
        <Label style={styles.title} size={18} value={`${label}`}/>
      </View>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    textAlign:'center',
  },
  desc:{
    textAlign:'justify'
  },
  logo:{
    height:screen.height * 0.06,
    width:screen.height * 0.06,
    marginRight:10
}
});