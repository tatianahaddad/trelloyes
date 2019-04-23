import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe ('Card components', () => {
  it ('renders Card without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it ('renders the UI as expected', () => {

    const tree = renderer
    .create(<Card
      title='first card'
      content='lorem ipsum'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
})