import { mount } from 'enzyme';
import { HomePageListMock } from 'utils/mock';
import ScrollablePostList from '../ScrollablePostList';

describe('<ScrollablePostList/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<ScrollablePostList listTitle='테스트' preRenderPosts={HomePageListMock} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
