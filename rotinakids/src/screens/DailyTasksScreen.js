import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import TaskListItemCard from "../components/cards/TaskListItemCard";
import Screen from "../components/others/Screen";
import { getDailyTasks, getTasks } from "../service/TaskService";
import { dateLabel } from "../utils/Days";
import { tarefas } from "../utils/Tarefas";

export default function DailyTasksScreen({navigation, route}){

  const [tasks, setTasks] = useState([]);
  const [dt, setDt] = useState(new Date());

  const {child} = route.params;

  const day = dateLabel(dt);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getTasks().then((ts) => {
      let at = [...tarefas];

      if(ts && ts !== null && ts.length > 0)
        at = [...at, ...ts];
        
      setTasks(at);

      getDailyTasks(day, child?.id).then((scores) => {
        for(let i=0; i<at.length;i++){
          at[i].score = null;

          let tId = at[i].id;

          let ts = scores.filter((s) => s.taskId === tId);

          if(ts && ts !== null && ts.length > 0){
            ts = ts[0];

            at[i].score = ts.score;
          }
        }
      });
    });
  }

  const handleComplete = () => {
    getDailyTasks(day, child?.id).then((scores) => {
      let dayComplete = scores.length === tasks.length;

      if(dayComplete === true){
        ToastAndroid.show('🥳 Tarefas completas!!!', ToastAndroid.SHORT);
      
        
        //TODO processar novas medalhas. Criar mecanismo de verificação
      }
    });

  }

  return (
    <Screen navigation={navigation} label={child?.name}
        showHeaderActions={true} avatarId={child?.avatarId}
        dateSelectable={true} onChangeDate={setDt}
        content={ 
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
              ListFooterComponent={<View style={styles.topFoot}/>}
          />
        }
    />
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topFoot:{
    height:screen.height * 0.18,
  },
});