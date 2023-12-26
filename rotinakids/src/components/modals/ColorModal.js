import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';
import Modal from './Modal';
import ColorButton from '../buttons/ColorButton';


export default function ColorModal({
                    onSelection=(c)=>null, 
                    onClose=()=>null}) {
  return (
    <Modal onClose={onClose}
        content={
          <View style={styles.modalWrap}>

            <Label value={'Escolha uma cor:'} size={20}/>

            <View style={styles.modalContent}>
              <ColorButton color={Colors.yellow} 
                  onSelection={onSelection}/>

              <ColorButton color={Colors.green} 
                  onSelection={onSelection}/>

              <ColorButton color={Colors.gray} 
                  onSelection={onSelection}/>

              <ColorButton color={Colors.purple} 
                  onSelection={onSelection}/>

              <ColorButton color={Colors.lightGray} 
                  onSelection={onSelection}/>

              <ColorButton color={Colors.blue} 
                  onSelection={onSelection}/>
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
});