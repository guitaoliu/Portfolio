import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

import SocialBadge from './SocialBadge'

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

const Social = ({ socials }) => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      {socials.map((social) => (
        <SocialBadge
          key={social.id}
          site={social.site}
          link={social.link}
          icon={social.icon}
        />
      ))}
    </div>
  )
}

Social.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Social
