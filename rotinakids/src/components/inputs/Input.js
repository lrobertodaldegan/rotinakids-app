import React from 'react';
import {
    StyleSheet,
    TextInput,
}from 'react-native';
import {Colors} from '../../utils/Colors';

export default function Input({
                              label='', 
                              value='', 
                              style={},
                              onChange=(val)=>null
                            }) {
  return (
    <TextInput value={value} 
        style={[styles.input,style]}
        onChangeText={(text) => onChange(text)}
        placeholder={label}
        placeholderTextColor={Colors.gray}
        textBreakStrategy='simple'
        multiline={true}
    />
  )
}

const styles = StyleSheet.create({
  input:{
    padding:10,
    marginVertical:10,
    color:Colors.gray,
    fontFamily:'EncodeSans-Regular',
    textAlign:'center'
  }
});