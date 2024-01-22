import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rectangle = ({ position }) => {
  return (
    <View style={[styles.rectangle, position]}></View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    flex: 1,
    width: '50%',
    maxHeight: '20%',
    backgroundColor: 'yellow', //if there is an error show yellow
  },
});

export default Rectangle;