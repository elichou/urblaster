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

		this.setState({error: '', loading: true});

		
		db.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then( () => {
			this.setState({error: '', loading: false});
			this.props.navigation.navigate('Profile');

		})
		.catch( () => {
			this.setState({error: 'authentification ratée', loading: false});

		})
	}


	onSignUpPress() {

		this.setState({error: '', loading: true});

		
		db.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		.then( () => {
			alert('Sign Up complete');
			this.setState({error: '', loading: false});
			this.props.navigation.navigate('Profile');

		})
		.catch( () => {
			this.setState({error: 'authentification ratée', loading: false});
			
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
			<FormInput onChangeText={email => this.setState({email})}/>

			<FormLabel>Password</FormLabel>
			<FormInput onChangeText={password => this.setState({password})}/>
			{this.renderButtonLoading()}
		</View>
		);

	}



};
