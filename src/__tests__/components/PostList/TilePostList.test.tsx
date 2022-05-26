import { mount } from 'enzyme';
import ThumbNailPostList from '@components/PostList/ThumbNailPostList';
import { HomePageTileMock } from 'utils/mock';

describe('<TilePostList/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<ThumbNailPostList listTitle='인기' postList={HomePageTileMock}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
