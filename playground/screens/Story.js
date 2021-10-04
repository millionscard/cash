import React from 'react';
import { ScrollView } from 'react-native';
import componentMapping from '@playground/config';
import { Heading, Box, Card } from '@cash';

const StoryScreen = ({ route, navigation }) => {
  const componentName = route.params.name;
  const component = componentMapping.find(({ title }) => title === componentName);

  return (
    <ScrollView>
      <Box flex={1} p="2">
        {component?.stories.map((story, idx) => (
          <Card flex={1} bg="white" my="2" key={`${story.title}-${idx}`}>
            <Heading mb="5">{story.title}</Heading>
            <Box>{story.component}</Box>
          </Card>
        ))}
      </Box>
    </ScrollView>
  );
};

export default StoryScreen;
