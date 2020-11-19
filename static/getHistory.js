import * as React from 'react';
import {Alert} from 'react-native';
import axios from 'axios'
import env from './../static/env.js'
import global from './../static/global.js'

export default function getHistory(setState){
	let to_return_history = []
	axios({
		method: 'get',
		url: `${env.ORDER_URL_API}/api/orders`
	})
	.then(res => {
		let history = res.data.data.filter(e=>e.user_id==global.user.id)
		axios({
	  		method: 'get',
	  		url: `${env.COMPANY_URL_API}/api/establishment`
		}).then (res => {
			axios({
	  			method: 'get',
	  			url: `${env.COMPANY_URL_API}/api/organization`
			}).then (orga => {
				history.map(e => to_return_history.push( {
					cost:e.cost,
					date:e.created_at,
					logo:orga.data.data.filter(org => org.id===res.data.data.filter(esta => esta.id===e.establishment_id)[0].organizations_id)[0].logo,
					location:res.data.data.filter(esta => esta.id===e.establishment_id)[0].name
	  			}))	
	  			setState(to_return_history)
			})
			.catch(err => {
	  				Alert.alert(`Erreur lors du chargement de l'historique : ${err.toString()}`)
				})
		}).catch(err => {
	  		Alert.alert(`Erreur lors du chargement de l'historique : ${err.toString()}`)
		})
	}).catch(err => {
		Alert.alert(`Response status : ${err.toString()}`)
	})
}