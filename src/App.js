import React from 'react'
import { Provider } from 'react-redux'
import LangSwitcher from './components/lang-switcher/lang-switcher'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LangSwitcher/>
      </div>
    </Provider>
  )
}

export default App