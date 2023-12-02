import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Screen from "../components/others/Screen";

export default function HomeScreen({navigation}){
  return (
    <Screen navigation={navigation} label='Meus filhos' 
        content={
          <FlatList
              ListHeaderComponent={<View style={styles.topFoot}/>}
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
    height:screen.height * 0.17
  }
});