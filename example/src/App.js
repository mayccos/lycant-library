import React from 'react'

import { DropdownComponent } from 'lycant-library'
import 'lycant-library/dist/index.css'

const departments = [
  {
    option: 'Sales'
  },
  {
    option: 'Marketing'
  },
  {
    option: 'Engineering'
  },
  {
    option: 'Human Resources'
  },
  {
    option: 'Legal'
  }
]

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
