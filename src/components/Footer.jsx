import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Link } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  foot: {
    margin: theme.spacing(1, 'auto'),
  },
}))

const Footer = (props) => {
  const { name } = props
  const classes = useStyle()
  return (
    <Typography variant="subtitle2" className={classes.foot} color="">
      Made with <Favorite color="error" fontSize="inherit" /> by{' '}
      <Link href="/">{name}</Link>
    </Typography>
  )
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Footer
