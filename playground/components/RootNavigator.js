import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, StoryScreen } from '../screens';
import DocsLink from './DocsLink';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Story"
      component={StoryScreen}
      options={({ route }) => ({
        title: route.params?.name,
        headerTintColor: '#8D34FF',
        headerRight: () => <DocsLink path={route.params?.docs} />,
      })}
    />
  </Stack.Navigator>
);

export default RootNavigator;
