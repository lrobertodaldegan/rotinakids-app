import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
}from 'react-native';
import { Colors } from '../../utils';
import Label from '../others/Label';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import ShowHideButton from '../buttons/ShowHideButton';
import PointsInput from '../inputs/PointsInput';

export default function DefaultTasksCard({
                                  title, 
                                  value=10,
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {
  const [val, setVal] = useState(null);

  useEffect(() => {
    setVal(value);
  }, []);

  return (
    <Card content={
      <>
        <Label style={styles.title} size={20} value={title}/>
      
        <PointsInput value={val} onChange={(v) => setVal(v)}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={() => onSave(val)}/>

          <ShowHideButton onPress={() => onDisable(val)}/>
        </View>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:Colors.white,
    borderRadius:10,
    marginLeft:10,
    width:screen.width - 20,
  },
  title:{
    textAlign:'center',
    marginBottom:20,
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
    paddingHorizontal:screen.width * 0.1,
    paddingVertical:10,
    justifyContent:'space-between'
  }
});