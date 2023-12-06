import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
}from 'react-native';
import { Colors } from '../../utils';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import PointsInput from '../inputs/PointsInput';
import ExcludeButton from '../buttons/ExcludeButton';
import IconInput from '../inputs/IconInput';

export default function TaskCard({
                                  item={id:0,title:'',value:10},
                                  onSave=(item)=>null,
                                  onExclude=(id)=>null
                                }) {
  const [title, setTitle] = useState(null);
  const [val, setVal] = useState(null);

  useEffect(() => {
    setVal(item.value);
    setTitle(item.title);
  }, []);

  return (
    <Card content={
      <>
        <IconInput label='Toque para renomear a tarefa'
            onChange={setTitle} value={title}
            style={styles.input}/>
      
        <PointsInput value={val} onChange={(v) => setVal(v)}/>

        <View style={styles.btnWrap}>
          <SaveButton 
              onPress={() => onSave({id:item.id,title:title, value:val})}/>

          <ExcludeButton 
              onPress={() => onExclude(item.id)}/>
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
  },
  input:{
    fontSize:18
  },
});