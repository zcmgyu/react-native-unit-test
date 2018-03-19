import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
  });

  it('should be present', () => {
    let tree = renderer.create(<App />).toJSON();
    console.log(tree);
  });
});
