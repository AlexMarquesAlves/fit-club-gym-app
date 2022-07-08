import { Reasons } from '.';

export default {
   title: 'Reasons',
   component: Reasons,
   args: {
      children: 'Children padrão',
   },
   argTypes: {
      children: { type: 'string' },
   },
};

export const Template = (args) => <Reasons {...args} />;
