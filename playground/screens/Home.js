import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import storyMap from '../stories/storyMap';
import { Box, Heading } from '@cash';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Box flex={1} p="2">
        {storyMap.sort(sortByKey('title')).map(({ title: category, stories }, index) => (
          <Box my="3" key={`${category}-${index}`}>
            <Heading mb="3">{category}</Heading>
            {stories.sort(sortByKey('title')).map(({ title: name, docs }, index) => (
              <Pressable
                accessibilityRole="button"
                key={`${name}-${index}`}
                onPress={() => navigation.navigate('Story', { category, name, docs })}
              >
                <Box py="2">{name}</Box>
              </Pressable>
            ))}
          </Box>
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
