import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';

export default function SaveButton({onPress=()=>null}) {
  return (
    <TouchableHighlight underlayColor={Colors.white} 
        style={{minHeight:30}}
        onPress={onPress}>

      <View style={styles.wrap}>
        <FontAwesomeIcon icon={faFloppyDisk} 
            style={[styles.icon]} size={16}/>

        <Label value='Salvar' style={[styles.lbl]} size={16}/>
      </View>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    color:Colors.pinker,
    marginRight:10
  },
  lbl:{
    color:Colors.pinker
  },
});