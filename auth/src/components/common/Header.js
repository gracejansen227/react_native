
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
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}> {props.headerText}</Text>
    </View>
  );
};

//make Component


//export component to aother parts of app
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header};
