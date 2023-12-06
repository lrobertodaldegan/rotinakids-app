import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
}from 'react-native';
import { faClipboardList, faGift, } from '@fortawesome/free-solid-svg-icons';

import {Colors} from '../../utils/Colors';
import IconButton from '../buttons/IconButton';
import LogoButton from '../buttons/LogoButton';


export default function Footer({navigation, label}) {
  return (
    <View style={styles.wrap}>

        <View style={styles.circle}>
          <LogoButton navigation={navigation} label='Início'/>
        </View>

      <View style={styles.ctnl} elevation={2}>
        <IconButton icon={faGift} iconSize={30} label='Recompensas'
            iconStyle={label === 'Recompensas' ? styles.iconSelected : {}}
            onPress={() => navigation.navigate('Recompensas')}/>

        <IconButton icon={faClipboardList} iconSize={30} label='Tarefas'
            iconStyle={label === 'Tarefas' ? styles.iconSelected : {}}
            onPress={() => navigation.navigate('Tarefas')}/>
      </View>
    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  ctnl:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    margin:10,
    borderRadius:10,
    width:screen.width - 20,
    paddingVertical:10,
    paddingHorizontal:screen.width * 0.15,
    backgroundColor:Colors.white
  },
  circle:{
    height:80,
    width:80,
    borderRadius:50,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:Colors.white,
    position:"absolute",
    left:(screen.width * 0.5) - 40,
    zIndex:10
  },
  iconSelected:{
    color:Colors.pinker
  },
});