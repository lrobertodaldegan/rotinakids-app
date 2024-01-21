import React, {useState, useEffect} from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Colors } from "../../utils";
import Label from "./Label";

const weekDays = 7;
const weeks = 5;

export default function Calendar({child}){
  const [dt, setDt] = useState(new Date());
  
  const renderDays = () => {
    let days = weeks * weekDays;

    let comps = [];

    for(let i=0; i < days; i++){
      let stl = [styles.day];

      if(i === 0)
        stl.push({borderTopLeftRadius:10});

      if(i === 6)
        stl.push({borderTopRightRadius:10});

      if(i === days-7)
        stl.push({borderBottomLeftRadius:10});

      if(i === days-1)
        stl.push({borderBottomRightRadius:10});

      comps.push(
        <View key={i} style={stl}>
          <Label value={i+1} size={12}/>
        </View>
      );
    }

    return comps;
  }

  return (
    <ScrollView keyboardDismissMode="on-drag" contentContainerStyle={styles.wrap}>
      <View style={styles.calendarDays}>
        {renderDays()}
      </View>
    </ScrollView>
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    marginVertical:screen.height * 0.13,
  },
  calendarDays:{
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'center',

  },
  day:{
    padding:3,
    borderWidth:1,
    borderColor:Colors.lightPink,
    height:screen.width * 0.14,
    width:screen.width * 0.14,
  },
});