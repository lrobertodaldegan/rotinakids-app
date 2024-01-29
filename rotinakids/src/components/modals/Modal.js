import { faClose } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Icon from '../others/Icon';

export default function Modal({content, onClose=()=>null}) {
  return (
    <View style={styles.ctn} elevation={5}>
      <TouchableHighlight underlayColor={Colors.white} 
          style={styles.close}
          onPress={onClose}>

        <Icon icon={faClose} label={'Fechar'}/>
      </TouchableHighlight>
      
      {content}
    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  ctn:{
    zIndex:25,
    alignItems:'center',
    width:screen.width - 20,
    marginLeft:10,
    borderRadius:10,
    backgroundColor:Colors.white,
    position:'absolute',
    top:10,
    height:screen.height - 20,
    paddingVertical:20,
    paddingHorizontal:10,
  },
  close:{
    alignItems:'flex-end',
    width:screen.width - 60
  },
});