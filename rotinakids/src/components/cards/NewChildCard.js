import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
}from 'react-native';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import ChildInputs from '../inputs/ChildInputs';
import { avatares } from '../../utils/Avatares';

export default function NewChildCard({onSave=(val)=>null}) {

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(avatares[0]);
  const [idade, setIdade] = useState(null);

  const handleSave = () => {
    onSave({
      id: name,
      avatarId: avatar.id, 
      age: idade,
      name: name,
      hide:false
    });

    setName(null);
    setIdade(null);
    setAvatar(avatares[0]);
  }

  return (
    <Card content={
      <>
        <ChildInputs name={name} idade={idade} avatar={avatar}
            onChangeName={setName} onChangeIdade={setIdade} 
            onChangeAvatar={setAvatar}/>

        <View style={styles.btnWrap}>
          <SaveButton onPress={handleSave}/>
        </View>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  btnWrap:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingHorizontal:screen.width * 0.1,
    paddingVertical:10,
    justifyContent:'center'
  },
});