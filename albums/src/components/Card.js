import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'lightgray',
    borderBottomWidth: 0,
    shadowColor: 'lightgray',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  }
};

export default Card;
