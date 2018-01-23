import {
  BalloonEditor
} from '../index';
import {
  computed
} from '@ember/object';
import {
  debounce,
  later
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

  init() {
    this._super(...arguments);

    if (Ember.testing) {
      /*
       * If running in testing mode, we need to ensure we can easily
       * wait for the editor to initialize, since it's asynchronous.
       * Initially, tests will pause as soon as they encounter this waiter.
       * They'll periodically retry the waiter until it returns a truthy 
       * value, and then the tests will resume.
       */
      registerWaiter(() => {
        return this.get('isReady');
      });
    }
  },

  isReady: computed('editor', function () {
    return !!this.get('editor');
  }),

  didInsertElement() {
    this._super(...arguments);
    this._initializeEditor();
  },

  value: computed('_value', {
    set(_, newVal) {
      this.set('_value', newVal);
      this._updateEditorData(this.get('editor'));
    },
    get() {
      return this.get('editor').getData();
    }
  }),

  /**
   * The entry point for the BalloonEditor initialization
   * @private
   */
  _initializeEditor() {
    BalloonEditor
      .create(this.$('.editor')[0])
      .then(editor => {
        this._setupEditor(editor);
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });
  },

  /**
   * The post-setup of the editor, once the BalloonEditor.create promise resolves
   * @private
   */
  _setupEditor(editor) {
    if (!this.isDestroyed && !this.isDestroying) {
      this._updateEditorData(editor); // initialize editor content 
      this.set('editor', editor); // save a reference to the editor (results in tests continuing)
      // Hook up an event listener to handle content changes
      editor.document.on('change', () => {
        /**
         * For some reason, this event fires several times as a result of initialization.
         * For performance and state management reasons, we want exactly one event to fire, so
         * debounce by 100ms to smooth out the rapid-fire.
         */
        debounce(this, '_onEditorDataChange', ...[editor, ...arguments], 100)
      });
    }
  },

  /**
   * Called whenever the editor's "change" event is fired
   * @private
   */
  _onEditorDataChange(editor) {
    // if an "onChange" function is passed in, invoke it
    if (this.onChange && typeof this.onChange === 'function') {
      this.onChange(editor.getData());
    }
  },

  /**
   * Called whenever we need to update the state of the editor.
   * This happens once when the component is initialized
   */
  _updateEditorData(editor) {
    if (!editor) editor = this.get('editor');
    if (!editor) {
      later(this, '_updateEditorData', 100);
    } else {
      editor.setData(this.get('_value'));
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    // attempt to clean up the editor
    let editor = this.get('editor');
    if (editor) {
      editor.destroy();
    }
  },

  actions: {
    // An action for consumers to use in their {{yield}} content
    _onSave() {
      this.set('value', this.get('editor').getData());
    }
  }
});
