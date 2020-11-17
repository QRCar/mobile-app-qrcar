import * as React from 'react';
import {Text} from 'react-native';

export default function DispalCost({cost, fontSizeEuro, fontSizeCent, style}){
	return(
	<Text style={style}>
		<Text style={{ fontSize: fontSizeEuro}}>{cost.split('.')[0]}</Text>
		<Text style={{ fontSize: fontSizeCent}}>,{cost.split('.')[1]} €</Text>
	</Text>
	)
} 