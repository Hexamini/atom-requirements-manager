'use babel';

import TestView from './test-view';
import React, {ReactDOM} from 'react-for-atom';
import {CompositeDisposable} from 'atom';

export default {
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    let content = document.createElement('div');
    ReactDOM.render(<TestView />, content);

    this.modalPanel = atom.workspace.addModalPanel({
      item: content,
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-requirements-manager:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
  },

  toggle() {
    console.log('Test was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
