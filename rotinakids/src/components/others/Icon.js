import React from 'react';
import {
  View,
  StyleSheet,
}from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Colors} from '../../utils/Colors';
import Label from './Label';

export default function Icon({style={}, icon, label, size=20}) {

  const renderLabel = () => {
    if(label && label !== null)
      return <Label value={label} style={[styles.default, style]}/>

    return <></>
  }

  return (
    <View style={styles.ctn}>
      <FontAwesomeIcon icon={icon} style={[styles.default, style]} size={size}/>

      {renderLabel()}
    </View>
  )
}

const styles = StyleSheet.create({
  ctn:{
    alignItems:'center'
  },
  default:{
    color:Colors.gray
  }
});