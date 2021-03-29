import {  shallow } from 'enzyme';
import Index from '../index';

describe('Page Index', () => {
  it('render index', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find('h1').text()).toBe('mooMark main');
  });
});