import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
}from 'react-native';
import Label from '../others/Label';
import Card from './Card';
import { insignias } from '../../utils/Insignias';
import Insignia from '../others/Insignia';

export default function InsigniaListItemCard({insigniaId, label}) {

  const renderInsignia = () => {
    let insigniaF = insignias.filter(i => i.id === insigniaId)
    
    if(insigniaF && insigniaF !== null && insigniaF.length > 0)
      return <Insignia insignia={insigniaF[0]} />
    else
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