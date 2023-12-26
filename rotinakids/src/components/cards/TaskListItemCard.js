import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
}from 'react-native';
import { Colors } from '../../utils';

import IconButton from '../buttons/IconButton';
import UndoButton from '../buttons/UndoButton';
import Icon from '../others/Icon';
import Label from '../others/Label';
import Card from './Card';

export default function TaskListItemCard({
                                      taskId, 
                                      label, 
                                      value, 
                                      undoable=false,
                                      onConclude=()=>null
                                  }) {

  const renderUndoButton = () => {
    if(undoable === true)
      return <UndoButton/>

    return <></>
  }

  return (
    <Card content={
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Label style={styles.lbl} size={18} value={`${label}`}/>

          <Label style={styles.lbl} size={12} value={`${value} ponto(s)`}/>
        </View>

        <View style={styles.mid}>
          <IconButton icon={faStar} label={'Não fez'}/>

          <IconButton icon={faStarHalf} label={'Pode melhorar'} />

          <IconButton icon={faStar} label={'Perfeito!'} 
              iconStyle={styles.ip}/>
        </View>

        <View style={styles.bot}>
          {renderUndoButton()}
        </View>
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
  ip:{
    color:Colors.pink
  },
  
});