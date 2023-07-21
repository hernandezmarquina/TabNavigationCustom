/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../Styles';

const ChatScreen = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#F9B208'}]}>
      <Text style={styles.title}>Chat Screen</Text>
    </View>
  );
};

export default ChatScreen;
