import * as React from 'react';
import { Asset } from 'expo-asset';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const localStyle = StyleSheet.create({
  view_logo:{
    backgroundColor:'#E9E9E9',
    flex:0,
    alignItems: 'center',
    borderBottomRightRadius:550, 
    borderBottomLeftRadius:550	
  }
})

export default function TopCardLogo({style}){
	return (
		<View style={[localStyle.view_logo, style]}>
			<Image
			source={{ uri: Asset.fromModule(require('./../assets/logo-qrcar.png')).uri }}
			style={{ width: 265, height: 265 }}
			PlaceholderContent={<ActivityIndicator />}
			/>
		</View>
	)
}

