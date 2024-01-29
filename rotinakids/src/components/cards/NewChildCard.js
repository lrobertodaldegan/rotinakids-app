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
import { Colors } from '../../utils';
import Label from '../others/Label';

export default function NewChildCard({onSave=(val)=>null}) {

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(avatares[0]);
  const [idade, setIdade] = useState(null);
  const [error, setError] = useState(null);

  const handleSave = () => {
    if(name && name !== null){
      setError(null);

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

    } else {
      setError('Dica: Informe um nome antes de salvar!');
    }
  }

  return (
    <Card content={
      <>
        <Label value={`Novo filho`} size={12} style={styles.topLbl}/>

        <ChildInputs name={name} idade={idade} avatar={avatar}
            onChangeName={setName} onChangeIdade={setIdade} 
            onChangeAvatar={setAvatar}/>

        <Label value={error} style={{textAlign:'center'}}/>

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
  topLbl:{
    color:Colors.gray,
    marginVertical:10,
    textAlign:'center'
  },
});