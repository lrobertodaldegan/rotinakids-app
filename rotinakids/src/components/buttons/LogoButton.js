import React from 'react';
import {
  TouchableHighlight,
  View,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';
import Logo from '../others/Logo';

export default function LogoButton({navigation, label=null, style={}}) {

  const renderLabelOrNot = () => {
    if(label && label !== null){
      return (
        <View style={{alignItems:'center'}}>
          <Logo/>

          <Label value={label}/>
        </View>
      )
    } else {
      return <Logo/>
    }
  }
  return (
    <TouchableHighlight underlayColor={Colors.white} 
        onPress={() => navigation.navigate('Home')}>

        {renderLabelOrNot()}
    </TouchableHighlight>
  )
}