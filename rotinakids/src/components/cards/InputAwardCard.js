import React, {useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
}from 'react-native';
import Label from '../others/Label';
import Card from './Card';
import Input from '../inputs/Input';
import SaveButton from '../buttons/SaveButton';
import DisableButton from '../buttons/DisableButton';

export default function InputAwardCard({
                                  title, 
                                  placeholder, 
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {
  const [val, setVal] = useState(null);

  return (
    <Card content={
      <>
        <Label style={styles.title} size={18} value={title}/>
      
        <Input label={placeholder}
            value={val} onChange={(txt) => setVal(txt)}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={() => onSave(val)}/>

          <DisableButton onPress={() => onDisable(val)}/>
        </View>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    marginTop:10,
  },
  desc:{
    textAlign:'justify'
  },
  logo:{
    height:screen.height * 0.06,
    marginTop:10,
    marginBottom:20,
  },
  btnWrap:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    paddingHorizontal:screen.width * 0.1,
    paddingVertical:10
  }
});