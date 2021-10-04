import React from 'react';
import { Alert } from 'react-native';
import * as Cash from '@cash';
import ModalScene from '@playground/scenes/Modal.scene.js';

const components = [
  {
    title: 'Button',
    description: 'Primitive Element',
    docs: null,
    stories: [
      {
        title: 'Button',
        description: '',
        component: (
          <Cash.Card bg="purple.500">
            <Cash.Button mb="3">Button text</Cash.Button>
            <Cash.Button leftIcon={<Cash.Icon name="LeftArrow" />} mb="3">
              Button text
            </Cash.Button>
            <Cash.Button rightIcon={<Cash.Icon name="RightArrow" />} mb="3">
              Button text
            </Cash.Button>
            <Cash.Button mb="3" loadingText="Loading..." isLoading>
              Button text
            </Cash.Button>
            <Cash.Button mb="3" isFullWidth isDisabled>
              Disabled
            </Cash.Button>
            <Cash.Button size="md">Button text</Cash.Button>
          </Cash.Card>
        ),
      },
      {
        title: 'Button Primary',
        description: '',
        component: (
          <>
            <Cash.ButtonPrimary mb="3" isLoading>
              Button text
            </Cash.ButtonPrimary>
            <Cash.ButtonPrimary
              colorScheme="gold"
              mb="3"
              loadingText="Loading Activity..."
              isLoading
            >
              Button text
            </Cash.ButtonPrimary>
            <Cash.ButtonPrimary
              colorScheme="green"
              mb="3"
              onPress={() => {
                Alert.alert('Button pressed');
              }}
            >
              Button text
            </Cash.ButtonPrimary>
            <Cash.ButtonPrimary
              size="md"
              onPress={() => {
                Alert.alert('Button pressed');
              }}
              isFullWidth
              isDisabled
            >
              Button text
            </Cash.ButtonPrimary>
          </>
        ),
      },
      {
        title: 'Button Outline',
        description: '',
        component: (
          <>
            <Cash.ButtonOutline mb="3">Button text</Cash.ButtonOutline>
            <Cash.ButtonOutline size="md" isFullWidth isDisabled isLoading>
              Button text
            </Cash.ButtonOutline>
          </>
        ),
      },
    ],
  },
  {
    title: 'Box',
    description: 'Primitive Element',
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: (
          <Cash.Box bg="black.10" p={3} _text={{ color: 'black.300' }}>
            Box
          </Cash.Box>
        ),
      },
    ],
  },
  {
    title: 'Text',
    description: 'Primitive Element',
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: (
          <>
            <Cash.Box alignItems="center" mb={5}>
              <Cash.Text>default</Cash.Text>
              <Cash.Text fontWeight="bold">bold</Cash.Text>
              <Cash.Text color="purple.500">colored</Cash.Text>
              <Cash.Text color="fuschia.500">colored</Cash.Text>
              <Cash.Text color="green.500">colored</Cash.Text>
            </Cash.Box>

            <Cash.Box alignItems="center">
              <Cash.Heading mb={2}>Sizes</Cash.Heading>

              <Cash.Text fontSize="xs">xs</Cash.Text>
              <Cash.Text fontSize="sm">sm</Cash.Text>
              <Cash.Text fontSize="md">md</Cash.Text>
              <Cash.Text fontSize="lg">lg</Cash.Text>
              <Cash.Text fontSize="xl">xl</Cash.Text>
              <Cash.Text fontSize="2xl">2xl</Cash.Text>
              <Cash.Text fontSize="3xl">3xl</Cash.Text>
              <Cash.Text fontSize="4xl">4xl</Cash.Text>
              <Cash.Text fontSize="5xl">5xl</Cash.Text>
              <Cash.Text fontSize="6xl">6xl</Cash.Text>
            </Cash.Box>
          </>
        ),
      },
    ],
  },
  {
    title: 'Heading',
    description: '',
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: (
          <>
            <Cash.Heading numberOfLines={1} size="xs">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="sm">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="md">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="lg">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="xl">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="2xl">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="3xl">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="4xl">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="5xl">
              A million ways to win
            </Cash.Heading>
            <Cash.Heading numberOfLines={1} size="6xl">
              A million ways to win
            </Cash.Heading>
          </>
        ),
      },
    ],
  },
  {
    title: 'Card',
    description: null,
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: (
          <Cash.Card height={300} bg="yellow.500" justifyContent="space-between">
            <Cash.Heading size="lg" mr="8">
              Link your bank account to add funds
            </Cash.Heading>
            <Cash.Button>Link bank account</Cash.Button>
          </Cash.Card>
        ),
      },
    ],
  },
  {
    title: 'Gradient Text',
    description: null,
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: (
          <Cash.GradientText fontSize="2xl" fontWeight="bold">
            Gradient text example
          </Cash.GradientText>
        ),
      },
    ],
  },
  {
    title: 'Modal',
    description: null,
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: <ModalScene />,
      },
    ],
  },
  {
    title: 'Icon',
    description: null,
    docs: null,
    stories: [
      {
        title: 'Examples',
        description: '',
        component: (
          <>
            <Cash.Box flexDirection="row">
              {['LeftArrow', 'RightArrow'].map((iconName, idx) => (
                <Cash.Box m="2" key={`${iconName}-${idx}`}>
                  <Cash.Icon name={iconName} />
                </Cash.Box>
              ))}
            </Cash.Box>
          </>
        ),
      },
    ],
  },
  {
    title: 'Activity Indicator',
    description: null,
    docs: null,
    stories: [
      {
        title: 'Examples',
        description: '',
        component: (
          <>
            <Cash.ActivityIndicator mb="5" />
            <Cash.ActivityIndicator color="black.200" mb="5" />
            <Cash.ActivityIndicator color="green.200" size={20} />
          </>
        ),
      },
    ],
  },
];

export default components;
