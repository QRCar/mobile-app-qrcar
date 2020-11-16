import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator} from 'react-native';
import { Asset } from 'expo-asset';

import axios from 'axios'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'

function Login({navigation}) {
	let login_form = {
		"email":"Email", 
		"password": "Mot de passe",
		"lastname":"Nom",
		"firstname":"Prénom"
	}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    	<Image
		source={{ uri: Asset.fromModule(require('./../assets/logo-qrcar.png')).uri }}
		style={{ width: 200, height: 200 }}
		PlaceholderContent={<ActivityIndicator />}
		/>
      	<Text>Connexion</Text>

      	<TextInput value={login_form.email} 
      	style={GlobalStyles.txt_input}
        defaultValue="Email"/>

      	<TextInput value={login_form.password}
      	style={GlobalStyles.txt_input}
      	defaultValue="Mot de Passe"/>

      	<Button 
			onPress={ () => {
				axios({
					method: 'post',
					url: `${env.URL_API}/auth`,
					data: {login_form}
				})
				.then(res => {Alert.alert(`Response status : ${res.status.toString()}`)})
				.catch(err => {Alert.alert(`Response status : ${err.toString()}`)})
			}}
			title="Se Connecter" 
			iconRight icon={<Icon name="arrow-right" size={15} color="white" />}
		/>

		<Button 
			onPress={ () => navigation.navigate('Register')}
			title="Créer un compte" 
			type="clear"
		/>
      	

      	     	
    </View>
  );
}
export default Login;
