/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  chat,
  chatWhite,
  user,
  userWhite,
  map,
  mapWhite,
  settings,
  settingsWhite,
} from '../../../assets';

interface ITabViewProps {
  active: boolean;
  routeName: string;
  onTabPressed?: () => void;
}

const getTabColor = (routeName: string) => {
  switch (routeName) {
    case 'ChatScreen':
      return '#fac23a';
    case 'MapScreen':
      return '#ea1514';
    case 'ProfileScreen':
      return '#04e299';
    case 'SettingsScreen':
      return '#bd33e5';
    default:
      return '#fbc953';
  }
};

const getTabIcon = (routeName: string, isActive: boolean) => {
  switch (routeName) {
    case 'ChatScreen':
      return isActive ? chatWhite : chat;
    case 'MapScreen':
      return isActive ? mapWhite : map;
    case 'ProfileScreen':
      return isActive ? userWhite : user;
    case 'SettingsScreen':
      return isActive ? settingsWhite : settings;
    default:
      break;
  }
};

const width = 60;
const height = 60;

const TabView = (props: ITabViewProps) => {
  const animatedWidth = useSharedValue(width);
  const activeTabWidth = width * 2;
  const tabIcon = getTabIcon(props.routeName, props.active);

  useEffect(() => {
    animateTab();
  }, [props.active]);

  const animateTab = () => {
    animatedWidth.value = props.active ? activeTabWidth : width;
  };

  const tabStyle = {
    width,
    height,
    backgroundColor: props.active ? getTabColor(props.routeName) : '#E8E8E8',
    borderRadius: height / 2,
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(animatedWidth.value),
    };
  });

  return (
    <Animated.View style={[styles.container, tabStyle, animatedStyles]}>
      <TouchableOpacity
        style={[styles.container, tabStyle]}
        onPress={props.onTabPressed}>
        <Image style={styles.iconStyle} source={tabIcon} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  iconStyle: {
    height: height * 0.5,
    width: width * 0.5,
  },
});

export default TabView;
