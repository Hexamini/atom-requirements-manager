'use babel'

import React from 'react-for-atom'

import SlideText from './slideText.react'

/**
 * Show the navbar to navigate inside the tool. The bar owns the buttons to jump
 * in any section, the current page's title and the back button. This component
 * send action to alert when a new page is required.
 */
export default class NavBar extends React.Component {
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
        <SlideText cssClass='rq_page-title' text='Requirements Stack' />
      </div>
    )
  }
}
