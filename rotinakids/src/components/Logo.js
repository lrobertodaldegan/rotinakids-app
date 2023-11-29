import React, {useEffect} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Dimensions,
}from 'react-native';
import logo from '../assets/img/logo.png';


export default function Logo({style={}}) {
    return <ImageBackground source={logo} style={[styles.logo, style]} resizeMode='contain'/>
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    logo:{
        height:screen.height * 0.05,
        width:screen.height * 0.05,
    }
});