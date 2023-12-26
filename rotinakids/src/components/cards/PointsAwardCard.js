import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ToastAndroid,
}from 'react-native';
import { Colors } from '../../utils';
import Label from '../others/Label';
import Card from './Card';
import InlineInput from '../inputs/InlineInput';
import SaveButton from '../buttons/SaveButton';
import DisableButton from '../buttons/DisableButton';

export default function PointsAwardCard({
                                  title,
                                  subtitle, 
                                  placeholder,
                                  item=null, 
                                  onChange=(val)=>null,
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {
  const [disabled, setDisabled] = useState(item?.disabled);

  const handleSave = () => {
    onSave({value:item?.value, disabled:disabled === true});

    ToastAndroid.show('Recompensa salva!', ToastAndroid.SHORT);
  }

  const handleDisable = () => {
    let dis = !disabled;

    setDisabled(dis);

    onDisable({value:item?.value, disabled:dis === true});

    ToastAndroid.show(
          `Recompensa por pontos ${dis === true ? 'desabilitada' : 'habilitada'}!`, 
          ToastAndroid.SHORT);
  }

  return (
    <Card content={
      <>
        <Label style={styles.title} size={18} value={title}/>

        <Label size={14} value={subtitle} style={styles.txt}/>
      
        <InlineInput labelBefore='Concedida a cada' 
            labelAfter='pontos' 
            placeholder={placeholder}
            value={item?.value} onChange={onChange}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={handleSave}/>

          <DisableButton onPress={handleDisable}/>
        </View>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    marginBottom:20,
    marginTop:10,
  },
  txt:{
    textAlign:'center',
    color:Colors.gray
  },
  desc:{
    textAlign:'justify'
  },
  logo:{
    height:screen.height * 0.06,
    marginTop:10,
    marginBottom:20,
  },
  btnWrap:{
    flexDirection:'row',
    flexWrap:'nowrap',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:screen.width * 0.1,
    marginTop:20,
  }
});