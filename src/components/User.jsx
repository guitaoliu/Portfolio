import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { blue, grey } from '@material-ui/core/colors'
import Social from './Social/Social'

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center',
    },
  },
  icon: {
    margin: 'auto',
    maxWidth: '70%',
    display: 'block',
    borderRadius: '50%',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '50%',
    },
  },
  info: {
    margin: theme.spacing(1, 0),
  },
  lines: {
    margin: theme.spacing(0.5, 0),
  },
  skills: {
    margin: theme.spacing(1, 0),
    color: grey[600],
  },
  xjtuLink: {
    padding: theme.spacing(0.5),
    color: blue[600],
    '&:hover': {
      color: blue[900],
    },
  },
}))

const User = ({ name, icon, socials }) => {
  const classes = useStyle()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Grid item xs={10} sm={4}>
        <img className={classes.icon} alt={name} src={icon} />
        <Typography variant="h5" align="center">
          @{name}
        </Typography>
      </Grid>
      <Grid item xs={10} sm={8}>
        <div className={classes.info}>
          <Typography variant="body1" className={classes.info}>
            Current undergraduate student majors in Automation at{' '}
            <Link href="http://www.xjtu.edu.cn" className={classes.xjtuLink}>
              Xi&apos;an Jiaotong University,
            </Link>{' '}
            applying for graduate school in Computer Science.
          </Typography>
          <Typography variant="body1" className={classes.info}>
            Code for life. Have projects made with Python, Flask, OpenCV. Learn
            to code with JavaScript and React.js. And add some Golang.
          </Typography>
          <div className={classes.skills}>
            <Typography variant="body2">zh-CN & en-US</Typography>
            <Typography variant="body2">Python, Go, JavaScript</Typography>
          </div>
        </div>
        <Social socials={socials} cl />
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
