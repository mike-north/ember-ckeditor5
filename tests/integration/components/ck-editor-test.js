import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import {
  run
} from '@ember/runloop';

moduleForComponent('ck-editor', 'Integration | Component | ck editor', {
  integration: true
});

test('Initial render (no options)', function (assert) {
  assert.expect(1);
  let done = assert.async();
  // Template block usage:

  run(() => {
    this.render(hbs `
      {{ck-editor value="<h1>Hello World</h1>"}}
    `);
  });

  wait().then(() => {
    assert.equal(this.$().text().trim(), 'Hello World', 'Initial render shows content');
    done();
  });
});

test('Change and save (via button)', async function (assert) {
  assert.expect(2);
  let done = assert.async();

  this.set('val', "<h1 class='foo'>Hello World</h1>");

  this.render(hbs `
    {{#ck-editor value=val as |api|}}
      <button onClick={{api.actions.save}}>Save</button>
    {{/ck-editor}}
  `);

  await wait();
  assert.equal(this.$().text().replace(/[\s]+/g, ''), 'HelloWorldSave', 'Save button is rendered appropriately');

  this.set('val', 'FOO');

  await wait()

  assert.equal(this.$().text().replace(/[\s]+/g, ''), 'FOOSave', 'Save button is rendered appropriately');
  done();

});
