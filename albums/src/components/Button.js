import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}
    style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles= {
  buttonStyle: {
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: 'darkgray',
    fontSize: 16,
    fontWeight: '600',
  },

}

export default Button;
