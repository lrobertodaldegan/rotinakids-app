import React, {useState, useEffect} from "react";
import {
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import Screen from "../components/others/Screen";
import { Colors } from "../utils";
import { AbDays, dateLabel, completeDateLabel } from "../utils/Days";
import { avatares } from "../utils/Avatares";
import CalendarDay from "../components/others/CalendarDay";
import Label from "../components/others/Label";
import AdBanner from "../components/others/AdBanner";
import { getDailyTasks } from "../service/TaskService";
import CalendarTaskListItemCard from "../components/cards/CalendarTaskListItemCard";

const weekDays = 7;
const weeks = 5;

export default function CalendarScreen({navigation, route}){
  const [refDt, setRefDt] = useState(new Date());
  const [cDays, setCDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [daySlctd, setDaySlctd] = useState(null);
  const [tasks, setTasks] = useState([]);

  const {child} = route.params;

  useEffect(()=>{
    init();
  }, []);

  const handleMonthSelection = (nm) => {
    setRefDt(nm);

    init();
  }

  const handleDaySelection = (daySelected, tasks) => {
    let d = new Date(refDt.getFullYear(), refDt.getMonth(), daySelected);

    setDaySlctd(completeDateLabel(d));
    setTasks(tasks);
  } 

  const init = async () => {
    setLoading(true);
    setDaySlctd(null);
    setTasks([]);
    setCDays([]);

    let comps = [];

    let dt = new Date(refDt.getFullYear(), refDt.getMonth() + 1, 0);

    let firstWeekDay = new Date(refDt.getFullYear(), refDt.getMonth(), 1).getDay();

    let days = weeks * weekDays;

    if(firstWeekDay > 4 && dt.getDate() > 29)
      days = (weeks + 1) * weekDays;

    let d = 1;

    for(let i=0; i < days; i++){
      let stl = {};

      if(i === days-7)
        stl = {borderBottomLeftRadius:10};

      if(i === days-1)
        stl = {borderBottomRightRadius:10};

      if(!(i < firstWeekDay || d > dt.getDate())){
        let dayOfMonth = new Date(refDt.getFullYear(), refDt.getMonth(), d);

        let tasks = await getDailyTasks(dateLabel(dayOfMonth), child.id);

        comps.push({value:d, style:stl, tasks:tasks});

        d = d + 1;
      } else {
        comps.push({value:null, style:stl, tasks:null});
      }
    }

    setCDays(comps);

    setTimeout(() => setLoading(false), 100);
  }

  const renderCalendarHeader = () => {
    let comps = [];

    for(let a=0; a<weekDays;a++){
      let stl = [styles.dayLgnd];

      if(a === 0)
        stl.push({borderTopLeftRadius:10});

      if(a === 6)
        stl.push({borderTopRightRadius:10});

      comps.push(
        <View key={`${a}${a}_`} style={stl}>
          <Label value={AbDays[a]} size={10} 
              style={styles.dayLgndLbl}
              bold={true}/>
        </View>
      );
    }

    return comps;
  }

  const renderDays = () => {
    let cs = [];

    for(let i=0; i<cDays.length;i++){
      cs.push(
        <CalendarDay key={i} value={cDays[i].value} 
            tasks={cDays[i].tasks}
            onPress={handleDaySelection}
        />
      );
    }

    return cs;
  }

  const renderSelectedDayTitle = () => {
    if(daySlctd && daySlctd !== null){
      if(tasks && tasks.length > 0){
        return (
          <Label value={daySlctd} size={16} 
              style={{marginTop:20}} bold={true}/>
        );
      } else {
        return ( 
          <View style={{alignItems:'center'}}>
            <Label value={daySlctd} size={16} 
                style={{marginTop:20}} bold={true}/>

            <Label value={'Não encontramos nada por aqui... 🤷‍♂️'} 
                style={{marginVertical:20}} size={12}/>
          </View>
        );
      }
    }

    return <></>
  }

  const renderCalendar = () => {
    if(loading === true){
      return (
        <ActivityIndicator style={{marginVertical:20}} 
            color={Colors.pinker} />
      );
    } else {
      return (
        <View style={styles.calendarDays}>
          {renderCalendarHeader()}
          
          {renderDays()}

          {renderSelectedDayTitle()}
        </View>
      );
    }
  }

  return (
    <Screen navigation={navigation} label={child?.name} showHeaderActions={true}
        avatarId={child?.avatarId && child?.avatarId !== null ? child?.avatarId : avatares[0].id}
        monthSelectable={true} onChangeMonth={handleMonthSelection}
        content={
          <FlatList
              keyboardDismissMode='on-drag'
              contentContainerStyle={styles.wrap}
              ListHeaderComponent={() => renderCalendar()}
              data={tasks}
              keyExtractor={(item) => item.title}
              renderItem={({item}) => <CalendarTaskListItemCard task={item}/>}
              ListEmptyComponent={<></>}
              ListFooterComponent={<AdBanner />}
          />
        }
    />
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrap:{
    marginVertical:screen.height * 0.13,
    backgroundColor:Colors.white,
    borderRadius:10,
    marginHorizontal:3,
    minHeight:screen.height * 0.6,
  },
  calendarDays:{
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'center',
    marginBottom:10,
  },
  dayLgnd:{
    padding:3,
    borderWidth:1,
    borderColor:Colors.pink,
    width:screen.width * 0.14,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.pink,
  },
  dayLgndLbl:{
    color: Colors.white
  },
});