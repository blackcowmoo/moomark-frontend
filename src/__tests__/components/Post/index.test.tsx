import { mount } from 'enzyme';
import Post from '@components/Post';

describe('<Post/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Post />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
