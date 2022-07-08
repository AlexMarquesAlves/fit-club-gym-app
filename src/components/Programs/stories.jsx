import { Programs } from '.';

export default {
   title: 'Programs',
   component: Programs,
   args: {
      children: 'Children padrão',
   },
   argTypes: {
      children: { type: 'string' },
   },
};

export const Template = (args) => <Programs {...args} />;
