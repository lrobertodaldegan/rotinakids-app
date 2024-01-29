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
import MonthIndicator from "../inputs/MonthIndicator";

export default function Screen({
                            navigation,
                            label='',
                            avatarId=null,
                            showHeaderActions=true, 
                            dateSelectable=false,
                            monthSelectable=false,
                            onChangeDate=(nd)=>null,
                            onChangeMonth=(nm)=>null,
                            content=<></>
                          }){
  const [bg, setBg] = useState(null);

  
  getColor().then((c) => {
    setBg(c && c !== null ? c.color : Colors.lightGray);
  });

  const renderDateIndicator = () => {
    if(dateSelectable === true)
      return <DateIndicator onChange={onChangeDate}/>

    return <></>;
  }

  const renderMonthIndicator = () => {
    if(monthSelectable === true && dateSelectable !== true)
      return <MonthIndicator onChange={onChangeMonth}/>

    return <></>
  }

  return (
    <View style={{backgroundColor:bg, minHeight:height * 0.915}}>
      
      <StatusBar barStyle='dark-content' backgroundColor={bg}/>

      <Header navigation={navigation} label={label} 
          onChangeColor={setBg} avatarId={avatarId}
          showActions={showHeaderActions}/>

      {renderDateIndicator()}

      {renderMonthIndicator()}

      {content}

      <Footer navigation={navigation} label={label}/>

    </View>
  );
}

const height = Dimensions.get('screen').height;