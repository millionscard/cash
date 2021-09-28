import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, StoryScreen } from '@playground/screens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Story"
      component={StoryScreen}
      options={({ route }) => ({ title: route.params?.name })}
    />
  </Stack.Navigator>
);

export default RootNavigator;
