import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SweetPasswordStrength } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SweetPasswordStrength />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
