/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
// Attempt a login using the Facebook login dialog asking for default permissions.
// LoginManager.logInWithPermissions(['public_profile']).then(
//   function(result) {
//     if (result.isCancelled) {
//       console.log('Login cancelled');
//     } else {
//       console.log(
//         'Login success with permissions: ' +
//           result.grantedPermissions.toString(),
//       );
//     }
//   },
//   function(error) {
//     console.log('Login fail with error: ' + error);
//   },
// );
export default class Login extends Component {
  state = {
    token: '',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data);
                this.setState({token: data.accessToken.toString()});
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
        <View style={{marginTop: 30}}>
          <Text style={{width: '90%', textAlign: 'justify'}}>
            {this.state.token}
          </Text>
        </View>
      </View>
    );
  }
}
