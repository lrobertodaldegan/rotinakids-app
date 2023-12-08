import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import InputAwardCard from "../components/cards/InputAwardCard";
import PointsAwardCard from "../components/cards/PointsAwardCard";
import Screen from "../components/others/Screen";

export default function RecompensasScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Recompensas' 
        content={
          <ScrollView keyboardDismissMode="on-drag">
            <View style={styles.topFoot}/>

            <InputAwardCard title='Recompensa diária' 
                placeholder='Toque para definir uma recompensa diária'
            />

            <InputAwardCard title='Recompensa semanal' 
                placeholder='Toque para definir uma recompensa semanal'
            />

            <InputAwardCard title='Recompensa mensal' 
                placeholder='Toque para definir uma recompensa mensal'
            />

            <PointsAwardCard title={'Recompensa por pontos'}
                subtitle={'Toque para definir uma recompensa por pontos'}
                placeholder={'0'}
            />

            <View style={styles.topFoot}/>
          </ScrollView>
        }
    />
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topFoot:{
    height:screen.height * 0.17
  }
});