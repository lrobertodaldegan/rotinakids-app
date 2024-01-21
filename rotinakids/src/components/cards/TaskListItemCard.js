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
import { scoreOptions } from '../../service/ScoreService';

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
    setSelection(preSelection);
  }, []);

  const conclude = (newSlctn) => {
    if(newSlctn && newSlctn !== null){
      setSelection(newSlctn);

      let ptsMade = newSlctn === scoreOptions[2] ? value : value * 0.5;

      let task = {
        taskId:taskId,
        score: newSlctn,
        points: newSlctn === scoreOptions[0] ? 0 : ptsMade,
        childId: childId,
        title:label,
      };
      
      saveDailyTask(day, childId, task)
      .then(() => onConclude());
    }
  }

  const renderLayout = () => {
    if(selection && selection !== null) {

      let ptsMade = selection === scoreOptions[2] ? value : value * 0.5;
      
      let lbl = `Ganhou ${selection === scoreOptions[2] ? '' : 'só'} ${ptsMade} ponto(s)!`
      
      let iLbl = selection === scoreOptions[2] ? ' :)' : ' :/';

      let ico  = selection === scoreOptions[1] ? faStarHalf : faStar;

      if(selection === scoreOptions[0]){
        lbl = `Não ganhou pontos!`;
      
        iLbl= ' :(';
      }
      
      let stl = selection === scoreOptions[0] ? {} : styles.ip;

      let lblStl = selection === scoreOptions[0] ? styles.lblGray : styles.lblBPink;

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
            <IconButton icon={faStar} label={scoreOptions[0]}
                onPress={() => conclude(scoreOptions[0])}/>

            <IconButton icon={faStarHalf} label={scoreOptions[1]} 
                onPress={() => conclude(scoreOptions[1])}/>

            <IconButton icon={faStar} label={scoreOptions[2]}
                onPress={() => conclude(scoreOptions[2])} 
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