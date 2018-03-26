import React from 'react';

import db from '../Firebase';

import {View, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import TabNavigator from '../navigation/MainTabNavigator';
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
			alert('Sign in is complete')
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
		<ImageBackground source={require('../assets/images/login_background.png')} 	
		 	style={{width: 400, height: 750}}>
		 <View style={styles.loginContainer} >
		 	
		 	<FormLabel>Email</FormLabel>
			<FormInput onChangeText={email => this.setState({email})}/>

			<FormLabel>Password</FormLabel>
			<FormInput onChangeText={password => this.setState({password})}/>
			{this.renderButtonLoading()}
			
		</View>
		</ ImageBackground >
		);

	}





};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width : 380,
        position: 	'absolute',
        marginTop : 350,
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    backgroundImage: {
    	flex: 1,
    	resizeMode : 'cover',
    	marginTop: 100,
    },
 });