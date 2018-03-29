import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDmW4OMWiKq5rfDIVvIsB6ZzNtyuDLEJHY",
      authDomain: "authentication-51e93.firebaseapp.com",
      databaseURL: "https://authentication-51e93.firebaseio.com",
      projectId: "authentication-51e93",
      storageBucket: "authentication-51e93.appspot.com",
      messagingSenderId: "1070321359320"
    });
  }
  render(){
    return(
      <View>
      <Header headerText="Aunthentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
