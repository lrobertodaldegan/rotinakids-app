import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
}from 'react-native';
import { Colors } from '../../utils';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import DisableButton from '../buttons/DisableButton';
import PointsInput from '../inputs/PointsInput';
import Input from '../inputs/Input';

export default function NewTasksCard({
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {
  const [title, setTitle] = useState(null);
  const [val, setVal] = useState(null);

  useEffect(() => {
    setVal(10);
  }, []);

  return (
    <Card content={
      <>
        <Input label='Toque para definir uma nova tarefa'
            onChange={setTitle} value={title}
            style={styles.input}/>
      
        <PointsInput value={val} onChange={(v) => setVal(v)}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={() => onSave(val)}/>
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
    justifyContent:'center'
  },
  input:{
    fontSize:18
  },
});