import React, { Component } from 'react';
import { View, Keyboard, Dimensions, LayoutAnimation} from 'react-native';

class Login extends Component {

	constructor(props) {

		super(props)
		this.state = {
			keyboardflag: false,
			showEmailPwdState: false
		}
	}

	componentWlillMount () {
		// listener pour savoir si clavier en haut ou en bas
		this.keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
	}

	componentWlillUnmount () {
			// enleve les listeners en sortant
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();	
	}

	_keyboardDidHide () {
		if (true) {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		}
		this.setState({ keyboardflag: true});
	}

	_keyboardDidShow () {
		if (true) {
			LayoutAnimation.configureNext.Presets.spring);
		}
		this.setState({ keyboardflag : false})
	}

 	 _renderEmailPwdOption() {
    	if ( this.props.emailPwdBtnStr == 'SignIn' || this.state.showEmailPwdState ) {
      		//	 In the case of login screen or if the email pwd button is pressed
      	return (
        	<View>
          		<EmailTextInput />
          		<PwdTextInput />
          		<EmailPwdButton emailPwdBtnStr={this.props.emailPwdBtnStr} />
        	</View>
      );
    }
  }
}

