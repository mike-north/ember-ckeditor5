import {
  BalloonEditor
} from '../index';
import {
  computed
} from '@ember/object';
import {
  next
} from '@ember/runloop';
import {
  registerWaiter
} from '@ember/test';
import Component from '@ember/component';
import Ember from 'ember';
import layout from '../templates/components/ck-editor';

export default Component.extend({
  layout,
  editor: null,
  data: null,
  init() {
    this._super(...arguments);
    if (Ember.testing) {
      registerWaiter(() => {
        return this.get('editor')
      });
    }

  },
  isReady: computed('editor', function () {
    return !!this.get('isEditor');
  }),
  didInsertElement() {
    this._super(...arguments);
    BalloonEditor
      .create(this.$('.editor')[0])
      .then(editor => {
        next(() => {
          if (!this.isDestroyed && !this.isDestroying) {
            this.set('editor', editor);
            this.setupEditor(editor);
          }
        });
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
  setupEditor(editor) {
    editor.setData(this.get('data'));
  },

  willDestroyElement() {
    this._super(...arguments);
    let editor = this.get('editor');
    if (editor) {
      editor.destroy();
    }
  },
  actions: {
    _onSave() {
      this.set('data', this.get('editor').getData());
    }
  }
});
