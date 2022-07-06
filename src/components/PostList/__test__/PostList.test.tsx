import { mount } from 'enzyme';
import { IPostList } from 'types/post';
import { HomePageListMock } from '@utils/mock';
import PostList from '..';
import PostListItem from '../PostListItem';

const mockDefaultPostListItem: IPostList = {
  id: 1,
  title: '투자의 책임은 너에게',
  user: {
    nickname: 'gosu',
  },
  recommendCount: 222,
  viewsCount: 22,
  uploadTime: '2021-1-2',
};

describe('<PostList/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<PostList listTitle='테스트' posts={HomePageListMock} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

describe('<PostListItem />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<PostListItem post={mockDefaultPostListItem} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('render userName', () => {
    const wrapper = mount(<PostListItem post={mockDefaultPostListItem} />);
    expect(wrapper.props().post.id).toBe(1);
    expect(wrapper.props().post.title).toBe('투자의 책임은 너에게');
    expect(wrapper.props().post.user.nickname).toBe('gosu');
    expect(wrapper.props().post.recommendCount).toBe(222);
  });
});
