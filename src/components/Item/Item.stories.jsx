import Item from './Item' ;


const mockedItem = {
    id: 1,
    name: 'bulbasaur',
    sprites: {
        other: {
            'official-artwork': {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
            }
        }
    }
};
//eslint-disable-next-line import/no-anonymous-default-export

export default {
    title: 'components/Item',
    component: Item,
    tags: ['autodocs'],
    argTypes: {
        isFavorite: {
            control: 'boolean',
            defaultValue: false
        },
        item: {
            control: 'object',
            defaultValue: mockedItem
        },
        onAddItem: {
            action: 'onAddItem'
        },
        onRemoveItem: {
            action: 'onRemoveItem'
        }
    },
    args:{
        item: mockedItem
    }
};

const Template = (args) => (
    <div className='heart-storybook-wrapper'>
      <Item {...args} />
    </div>
  );

  export const Default = Template.bind({});