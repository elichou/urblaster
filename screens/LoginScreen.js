import React from 'react';

import db from '../Firebase';

import {View, Button, Text} from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator';
import { FormLabel, FormInput } from 'react-native-elements';


export default class LoginScreen extends React.Component {

	constructor(props) {

		super(props);
		this.state = { email: '', password: '', error: '', loading: false};
		//this.db = firebase.firestore();
	}

	onLoginPress() {

		this.state({error: '', loading: true});

		const{email, password} = this.state;
		db.auth().signInWithEmailAndPassword(email, password)
		.then( () => {
			this.state({error: '', loading: false});
			this.props.navigation.navigate(Profile);

		})
		.catch( () => {
			this.state({error: 'authentification ratée', loading: false});

		})
	}


	onSignUpPress() {

		this.state({error: '', loading: true});

		const{email, password} = this.state;
		db.auth().signInWithEmailAndPassword(email, password)
		.then( () => {
			this.state({error: '', loading: false});
			this.props.navigation.navigate(Profile);

		})
		.catch( () => {
			this.state({error: 'authentification ratée', loading: false});
			
		})
	}

	renderButtonLoading() {
		if (this.state.loading) {
			return (<Text> Loading </Text >);
		}
		return (<View>
				<Button
					onPress = {this.onLoginPress.bind(this)}
					title= 'Login'/>  
				<Button
					onPress = {this.onSignUpPress.bind(this)}
					title= ' Sign Up'/>
				</View>
				);
	}


	render() {
		return (
		 <View>
		 	<FormLabel>Email</FormLabel>
			<FormInput onChangeText={email => this.state({email})}/>

			<FormLabel>Password</FormLabel>
			<FormInput onChangeText={password => this.state({password})}/>
			{this.renderButtonLoading()}
		</View>
		);

	}



};
