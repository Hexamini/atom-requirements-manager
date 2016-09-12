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
          <button className='rq_btn-nav rq_back'>
            <span className='icon icon-arrow-left'>Back</span>
          </button>
          <button className='rq_btn-nav rq_crumb'>
            <span className='icon icon-three-bars'>Stack</span>
          </button>
          <button className='rq_btn-nav rq_crumb'>
            <span className='icon icon-list-unordered'>List</span>
          </button>
          <button className='rq_btn-nav rq_crumb'>
            <span className='icon icon-tag'>Cards</span>
          </button>
        </div>
        <div className='rq_page-title'>
          <h1>Requirements Stack</h1>
        </div>
      </div>
    )
  }
}
