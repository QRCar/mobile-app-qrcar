import * as React from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';

import Navbar from './../components/Navbar.js'

export default function History({navigation}) {
    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
    };

    let data_history = [{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"tres cher"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"tres cher"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"tres cher"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"tres cher"}]

    const lapsList = data_history.map((e) => {
        return (
            <View>
                <Image source={e.logo} />
                <Text style={{ fontSize: 5 }}>{e.location}</Text>
                <Text style={{ fontSize: 5 }}>{e.date}</Text>
                <Text style={{ fontSize: 8 }}>{e.cost}</Text>
            </View>
        )
    })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>History Screen</Text>
        <ScrollView style={{height:80,width:100}}>
            {lapsList}
        </ScrollView>
        <Navbar navigation={navigation}/>
    </View>
  );
}
