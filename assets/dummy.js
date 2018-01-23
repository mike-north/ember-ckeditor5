"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/ck-editor', ['exports', 'ember-ckeditor/components/ck-editor'], function (exports, _ckEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ckEditor.default;
    }
  });
});
define('dummy/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    htmlVal: '<p>This is a paragraph</p><figure class="image"><img src="http://placecorgi.com/250/250"></figure>'
  });
});
define('dummy/ember-ckeditor/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/ck-editor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ck-editor.js should pass ESLint\n\n');
  });

  QUnit.test('addon/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/index.js should pass ESLint\n\n');
  });
});
define('dummy/ember-ckeditor/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/ck-editor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ck-editor.js should pass ESLint\n\n');
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5mQ7npkk", "block": "{\"symbols\":[\"api\"],\"statements\":[[6,\"h2\"],[9,\"id\",\"title\"],[7],[0,\"Welcome to CKEditor\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"well\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"This is the editor\"],[8],[0,\"\\n\"],[4,\"ck-editor\",null,[[\"value\",\"onChange\"],[[20,[\"htmlVal\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"htmlVal\"]]],null]],null]]],{\"statements\":[[0,\"  \"],[6,\"button\"],[10,\"onClick\",[19,1,[\"onSave\"]],null],[7],[0,\"Save\"],[8],[0,\"\\n  \"]],\"parameters\":[1]},null],[0,\" \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"well\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"This is the HTML code\"],[8],[0,\"\\n  \"],[6,\"textarea\"],[9,\"cols\",\"80\"],[9,\"rows\",\"20\"],[10,\"onInput\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"htmlVal\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[7],[1,[18,\"htmlVal\"],false],[0,\" \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
