'use babel'

import React from 'react-for-atom'

/**
 * Show a text and if the action to change it is occurred so the text switchs
 * with an other while a slide animation.
 */
export default class SlideText extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className={this.props.cssClass}>
        <h1 id='text'>{this.props.text}</h1>
      </div>
    )
  }
}
