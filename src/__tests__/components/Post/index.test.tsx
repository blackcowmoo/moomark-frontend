import { mount, shallow } from 'enzyme';
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
  it('matches Props', () => {
    const wrapper = mount(<PostFooter likeCount={33} liked={0} />);
    expect(wrapper.props().likeCount).toBe(33);
  });
  it('click LikeButton', () => {
    const wrapper = mount(<PostFooter likeCount={2} liked={0} />);
    let likeButton = wrapper.findWhere((node) => node.type() === 'div' && node.prop('id') === 'likePost');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('추천 🍕3');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('추천 🍕2');
  });
  it('click DislikeButton', () => {
    const wrapper = mount(<PostFooter likeCount={2} liked={0} />);
    let likeButton = wrapper.findWhere((node) => node.type() === 'div' && node.prop('id') === 'dislikePost');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('비추 🐃');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('비추');
  });
});
