import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Links';

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Links"
          component={LinksScreen}
          options={{
            title: 'Storybook',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
