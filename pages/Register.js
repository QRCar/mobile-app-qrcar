import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator} from 'react-native';
import { Asset } from 'expo-asset';

import axios from 'axios'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ConfidentialityPolicy from './../components/ConfidentialityPolicy.js'
import TopCardLogo from './../components/TopCardLogo.js'
import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'

export default function Register({navigation}) {
	const [email,emailChange] = React.useState('')
	const [password, passwordChange] = React.useState('')
	const [lastname, lastnameChange] = React.useState('')
	const [firstname,firstnameChange] = React.useState('')

  return (
    <View style={GlobalStyles.page}>
    	<TopCardLogo style={ { width:'165%', height:'40%',top:'-5%', marginBottom:'-2%'} }/>
    	
      	<Text style={GlobalStyles.h1_title}>Inscription</Text>


      	<TextInput value={firstname} 
      	style={GlobalStyles.txt_input}
      	placeholder="Prénom"
        onChangeText={t => firstnameChange(t)}
        />


      	<TextInput value={lastname} 
      	style={GlobalStyles.txt_input}
      	placeholder="Nom"
        onChangeText={t => lastnameChange(t)}
        />

      	<TextInput value={email} 
      	style={GlobalStyles.txt_input}
      	placeholder="Email"
        onChangeText={t => emailChange(t)}
        />

        <TextInput value={password} 
      	style={GlobalStyles.txt_input}
      	placeholder="Mot de passe"
        onChangeText={t => passwordChange(t)}
        />
        <ConfidentialityPolicy/>
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
			titleStyle={{color:'white', marginRight:100}}
			type="clear"
			buttonStyle={[GlobalStyles.btn_dark,{marginTop:4}]}
		/>

		<Button 
			onPress={ () => navigation.navigate('Login')}
			title="Déjà un compte" 
			type="clear"
			titleStyle={{color:'#A476EF', marginBottom: '7%'}}
		/>
    </View>
  );
}


