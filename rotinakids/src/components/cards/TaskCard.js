import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ToastAndroid,
}from 'react-native';
import { Colors } from '../../utils';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import PointsInput from '../inputs/PointsInput';
import ExcludeButton from '../buttons/ExcludeButton';
import IconInput from '../inputs/IconInput';
import Label from '../others/Label';

export default function TaskCard({
                                  item={id:0,title:'',value:10},
                                  onSave=(item)=>null,
                                  onExclude=(id)=>null
                                }) {
  const [title, setTitle] = useState(null);
  const [val, setVal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setVal(item.value);
    setTitle(item.title);
  }, []);

  const handleSave = () => {
    if(title && title !== null){
      setError(null);
      
      onSave({id:title, title:title, value:val});

      ToastAndroid.show('Tarefa salva!', ToastAndroid.SHORT);
    } else {
      setError('Dica: Informe um título antes de salvar a tarefa.');
    }
  }

  const handleExclude = () => {
    onExclude(title);

    ToastAndroid.show('Tarefa removida!', ToastAndroid.SHORT);
  }

  return (
    <Card content={
      <>
        <IconInput label='Toque para renomear a tarefa'
            onChange={setTitle} value={title}
            style={styles.input}/>
      
        <PointsInput value={val} onChange={(v) => setVal(v)}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={handleSave}/>

          <ExcludeButton onPress={handleExclude}/>
        </View>

        <Label value={error}/>
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