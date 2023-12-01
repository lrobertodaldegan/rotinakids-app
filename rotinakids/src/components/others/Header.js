import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
}from 'react-native';
import { faAward, faPalette } from '@fortawesome/free-solid-svg-icons';
import { BannerAd,BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2420598559068720/5033949228';

import {Colors} from '../../utils/Colors';
import ColorModal from '../modals/ColorModal';
import IconButton from '../buttons/IconButton';
import HeaderTitle from './HeaderTitle';


export default function Header({navigation, label=null, showActions=false}) {
  const [showModal, setShowModal] = useState(false);

  const renderModal = () => {
    if(showModal === true){
      return (
        <ColorModal onSelection={()=>null} 
            onClose={() => setShowModal(!showModal)}/>
      )
    } else {
      return <></>
    }
  }

  const renderActions = () => {
    if(showActions === true){
      return (
        <IconButton icon={faPalette} label={'Colorir'}
            onPress={() => setShowModal(!showModal)}/>
      )
    } else {
      return <></>
    }
  }

  return (
    <View style={showModal === true ? styles.ctn : {}}>
      <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{requestNonPersonalizedAdsOnly: false,}}
      />

      <View style={styles.ctnl} elevation={5}>
        <HeaderTitle navigation={navigation}
            label={label}/>  

        <View style={styles.actions}>
          <IconButton icon={faAward} label={'Insígnias'}
              style={styles.insigniaAction}
              onPress={() => navigation.navigate('Insignias')}/>

          {renderActions()}
        </View>
      </View>
  
      {renderModal()}
    </View>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    ctn:{
      height:screen.height,
    },
    ctnl:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        margin:10,
        backgroundColor:Colors.white,
        borderRadius:10,
        width:screen.width - 20,
        padding:10,
    },
    actions:{
      flexDirection:'row',
      width:(screen.width - 20) * 0.5,
      justifyContent:"flex-end",
    },
    insigniaAction:{
      marginRight:10
    },
});