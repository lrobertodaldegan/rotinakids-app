import React from "react";
import {
  StatusBar,
} from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import { Colors } from "../../utils";

export default function Screen({navigation,label='',content=<></>}){
  // return (
  //   <>
  //     <StatusBar barStyle='dark-content' 
  //         backgroundColor={Colors.lightGray}/>
      
  //     <View style={styles.wrap}>
  //       <View style={styles.wrapHead}>
  //         <Header navigation={navigation} 
  //             label={label}/>
  //       </View>
  //       <View style={styles.wrapList}>
  //         {content}
  //       </View>
  //       <View style={styles.wrapFoot}>
  //         <Footer navigation={navigation} label={label}/>
  //       </View>
  //     </View>
  //   </>
  // );
  return (
    <>
      <StatusBar barStyle='dark-content' 
          backgroundColor={Colors.lightGray}/>

      <Header navigation={navigation} label={label}/>

      {content}

      <Footer navigation={navigation} label={label}/>
    </>
  );
}