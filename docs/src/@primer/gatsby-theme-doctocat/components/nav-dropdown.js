import React from 'react';
import styled from 'styled-components';
import { Absolute, BorderBox, StyledOcticon, Text, themeGet } from '@primer/components';
import { TriangleDownIcon } from '@primer/octicons-react';
import Details from '@primer/gatsby-theme-doctocat/src/components/details';

function NavDropdown({ title, children }) {
  return (
    <Details overlay={true}>
      {({ toggle }) => (
        <>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <summary style={{ cursor: 'pointer' }} onClick={toggle}>
            <Text>{title}</Text>
            <StyledOcticon icon={TriangleDownIcon} ml={1} />
          </summary>
          <Absolute>
            <BorderBox
              bg="gray.8"
              py={1}
              mt={2}
              boxShadow="medium"
              borderColor="gray.7"
              color="white"
            >
              {children}
            </BorderBox>
          </Absolute>
        </>
      )}
    </Details>
  );
}

export const NavDropdownItem = styled.a`
  display: block;
  padding: ${themeGet('space.2')} ${themeGet('space.3')};
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.purple.500')};
    text-decoration: none;
  }
`;

export default NavDropdown;
