import React from 'react'

import { Email, GitHub, Twitter } from '@material-ui/icons'

export default [
  {
    id: 1,
    site: 'GitHub',
    link: 'https://github.com/guitaoliu',
    icon: <GitHub fontSize="small" />,
  },
  {
    id: 2,
    site: 'Twitter',
    link: 'https://twitter.com/gtliuu',
    icon: <Twitter fontSize="small" style={{ color: '#08a0e9' }} />,
  },
  {
    id: 3,
    site: 'Gmail',
    link: 'mailto:gtliu52@gmail.com',
    icon: <Email fontSize="small" style={{ color: '#EA4335' }} />,
  },
]
