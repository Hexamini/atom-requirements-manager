'use babel'

import RequirementsManagerView from './requirementsManagerView'
import RequirementsManagerItem from './requirementsManagerItem'
import {CompositeDisposable} from 'atom'

export default {
  subscriptions: null,

  activate (state) {
    // Register the RequirementsManager's model and attach it the way to build
    // the view.
    atom.views.addViewProvider(RequirementsManagerItem, () => {
      let element = new RequirementsManagerView()
      return element.content()
    })

    // Events subscribed to in atom's system can be easily cleaned up with a
    // CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-requirements-manager:toggle': () => this.toggle()
    }))
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  toggle () {
    let pane = atom.workspace.getActivePane()
    pane.addItem(new RequirementsManagerItem())
  }
}
