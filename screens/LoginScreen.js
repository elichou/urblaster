import React from 'react';

import db from '../Firebase';

import { AuthSession } from 'expo';
import {View, 
		Button, 
		Text, 
		StyleSheet,
		ImageBackground,
		Image } from 'react-native';
import TabNavigator from '../navigation/MainTabNavigator';
import { FormLabel, FormInput } from 'react-native-elements';

export default class LoginScreen extends React.Component {

	constructor(props) {

		super(props);
		this.state = { email: '', password: '', error: '', loading: false, userInfo: null};
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

	async _onFacebookPress() {
		let redirectUrl = AuthSession.getRedirectUrl();

    	// You need to add this url to your authorized redirect urls on your Facebook app
    	console.log({ redirectUrl });

    	// NOTICE: Please do not actually request the token on the client (see:
   		 // response_type=token in the authUrl), it is not secure. Request a code
    	// instead, and use this flow:
    	// https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/#confirm
    	// The code here is simplified for the sake of demonstration. If you are
    	// just prototyping then you don't need to concern yourself with this and
    	// can copy this example, but be aware that this is not safe in production.

    	let result = await AuthSession.startAsync({
    	  authUrl:
        	`https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        	`&client_id=${165686187424604}` +
        	`&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    	});

    	if (result.type !== 'success') {
      	alert('Uh oh, something went wrong');
      	return;
    	}

    	let accessToken = result.params.access_token;
    	let userInfoResponse = await fetch(
      	`https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
    	)
    	.then( () => {
    		this.props.navigation.navigate('Profile')});
    	const userInfo = await userInfoResponse.json();
    	this.setState({ userInfo })
    	
    	
  	

	}

	onGooglePress() {
		return(
			alert('Google signin'));
	}

	renderButtonLoading() {
		if (this.state.loading) {
			return (<Text > Loading </Text >);
		}
		return (<View>

				<View style ={styles.loginbutton}>
				<Button
					onPress = {this.onLoginPress.bind(this)}
					title= 'Login'
					color = '#FFFFFF'/>  
				</View>

				<View style ={styles.signupbutton}>
				<Button
					onPress = {this.onSignUpPress.bind(this)}
					title= ' Register'
					color = '#FFFFFF'/>
				</View>

				<View style ={styles.facebookbutton}>
				<Button
					onPress = {this._onFacebookPress.bind(this)}
					title = 'Facebook'
					color = '#3B5998'
					 />
				</View>

				<View style ={styles.googlebutton}>
				<Button
					onPress = {this.onGooglePress.bind(this)}
					title = 'Google'
					color = '#DB3236'
					 />
				</View>

				</View>
				);
	}


	render() {
		return ( 
		<ImageBackground source={require('../assets/images/login_background.png')} 	
		 	style={styles.backgroundImage2}>
		<Image source= {require('../assets/images/logo_yellow_background.png')} style = {styles.backgroundImage}/>
		 <View style={styles.logo}>
		 <Text style = {styles.text}> Play around music. </Text>
		 <Text style = {styles.text2}> UrBlaster. </Text>
		 </View>
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
        
        width: 500,
        height: 500,
        opacity: 0.5,
        
    },
    text: {
    	position: 'absolute',
    	fontSize: 30,
    	textAlignVertical: 'auto',
    	height:100,
    	marginTop: '4%',
    	marginLeft: '13%',
    },
     text2: {
    	position: 'absolute',
    	fontSize: 30,
    	textAlignVertical: 'auto',
    	height:100,
    	marginTop: '14%',
    	marginLeft: '13%',
    },
    backgroundImage: {
    	
    	width: 100,
    	height: 100,
    	marginTop: '19%',
    	marginLeft: '18%',
    	
    	
    },
    backgroundImage2: {
    	position: 'absolute',
  		top: 0,
 	 	left: 0,
 		bottom: 0,
  		right: 0,
    },

    facebookbutton: {
    	
    	
    	marginTop: 50,
    	marginLeft: -200,
    },
    googlebutton: {
    	marginLeft: 200,
    	marginTop: -39,
    },
    loginbutton: {
    	marginTop: 10,
    	marginLeft: 200,
    },
    signupbutton:{
    	marginTop:-38,
    	marginLeft:-200,
    },
 });