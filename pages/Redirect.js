import * as React from 'react';
import { View, Text } from 'react-native';

export default function Redirect({navigation}){
	setTimeout(() => {navigation.navigate('Home')},50) 
	return (
		<View>
			<Text style={{textAlign:'center'}}>
				Redirecting ...
			</Text>
		</View>
		)
}