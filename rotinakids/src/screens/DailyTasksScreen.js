import React, {useEffect, useState} from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Screen from "../components/others/Screen";

export default function DailyTasksScreen({navigation, route}){

  const [children, setChildren] = useState([]);

  const {child} = route.params;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    //TODO load tasks by child
  }

  return (
    <Screen navigation={navigation} label={child?.name}
        showHeaderActions={true}
        content={
          <FlatList
              ListHeaderComponent={<View style={styles.topFoot}/>}
              data={children}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => <></>}
              ListEmptyComponent={<></>}
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