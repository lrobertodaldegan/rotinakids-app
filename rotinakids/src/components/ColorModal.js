import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
}from 'react-native';
import {Colors} from '../utils/Colors';
import Label from './Label';
import Modal from './Modal';


export default function ColorModal({
                    onSelection=()=>null, 
                    onClose=()=>null}) {
  return (
    <Modal onClose={onClose}
        content={
          <View style={styles.modalWrap}>

            <Label value={'Escolha uma cor:'} size={20}/>

            <View style={styles.modalContent}>
              <TouchableHighlight underlayColor={Colors.white} 
                  onPress={onSelection}
                  style={[
                    styles.colorBtn, 
                    {backgroundColor:Colors.yellow}
                  ]}>
                <></>
              </TouchableHighlight>

              <TouchableHighlight underlayColor={Colors.white} 
                  onPress={onSelection}
                  style={[
                    styles.colorBtn, 
                    {backgroundColor:Colors.green}
                  ]}>
                <></>
              </TouchableHighlight>

              <TouchableHighlight underlayColor={Colors.white} 
                  onPress={onSelection}
                  style={[
                    styles.colorBtn, 
                    {backgroundColor:Colors.gray}
                  ]}>
                <></>
              </TouchableHighlight>

              <TouchableHighlight underlayColor={Colors.white} 
                  onPress={onSelection}
                  style={[
                    styles.colorBtn, 
                    {backgroundColor:Colors.purple}
                  ]}>
                <></>
              </TouchableHighlight>

              <TouchableHighlight underlayColor={Colors.white} 
                  onPress={onSelection}
                  style={[
                    styles.colorBtn, 
                    {backgroundColor:Colors.lightGray}
                  ]}>
                <></>
              </TouchableHighlight>

              <TouchableHighlight underlayColor={Colors.white} 
                  onPress={onSelection}
                  style={[
                    styles.colorBtn, 
                    {backgroundColor:Colors.blue}
                  ]}>
                <></>
              </TouchableHighlight>
            </View>
          </View>
        } 
    />
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    modalWrap:{
      paddingVertical:screen.height * 0.1,
      paddingHorizontal:screen.width * 0.05,
      alignItems:'center'
    },
    modalContent:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginTop:20,
      justifyContent:'center',
    },
    colorBtn:{
      width:screen.width * 0.2,
      height:screen.width * 0.2,
      borderRadius:screen.width * 0.2,
      borderColor:Colors.lightGray,
      borderWidth:1,
      margin:10
    },
});