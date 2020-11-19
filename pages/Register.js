import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Asset } from 'expo-asset';

import axios from 'axios'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ConfidentialityPolicy from './../components/ConfidentialityPolicy.js'
import TopCardLogo from './../components/TopCardLogo.js'
import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'
import global from './../static/global.js'

export default function Register({navigation}) {
	const [email,emailChange] = React.useState('')
	const [password, passwordChange] = React.useState('')
	const [lastname, lastnameChange] = React.useState('')
	const [firstname,firstnameChange] = React.useState('')

  return (
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} contentContainerStyle={GlobalStyles.page}>
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
          url: `${env.USER_URL_API}/api/users`,
          data: {"user":{"email":email, "last_name":lastname, "first_name":firstname}}
        })
        .then(res => {
          
          global.user.id=res.data.data.id
          navigation.navigate('CarLicencePlate')
        }).catch(err => {
          Alert.alert(err.toString())
        })	
			}}
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
    </KeyboardAwareScrollView>
  );
}


