import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
}from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';

export default function CalendarButton({onPress=()=>null}) {
  return (
    <TouchableHighlight underlayColor={Colors.white} 
        style={{minHeight:30}}
        onPress={onPress}>

      <View style={styles.wrap}>
        <FontAwesomeIcon icon={faCalendarDays} 
            style={[styles.icon]} size={16}/>

        <Label value={'Histórico'} 
            style={[styles.lbl]} size={16}/>
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
    color:Colors.gray,
    marginRight:10
  },
  lbl:{
    color:Colors.gray
  },
});