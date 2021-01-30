import React from 'react'
import { Container, Paper } from '@material-ui/core'
import { Email, GitHub, Twitter } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import User from './components/User'
import Footer from './components/Footer'
import icon from './assets/icon.jpeg'

const socials = [
  {
    id: 1,
    site: 'GitHub',
    link: 'https://github.com/guitaoliu',
    icon: <GitHub fontSize="small" />,
  },
  {
    id: 2,
    site: 'Twitter',
    link: 'https://twitter.com/gtliu52',
    icon: <Twitter fontSize="small" />,
  },
  {
    id: 3,
    site: 'Gmail',
    link: 'mailto:gtliu52@gmail.com',
    icon: <Email fontSize="small" />,
  },
]

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paper: {
    maxWidth: 700,
    margin: 'auto',
    padding: theme.spacing(5, 2),
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
