import React, {useEffect, useState} from "react";
import {
  FlatList,
} from 'react-native';
import DefaultTasksCard from "../components/cards/DefaultTaskCard";
import NewTasksCard from "../components/cards/NewTaskCard";
import TasksCard from "../components/cards/TaskCard";
import Screen from "../components/others/Screen";
import { tarefas } from "../utils/Tarefas";

export default function TarefasScreen({navigation}){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let ts = [];

    for(let i=0; i < tarefas.length; i++){
      let t = tarefas[i];

      ts.push(<DefaultTasksCard key={t.id} title={t.title}/>);
    }

    //TODO ajustar pra buscar lista cadastrada em cache
    ts.push(<TasksCard key={'asdasda'} item={{id:'asdasda',title:'teste',value:10}}/>);

    setTasks(ts);
  }, []);

  return (
    <Screen navigation={navigation} label='Tarefas' 
        content={
          <FlatList
              data={tasks}
              ListEmptyComponent={<></>}
              renderItem={({item}) => item}
              ListFooterComponent={<NewTasksCard />}
          />
        }
    />
  );
}