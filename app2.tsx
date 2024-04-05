import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/home';
import Details from './src/screens/home';
import {
  HomeIconFilled,
  HomeIconOutline,
  DetailsIconFilled,
  DetailsIconOutline,
} from './src/assets/others/svg';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconSvg;

            if (route.name === 'Home') {
              iconSvg = focused ? (
                <HomeIconFilled size={size} color={color} />
              ) : (
                <HomeIconOutline size={size} color={color} />
              );
            } else if (route.name === 'Details') {
              iconSvg = focused ? (
                <DetailsIconFilled size={size} color={color} />
              ) : (
                <DetailsIconOutline size={size} color={color} />
              );
            }

            return iconSvg;
          },
        })}
        /*  tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }} */
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
