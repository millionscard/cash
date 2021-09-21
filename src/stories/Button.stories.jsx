import React from 'react';
import Button from '../Button';

export default {
  title: 'Button',
};

const Template = (args) => <Button {...args} />;

export const basic = Template.bind({});
basic.args = {
  title: 'Button',
};

export const withSizes = Template.bind({});
withSizes.args = {
  title: 'Button',
  size: 'lg',
};
