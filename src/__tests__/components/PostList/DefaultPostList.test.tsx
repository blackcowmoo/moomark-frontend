import { mount } from 'enzyme';
import DefaultPostList from '@components/PostList/DefaultPostList';
import { HomePageListMock } from 'utils/mock';
import { PostListViewProps } from 'types';
import DefaultViewItem from '@components/PostList/DefaultPostList/DefaultViewItem';

const mockDate = new Date(2021, 1, 2);
const mockDefaultPostListItem: PostListViewProps = { id: 1, title: '투자의 책임은 너에게', author: 'gosu', like: 222, date: mockDate };

describe('<DefaultPostList/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<DefaultPostList listTitle='테스트' postList={HomePageListMock} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

describe('<DefaultViewItem', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<DefaultViewItem value={mockDefaultPostListItem} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('render userName', () => {
    const wrapper = mount(<DefaultViewItem value={mockDefaultPostListItem} />);
    expect(wrapper.props().value.id).toBe(1);
    expect(wrapper.props().value.title).toBe('투자의 책임은 너에게');
    expect(wrapper.props().value.author).toBe('gosu');
    expect(wrapper.props().value.like).toBe(222);
    expect(wrapper.props().value.date).toBe(mockDate);
  });
});
