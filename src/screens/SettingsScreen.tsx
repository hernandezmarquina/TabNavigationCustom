/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../Styles';

const SettingsScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#A31ACB'}]}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
