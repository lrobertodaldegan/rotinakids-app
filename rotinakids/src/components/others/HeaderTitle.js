import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Label from './Label';
import LogoButton from '../buttons/LogoButton';

export default function HeaderTitle({navigation, label=null}) {
  return (
    <View style={styles.wrap}>
      <LogoButton navigation={navigation}/>      
      
      <Label value={label ? label : ''} size={20} style={styles.lbl}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  lbl:{
    marginLeft:10
  },
});