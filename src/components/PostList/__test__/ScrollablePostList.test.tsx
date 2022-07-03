import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';

import { HomePageListMock } from 'utils/mock';
import ScrollablePostList from '../ScrollablePostList';

describe('<ScrollablePostList/>', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  it('matches snapshot', () => {
    const wrapper = mount(
      <MockedProvider>
        <ScrollablePostList listTitle='테스트' preRenderPosts={HomePageListMock} />
      </MockedProvider>,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
