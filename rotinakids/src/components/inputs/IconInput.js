import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
}from 'react-native';
import {Colors} from '../../utils/Colors';

export default function IconInput({
                              label='', 
                              value='',
                              icon=faPen, 
                              iconColor=Colors.pinker,
                              style={},
                              placeholderColor=Colors.gray,
                              maxLength=null,
                              multiLine=true,
                              onChange=(val)=>null
                            }) {
  return (
    <View style={styles.wrap}>
      <FontAwesomeIcon icon={icon} size={12}
          style={[styles.icon, {color:iconColor}]}/>

      <TextInput value={value} 
          style={[styles.input,style]}
          onChangeText={(text) => onChange(text)}
          placeholder={label}
          placeholderTextColor={placeholderColor}
          textBreakStrategy='simple'
          maxLength={maxLength}
          multiline={multiLine}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    padding:10,
    marginVertical:10,
    color:Colors.gray,
    fontFamily:'EncodeSans-Regular',
    textAlign:'center',
    marginLeft:5,
    color:Colors.pinker,
    fontSize:18,
    minWidth:50
  },
  icon:{

  },
});