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
import { saveColor } from '../../service/ColorService';

export default function Header({
                            navigation, 
                            label=null, 
                            showActions=false,
                            avatarId=null,
                            onChangeColor=(c)=>null
                          }) {

  const [showModal, setShowModal] = useState(false);

  const handleColorSelection = (color) => {
    saveColor({color:color});

    onChangeColor(color);

    setShowModal(!showModal);
  }

  const renderModal = () => {
    if(showModal === true){
      return (
        <ColorModal onSelection={handleColorSelection} 
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
    <>
      <View style={styles.ctn}>
        {/* <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{requestNonPersonalizedAdsOnly: false,}}
        /> */}

        <View style={styles.ctnl} elevation={3}>
          <HeaderTitle navigation={navigation}
              avatarId={avatarId}
              label={label}/>  

          <View style={styles.actions}>
            <IconButton icon={faAward} label={'Medalhas'}
                style={styles.insigniaAction}
                onPress={() => navigation.navigate('Insignias')}/>

            {renderActions()}
          </View>
        </View>
      </View>

      {renderModal()}
    </>
  )
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    ctn:{
      position:'absolute',
      backgroundColor:'transparent',
      top:screen.height * 0.025,
      zIndex:10
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