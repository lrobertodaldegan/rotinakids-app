import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
}from 'react-native';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../../utils';
import IconButton from '../buttons/IconButton';
import UndoButton from '../buttons/UndoButton';
import Label from '../others/Label';
import Card from './Card';
import { saveDailyTask } from '../../service/TaskService';

const options = ['Não fez', 'Pode melhorar', 'Perfeito!'];

export default function TaskListItemCard({
                                      day,
                                      childId,
                                      taskId, 
                                      label, 
                                      value, 
                                      preSelection=null,
                                      onConclude=()=>null
                                  }) {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    if(preSelection && preSelection !== null)
      setSelection(preSelection);
  }, []);

  const conclude = (newSlctn) => {
    if(newSlctn && newSlctn !== null){
      setSelection(newSlctn);

      let task = {
        taskId:taskId,
        score: newSlctn
      };
      
      saveDailyTask(day, childId, task)
      .then(() => onConclude());
    }
  }

  const renderLayout = () => {
    if(selection && selection !== null) {

      let ptsMade = selection === options[2] ? value : value * 0.5;
      
      let lbl = `Ganhou ${selection === options[2] ? '' : 'só'} ${ptsMade} ponto(s)!`
      
      let iLbl = selection === options[2] ? ' :)' : ' :/';

      let ico  = selection === options[1] ? faStarHalf : faStar;

      if(selection === options[0]){
        lbl = `Não ganhou pontos!`;
      
        iLbl= ' :(';
      }
      
      let stl = selection === options[0] ? {} : styles.ip;

      let lblStl = selection === options[0] ? styles.lblGray : styles.lblBPink;

      return (
        <>
          <View style={styles.topS}>
            <Label style={styles.lbl} size={18} value={`${label}`}/>

            <IconButton icon={ico} label={`${selection} ${iLbl}`}
                iconStyle={stl} style={styles.slctBtn}/>

            <Label style={lblStl} size={12} value={lbl}/>

            <UndoButton onPress={() => setSelection(null)}/>

          </View>
        </>
      )
    } else {
      return (
        <>
          <View style={styles.top}>
            <Label style={styles.lbl} size={18} value={`${label}`}/>

            <Label style={[styles.lbl, styles.points]} 
                size={12} value={`${value} ponto(s)`}/>
          </View>

          <View style={styles.mid}>
            <IconButton icon={faStar} label={options[0]}
                onPress={() => conclude(options[0])}/>

            <IconButton icon={faStarHalf} label={options[1]} 
                onPress={() => conclude(options[1])}/>

            <IconButton icon={faStar} label={options[2]}
                onPress={() => conclude(options[2])} 
                iconStyle={styles.ip}/>
          </View>
        </>
      );
    }
  }

  return (
    <Card content={
      <View style={styles.wrap}>
        {renderLayout()}
      </View>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    alignItems:'center'
  },
  top:{
    flex:2,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    width:screen.width - 60,
  },
  topS:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:5,
  },
  mid:{
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:screen.width - 60,
    marginVertical:15
  },
  bot:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:screen.width - 60,
  },
  lbl:{
    textAlign:'center',
  },
  points:{
    color:Colors.gray
  },
  ip:{
    color:Colors.pink
  },
  lblGray:{
    color:Colors.gray,
    marginTop:5,
    marginBottom:10
  },
  lblBPink:{
    color:Colors.pink,
    marginTop:5,
    marginBottom:10
  },
  slctBtn:{
    marginTop:10
  },
});