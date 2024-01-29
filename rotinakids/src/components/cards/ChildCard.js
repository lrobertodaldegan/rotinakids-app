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
import Icon from '../others/Icon';
import { faArrowDown, faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../buttons/IconButton';
import ExcludeButton from '../buttons/ExcludeButton';

export default function ChildCard({navigation, child, onSave=(val)=>null, onExclude=(id)=>null}) {

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
  const [error, setError] = useState(null);

  useEffect(()=>{
    getDailyReward().then(r => setDr(r));
    getWeeklyReward().then(r => setWr(r));
    getMonthlyReward().then(r => setMr(r));
    getPointsReward().then(r => setPr(r));

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

  const handleExclude = () => {
    onExclude(child.id);
  }

  const handleSave = (hidden) => {
    if(name && name !== null){
      setError(null);

      onSave({
        id: child.id,
        avatarId: avatar.id, 
        age: idade,
        name: name,
        hide: hidden === true
      });
    } else {
      setError('Dica: Informe um nome antes de salvar!');
    }
  }

  const renderRewardDetails = () => {
    if(showRewardDetails === true && (dr || wr || mr || pr)) {
      return (
        <View>
          <Label value={dr ? `${dr.title}: ${dailyRewards}` : ''} 
              size={14} style={styles.lbl}/>
          <Label value={wr ? `${wr.title}: ${weeklyRewards}` : ''} 
              size={14} style={styles.lbl}/>
          <Label value={mr ? `${mr.title}: ${monthlyRewards}` : ''} 
              size={14} style={styles.lbl}/>
          <Label value={pr ? `${pr.title}: ${pointsRewards}` : ''} 
              size={14} style={styles.lbl}/>
        </View>
      );
    } else {
      if(showRewardDetails === true){
        return (
          <Label value={'Nenhuma recompensa cadastrada'} 
              size={14} style={styles.lbl}/>
        );
      }
    }
  }

  return (
    <Card onPress={() => null} 
        content={
          <>
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

                <Icon size={12} style={{marginLeft:5,marginTop:4}} 
                    icon={showRewardDetails === true ? faChevronUp : faChevronDown}/>       
              </View>
            </TouchableHighlight>
            
            {renderRewardDetails()}

            <Label value={error} style={{textAlign:'center'}}/>

            <View style={styles.btnWrap}>
              <SaveButton onPress={() => handleSave(hide)}/>

              <CalendarButton onPress={() => navigation.navigate('Calendar', {child:child})}/>

              <ExcludeButton onPress={handleExclude}/>
            </View>

            <IconButton icon={faArrowRight} label={'Acessar rotina!'}
                iconStyle={{color:Colors.pinker}}
                style={{color:Colors.pinker}}
                onPress={() => navigation.navigate('Daily', {child:child})}/>
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