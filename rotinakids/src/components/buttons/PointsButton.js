import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
}from 'react-native';
import {Colors} from '../../utils/Colors';
import Label from '../others/Label';

export default function PointsButton({
																		value, 
																		selected=false, 
																		onSelection=(val)=>null
																	}) {
	return (
		<TouchableHighlight underlayColor={Colors.white} 
				style={[styles.wrap, selected === true ? styles.slctd : {}]}
				onPress={() => onSelection(value)}>

				<Label value={value} size={14}
						bold={selected === true}
						style={[
								styles.lbl, 
								selected === true ? styles.lblSlctd : {}]}
				/>

		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	wrap:{
		justifyContent:'center',
		alignItems:'center',
		width:30,
		height:30,
		borderRadius:50,
		borderWidth:1,
		borderColor:Colors.pinker,
		marginHorizontal:2
	},
	slctd:{
		backgroundColor:Colors.pinker
	},
	lbl:{
		color:Colors.pinker
	},
	lblSlctd:{
		color:Colors.white
	},
});