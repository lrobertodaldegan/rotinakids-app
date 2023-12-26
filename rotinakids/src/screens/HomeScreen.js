import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import NewChildCard from "../components/cards/NewChildCard";
import Screen from "../components/others/Screen";
import ChildCard from "../components/cards/ChildCard";
import { getChildren, saveChild } from "../service/ChildService";

export default function HomeScreen({navigation}){

  const [children, setChildren] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getChildren().then((cs) => {
      setChildren(cs);
    });
  }

  const handleSave = (child) => {
    saveChild(child).then((cs) => {
      setChildren(cs);

      ToastAndroid.show('Salvo!', ToastAndroid.SHORT);
    });
  }

  return (
    <Screen navigation={navigation} label='Meus filhos' 
        content={
          <FlatList
              ListHeaderComponent={<View style={styles.topFoot}/>}
              data={children}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => 
                <ChildCard navigation={navigation} child={item} 
                    onSave={handleSave}/>}
              ListEmptyComponent={<></>}
              ListFooterComponent={<NewChildCard onSave={handleSave}/>}
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