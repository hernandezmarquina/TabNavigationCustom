/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import styles from '../../Styles';

const MapScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#bb1110'}]}>
      <Image style={styles.img} source={require('../../assets/map.jpg')} />
    </View>
  );
};

export default MapScreen;
