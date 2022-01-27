import React from 'react';
import { Pressable, Text, Linking } from 'react-native';

const BASE_URL = 'https://millionscard.github.io/cash';

const DocsLink = ({ path }) => {
  if (!path) {
    return null;
  }
  const url = `${BASE_URL}${path}`;
  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text>Docs</Text>
    </Pressable>
  );
};

export default DocsLink;
