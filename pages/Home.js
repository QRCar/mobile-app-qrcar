import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Navbar from './../components/Navbar.js'
import ShortHistory from './../components/ShortHistory.js'
import GlobalStyles from './../static/GlobalStyles.js'

export default function Home({navigation}) {
	let data_history = [{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"8.9", location:"Le domac d'a cote"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"trescher", location: "Burger King Nantes"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"Gratuit", location:"Reste de frite"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"}]
	const dispalCost = (cost) => <Text style={{transform: [{ translateX: 10 }] }}><Text style={{ fontSize: 56}}>{cost.split('.')[0]}</Text><Text style={{ fontSize: 36}}>,{cost.split('.')[1]} €</Text></Text>

  return (
    <View style={GlobalStyles.page}>
        <Text style={GlobalStyles.h1_title}>Accueil</Text>
        
        <Text style={GlobalStyles.h3_title, {alignSelf:'flex-start'}}>Dépenses ce mois-ci</Text>
        {dispalCost("124.20")}

        <Text style={GlobalStyles.h3_title, {alignSelf:'flex-start'}}>Dépenses par mois</Text>
        
        <Image
        style={{width: '100%', height: '25%'}}
        source={{
          uri: 'https://image-charts.com/chart?chbh=a&chbr=10&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y',
        }}
      	/>

       	<Text style={GlobalStyles.h3_title, {alignSelf:'flex-start'}}>Dernières dépenses</Text>
       	<ShortHistory data={data_history} />
       	<Navbar navigation={navigation} currentComponent="Home"/>
    </View>
    
  );
}