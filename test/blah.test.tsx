import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SweetPasswordStrength } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SweetPasswordStrength
        password="12345"
        onChange={PasswordStrenghtState => console.log(PasswordStrenghtState)}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
