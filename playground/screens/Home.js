import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import componentMapping from '@playground/config';
import { Box, Heading } from '@cash';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Box flex={1} p="2">
        <Heading mb="3">Components</Heading>
        {componentMapping.sort(sortByKey('title')).map(({ title: name }, index) => (
          <Pressable
            accessibilityRole="button"
            key={`${name}-${index}`}
            onPress={() => navigation.navigate('Story', { name })}
          >
            <Box py="2">{name}</Box>
          </Pressable>
        ))}
      </Box>
    </ScrollView>
  );
};

function sortByKey(key) {
  return function (a, b) {
    // ignore upper and lowercase
    const keyA = a[key].toUpperCase();
    const keyB = b[key].toUpperCase();

    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }

    // keys must be equal
    return 0;
  };
}

export default HomeScreen;
