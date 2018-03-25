import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Service } from './Service';

jest.mock('./Service', () => ({
  Service: jest.fn(text => Promise.resolve([]))
}));

describe('App.js', () => {
  it('should render component', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('should handle onChangeEvent', () => {
    const app = shallow(<App />);
    expect(app.state().results).toBeNull();

    const searchInput = app.find("input[name='searchInput']");
    const event = {
      target: { name: 'searchInput', value: 'bookToSearch' },
      preventDefault: () => {}
    };
    searchInput.simulate('change', event);
    expect(Service).toBeCalledWith('bookToSearch');
  });

  it('should render with results', () => {
    const app = shallow(<App />);
    app.setState({
      results: [{ id: 1, title: 'bookTitle', author: 'authorName' }]
    });
    app.update();
    expect(app).toMatchSnapshot();
  });
});
