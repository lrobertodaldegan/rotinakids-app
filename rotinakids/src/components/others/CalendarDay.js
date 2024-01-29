import React, {useState, useEffect} from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Colors } from "../../utils";
import Label from "./Label";

export default function CalendarDay({
                            value=null, 
                            tasks=[],
                            style={}, 
                            onPress=(v)=>null}){

  const handlePress = () => {
    onPress(value, tasks);
  }
  
  const renderPoints = () => {
    if(tasks && tasks !== null && tasks.length > 0){
      let points = 0;

      for(let ii=0; ii < tasks.length; ii++)
        points = points + tasks[ii].points;

      return (
        <Label value={`${points}`} style={styles.indicator} 
            size={14} bold={true}/>
      );
    } else {
      return <></>
    }
  }

  return (
    <TouchableHighlight 
        style={[styles.day, style]}
        underlayColor={Colors.lighterPink} 
        onPress={handlePress}>
      <>
        <Label value={value} size={12}/>
        {renderPoints()}
      </>
    </TouchableHighlight>
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  day:{
    padding:3,
    borderWidth:1,
    borderColor:Colors.lighterPink,
    height:screen.width * 0.14,
    width:screen.width * 0.14,
    backgroundColor:Colors.white
  },
  indicator:{
    textAlign:'center',
  },
});