'use babel';

import RequirementsManager from './components/requirementsManager.react';
import React, {ReactDOM} from 'react-for-atom';

export default class RequirementsManagerView {
  /**
   * @description Create the requirement manager's view
   * @returns {HTMLElement}
   * The HTML node element are maked by ReactDOM
   */
  content() {
    let content = document.createElement('div');
    // Render the REACT component
    ReactDOM.render(<RequirementsManager />, content);

    return content;
  }
}
