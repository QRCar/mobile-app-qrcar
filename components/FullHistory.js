import * as React from 'react';
import { View, Text, ScrollView, ActivityIndicator} from 'react-native';
import { Image } from 'react-native-elements';

const list_item = data => data.map((e) => {
        return (
            <View key={e.toString()} style={{ marginTop:'1%', marginBottom:'2%',flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row' }}>
                <View style={{flex:0, flexDirection:'row', alignItems:'center'}}>
	                <Image
	                source={{ uri: e.logo }}
	                style={{ width: 67, height: 52 }}
	                PlaceholderContent={<ActivityIndicator />}
	                />    
	                <View style={{marginLeft:'10%'}}>
		                <Text style={{ fontSize: 16, color:'#333232', marginBottom:'5%', fontWeight: 'bold' }}>{e.location}</Text>
		                <Text style={{ fontSize: 11, color:'#99998' }}>{e.date}</Text>
	                </View>
                </View>
                <Text style={{ fontSize: 24 }}>{e.cost}</Text>
            </View>
        )
    })

export default function FullHistory({data}){
	return (
	<ScrollView style={{width:'100%'}}>
		{list_item(data)}
	</ScrollView>
	)
}