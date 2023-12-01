import React from "react";
import {
  FlatList,
} from 'react-native';
import InsigniaCard from "../components/cards/InsigniaCard";
import InsigniaListItemCard from "../components/cards/InsigniaListItemCard";
import Screen from "../components/others/Screen";
import { insignias } from "../utils/Insignias";

export default function InsigniasScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Medalhas' 
        content={
          <FlatList
              keyExtractor={(item) => item.id}
              data={insignias}
              ListHeaderComponent={<InsigniaCard />}
              ListEmptyComponent={<></>}
              renderItem={({item}) => {
                return (
                  <InsigniaListItemCard insigniaId={item.id} 
                      label={item.label}/>
                )
              }}
          />
        }
    />
  );
}