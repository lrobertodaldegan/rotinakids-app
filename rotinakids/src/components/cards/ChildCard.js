import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
}from 'react-native';
import { Colors } from '../../utils';
import Card from './Card';
import SaveButton from '../buttons/SaveButton';
import ChildInputs from '../inputs/ChildInputs';
import { avatares } from '../../utils/Avatares';
import ShowHideButton from '../buttons/ShowHideButton';
import Label from '../others/Label';
import ChildInsignias from '../others/ChildInsignias';
import { getDailyReward, getMonthlyReward, getPointsReward, getRewardsByChild, getWeeklyReward } from '../../service/RewardService';
import CalendarButton from '../buttons/CalendarButton';

export default function ChildCard({navigation, child, onSave=(val)=>null}) {

  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(avatares[0]);
  const [idade, setIdade] = useState(null);
  const [hide, setHide] = useState(false);
  const [points, setPoints] = useState(0);
  const [rewards, setRewards] = useState(0);
  const [monthlyRewards, setMonthlyRewards] = useState(0);
  const [weeklyRewards, setWeeklyRewards] = useState(0);
  const [dailyRewards, setDailyRewards] = useState(0);
  const [pointsRewards, setPointsRewards] = useState(0);
  const [pr, setPr] = useState(null);
  const [dr, setDr] = useState(null);
  const [wr, setWr] = useState(null);
  const [mr, setMr] = useState(null);
  const [showRewardDetails, setShowRewardDetails] = useState(false);

  useEffect(()=>{
    getDailyReward().then(setDr);
    getWeeklyReward().then(setWr);
    getMonthlyReward().then(setMr);
    getPointsReward().then(setPr);

    setName(child.name);
    setIdade(child.age);
    setHide(child.hide);

    let ca = avatares.filter(a => a.id === child.avatarId);

    if(ca && ca !== null && ca.length > 0)
      setAvatar(ca[0]);

    getRewardsByChild(child.id).then((s) => {
      if(s && s !== null){
        setPoints(s.points);
        setRewards(s.rewards);
        setDailyRewards(s.dailyRewards);
        setWeeklyRewards(s.weeklyRewards);
        setMonthlyRewards(s.monthlyRewards);
        setPointsRewards(s.pointsRewards);
      }
    });
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

  const renderRewardDetails = () => {
    if(showRewardDetails === true) {
      return (
        <View>
          <Label value={`${dr.title}: ${dailyRewards}`} size={14} style={styles.lbl}/>
          <Label value={`${wr.title}: ${weeklyRewards}`} size={14} style={styles.lbl}/>
          <Label value={`${mr.title}: ${monthlyRewards}`} size={14} style={styles.lbl}/>
          <Label value={`${pr.title}: ${pointsRewards}`} size={14} style={styles.lbl}/>
        </View>
      );
    }
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

            <TouchableHighlight underlayColor={Colors.white} 
                onPress={() => setShowRewardDetails(!showRewardDetails)}>
              <View style={styles.lblWrap}>
                <Label value={`${points} pontos`} size={14} style={styles.lbl}/>

                <Label value={`${rewards} recompensas`} size={14} 
                    style={[styles.lbl, {marginLeft:15}]}/>              
              </View>
            </TouchableHighlight>
            
            {renderRewardDetails()}

            <View style={styles.btnWrap}>
              <SaveButton onPress={() => handleSave(hide)}/>

              {/* <ShowHideButton onPress={handleShowHide}/> */}
              <CalendarButton onPress={() => navigation.navigate('Calendar', {child:child})}/>
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