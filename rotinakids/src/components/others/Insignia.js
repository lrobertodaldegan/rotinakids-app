import React from "react";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import { insignias } from "../../utils/Insignias";

export default function Insignia({insignia}) {
  const m = insignias.filter(i => i.id === insignia?.id)[0];

  if(m && m !== null){
    return <ImageBackground key={m.id} source={m.icon} 
                style={[styles.logo]} resizeMode='contain'/>
  } else {
    return <></>
  }
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  logo:{
    height:screen.height * 0.06,
    width:screen.height * 0.06,
    marginRight:10
  }
});