import { mount } from 'enzyme';
import { RecoilRoot } from 'recoil';
import HttpHeaderModifier from '@components/GlobalHeader/HttpHeaderModifier/HttpHeaderModifier';

describe('<HttpHeaderModifier/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <RecoilRoot>
        <HttpHeaderModifier />
      </RecoilRoot>,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
