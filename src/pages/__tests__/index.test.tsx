import { shallow } from 'enzyme';
import HomePage from '@pages/index';

describe('Page Index', () => {
  it('render index', () => {
    const home = shallow(<HomePage />);
    console.log(home.text());
  });
});
