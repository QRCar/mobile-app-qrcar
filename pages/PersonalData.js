import * as React from 'react';
import { View, Text,TextInput, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import { Asset } from 'expo-asset';

import axios from 'axios'
import global from './../static/global.js'

import { Button, ThemeProvider, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyles from './../static/GlobalStyles.js'
import env from './../static/env.js'


const style = StyleSheet.create({
	title_btn:{
		alignSelf:'flex-start',
		marginRight:'10%',
		color: '#333332',
		textAlign:'center'
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

let plate_list = data => data.map((e,i) => {
	return (
		<Button
			key={`${e.toString()}${i}`}
	        type="clear"
	        onPress={ () => navigation.navigate('PersonalData')}
	        title={e}
	        icon={<Icon name="trash" size={30} color="#C90000" />}
	        iconRight
	        titleStyle={style.title_btn}
	    	buttonStyle={{alignSelf:'center'}}
        />
	)
})



export default function PersonalData({navigation}) {
	
	const [car_data, set_car_data] = React.useState([]);
	React.useEffect(() => {
		let to_return_plate = []
		axios({
			method: 'get',
			url: `${env.CAR_URL_API}/api/cars`
		})
		.then(res => {
			let history = res.data.data.filter(e=>e.user_id==global.user.id)
			history.map(e=>to_return_plate.push(e.license))
			set_car_data(to_return_plate)
		}).catch(err => {
			Alert.alert(`Response status : ${err.toString()}`)
		})
		
	},[]);  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    	<View style={{width:'100%', flex:1, justifyContent:'flex-start',alignItems: 'center'}}>
        <View style={style.item_view}>
	        <Text style={[GlobalStyles.h3_title, {textAlign:'center'}]}>
	        	Les voitures enregistrées
	        </Text>
        	{plate_list(car_data)}

        </View>

        </View>
      	     	
    </View>
  );
}

