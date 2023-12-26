import React, {useEffect, useState} from "react";
import {
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import { Colors } from "../../utils";
import { getColor } from "../../service/ColorService";

export default function Screen({
                            navigation,
                            label='',
                            avatarId=null,
                            showHeaderActions=true, 
                            content=<></>
                          }){
  const [bg, setBg] = useState(null);

  useEffect(() => {
    getColor().then((c) => {
      setBg(c && c !== null ? c.color : Colors.lightGray);
    });
  }, []);

  return (
    <View style={{backgroundColor:bg, minHeight:height * 0.915}}>
      <StatusBar barStyle='dark-content' 
          backgroundColor={Colors.lightGray}/>

      <Header navigation={navigation} label={label} 
          onChangeColor={setBg} avatarId={avatarId}
          showActions={showHeaderActions}/>

      {content}

      <Footer navigation={navigation} label={label}/>
    </View>
  );
}

const height = Dimensions.get('screen').height;