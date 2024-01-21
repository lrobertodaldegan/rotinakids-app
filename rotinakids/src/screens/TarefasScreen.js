import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import DefaultTasksCard from "../components/cards/DefaultTaskCard";
import NewTaskCard from "../components/cards/NewTaskCard";
import TaskCard from "../components/cards/TaskCard";
import Screen from "../components/others/Screen";
import { tarefas } from "../utils/Tarefas";
import { getTasks, saveDefaultTask, saveTask, delTask } from "../service/TaskService";
import AdBanner from "../components/others/AdBanner";
import { Colors } from "../utils";

export default function TarefasScreen({navigation}){
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setLoading(true);

    getTasks().then((tks) => {
      let ts = [];

      for(let i=0; i < tarefas.length; i++){
        ts.push(
          <DefaultTasksCard key={tarefas[i].id} 
              title={tarefas[i].title}
              onSave={handleSaveDefaultTask}
              onDisable={handleSaveDefaultTask}
          />
        );
      }

      for(let i=0; i<tks.length; i++){
        ts.push(
          <TaskCard key={tks[i].id} item={tks[i]} 
              onSave={handleSave} onExclude={handleExclude}/>
        );  
      }
      
      setTasks(ts);
      setLoading(false);
    });
  }

  const handleSaveDefaultTask = (defaultTask) => {
    saveDefaultTask(defaultTask.title, defaultTask)
    .then((ts) => init());
  }

  const handleSave = (task) => {
    saveTask(task).then((ts) => init());
  }

  const handleExclude = (taskId) => {
    delTask(taskId).then(() => init());
  }

  const renderContent = () => {
    if(loading === true){
      return (
        <>
          <View style={styles.topFoot}/>
          <ActivityIndicator color={Colors.pinker}/>
        </>
      );
    } else {
      return (
        <FlatList
            data={tasks}
            ListEmptyComponent={<></>}
            renderItem={({item}) => item}
            ListHeaderComponent={<View style={styles.topFoot}/>}
            ListFooterComponent={
              <>
                <NewTaskCard onSave={handleSave}/>

                <AdBanner />
              </>
            }
        />
      );
    }
  }

  return (
    <Screen navigation={navigation} label='Tarefas' 
        content={renderContent()}
    />
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  topFoot:{
    height:screen.height * 0.13
  }
});