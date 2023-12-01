import React from "react";
import {
  FlatList,
} from 'react-native';
import Screen from "../components/others/Screen";

export default function HomeScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Meus filhos' 
        content={
          <FlatList
              ListEmptyComponent={<></>}
          />
        }
    />
  );
}