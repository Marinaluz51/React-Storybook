import Heart from './Heart' ;

//eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'components/Heart',
    component: Heart,
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            action: 'onClick',
            description:'when the heart is cliked'
        },
        selected: {
            control: 'boolean',
            defaultValue: false,
            description: 'Indicade if the heart is selected or not'
        },
        testId: {
            control: 'text',
            defaultValue: 'heart',
            description: 'data-test attribute'
        }
    }
};

const Template = (args) => (
    <div className='heart-storybook-wrapper'>
      <Heart {...args} />
    </div>
  );

  export const Default = Template.bind({});