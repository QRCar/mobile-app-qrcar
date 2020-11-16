import * as React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

import Navbar from './../components/Navbar.js'

export default function Parameter({navigation}) {
  return (
    <View style={{height:50, flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
        <Button 
        	type="clear"
			onPress={ () => navigation.navigate('Welcome')}
			title="Plaque d'immatriculation" 
			icon={<Icon name="car" size={30} color="#323232" />}
		/>

        <Button 
        	type="clear"
			onPress={ () => navigation.navigate('Welcome')}
			title="Information personnelles" 
			icon={<Icon name="user" size={30} color="#323232" />}
		/>

        <Button 
			type="clear"
			onPress={ () => navigation.navigate('Welcome')}
			title="Déconnexion" 
			icon={<Icon name="sign-out" size={30} color="red" />}
		/>


        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <Navbar navigation={navigation}/>
    </View>
  );
}

