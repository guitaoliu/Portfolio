import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

import Home from './pages/Home'
import Footer from './components/Footer'

const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
}))
const App = () => {
  const classes = useStyle()
  const name = 'Gtliu'
  return (
    <Container className={classes.root}>
      <Home name={name} />
      <Footer name={name} />
    </Container>
  )
}

export default App
