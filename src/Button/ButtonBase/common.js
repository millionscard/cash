import { css } from 'styled-components';
import { variant } from 'styled-system';

export const sizeProps = ['sm', 'md', 'lg'];
export const defaultSizeProp = 'lg';

// Button shell
export const sizeVariants = variant({
  prop: 'size',
  variants: {
    lg: { height: 60 },
    md: { height: 48 },
    sm: { height: 30 },
  },
});

// Button spacing around text
export const spaceSizeVariants = variant({
  prop: 'size',
  variants: {
    lg: { px: '24px' },
    md: { px: '20px' },
    sm: { px: '12px' },
  },
});

// Button text size
export const textSizeVariants = variant({
  prop: 'size',
  variants: {
    lg: { fontSize: 'xl' },
    md: { fontSize: 'md' },
    sm: { fontSize: 'sm' },
  },
});

export const isDisabledStyles = css`
  opacity: ${({ isDisabled }) => (isDisabled ? '0.3' : '1')};
`;

export const hasShadowStyles = css`
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3);

  /**
   * Android specific drop shadow
   * https://reactnative.dev/docs/view-style-props#elevation-android
   */
  elevation: 3;
`;
