import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
}from 'react-native';
import { Colors } from '../../utils';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import ChildInputs from '../inputs/ChildInputs';
import { avatares } from '../../utils/Avatares';
import ShowHideButton from '../buttons/ShowHideButton';
import Label from '../others/Label';
import ChildInsignias from '../others/ChildInsignias';

export default function ChildCard({navigation, child, onSave=(val)=>null}) {

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(avatares[0]);
  const [idade, setIdade] = useState(null);
  const [hide, setHide] = useState(false);
  const [points, setPoints] = useState(0);
  const [rewards, setRewards] = useState(0);

  useEffect(()=>{
    setName(child.name);
    setIdade(child.age);
    setHide(child.hide);

    let ca = avatares.filter(a => a.id === child.avatarId);

    if(ca && ca !== null && ca.length > 0)
      setAvatar(ca[0]);

    //TODO load points qtd
    //TODO load rewards qtd
  }, []);

  const handleShowHide = () => {
    let mode = !hide;

    setHide(mode);

    handleSave(mode);
  }

  const handleSave = (hidden) => {
    onSave({
      id: child.id,
      avatarId: avatar.id, 
      age: idade,
      name: name,
      hide: hidden === true
    });
  }

  return (
    <Card onPress={() => navigation.navigate('Daily', {child:child})} 
        content={
          <>
            <Label value={`Toque para iniciar rotina`} 
                size={12} style={styles.topLbl}/>

            <ChildInputs name={name} idade={idade} avatar={avatar}
                onChangeName={setName} onChangeIdade={setIdade} 
                onChangeAvatar={setAvatar}/>

            <ChildInsignias child={child}/>

            <View style={styles.lblWrap}>
              <Label value={`${points} pontos`} size={14} style={styles.lbl}/>

              <Label value={`${rewards} recompensas`} size={14} 
                  style={[styles.lbl, {marginLeft:15}]}/>
            </View>

            <View style={styles.btnWrap}>
              <SaveButton onPress={() => handleSave(hide)}/>

              <ShowHideButton onPress={handleShowHide}/>
            </View>
          </>
        }
    />
  )
}

const styles = StyleSheet.create({
  btnWrap:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingHorizontal:10,
    paddingVertical:10,
    justifyContent:'space-between'
  },
  lblWrap:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingVertical:10,
    justifyContent:'center'
  },
  topLbl:{
    color:Colors.gray,
    marginVertical:10,
    textAlign:'center'
  },
  lbl:{
    color:Colors.gray
  },
});