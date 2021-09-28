import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { Box, Heading } from '../../src';
import componentMapping from '../config';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Box p="2">
        <Heading mb="3">Components</Heading>
        {componentMapping.map(({ title: name }, index) => (
          <Pressable
            accessibilityRole="button"
            key={`${name}-${index}`}
            onPress={() => navigation.navigate('Story', { name })}
          >
            <Box py="2" _text={{ color: 'purple' }}>
              {name}
            </Box>
          </Pressable>
        ))}
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
