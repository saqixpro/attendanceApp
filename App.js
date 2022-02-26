import React from 'react'
import MainNav from './src/navigation'
import {Provider as PaperProvider, ThemeProvider} from 'react-native-paper'
import {Provider as StoreProvider} from 'react-redux'
import store from './src/store'

const App = () => {
  return (
      <StoreProvider store={store}>
        <PaperProvider>
        <ThemeProvider>
           <MainNav />
       </ThemeProvider>
      </PaperProvider>
      </StoreProvider>
  )
}

export default App;