import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';

export default function InlineInput({
                          labelBefore='', 
                          labelAfter='', 
                          placeholder='', 
                          value, 
                          onChange=(val)=>null
                        }) {
  return (
    <View style={styles.wrap}>
      <Label value={labelBefore} size={14} style={styles.lbl}/>

      <TextInput value={value} 
          style={styles.input}
          onChangeText={(text) => onChange(text)}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray}
          textBreakStrategy='simple'
          multiline={false}
          keyboardType={'numeric'}
      />

      <Label value={labelAfter} size={14} style={styles.lbl}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  lbl:{
    color:Colors.gray,
  },
  input:{
    padding:0,
    textAlign:'center',
    color:Colors.gray,
    fontFamily:'EncodeSans-Regular',
    marginHorizontal:5,
    width:50,
    borderWidth:1,
    borderBottomColor:Colors.gray,
    borderTopColor:Colors.white,
    borderLeftColor:Colors.white,
    borderRightColor:Colors.white,
  }
});