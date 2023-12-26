import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
}from 'react-native';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Label from "../others/Label";
import { Colors } from '../../utils';
import { AbDays } from '../../utils/Days';

export default function DateIndicator({
                              onChange=(val)=>null
                            }) {
  const [dt, setDt] = useState(new Date());

  const renderLabel = () => {
    if(dt && dt !== null){
      let y = `${dt.getFullYear()}`;
      y = `${y[2]}${y[3]}`;

      return `${AbDays[dt.getDay()]} - ${dt.getDate()}/${dt.getMonth() + 1}/${y}`;
    }

    return '';
  }

  return (
    <View style={styles.topWrap} elevation={2}>
      <FontAwesomeIcon icon={faArrowLeft} size={14}
          style={styles.topLbl}/>

      <Label value={renderLabel()} size={14}
          style={styles.topLbl}/>

      <FontAwesomeIcon icon={faArrowRight} size={14}
          style={styles.topLbl}/>
    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topWrap:{
    flex:3,
    flexDirection:'row',
    marginHorizontal:screen.width * 0.3,
    overflow:"visible",
    backgroundColor:Colors.white,
    alignItems:"center",
    justifyContent:"space-between",
    padding:5,
    borderRadius:5
  },
  topLbl:{
    color:Colors.gray
  },
});