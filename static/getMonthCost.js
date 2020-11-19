import * as React from 'react';
import {Alert} from 'react-native';
import axios from 'axios'
import env from './../static/env.js'
import global from './../static/global.js'

export default function getMonthCost(setState){
	let to_return_cost = 0
	axios({
		method: 'get',
		url: `${env.ORDER_URL_API}/api/orders`
	})
	.then(res => {
		let history = res.data.data.filter(e=>e.user_id==global.user.id)
		history.map(e=>{
			new Date(e.created_at).getMonth()===new Date().getMonth() ? to_return_cost+=parseFloat(e.cost):{}
		})
		setState(to_return_cost)
	}).catch(err => {
		Alert.alert(`Response status : ${err.toString()}`)
	})
}