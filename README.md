# sweet-password-strength

[![NPM](https://nodei.co/npm/@filipecovas/sweet-password-strength.png?compact=true)](https://nodei.co/npm/@filipecovas/sweet-password-strength/)

[![Version](https://img.shields.io/npm/v/@filipecovas/sweet-password-strength.svg)](https://www.npmjs.com/package/@filipecovas/sweet-password-strength)
![Build](https://github.com/filipecovas/sweet-password-strength/actions/workflows/publish.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/npm/l/@filipecovas/sweet-password-strength.svg)](https://www.npmjs.com/package/@filipecovas/sweet-password-strength)

## Sweet Password Strength React Component Guide

Congrats! You are just a few steps away from using the component.
(Under Construction!!!)

###

This package is based on [password-validator](https://www.npmjs.com/package/password-validator)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install @filipecovas/sweet-password-strength
```

## Usage

```jsx
import React, { useState } from 'react';
import { SweetPasswordStrength } from '@filipecovas/sweet-password-strength';

const App: React.FC = () => {
  const [value, setValue] = useState < string > '';
  return (
    <>
      <input
        type="password"
        name="password"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <SweetPasswordStrength
        password={value}
        onChange={PasswordStrenghtState => console.log(PasswordStrenghtState)}
      />
    </>
  );
};

export default App;
```

## Props

#### `password`: string

- isRequired: true
- default: undefined

#### `onChange`: (password) => void

- isRequired: true
- default: undefined

## Contributing

First fork the project and follow the commands below.

```bash
  npm i && npm link && cd example && npm i && npm link @filipecovas/sweet-password-strength && cd ../
```

```bash
  npm start
```

```bash
  cd example && npm run dev
```

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
