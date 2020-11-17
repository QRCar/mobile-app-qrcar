import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	btn_light: {
		color:'white',
		fontSize: 17,
		backgroundColor:'#A476EF', 
		width:300, 
		borderRadius:36
	},
	btn_dark: {
		color:'white',
		fontSize: 17,
		backgroundColor:'#7728FA', 
		width:300, 
		borderRadius:36
	},
	txt: {
		fontSize:30
	},
	txt_input : {
		width: 320,
		height: 45,
		backgroundColor: '#E9E9E9',
		margin:5,
		paddingLeft:25,
		color: '#333332',
	},
	h1_title : {
		fontSize:19,
		fontWeight: 'bold',
		marginBottom: '2%',
	},
	h3_title : {
		color: '#333332',
		fontSize: 14,
		marginTop:'5%',
	},
	page : {
		paddingLeft:'5%',
		paddingRight:'5%',
		paddingTop:'5%',
		flex:1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection:'column',
		flexWrap:'nowrap',
		backgroundColor:'white'
	},

});
