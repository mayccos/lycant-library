# lycant-library

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/lycant-library.svg)](https://www.npmjs.com/package/lycant-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lycant-library
```

## Usage

```jsx
import React, { Component } from 'react'

import DropdownComponent from 'lycant-library'
import 'lycant-library/dist/index.css'

const App = () => {
  return (
    <DropdownComponent
      selectName='departments'
      defaultValue='select a department...'
      options={departments}
      label=''
      selectStyle={{}}
      wrapperStyle={{}}
    />
  )
}

export default App
```

## Props

Common props you may want to specify include:

### Is required

options: data displayed in dropdown.

### Is Not required

- label: to specify the type of data above the dropdown
- defaultValue: the value displayed by default, to specify the type of data if you don't want a label no label
- selectName: to specify the name and id of select, to allow you to add CSS and link your label with an htmlFor
- selectStyle: to add style to dropdown selects
- wrapperStyle: to add style to the div of dropdown

## License

MIT © [mayccos](https://github.com/mayccos)
