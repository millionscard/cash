import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import debounce from 'lodash.debounce';
import { Flex, Link } from '@primer/components';
import useSiteMetadata from '@primer/gatsby-theme-doctocat/src/use-site-metadata';
import Drawer from '@primer/gatsby-theme-doctocat/src/components/drawer';
import NavItems from '@primer/gatsby-theme-doctocat/src/components/nav-items';
import navItems from '../nav.yml';

export function useNavDrawerState(breakpoint) {
  // Handle string values from themes with units at the end
  if (typeof breakpoint === 'string') {
    breakpoint = parseInt(breakpoint, 10);
  }
  const [isOpen, setOpen] = React.useState(false);

  const onResize = React.useCallback(() => {
    if (window.innerWidth >= breakpoint) {
      setOpen(false);
    }
  }, [setOpen, breakpoint]);

  const debouncedOnResize = React.useCallback(debounce(onResize, 250), [onResize]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', debouncedOnResize);
      return () => {
        // cancel any debounced invocation of the resize handler
        debouncedOnResize.cancel();
        window.removeEventListener('resize', debouncedOnResize);
      };
    }
  }, [isOpen, debouncedOnResize]);

  return [isOpen, setOpen];
}

function NavDrawer({ isOpen, onDismiss }) {
  const siteMetadata = useSiteMetadata();
  return (
    <Drawer isOpen={isOpen} onDismiss={onDismiss}>
      <Flex
        flexDirection="column"
        height="100%"
        bg="gray.9"
        style={{ overflow: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        {navItems.length > 0 ? (
          <Flex flexDirection="column" flex="1 0 auto" color="gray.7" bg="gray.0">
            <Link
              as={GatsbyLink}
              to="/"
              display="inline-block"
              color="inherit"
              fontFamily="mono"
              mx={4}
              my={4}
            >
              {siteMetadata.title}
            </Link>
            <NavItems items={navItems} />
          </Flex>
        ) : null}
      </Flex>
    </Drawer>
  );
}

export default NavDrawer;
