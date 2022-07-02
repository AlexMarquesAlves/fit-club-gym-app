import { Example } from '.';

export default {
   title: 'Example',
   component: Example,
   args: {
      children: 'Children padrão',
   },
   argTypes: {
      children: { type: 'string' },
   },
};

export const Template = (args) => <Example {...args} />;
