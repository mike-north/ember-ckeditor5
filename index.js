'use strict';

module.exports = {
	name: 'ember-ckeditor',
	included(appOrAddon) {
		this._super.included(appOrAddon);
		let app = appOrAddon;
		if (typeof appOrAddon.import !== 'function' && appOrAddon.app) {
			app = appOrAddon.app;
		}
		this.app = app;
		app.import(require.resolve('@ckeditor/ckeditor5-build-balloon'));
	}
};
