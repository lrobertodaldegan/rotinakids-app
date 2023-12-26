import React, {useEffect, useState} from "react";
import { getByChild } from "../../service/InsigniasService";
import { StyleSheet, View } from "react-native";
import Insignia from "./Insignia";

export default function ChildInsignias({child}) {
  const [insignias, setInsignias] = useState([]);

  useEffect(() => {
    getByChild(child.id).then(is => {
      setInsignias(is);
    });
  }, []);

  const renderInsignias = () => {
    let ins = [];
    
    for(let i=0; i<insignias.length; i++){
      let insigniaF = insignias.filter(i => i.id === insignias[i].id);
      
      if(insigniaF && insigniaF !== null && insigniaF.length > 0)
        ins.push(<Insignia insignia={insigniaF[0]} />);
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
    flexWrap:"wrap"
  },
});