import React from "react";
import {
  FlatList,
} from 'react-native';
import Screen from "../components/Screen";

export default function RecompensasScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Recompensas' 
        content={
          <FlatList
              ListEmptyComponent={<></>}
          />
        }
    />
  );
}