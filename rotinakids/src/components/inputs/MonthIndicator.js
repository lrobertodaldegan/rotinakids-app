import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
}from 'react-native';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Label from "../others/Label";
import { Colors } from '../../utils';
import { monthLabel } from '../../utils/Days';
import IconButton from '../buttons/IconButton';

export default function MonthIndicator({onChange=(val)=>null}) {
  const [dt, setDt] = useState(null);
  const [lbl, setLbl] = useState('');

  useEffect(() => {
    let d = new Date();
    d.setDate(1);
    
    setDt(d);
    setLbl(buildLabel(d));
  }, []);

  const buildLabel = (d) => {
    if(d && d !== null)
      return monthLabel(d);

    return '';
  }

  const change = (months) => {
    if(dt && dt !== null){
      let d = dt;

      d.setMonth(dt.getMonth() + months);

      setDt(d);

      setLbl(buildLabel(d));

      onChange(d);
    }
  }

  return (
    <View style={styles.topWrap} elevation={1}>
      <IconButton icon={faArrowLeft} iconSize={14} 
          style={styles.topLbl} onPress={()=>change(-1)}/>

      <Label value={lbl} size={14}
          style={styles.topLbl}/>

      <IconButton icon={faArrowRight} iconSize={14} 
          style={styles.topLbl} onPress={()=>change(1)}/>
    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topWrap:{
    flex:3,
    zIndex:21,
    padding:5,
    borderRadius:5,
    overflow:"visible",
    flexDirection:'row',
    position:'absolute',
    alignItems:"center",
    top:screen.height * 0.08,
    left:0,
    right:0,
    backgroundColor:Colors.white,
    justifyContent:"space-between",
    marginHorizontal:screen.width * 0.3,
  },
  topLbl:{
    color:Colors.gray,
    marginHorizontal:5,
  },
});