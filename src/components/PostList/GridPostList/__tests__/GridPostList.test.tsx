import { mount } from 'enzyme';
import GridPostList from '@components/PostList/GridPostList';
import { HomePageTileMock } from 'utils/mock';

describe('<GridPostList/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<GridPostList listTitle='인기' postList={HomePageTileMock}/>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
