'use babel'

import React from 'react-for-atom'

import FrameNav from './frameNav.react'

export default class RequirementsManager extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='rq_content'>
        <FrameNav />
      </div>
    )
  }
}
