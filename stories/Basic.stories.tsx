import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { Replacable } from '../src/Replacable';

const Block: FC = Replacable(() => (
  <div>
    <Title />
    <Text />
  </div>
))

const Title: FC = Replacable(() => (
  <h1>Title</h1>
));

const Text: FC = Replacable(() => (
  <div>Text</div>
));

const meta: Meta = {
  title: 'Basic',
  component: Block,
};

export default meta;

const Template: Story = args => <Block {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
const Block: FC = Replacable(() => (
  <div>
    <Title />
    <Text />
  </div>
))

const Title: FC = Replacable(() => (
  <h1>Title</h1>
));

const Text: FC = Replacable(() => (
  <div>Text</div>
));
      `
    }
  }
}

Default.args = {};
