import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

import SocialBadge from './SocialBadge'

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

function Social(props) {
  const classes = useStyle()
  const { socials } = props
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
