import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopCardLogo from './../components/TopCardLogo.js'
import GlobalStyles from './../static/GlobalStyles.js'


export default function Welcome({navigation}) {
	const theme = {
  		Button: {
    		titleStyle: {
      			color: '#FFFFFF',
		    },
  		},
	};

  return (
    <View style={GlobalStyles.page }>
		<TopCardLogo style={ { width:'165%', height:'50%',top:'-10%', marginBottom:'-25%'} }/>
		

      	<Text style={{textAlign:'center', fontSize:30}}>Bienvenue sur{"\n"}QRCar</Text>
      	<ThemeProvider theme={theme}>
			<Button 
				onPress={ () => navigation.navigate('Login')}
				title="Connexion" 
				type="clear"
				buttonStyle={GlobalStyles.btn_light}
			/>
			
			<Button 
				onPress={ () => navigation.navigate('Register')}
				title="Inscription" 
				type="clear"
				buttonStyle={GlobalStyles.btn_dark}
			/>

		</ThemeProvider>
      	<Text style={{color:'#333332', marginBottom:10}}>Texte commercial</Text>      	
    </View>
  );
}


