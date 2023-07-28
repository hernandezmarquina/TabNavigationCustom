/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../Styles';

const ProfileScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#03b077'}]}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
