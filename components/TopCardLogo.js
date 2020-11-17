import * as React from 'react';
import { Asset } from 'expo-asset';
import { View, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TopCardLogo({style}){
	return (
	<View style={style}>
		<Image
		source={{ uri: Asset.fromModule(require('./../assets/logo-qrcar.png')).uri }}
		style={{ width: 265, height: 265 }}
		PlaceholderContent={<ActivityIndicator />}
		/>
	</View>
	)
}