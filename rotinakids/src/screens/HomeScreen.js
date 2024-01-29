import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import { useIsFocused } from "@react-navigation/native"; 
import NewChildCard from "../components/cards/NewChildCard";
import Screen from "../components/others/Screen";
import ChildCard from "../components/cards/ChildCard";
import { delChild, getChildren, saveChild } from "../service/ChildService";
import AdBanner from "../components/others/AdBanner";

export default function HomeScreen({navigation}){

  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    init();
  }, [isFocused]);

  const init = () => {
    setLoading(true);

    getChildren().then((cs) => {
      setLoading(false);
    
      setChildren(cs);
    });
  }

  const handleSave = (child) => {
    saveChild(child).then((cs) => {
      setChildren(cs);

      ToastAndroid.show(`Salvo com sucesso!`, ToastAndroid.SHORT);
    });
  }

  const handleExclude = (childId) => {
    delChild(childId).then(() => {
      init();

      ToastAndroid.show(`Filho removido com sucesso!`, ToastAndroid.SHORT);
    });
  }

  return (
    <Screen navigation={navigation} label='Meus filhos'
        content={
          <FlatList
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={() => init()}/>
              }
              ListHeaderComponent={<View style={styles.topFoot}/>}
              data={children}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => 
                <ChildCard navigation={navigation} child={item} 
                    onSave={handleSave} onExclude={handleExclude}/>}
              ListEmptyComponent={<></>}
              ListFooterComponent={
                <>
                  <NewChildCard onSave={handleSave}/>

                  <AdBanner />
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
    height:screen.height * 0.13
  }
});