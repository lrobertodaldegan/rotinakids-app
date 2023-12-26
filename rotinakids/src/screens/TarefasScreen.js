import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DefaultTasksCard from "../components/cards/DefaultTaskCard";
import NewTaskCard from "../components/cards/NewTaskCard";
import TaskCard from "../components/cards/TaskCard";
import Screen from "../components/others/Screen";
import { tarefas } from "../utils/Tarefas";
import { getTasks, saveTask } from "../service/TaskService";

export default function TarefasScreen({navigation}){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getTasks().then((tks) => {
      let ts = [];

      for(let i=0; i < tarefas.length; i++){
        ts.push(<DefaultTasksCard key={tarefas[i].id} title={tarefas[i].title}/>);
      }

      for(let i=0; i<tks.length; i++){
        ts.push(
          <TaskCard key={tks[i].id} item={tks[i]} 
              onSave={handleSave} onExclude={handleExclude}/>
        );  
      }
      
      setTasks(ts);
    });
  }

  const handleSave = (task) => {
    saveTask(task).then((ts) => init());
  }

  const handleExclude = (taskId) => {
    delTask(taskId).then(() => init());
  }

  return (
    <Screen navigation={navigation} label='Tarefas' 
        content={
          <FlatList
              data={tasks}
              ListEmptyComponent={<></>}
              renderItem={({item}) => item}
              ListHeaderComponent={<View style={styles.topFoot}/>}
              ListFooterComponent={
                <>
                  <NewTaskCard onSave={handleSave}/>

                  <View style={styles.topFoot}/>
                </>
              }
          />
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