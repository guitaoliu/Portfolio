import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Social from './Social/Social'

const useStyle = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    maxWidth: 600,
    padding: theme.spacing(1),
  },
  icon: {
    margin: 'auto',
    maxWidth: '50%',
    display: 'block',
    borderRadius: '50%',
  },
  info: {
    marginTop: theme.spacing(1),
  },
}))

const User = (props) => {
  const { name, icon, socials } = props
  const classes = useStyle()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}>
      <Grid item xs>
        <img className={classes.icon} alt={name} src={icon} />
      </Grid>
      <Grid item xs>
        <Typography variant="h4">@{name}</Typography>
        <Typography variant="body1">
          Student major in Automation at Xi&apos;an Jiaotong University,
          applying for graduate school in computer science.
        </Typography>
        <div className={classes.info}>
          <Typography variant="body2">zh-CN & en-US</Typography>
          <Typography variant="body2">Python, Go, JavaScript</Typography>
        </div>
        <Social socials={socials} />
      </Grid>
    </Grid>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default User
