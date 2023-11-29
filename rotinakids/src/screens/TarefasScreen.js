import React from "react";
import {
  FlatList,
} from 'react-native';
import Screen from "../components/Screen";

export default function TarefasScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Tarefas' 
        content={
          <FlatList
              ListEmptyComponent={<></>}
          />
        }
    />
  );
}