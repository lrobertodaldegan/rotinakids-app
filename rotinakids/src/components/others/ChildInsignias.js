import React, {useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";
import { getMedalsByChild, handleMedalGiven } from "../../service/ScoreService";
import Insignia from "./Insignia";

export default function ChildInsignias({child}) {
  const [insignias, setInsignias] = useState([]);

  useEffect(() => {
    getMedalsByChild(child.id).then(is => {
      if(is && is !== null && is.length > 0){
        setInsignias(is);
      } else {
        handleMedalGiven(child.id)
        .then(setInsignias);
      }
    });
  }, []);

  const renderInsignias = () => {
    let ins = [];
    
    for(let i=0; i<insignias.length; i++){
      let insigniaF = insignias.filter(ins => ins.id === insignias[i].id);
      
      if(insigniaF && insigniaF !== null && insigniaF.length > 0)
        ins.push(<Insignia key={insigniaF[0].id} insignia={insigniaF[0]} />);
    }

    return ins;
  }

  return (
    <View style={styles.wrap}>
      {renderInsignias()}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'center',
    marginHorizontal: 20
  },
});