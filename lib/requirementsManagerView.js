'use babel';

import RequirementsManager from './component/requirementsManager';
import React, {ReactDOM} from 'react-for-atom';

export default class RequirementsManagerView {
  /**
   * Create the requirement manager's view
   * @returns {HTMLElement} The element are maked by ReactDOM
   */
  content() {
    let content = document.createElement('div');
    // Render the REACT component
    ReactDOM.render(<RequirementsManager />, content);

    return content;
  }
}
