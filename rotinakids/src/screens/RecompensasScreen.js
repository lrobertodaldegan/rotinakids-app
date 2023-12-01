import React from "react";
import {
  ScrollView,
} from 'react-native';
import InputAwardCard from "../components/cards/InputAwardCard";
import PointsAwardCard from "../components/cards/PointsAwardCard";
import Screen from "../components/others/Screen";

export default function RecompensasScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Recompensas' 
        content={
          <ScrollView keyboardDismissMode="on-drag">
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
          </ScrollView>
        }
    />
  );
}