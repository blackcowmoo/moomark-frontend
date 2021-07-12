import { PostListViewProps } from 'types';

describe('Page Index', () => {
  it('render index', () => {
    // const wrapper = shallow(<Index />);
    // console.log(wrapper);

    // expect(wrapper.find('h1').text()).toBe('mooMark main');
  });
});

const date = new Date(2021, 2, 10);

const mock: PostListViewProps[] = [
  {
    id: 0,
    title: 'mockTitle',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
  {
    id: 0,
    title: 'ddd',
    author: 'gosu',
    like: 222,
    tags: ['응애'],
    date,
  },
];

describe('<DefaultPostItem/>', () => {
  // it('render without carsh', ()=>{
  //   const wrapper = mount(<DefaultViewItem value={mock[0]}/>);
  //   expect(wrapper).toMatchSnapshot();
  // })
  console.log(mock[0]);
});
