import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import TaskListItemCard from "../components/cards/TaskListItemCard";
import AdBanner from "../components/others/AdBanner";
import Screen from "../components/others/Screen";
import { handleMedalGiven } from "../service/ScoreService";
import { getDailyTasks, getTasks } from "../service/TaskService";
import { dateLabel } from "../utils/Days";
import { Colors } from "../utils";
import { avatares } from "../utils/Avatares";

export default function DailyTasksScreen({navigation, route}){

  const [tasks, setTasks] = useState([]);
  const [dt, setDt] = useState(new Date());
  const [day, setDay] = useState(null);
  const [loading, setLoading] = useState(true);

  const {child} = route.params;

  useEffect(() => {
    init(dt);
  }, []);

  const init = (refDt) => {
    setLoading(true);
    setTasks([]);

    let d = dateLabel(refDt && refDt !== null ? refDt : dt);

    setDay(d);

    getTasks(true).then((ts) => {
      let at = [];

      if(ts && ts !== null && ts.length > 0)
        at = [...ts];

      if(at.length > 0){
        getDailyTasks(d, child?.id).then((scores) => {
          if(scores && scores !== null){
            for(let i=0; i<at.length;i++){
              at[i].score = null;

              let tId = at[i].id;

              let ts = scores.filter((s) => s.taskId === tId);

              if(ts && ts !== null && ts.length > 0){
                ts = ts[0];

                at[i].score = ts.score;
              }
            }
          }

          setTasks(at);
        });
      }
    })
    .then(() => setTimeout(() => setLoading(false), 100));
  }

  const handleComplete = () => {
    getDailyTasks(day, child?.id).then((scores) => {
      let dayComplete = scores.length === tasks.length;

      if(dayComplete === true){
        ToastAndroid.show('Tarefas completas!!! 🥳', ToastAndroid.SHORT);
      
        handleMedalGiven(child?.id);
      }
    });
  }

  const handleDtChange = (newDate) => {
    setDt(newDate);

    init(newDate);
  }

  const renderContent = () => {
    if(loading === false){
      return (
        <FlatList
            ListHeaderComponent={<View style={styles.topFoot}/>}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <TaskListItemCard taskId={item.id} 
                    childId={child?.id} day={day} 
                    preSelection={item.score}
                    label={item.title} value={item.value}
                    onConclude={handleComplete}
                />
              )
            }}
            ListEmptyComponent={<></>}
            ListFooterComponent={<AdBanner />}
        />
      );
    } else {
      return (
        <>
          <View style={styles.topFoot}/>
          <ActivityIndicator color={Colors.pinker} />
        </>
      );
    }
  }

  return (
    <Screen navigation={navigation} label={child?.name}
        showHeaderActions={true} 
        avatarId={child?.avatarId && child?.avatarId !== null ? child?.avatarId : avatares[0].id}
        dateSelectable={true} onChangeDate={handleDtChange}
        content={renderContent()}
    />
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topFoot:{
    height:screen.height * 0.13,
  },
});