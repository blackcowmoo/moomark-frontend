import { mount } from 'enzyme';
import DefaultPostList from '@components/PostList/DefaultPostList';
import { HomePageListMock } from 'utils/mock';
import { PostListViewProps } from 'types';
import DefaultViewItem from '@components/PostList/DefaultPostList/DefaultViewItem';

const date = new Date(2021, 1, 2);
const mockDefaultPostListItem: PostListViewProps = { id: 1, title: '투자의 책임은 너에게', author: 'gosu', like: 222, date };

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
});
