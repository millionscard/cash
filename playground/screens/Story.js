import React from 'react';
import { ScrollView } from 'react-native';
import storyMapping from '../stories/config';
import { Heading, Box, Card } from '@cash';

const StoryScreen = ({ route, navigation }) => {
  const storyName = route.params.name;
  const story = storyMapping.find(({ title }) => title === storyName);

  return (
    <ScrollView>
      <Box flex={1} p="2">
        {story?.stories.map(({ title, component: Component }, idx) => (
          <Card flex={1} bg="white" my="2" key={`${title}-${idx}`}>
            <Heading mb="5">{title}</Heading>
            <Component />
          </Card>
        ))}
      </Box>
    </ScrollView>
  );
};

export default StoryScreen;
