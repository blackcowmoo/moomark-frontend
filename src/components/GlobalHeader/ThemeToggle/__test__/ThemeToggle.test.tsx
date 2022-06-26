import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import ThemeToggle from '../index';

describe('<ThemeToggle/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <RecoilRoot>
        <ThemeToggle />
      </RecoilRoot>,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
