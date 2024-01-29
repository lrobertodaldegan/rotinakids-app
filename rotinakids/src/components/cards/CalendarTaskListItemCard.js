import React from "react";
import {
  StyleSheet,
  View,
} from 'react-native';
import { Colors } from "../../utils";
import Label from "../others/Label";

export default function CalendarTaskListItemCard({task}) {
  return (
    <View style={styles.wrap}>
      <Label value={task.title} style={styles.title} size={14}/>
      <Label value={`${task.score} (${task.points} pontos)`}
          style={styles.subTitle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:Colors.white,
    marginHorizontal:50,
    marginVertical:5,
    borderBottomColor:Colors.lightGray,
    borderBottomWidth:1
  },
  title:{
    textAlign:'center'
  },
  subTitle:{
    textAlign:'center'
  },
});