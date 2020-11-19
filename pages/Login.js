import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Asset } from 'expo-asset';

import axios from 'axios'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import TopCardLogo from './../components/TopCardLogo.js'
import ConfidentialityPolicy from './../components/ConfidentialityPolicy.js'
import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'
import global from './../static/global.js'

function Login({navigation}) {
	const [email,emailChange] = React.useState('')
	const [password, passwordChange] = React.useState('')

  	return (
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} contentContainerStyle={GlobalStyles.page}>
		<TopCardLogo style={ { width:'165%', height:'45%',top:'-5%' ,marginBottom:'-5%'} }/>
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
					method: 'get',
					url: `${env.USER_URL_API}/api/users`
				})
				.then(res => {
					res.data.data.map(e=>e.email==email ? global.user.id=e.id : {})
					global.user.id ? navigation.navigate('Home') : Alert.alert("Login invalid")
				}).catch(err => {
					Alert.alert(`Response status : ${err.toString()}`)
				})
			}}
			title="Se Connecter"
			iconRight icon={<Icon name="arrow-right" size={15} color="white" />}
			titleStyle={{color:'white', marginRight:100}}
			type="clear"
			buttonStyle={GlobalStyles.btn_dark}
		/>

		<Button
			onPress={ () => navigation.navigate('Register')}
			title="Créer un compte"
			type="clear"
			titleStyle={{color:'#A476EF', marginBottom: '7%'}}
		/>

    </KeyboardAwareScrollView>
  );
}
export default Login;
