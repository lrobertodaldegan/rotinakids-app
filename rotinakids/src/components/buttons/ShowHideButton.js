import React, {useState} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
}from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';

export default function ShowHideButton({onPress=(show)=>null}) {
  const [show, setShow] = useState(true);

  const handle = () => {
    setShow(!show);

    onPress(show);
  }

  return (
    <TouchableHighlight underlayColor={Colors.white} 
        onPress={handle}>

      <View style={styles.wrap}>
        <FontAwesomeIcon icon={show === true ? faEyeSlash : faEye} 
            style={[styles.icon]} size={16}/>

        <Label value={show === true ? 'Ocultar' : 'Exibir'} 
            style={[styles.lbl]} size={16}/>
      </View>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    color:Colors.gray,
    marginRight:10
  },
  lbl:{
    color:Colors.gray
  },
});