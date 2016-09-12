'use babel'

import React from 'react-for-atom'

import NavBar from './navBar.react'

export default class RequirementsManager extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='rq_content'>
        <NavBar />
      </div>
    )
  }
}
