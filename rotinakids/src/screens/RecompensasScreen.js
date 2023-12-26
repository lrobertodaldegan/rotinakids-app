import React, {useState, useEffect} from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import InputAwardCard from "../components/cards/InputAwardCard";
import PointsAwardCard from "../components/cards/PointsAwardCard";
import Screen from "../components/others/Screen";
import { 
  getDailyReward, 
  getMonthlyReward, 
  getWeeklyReward, 
  getPointsReward,
  saveDailyReward,
  saveWeeklyReward,
  saveMonthlyReward,
  savePointsReward,
} from "../service/RewardService";

export default function RecompensasScreen({navigation}){
  const [rDiaria, setRDiaria] = useState(null);
  const [rSemanal, setRSemanal] = useState(null);
  const [rMensal, setRMensal] = useState(null);
  const [rPontos, setRPontos] = useState(null);

  useEffect(() => {
    getDailyReward().then((r) => setRDiaria(r));
    getMonthlyReward().then((r) => setRMensal(r));
    getWeeklyReward().then((r) => setRSemanal(r));
    getPointsReward().then((r) => setRPontos(r));
  }, []);

  const handleSave = (tipo, recompensa) => {
    if(recompensa && recompensa !== null){
      if(tipo === 'd')
        saveDailyReward(recompensa).then((r) => setRDiaria(r));

      if(tipo === 's')
        saveWeeklyReward(recompensa).then((r) => setRSemanal(r));

      if(tipo === 'm')
        saveMonthlyReward(recompensa).then((r) => setRMensal(r));

      if(tipo === 'p')
        savePointsReward(recompensa).then((r) => setRPontos(r));
    }
  }

  const handleChange = (tipo, title) => {
    if(tipo === 'd'){
      let d = {...rDiaria};

      d.title = title;

      setRDiaria(d);
    }

    if(tipo === 's'){
      let s = {...rSemanal};

      s.title = title;

      setRSemanal(s);
    }

    if(tipo === 'm'){
      let m = {...rMensal};

      m.title = title;

      setRMensal(m);
    }

    if(tipo === 'p'){
      let p = {...rPontos};

      p.value = title;

      setRPontos(p);
    }
  }

  return (
    <Screen navigation={navigation} label='Recompensas' 
        content={
          <ScrollView 
              keyboardShouldPersistTaps="always">

            <View style={styles.topFoot}/>

            <InputAwardCard title='Recompensa diária' 
                placeholder='Toque para definir uma recompensa diária'
                item={rDiaria}
                onChange={(v) => handleChange('d', v)}
                onSave={(obj) => handleSave('d', obj)}
                onDisable={(obj) => handleSave('d', obj)}
            />

            <InputAwardCard title='Recompensa semanal' 
                placeholder='Toque para definir uma recompensa semanal'
                item={rSemanal}
                onChange={(v) => handleChange('s', v)}
                onSave={(obj) => handleSave('s', obj)}
                onDisable={(obj) => handleSave('s', obj)}
            />

            <InputAwardCard title='Recompensa mensal' 
                placeholder='Toque para definir uma recompensa mensal'
                item={rMensal}
                onChange={(v) => handleChange('m', v)}
                onSave={(obj) => handleSave('m', obj)}
                onDisable={(obj) => handleSave('m', obj)}
            />

            <PointsAwardCard title={'Recompensa por pontos'}
                subtitle={'Toque para definir uma recompensa por pontos'}
                placeholder={'0'} item={rPontos}
                onChange={(v) => handleChange('p', v)}
                onSave={(obj) => handleSave('p', obj)}
                onDisable={(obj) => handleSave('p', obj)}
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