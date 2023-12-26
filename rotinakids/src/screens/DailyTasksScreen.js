import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import TaskListItemCard from "../components/cards/TaskListItemCard";
import DateIndicator from "../components/inputs/DateIndicator";
import Label from "../components/others/Label";
import Screen from "../components/others/Screen";
import { getTasks } from "../service/TaskService";
import { Colors } from "../utils";
import { tarefas } from "../utils/Tarefas";

export default function DailyTasksScreen({navigation, route}){

  const [tasks, setTasks] = useState([]);

  const {child} = route.params;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    //TODO load by child and date to pre-load old selections/dates and points
    getTasks().then((ts) => {
      let at = [...tarefas];

      if(ts && ts !== null && ts.length > 0)
        at = [...at, ...ts];
        
      setTasks(at);
    });
  }

  return (
    <Screen navigation={navigation} label={child?.name}
        showHeaderActions={true} avatarId={child.avatarId}
        content={
          <FlatList
              ListHeaderComponent={
                <View style={styles.topFoot}>
                  <DateIndicator onChange={()=>null}/>
                </View>
              }
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return (
                  <TaskListItemCard taskId={item.id} 
                      label={item.title} value={item.value}
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
    flexDirection:'row',
    height:screen.height * 0.195,
    alignItems:"flex-end",
    paddingBottom:6,
  },
});