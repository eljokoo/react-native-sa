import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import SearchTab from './search_tab';

const Tab = createBottomTabNavigator();

const tabBarIcon = (route, object) => {
  let iconName;

  // Customize the icon we display based on the tab route
  if (route.name === 'About') {
    iconName = 'info-circle';
  } else if (route.name === 'Search') {
    iconName = 'search';
  }

  // Return the respective icon
  return <Ionicons name={iconName} size={26} color={object.focused ? '#58AADA' : 'grey'} />;
};

function MainTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => tabBarIcon(route, { focused }),
          headerShown: false,
        })}
      >
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabBar;
