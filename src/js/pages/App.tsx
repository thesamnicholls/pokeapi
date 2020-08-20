import React from 'react'
import Header from '../components/Header'
import List from '../components/List'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from '../components/Detail'
import { ReactQueryDevtools } from 'react-query-devtools'

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/pokeapi' component={List} />
          <Route path='/pokeapi/:id' component={Detail} />
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  )
}

export default App
