import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mobileAds from 'react-native-google-mobile-ads';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar}from 'react-native';

import {Colors} from './src/utils/Colors';
import HomeScreen from './src/screens/HomeScreen';
import InsigniasScreen from './src/screens/InsigniasScreen';
import TarefasScreen from './src/screens/TarefasScreen';
import RecompensasScreen from './src/screens/RecompensasScreen';
import DailyTasksScreen from './src/screens/DailyTasksScreen';

const Stack = createNativeStackNavigator();

const ScreenOptions = {
  headerShown: false
}

export default function App(): JSX.Element {
  mobileAds().initialize();

  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.lightGray}/>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={ScreenOptions} />
          <Stack.Screen name="Insignias" component={InsigniasScreen} options={ScreenOptions} />
          <Stack.Screen name="Tarefas" component={TarefasScreen} options={ScreenOptions} />
          <Stack.Screen name="Recompensas" component={RecompensasScreen} options={ScreenOptions} />
          <Stack.Screen name="Daily" component={DailyTasksScreen} options={ScreenOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
