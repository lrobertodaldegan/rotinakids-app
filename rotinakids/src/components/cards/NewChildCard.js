import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableHighlight,
  ImageBackground,
}from 'react-native';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Colors } from '../../utils';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import IconInput from '../inputs/IconInput';
import { avatares } from '../../utils/Avatares';

export default function NewChildCard({
                                  onSave=(val)=>null,
                                  onDisable=(val)=>null
                                }) {

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(avatares[0]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleChange = (newAvatar) => {
    setAvatar(newAvatar);

    setShowOptions(!showOptions);
  }

  const renderOptions = () => {
    if(showOptions === true){
      let opts = [];
  
      for(let i=0; i<avatares.length; i++){
        opts.push(
          <TouchableHighlight key={`${i}`} underlayColor={Colors.white} 
              onPress={() => handleChange(avatares[i])}
              style={[styles.btn]}>
  
            <ImageBackground key={`${i}${avatares[i].id}`}
                source={avatares[i].img} 
                style={styles.img}
                resizeMode={'center'}/>
  
          </TouchableHighlight>
        );
      }

      return (
        <View style={styles.optsWrap}>
          {opts}
        </View>
      )
    } else {
      return <></>
    }
  }

  const renderAvatar = () => {
    if(showOptions === true){
      return <></>
    } else {
      return (
        <TouchableHighlight underlayColor={Colors.white} 
            onPress={() => setShowOptions(!showOptions)}>

          <View style={styles.avatarWrap}>
            <FontAwesomeIcon icon={faPen} style={styles.icon}/>

            <View style={styles.imgWrap}>
              <ImageBackground source={avatar?.img} style={styles.img} 
                  resizeMode='center'/>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
  }

  return (
    <Card content={
      <>
        <View style={styles.wrap}>
          {renderAvatar()}

          <IconInput label='Novo filho'
              onChange={setName} value={name}
              style={styles.input}/>
        </View>

        {renderOptions()}

        <View style={styles.btnWrap}>
          <SaveButton onPress={() => onSave(val)}/>
        </View>
      </>
    }/>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    textAlign:'center',
    marginBottom:20,
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
    paddingHorizontal:screen.width * 0.1,
    paddingVertical:10,
    justifyContent:'center'
  },
  input:{
    fontSize:18,
  },
  img:{
    height:screen.height * 0.06,
    width:screen.height * 0.06,
  },
  avatarWrap:{
    marginRight:30,
    flexDirection:'row',
    alignItems:'center',
  },
  optsWrap:{
    flex:4,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:20,
  },
  icon:{
    color:Colors.gray,
    fontSize:18
  },
  imgWrap:{
    justifyContent:'center',
    alignItems:'center'
  },
});