import React from 'react';
import {
    StyleSheet,
    View,
}from 'react-native';
import { Colors } from '../../utils';
import PointsButton from '../buttons/PointsButton';
import Label from '../others/Label';

export default function PointsInput({ 
                              value=0, 
                              onChange=(val)=>null
                            }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.ptWrap}>
        <PointsButton value={10} selected={value === 10}
            onSelection={onChange}/>
        <PointsButton value={20} selected={value === 20}
            onSelection={onChange}/>
        <PointsButton value={30} selected={value === 30}
            onSelection={onChange}/>
        <PointsButton value={40} selected={value === 40}
            onSelection={onChange}/>
        <PointsButton value={50} selected={value === 50}
            onSelection={onChange}/>
        <PointsButton value={60} selected={value === 60}
            onSelection={onChange}/>
        <PointsButton value={70} selected={value === 70}
            onSelection={onChange}/>
        <PointsButton value={80} selected={value === 80}
            onSelection={onChange}/>
        <PointsButton value={90} selected={value === 90}
            onSelection={onChange}/>
      </View>

      <Label value={`Vale ${value} pontos`} size={14}
          style={styles.lbl}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap:{
    justifyContent:'center',
    alignItems:'center'
  },
  ptWrap:{
    flex:9,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },
  lbl:{
    color:Colors.gray
  },
});