import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator} from 'react-native';
import { Asset } from 'expo-asset';

import axios from 'axios'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopCardLogo from './../components/TopCardLogo.js'
import ConfidentialityPolicy from './../components/ConfidentialityPolicy.js'
import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'

function Login({navigation}) {
	const [email,emailChange] = React.useState('')
	const [password, passwordChange] = React.useState('')

  	return (
    <View style={GlobalStyles.page }>
		<TopCardLogo style={
		{backgroundColor:'#E9E9E9', width:'165%', height:'45%', flex:0, alignItems: 'center',top:'-5%'
		,marginBottom:'-5%', borderBottomRightRadius:'550%', borderBottomLeftRadius:'550%'}
		}/>
      	<Text style={GlobalStyles.h1_title}>Connexion</Text>

      	<TextInput value={email} 
      	style={GlobalStyles.txt_input}
      	placeholder="Email"
        onChangeText={t => emailChange(t)}
        />

      	<TextInput value={password}
      	style={GlobalStyles.txt_input}
      	placeholder="Mot de Passe"
      	onChangeText={t => passwordChange(t)}
      	/>
      	<ConfidentialityPolicy/>
      	<Button 
			onPress={ () => {
				axios({
					method: 'post',
					url: `${env.URL_API}/auth`,
					data: {email:email,password:password}
				})
				.then(res => {
					Alert.alert(`Response status : ${res.status.toString()}`)
					navigation.navigate('Home')
				})
				.catch(err => {Alert.alert(`Response status : ${err.toString()}`)})
			}}
			title="Se Connecter" 
			iconRight icon={<Icon name="arrow-right" size={15} color="white" />}
			titleStyle={{color:'white', marginRight:100}}
			type="clear"
			style={GlobalStyles.btn_dark}
		/>

		<Button 
			onPress={ () => navigation.navigate('Register')}
			title="Créer un compte" 
			type="clear"
			titleStyle={{color:'#A476EF', marginBottom: '7%'}}
		/>
      	

      	     	
    </View>
  );
}
export default Login;
