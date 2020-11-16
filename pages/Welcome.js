import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyles from './../static/GlobalStyles.js'


function Welcome({navigation}) {
	const theme = {
  		Button: {
    		titleStyle: {
      			color: '#FFFFFF',
		    },
  		},
	};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Image
		source={{ uri: Asset.fromModule(require('./../assets/logo-qrcar.png')).uri }}
		style={{ width: 200, height: 200 }}
		PlaceholderContent={<ActivityIndicator />}
		/>

      	<Text style={GlobalStyles.txt}>Bienvenue sur QRCar</Text>
      	<ThemeProvider theme={theme}>
			<Button 
				onPress={ () => navigation.navigate('Login')}
				title="Connexion" 
				iconRight icon={<Icon name="arrow-right" size={15} color="white" />}
			/>
			
			<Button 
				onPress={ () => navigation.navigate('Register')}
				title="Inscription" 
				iconRight icon={<Icon name="arrow-right" size={15} color="white" />}
			/>

			<Button onPress={ () => navigation.navigate('Home')} title="Home" />
			<Button onPress={ () => navigation.navigate('History')} title="History" />
			<Button onPress={ () => navigation.navigate('Parameter')} title="Parameter" />


		</ThemeProvider>
      	<Text>Texte commercial</Text>      	
    </View>
  );
}

export default Welcome;

