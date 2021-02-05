import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Social from './Social/Social'

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
    },
  },
  icon: {
    margin: 'auto',
    maxWidth: '60%',
    display: 'block',
    borderRadius: '50%',
  },
  info: {
    margin: theme.spacing(1, 0),
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
      spacing={2}
      className={classes.root}>
      <Grid item xs={10} sm={4}>
        <img className={classes.icon} alt={name} src={icon} />
      </Grid>
      <Grid item xs={10} sm={8}>
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
