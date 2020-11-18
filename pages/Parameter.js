import * as React from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Navbar from './../components/Navbar.js'
import GlobalStyles from './../static/GlobalStyles.js'

const style = StyleSheet.create({
	title_btn:{
		alignSelf:'flex-start',
		marginLeft:'10%',
		color: '#333332',
	},
	item_view: {
		width:'100%',
		borderBottomColor:'#D7D7D7',
		borderBottomWidth: 2,
		marginTop:20,
		marginRight:0,
		marginBottom:20,
		marginLeft:0,
	}
})

export default function Parameter({navigation}) {
	return (
    <View style={GlobalStyles.page}>
        <Text style={GlobalStyles.h1_title}>Paramètres</Text>
        <View style={{width:'100%', flex:1, justifyContent:'flex-start',alignItems: 'center'}}>
        <View style={style.item_view}>
	        <Button
	            type="clear"
	            onPress={ () => navigation.navigate('CarLicencePlate')}
	            title="Plaque d'immatriculation"
	            icon={<Icon name="car" size={30} color="#323232"/>}
	            titleStyle={style.title_btn}
	            buttonStyle={{alignSelf:'flex-start'}}
	        />
        </View>
        <View style={style.item_view}>
	        <Button
	            type="clear"
	            onPress={ () => navigation.navigate('PersonalData')}
	            title="Information personnelles"
	            icon={<Icon name="user" size={30} color="#323232" />}
	            titleStyle={style.title_btn}
	            buttonStyle={{alignSelf:'flex-start'}}
	        />
	    </View>
	    <View style={style.item_view}>
	        <Button
	            type="clear"
	            onPress={ () => navigation.navigate('Welcome')}
	            title="Déconnexion"
	            icon={<Icon name="sign-out" size={30} color="red" />}
	            titleStyle={{...style.title_btn,color:'#C90000'}}
	            buttonStyle={{alignSelf:'flex-start'}}
	        />
        </View>

        </View>
        <Navbar navigation={navigation} currentComponent="Parameter"/>
    </View>
	);
}

