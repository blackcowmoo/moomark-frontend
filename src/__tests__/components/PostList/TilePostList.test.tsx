import { mount } from 'enzyme';
import TilePostList from '@components/PostList/TileViewPostList';
import { HomePageTileMock } from 'utils/mock';

describe('<TilePostList/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<TilePostList listTitle='인기' postList={HomePageTileMock}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});