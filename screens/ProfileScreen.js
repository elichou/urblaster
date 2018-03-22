import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.TopBarStyle}>
          <Text style={styles.TopBarText}>
            {/*"\n"*/}
            My profile

          </Text>

        </View>
        
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          
          
          <View style={styles.rubrique}>
            
            <Text style={styles.textRubrique}>
              Info users
            </Text>
          </View>

          <View style={styles.rubrique}>
            <Text style={styles.textRubrique}>
              Div 2
            </Text>
            
          </View>

          <View style={styles.rubrique}>
            <Text style={styles.textRubrique}>
              Ma playlist
            </Text>
            
          </View>
          
        </ScrollView>
        

        {/*}
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>

      */}

      
      
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rubrique:{
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    height:100,
    //textAlign: 'center',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textRubrique:{
    textAlign:'center',
  },
  TopBarStyle: {
    /*flex:1,
    flexDirection:'column',*/
    height:65,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    //alignItems: 'flex-end',
    /*justifyContent: 'space-between', 
    flex:1,*/
  },
  TopBarText: {
    lineHeight: 24,
    fontSize: 19,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    bottom:-20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
