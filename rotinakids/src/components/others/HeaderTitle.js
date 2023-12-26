import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { avatares } from '../../utils/Avatares';
import Label from './Label';
import LogoButton from '../buttons/LogoButton';

export default function HeaderTitle({navigation, avatarId=null, label=null}) {

  const renderLogo = () => {
    if(avatarId && avatarId !== null){
      let ca = avatares.filter(a => a.id === avatarId);

      if(ca && ca !== null && ca.length > 0){
        return (
          <ImageBackground 
              source={ca[0].img} 
              style={styles.img}
              resizeMode={'center'}/>
        );
      }
    }

    return <LogoButton navigation={navigation}/>
  }

  return (
    <View style={styles.wrap}>
      {renderLogo()}   
      
      <Label value={label ? label : ''} size={20} style={styles.lbl}/>
    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  lbl:{
    marginLeft:10
  },
  img:{
    height:screen.height * 0.05,
    width:screen.height * 0.05,
  },
});