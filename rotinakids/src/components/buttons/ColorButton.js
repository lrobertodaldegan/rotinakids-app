import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
}from 'react-native';
import {Colors} from '../../utils/Colors';

export default function ColorButton({color=Colors.yellow, onSelection=(c)=>null}) {
  return (
    <TouchableHighlight underlayColor={Colors.white} 
        onPress={() => onSelection(color)}
        style={[
          styles.colorBtn, 
          {backgroundColor:color}
        ]}>
      <></>
    </TouchableHighlight>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  colorBtn:{
    width:screen.width * 0.2,
    height:screen.width * 0.2,
    borderRadius:screen.width * 0.2,
    borderColor:Colors.lightGray,
    borderWidth:1,
    margin:10
  },
});