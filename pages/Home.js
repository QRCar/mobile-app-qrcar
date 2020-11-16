import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Navbar from './../components/Navbar.js'

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection:'columns', flexWrap:'no-wrap' }}>
        <Text>Accueil</Text>

        <Text>Dépenses ce mois-ci</Text>

        <Text>Dépenses par mois</Text>
        
        <Image
        style={{width: 350, height: 150, }}
        source={{
          uri: 'https://image-charts.com/chart?chbh=a&chbr=10&chco=fdb45c%2C27c9c2%2C1869b7&chd=t%3A5%2C5%2C5%7C10%2C10%2C10%7C15%2C15%2C15&chds=0%2C120&chm=N%2C000000%2C0%2C%2C10%7CN%2C000000%2C1%2C%2C10%7CN%2C000000%2C2%2C%2C10&chma=0%2C0%2C10%2C10&chs=700x150&cht=bvg&chxs=0%2C000000%2C0%2C0%2C_&chxt=y',
        }}
      	/>

       	<Text>Dernières dépenses</Text>

       	<Text>Hier</Text>
       	<Text>McDonadl Clisson</Text>
       	<Text>14.04€</Text>

       	<Text>Vendredi 13 Nomvembre</Text>
       	<Text>Parking Beaulieu</Text>
       	<Text>8.62€</Text>

       	<Text>Lundi 9 Nomvembre</Text>
       	<Text>Parking Feydeau</Text>
       	<Text>24.18€</Text>
       	<Navbar navigation={navigation}/>
    </View>
    
  );
}