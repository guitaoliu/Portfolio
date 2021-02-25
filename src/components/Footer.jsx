import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Link } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const useStyle = makeStyles((theme) => ({
  foot: {
    margin: theme.spacing(0, 'auto', 1),
  },
  homepage: {
    color: blue[400],
  },
}))

const Footer = (props) => {
  const { name } = props
  const classes = useStyle()
  return (
    <Typography variant="subtitle2" className={classes.foot}>
      Made with <Favorite color="error" fontSize="inherit" /> by{' '}
      <Link href="/" className={classes.homepage}>
        {name}
      </Link>
    </Typography>
  )
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
}
export default Footer
