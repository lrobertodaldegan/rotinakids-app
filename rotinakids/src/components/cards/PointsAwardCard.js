import React, {useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
}from 'react-native';
import { Colors } from '../../utils';
import Label from '../others/Label';
import Card from './Card';
import InlineInput from '../inputs/InlineInput';
import SaveButton from '../buttons/SaveButton';
import DisableButton from '../buttons/DisableButton';

export default function PointsAwardCard({
                                  title,
                                  subtitle, 
                                  placeholder, 
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {
  const [val, setVal] = useState(null);

  return (
    <Card content={
      <>
        <Label style={styles.title} size={18} value={title}/>

        <Label size={14} value={subtitle} style={styles.txt}/>
      
        <InlineInput labelBefore='Concedida a cada' 
            labelAfter='pontos' 
            placeholder={placeholder}
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
    marginBottom:20,
    marginTop:10,
  },
  txt:{
    textAlign:'center',
    color:Colors.gray
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
    flexWrap:'nowrap',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:screen.width * 0.1,
    marginTop:20,
  }
});