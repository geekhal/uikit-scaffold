import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Title',
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const First = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
First.args = {
  children: 'First Level Title',
  heading: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Second Level Title',
  heading: 2,
};
