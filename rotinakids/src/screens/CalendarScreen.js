import React from "react";
import Screen from "../components/others/Screen";
import { avatares } from "../utils/Avatares";
import Calendar from "../components/others/Calendar";

export default function CalendarScreen({navigation, route}){

  const {child} = route.params;

  return (
    <Screen navigation={navigation} label={child?.name} showHeaderActions={true}
        avatarId={child?.avatarId && child?.avatarId !== null ? child?.avatarId : avatares[0].id}
        content={<Calendar child={child}/>}
    />
  );
}