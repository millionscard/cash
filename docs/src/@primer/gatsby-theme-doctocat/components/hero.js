import React from 'react';
import { Box, Heading, Text } from '@primer/components';
import useSiteMetadata from '@primer/gatsby-theme-doctocat/src/use-site-metadata';
import Container from '@primer/gatsby-theme-doctocat/src/components/container';
import { version } from '../../../../../package.json';

function Hero() {
  const { title } = useSiteMetadata();

  return (
    <Box bg="black" py={6}>
      <Container>
        <Heading as="h1" color="purple.500" fontSize={7} m={0}>
          {title}
        </Heading>
        <Text as="p" m={0} color="purple.400" fontSize={4}>
          v{version}
        </Text>
      </Container>
    </Box>
  );
}

export default Hero;
