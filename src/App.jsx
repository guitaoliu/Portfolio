import React from 'react'
import { Paper } from '@material-ui/core'
import { Email, GitHub, Twitter } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import User from './components/User'
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
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 700,
    margin: 'auto',
    padding: theme.spacing(5, 2),
  },
}))

const App = () => {
  const classes = useStyle()
  return (
    <Paper className={classes.paper} elevation={5}>
      <User name="Gtliu" icon={icon} socials={socials} />
    </Paper>
  )
}
export default App
