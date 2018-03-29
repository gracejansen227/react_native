
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//librarires imiported to make Component

const Header = (props) => {
  return (
    <View style={styles.view}>
    <Text style={styles.welcome}> {props.headerText}</Text>
    </View>
  );
};

//make Component

export default Header;

//export component to aother parts of app
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'lightgray',
    width: 500,
    shadowColor: 'darkgray',
    shadowOffset: { width: 0, height: 20},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  welcome: {
    fontSize: 50,
    width: 500,
  textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
