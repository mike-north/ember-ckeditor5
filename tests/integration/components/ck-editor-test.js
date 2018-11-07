import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ck-editor', function(hooks) {
	setupRenderingTest(hooks);

	test('Initial render (no options)', async function(assert) {
		await render(hbs`
    {{ck-editor value="<h1>Hello World</h1>"}}
  `);

		assert.equal(
			this.element.innerText.trim(),
			'Hello World',
			'Initial render shows content'
		);
	});

	test('Change and save (via button)', async function(assert) {
		this.set('val', "<h1 class='foo'>Hello World</h1>");

		await render(hbs`
    {{#ck-editor value=val as |api|}}
      <button onClick={{api.actions.save}}>Save</button>
    {{/ck-editor}}
  `);

		assert.equal(
			this.element.innerText.replace(/[\s]+/g, ''),
			'HelloWorldSave',
			'Save button is rendered appropriately'
		);

		this.set('val', 'FOO');
		await render(hbs`
    {{#ck-editor value=val as |api|}}
      <button onClick={{api.actions.save}}>Save</button>
    {{/ck-editor}}
  `);
		assert.equal(
			this.element.innerText.replace(/[\s]+/g, ''),
			'FOOSave',
			'Save button is rendered appropriately'
		);
	});
});
