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
            <Text style={[styles.tabText, {color: isFocused ? 'red' : '#222'}]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 8,
  },
  tabContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 8,
  },
  tabText: {
    fontSize: 10,
  },
});

export default CustomTabBar;
