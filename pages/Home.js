import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Navbar from './../components/Navbar.js'
import ShortHistory from './../components/ShortHistory.js'
import ChartCost from './../components/ChartCost.js'
import DisplayCost from './../components/DisplayCost.js'
import GlobalStyles from './../static/GlobalStyles.js'

export default function Home({navigation}) {
	let data_history = [{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"8.9", location:"Le domac d'a cote"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"trescher", location: "Burger King Nantes"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"Gratuit", location:"Reste de frite"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"}]
	return (
    <View style={GlobalStyles.page}>
        <Text style={GlobalStyles.h1_title}>Accueil</Text>
        
        <Text style={GlobalStyles.h3_title, {alignSelf:'flex-start'}}>Dépenses ce mois-ci</Text>
        
        <DisplayCost style={{transform: [{ translateX: 10 }] }} cost="124.20" fontSizeEuro="56" fontSizeCent="36" fontSizeIco="48"/>

        <Text style={GlobalStyles.h3_title, {alignSelf:'flex-start'}}>Dépenses par mois</Text>
        
        <ChartCost data={
          [{mouth:"January",value:328},
          {mouth:"February",value:156},
          {mouth:"March",value:80},
          {mouth:"April",value:249},
          {mouth:"May",value:167},
          {mouth:"June",value:508},
          {mouth:"July",value:508},
          {mouth:"August",value:508},
          {mouth:"September",value:508},
          {mouth:"October",value:508},
          {mouth:"November",value:508},
          {mouth:"December",value:124}]
        }/>

       	<Text style={GlobalStyles.h3_title, {alignSelf:'flex-start'}}>Dernières dépenses</Text>
       	<ShortHistory data={data_history} />
       	<Navbar navigation={navigation} currentComponent="Home"/>
    </View>
    
  );
}