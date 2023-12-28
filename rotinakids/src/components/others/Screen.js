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
import DateIndicator from "../inputs/DateIndicator";

export default function Screen({
                            navigation,
                            label='',
                            avatarId=null,
                            showHeaderActions=true, 
                            dateSelectable=false,
                            onChangeDate=(nd)=>null,
                            content=<></>
                          }){
  const [bg, setBg] = useState(null);

  useEffect(() => {
    getColor().then((c) => {
      setBg(c && c !== null ? c.color : Colors.lightGray);
    });
  }, []);

  const renderDateIndicator = () => {
    if(dateSelectable === true)
      return <DateIndicator onChange={onChangeDate}/>

    return <></>;
  }

  return (
    <View style={{backgroundColor:bg, minHeight:height * 0.915}}>
      
      <StatusBar barStyle='dark-content' backgroundColor={bg}/>

      <Header navigation={navigation} label={label} 
          onChangeColor={setBg} avatarId={avatarId}
          showActions={showHeaderActions}/>

      {renderDateIndicator()}

      {content}

      <Footer navigation={navigation} label={label}/>

    </View>
  );
}

const height = Dimensions.get('screen').height;