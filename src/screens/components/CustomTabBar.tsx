import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import TabView from './TabView';

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <View style={styles.tabsContainer}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;

        const onTabPressed = () => {
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
          <TabView
            routeName={route.name}
            active={isFocused}
            onTabPressed={onTabPressed}
          />
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
});

export default CustomTabBar;
