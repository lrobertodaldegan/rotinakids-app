import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ToastAndroid,
}from 'react-native';
import Label from '../others/Label';
import Card from './Card';
import Input from '../inputs/Input';
import SaveButton from '../buttons/SaveButton';
import DisableButton from '../buttons/DisableButton';

export default function InputAwardCard({
                                  title, 
                                  placeholder, 
                                  item=null,
                                  onChange=(val)=>null,
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {

  const [disabled, setDisabled] = useState(item?.disabled);

  const handleSave = () => {
    onSave({title:item?.title, disabled:disabled === true});

    ToastAndroid.show('Recompensa salva!', ToastAndroid.SHORT);
  }

  const handleDisable = () => {
    let dis = !disabled;

    setDisabled(dis);

    onDisable({title:item?.title, disabled:dis === true});

    ToastAndroid.show(
                `Recompensa ${dis === true ? 'desabilitada' : 'habilitada'}!`, 
                ToastAndroid.SHORT);
  }

  return (
    <Card content={
      <>
        <Label style={styles.title} size={18} value={title}/>
      
        <Input label={placeholder}
            value={item?.title} onChange={onChange}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={handleSave}/>

          {/* <DisableButton onPress={handleDisable}/> */}
        </View>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    marginTop:10,
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
    flexWrap:'wrap',
    justifyContent:'space-between',
    paddingHorizontal:screen.width * 0.1,
    paddingVertical:10
  }
});