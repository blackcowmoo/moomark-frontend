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
  it('matches Props', () => {
    const wrapper = mount(<PostFooter likeCount={33} liked={0} />);
    expect(wrapper.props().likeCount).toBe(33);
  });
  it('toggle LikeButton', () => {
    const wrapper = mount(<PostFooter likeCount={2} liked={0} />);
    const likeButton = wrapper.findWhere((node) => node.type() === 'div' && node.prop('id') === 'likePost');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('추천 🍕3');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('추천 🍕2');
  });
  it('toggle DislikeButton', () => {
    const wrapper = mount(<PostFooter likeCount={2} liked={0} />);
    const dislikeButton = wrapper.findWhere((node) => node.type() === 'div' && node.prop('id') === 'dislikePost');
    dislikeButton.simulate('click');
    expect(dislikeButton.text()).toBe('비추 🐃');
    dislikeButton.simulate('click');
    expect(dislikeButton.text()).toBe('비추');
  });
  it('click  like/disLikeButton', () => {
    const wrapper = mount(<PostFooter likeCount={2} liked={0} />);
    const likeButton = wrapper.findWhere((node) => node.type() === 'div' && node.prop('id') === 'likePost');
    const dislikeButton = wrapper.findWhere((node) => node.type() === 'div' && node.prop('id') === 'dislikePost');
    dislikeButton.simulate('click');
    expect(likeButton.text()).toBe('추천 🍕1');
    expect(dislikeButton.text()).toBe('비추 🐃');
    likeButton.simulate('click');
    expect(likeButton.text()).toBe('추천 🍕3');
    expect(dislikeButton.text()).toBe('비추');
  });
});
