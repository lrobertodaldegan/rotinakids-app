import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ToastAndroid,
}from 'react-native';
import { Colors } from '../../utils';
import Label from '../others/Label';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import ShowHideButton from '../buttons/ShowHideButton';
import PointsInput from '../inputs/PointsInput';
import { getDefaultTask } from '../../service/TaskService';

export default function DefaultTasksCard({
                                  title, 
                                  value=10,
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {
  const [val, setVal] = useState(null);
  const [dis, setDis] = useState(false);

  useEffect(() => {
    getDefaultTask(title).then((t) => {
      if(t && t !== null){
        setVal(t.value);
        setDis(t.disabled);
      } else {
        setVal(value);
        setDis(false);
      }
    });
  }, []);

  const handleSave = () => {
    onSave({id:title, title:title, value:val, disabled:false});

    ToastAndroid.show(`Tarefa ${title} salva!`, ToastAndroid.SHORT);
  }

  const handleDisable = () => {
    let d = !dis;

    setDis(d);

    onDisable({id:title, title:title, value:val, disabled:d});

    ToastAndroid.show(`Tarefa ${title} ${d === true ? 'oculta' : 'será exibida'}!`, ToastAndroid.SHORT);
  }

  return (
    <Card content={
      <>
        <Label style={styles.title} size={20} value={title}/>
      
        <PointsInput value={val} onChange={(v) => setVal(v)}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={handleSave}/>

          {/* <ShowHideButton disable={dis} onPress={handleDisable}/> */}
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
  }
});