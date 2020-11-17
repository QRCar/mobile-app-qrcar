import * as React from 'react';
import { View, Text, Button, ScrollView, ActivityIndicator} from 'react-native';

import { Image } from 'react-native-elements';
import { Asset } from 'expo-asset';
import FullHistory from './../components/FullHistory.js'

import Navbar from './../components/Navbar.js'
import GlobalStyles from './../static/GlobalStyles.js'

export default function History({navigation}) {

    let data_history = [{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"8.9", location:"Le domac d'a cote"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"trescher", location: "Burger King Nantes"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"Gratuit", location:"Reste de frite"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"}]

    return (
    <View style={GlobalStyles.page}>
        <View style={{ width: '100%',flex:0, flexDirection:'row', justifyContent:'space-around'}}>
            <Text style={GlobalStyles.h1_title}>Historique des dépenses</Text>
            <Image
                source={{ uri: Asset.fromModule(require('./../assets/creditcard.png')).uri }}
                style={{ width: 67, height: 52 }}
                PlaceholderContent={<ActivityIndicator />}
            />
        </View>
        <FullHistory data={data_history} />
        <Navbar navigation={navigation} currentComponent="History"/>
    </View>
);
}
