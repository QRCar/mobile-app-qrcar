import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';
import DisplayCost from './../components/DisplayCost.js'

let list_item = data => data.map(e => {
			return (
				<View key={e.toString()} style={{ marginTop:'1%', marginBottom:'2%', flex: 1, alignItems: 'flex-end', justifyContent: 'space-between', flexDirection:'row' }}>
					<View style={{ flex:0, flexDirection: 'column'}}>
						<Text style={{ fontSize: 18 }}>{e.location}</Text>
						<Text style={{ fontSize: 16, color: '#999998' }}>{e.date}</Text>
					</View>
					<DisplayCost cost={e.cost} fontSizeEuro="24" fontSizeCent="12"/>
				</View>
			)
		})

export default function ShortHistory({data}){
	return (
	<ScrollView style={{width:'100%', backgroundColor:'#F2F2F2', padding:3, borderRadius: 10, marginBottom: 5}}>
		{list_item(data)}
	</ScrollView>
	)
}