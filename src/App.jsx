import React from 'react'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import socials from './components/Social/Accounts'
import User from './components/User'
import Footer from './components/Footer'
import icon from './assets/icon.jpeg'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  paper: {
    maxWidth: 700,
    margin: 'auto',
    padding: theme.spacing(5, 5),
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing('auto', 4),
      padding: theme.spacing(5, 1),
    },
  },
}))

const App = () => {
  const classes = useStyle()
  const name = 'Gtliu'
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <User name={name} icon={icon} socials={socials} />
      </Paper>
      <Footer name={name} />
    </Container>
  )
}
export default App
