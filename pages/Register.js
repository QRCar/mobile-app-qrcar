import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator} from 'react-native';
import { Asset } from 'expo-asset';

import axios from 'axios'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'

export default function Register({navigation}) {
	let register_form = {
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
      	<Text>Inscription</Text>

      	<TextInput value={register_form.firstname} 
      	style={GlobalStyles.txt_input}/>

        <TextInput value={register_form.lastname} 
      	style={GlobalStyles.txt_input}/>

      	<TextInput value={register_form.email} 
      	style={GlobalStyles.txt_input}/>

      	<TextInput value={register_form.password}
      	style={GlobalStyles.txt_input}/>

      	<Button 
			onPress={ () => {
				axios({
					method: 'post',
					url: `${env.URL_API}/user`,
					data: {register_form}
				})
				.then(res => {Alert.alert(`Response status : ${res.status.toString()}`)})
				.catch(err => {Alert.alert(`Response status : ${err.toString()}`)})
			} }
			title="Créer un compte" 
			iconRight icon={<Icon name="arrow-right" size={15} color="white" />}
		/>

		<Button 
			onPress={ () => navigation.navigate('Login')}
			title="Déjà un compte" 
			type="clear"
		/>
    </View>
  );
}


