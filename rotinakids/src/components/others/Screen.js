import React from "react";
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import { Colors } from "../../utils";

export default function Screen({navigation,label='',content=<></>}){
  return (
    <>
      <StatusBar barStyle='dark-content' 
          backgroundColor={Colors.lightGray}/>
      
      <View style={styles.wrap}>
        <View style={styles.wrapHead}>
          <Header navigation={navigation} 
              label={label}/>
        </View>
        <View style={styles.wrapList}>
          {content}
        </View>
        <View style={styles.wrapFoot}>
          <Footer navigation={navigation} label={label}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrap:{
    flex:1,
  },
  wrapHead:{
    flex:0.18,
  },
  wrapFoot:{
    flex:0.1,
  },
  wrapList:{
    flex:0.72,
  },
});