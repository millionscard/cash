import React from 'react';
import { ScrollView } from 'react-native';
import storyMap from '../stories/storyMap';
import { Heading, Box, Card } from '@cash';

const StoryScreen = ({ route, navigation }) => {
  const storyCategory = route.params.category;
  const storyName = route.params.name;
  const category = storyMap.find(({ title }) => title === storyCategory);
  const story = category.stories.find(({ title }) => title === storyName);

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
