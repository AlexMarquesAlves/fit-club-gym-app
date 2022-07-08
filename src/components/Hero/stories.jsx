import { Hero } from '.';

export default {
   title: 'Hero',
   component: Hero,
   args: {
      children: 'Children padrão',
   },
   argTypes: {
      children: { type: 'string' },
   },
};

export const Template = (args) => <Hero {...args} />;
