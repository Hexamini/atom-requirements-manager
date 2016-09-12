'use babel'

import React from 'react-for-atom'

export default class FrameNav extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='rq_header'>
        <div className='rq_nav'>
          <div className='rq_crumb'>
            Back
          </div>
          <div className='rq_crumb'>
            Stack
          </div>
          <div className='rq_crumb'>
            Requirements
          </div>
          <div className='rq_crumb'>
            Cards
          </div>
        </div>
        Prova
      </div>
    )
  }
}
