import Component from '@ember/component';
import layout from '../templates/components/ck-editor';
import {
  BalloonEditor
} from '../index';

export default Component.extend({
  layout,
  didInsertElement() {
    BalloonEditor
      .create(this.$('.editor')[0])
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });
  }
});
