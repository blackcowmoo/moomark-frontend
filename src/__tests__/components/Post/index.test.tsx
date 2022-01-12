import { mount } from 'enzyme';
import Post from '@components/Post';
import PostFooter from '@components/Post/PostFooter';

describe('<Post/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Post />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

describe('<PostFooter/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<PostFooter likeCount={33} liked={0} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
