import React, {useState} from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableHighlight,
  ImageBackground,
}from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { avatares } from '../../utils/Avatares';
import { Colors } from "../../utils";
import IconInput from "./IconInput";

export default function ChildInputs({
                                  name=null,
                                  avatar=avatares[0],
                                  idade=null,
                                  onChangeName=(v)=>null,
                                  onChangeAvatar=(v)=>null,
                                  onChangeIdade=(v)=>null,
                                }) {

  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (newAvatar) => {
    onChangeAvatar(newAvatar);

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
    <>
      <View style={styles.wrap}>
        {renderAvatar()}

        <View>
          <IconInput label='Nome'
              multiLine={false}
              placeholderColor={Colors.pinker}
              onChange={onChangeName} value={name}
              style={styles.input}/>

          <IconInput label='Idade'
              showLabelOnSide={idade && idade !== null}
              iconColor={Colors.gray}
              maxLength={2} multiLine={false}
              keyboardType='numeric'
              onChange={onChangeIdade} value={idade}
              style={[styles.input, styles.idadeInput]}/>
        </View>
      </View>

      {renderOptions()}
    </>
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
  input:{
    fontSize:18,
    marginVertical:0,
    marginLeft:5,
    padding:0,
    color:Colors.pinker,
    textAlign:'justify'
  },
  idadeInput:{
    fontSize:14,
    color:Colors.gray,
    textAlign:'center'
  },
  img:{
    height:screen.height * 0.08,
    width:screen.height * 0.08,
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