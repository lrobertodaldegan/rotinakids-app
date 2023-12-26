import React from "react";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";

export default function Insignia({insignia}) {
    return <ImageBackground key={insignia.id} source={insignia.icon} 
                style={[styles.logo]} resizeMode='contain'/>
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  logo:{
    height:screen.height * 0.06,
    width:screen.height * 0.06,
    marginRight:10
  }
});