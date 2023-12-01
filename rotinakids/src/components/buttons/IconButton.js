import React from 'react';
import {
  TouchableHighlight,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Icon from '../others/Icon';

export default function IconButton({
                          label, 
                          icon, 
                          iconSize,
                          style={},
                          iconStyle={},
                          onPress=()=>null}) {
  return (
    <TouchableHighlight underlayColor={Colors.white} 
        style={style}
        onPress={onPress}>

      <Icon icon={icon} label={label} size={iconSize} style={iconStyle}/>

    </TouchableHighlight>
  )
}