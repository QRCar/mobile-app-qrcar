import * as React from 'react';
import { View, Text, Button, Image, Alert} from 'react-native';

import Navbar from './../components/Navbar.js'
import ShortHistory from './../components/ShortHistory.js'
import ChartCost from './../components/ChartCost.js'
import DisplayCost from './../components/DisplayCost.js'
import GlobalStyles from './../static/GlobalStyles.js'

import axios from 'axios'
import env from './../static/env.js'
import getHistory from './../static/getHistory.js'
import getMonthCost from './../static/getMonthCost.js'
import global from './../static/global.js'


// { values:[ 10, 5, 50, 15, 20 ], labels:[ "January", "February", "March", "April", "May" ] }

const get_chart_data = (setState) => {
  axios({
    method: 'get',
    url: `${env.ORDER_URL_API}/api/orders`
  })
  .then(res => {
    let history = res.data.data.filter(e=>e.user_id==global.user.id)
    let values = []
    let labels = []

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var map_result = history.map(item => {
        var d = new Date(item.created_at);
        var month = `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
        return {
            "month": month,
            "cost": item.cost
        };
    });
    
    let memo=new Map()
    map_result.map(item => memo.get(item.month) ? memo.set(item.month, memo.get(item.month)+parseFloat(item.cost))  : memo.set(item.month, parseFloat(item.cost)))
    memo.forEach((value, key) => {
      values.push(value)
      labels.push(key.split(" ")[0])
    })

    let result = {"values":values.reverse(), "labels":labels.reverse()}
    setState(result)

  }).catch(err => {
    Alert.alert(`Response status : ${err.toString()}`)
  })
}



export default function Home({navigation}) {
  const [data_chart, set_data_chart] = React.useState({ "values":[], "labels":[] });
  const [data_history, set_data_history] = React.useState([]);
  const [month_cost, set_month_cost] = React.useState(0);
  
  const load = () => {
      get_chart_data(set_data_chart)
      getHistory(set_data_history)
      getMonthCost(set_month_cost)  
  }
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      load()
    });
    return unsubscribe
  },[navigation]);  

  navigation.addListener('willFocus', payload => load());

	//let data_history = [{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"8.9", location:"Le domac d'a cote"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"trescher", location: "Burger King Nantes"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"Gratuit", location:"Reste de frite"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"},{logo:"https://cdn.1min30.com/wp-content/uploads/2018/02/Logo-McDonalds-1.jpg",date:"aujourd'hui",cost:"10.52", location:"Le bon resto"}]
  
  return (
    <View style={GlobalStyles.page}>
        <Text style={GlobalStyles.h1_title}>Accueil</Text>
        
        <Text style={[GlobalStyles.h3_title, {alignSelf:'flex-start'}]}>Dépenses ce mois-ci</Text>
        
        <DisplayCost style={{transform: [{ translateX: 10 }] }} cost={month_cost.toString()} fontSizeEuro="56" fontSizeCent="36" fontSizeIco="48"/>

        <Text style={[GlobalStyles.h3_title, {alignSelf:'flex-start'}]}>Dépenses par mois</Text>
        
        <ChartCost datas={data_chart}/>

       	<Text style={[GlobalStyles.h3_title, {alignSelf:'flex-start'}]}>Dernières dépenses</Text>
        <ShortHistory data={data_history} />
       	<Navbar navigation={navigation} currentComponent="Home"/>
    </View>
    
  );
}