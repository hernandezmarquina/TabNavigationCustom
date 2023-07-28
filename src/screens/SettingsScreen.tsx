/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../Styles';

const SettingsScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#9117b4'}]}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
