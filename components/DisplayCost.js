import * as React from 'react';
import {Text} from 'react-native';

export default function DispalCost({cost, fontSizeEuro, fontSizeCent, fontSizeIco, style}){
	return(
	<Text style={style}>
		<Text style={{ fontSize: parseInt(fontSizeEuro) }}>{cost.split('.')[0]}</Text>
		<Text style={{ fontSize: parseInt(fontSizeCent) }}>,{cost.split('.')[1]}</Text>
		<Text style={{ fontSize: parseInt(fontSizeIco) }}> €</Text>
	</Text>
	)
} 