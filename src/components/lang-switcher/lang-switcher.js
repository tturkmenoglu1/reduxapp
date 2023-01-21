import React from 'react'
import { langs } from '../../helpers/locale-helpers'

const LangSwitcher = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {langs.map(item=> <Dropdown.Item href="#/action-1">{item.title}</Dropdown.Item>)}
        
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LangSwitcher