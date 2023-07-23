import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <View style={styles.tabsContainer}>
      {props.state.routes.map((route, index) => {
        const label = route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            onPress={onPress}
            style={styles.tabContainer}>
            <Text style={{color: isFocused ? 'red' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
});

export default CustomTabBar;
