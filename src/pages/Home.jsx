import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import User from '../components/User'
import accounts from '../components/Social/Accounts'
import icon from '../assets/icon.jpeg'

const useStyle = makeStyles((theme) => ({
  paper: {
    maxWidth: 700,
    margin: 'auto',
    padding: theme.spacing(5, 5),
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing('auto', 1),
      padding: theme.spacing(1, 0.5),
    },
  },
}))

const Home = ({ name }) => {
  const classes = useStyle()
  return (
    <Paper className={classes.paper} elevation={5}>
      <User name={name} icon={icon} socials={accounts} />
    </Paper>
  )
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Home
