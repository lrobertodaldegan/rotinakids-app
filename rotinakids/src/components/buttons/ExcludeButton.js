import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';

export default function ExcludeButton({onPress=()=>null}) {
  return (
    <TouchableHighlight underlayColor={Colors.white} 
        onPress={onPress}>

      <View style={styles.wrap}>
        <FontAwesomeIcon icon={faTrash} 
            style={[styles.icon]} size={16}/>

        <Label value='Excluir' style={[styles.lbl]} size={16}/>
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