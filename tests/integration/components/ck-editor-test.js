import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

moduleForComponent('ck-editor', 'Integration | Component | ck editor', {
  integration: true
});

test('Initial render', function (assert) {
  assert.expect(1);
  let done = assert.async();
  // Template block usage:
  this.render(hbs `
    {{ck-editor data="<h1>Hello World</h1>"}}
  `);

  wait().then(() => {
    assert.equal(this.$().text().trim(), 'Hello World');
    done();
  });
});
