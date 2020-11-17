import * as React from 'react';
import {Text} from 'react-native';

export default function ConfidentialityPolicy(){
	return(
	<Text style={{fontSize:11, color:'#333332'}}>
      	En continuant, vous acceptez nos 
      	<Text style={{color:'#A476EF'} } onPress={() => Alert.alert("Y en a pas")}>conditions</Text>
      	 ainsi que notre politique de 
      	 <Text onPress={() => Alert.alert("Y en a pas non plus")} style={{color:'#A476EF'}}>confidentialité</Text>
	</Text>
	)
}