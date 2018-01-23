'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/ck-editor-test', ['ember-qunit', 'ember-test-helpers/wait'], function (_emberQunit, _wait) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _emberQunit.moduleForComponent)('ck-editor', 'Integration | Component | ck editor', {
    integration: true
  });

  (0, _emberQunit.test)('Initial render (no options)', function (assert) {
    var _this = this;

    assert.expect(1);
    var done = assert.async();
    // Template block usage:

    Ember.run(function () {
      _this.render(Ember.HTMLBars.template({
        "id": "X4u+kMq0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[25,\"ck-editor\",null,[[\"value\"],[\"<h1>Hello World</h1>\"]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
    });

    (0, _wait.default)().then(function () {
      assert.equal(_this.$().text().trim(), 'Hello World', 'Initial render shows content');
      done();
    });
  });

  (0, _emberQunit.test)('Change and save (via button)', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
      var done;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              assert.expect(2);
              done = assert.async();


              this.set('val', "<h1 class='foo'>Hello World</h1>");

              this.render(Ember.HTMLBars.template({
                "id": "nYmdZ0x/",
                "block": "{\"symbols\":[\"api\"],\"statements\":[[0,\"\\n\"],[4,\"ck-editor\",null,[[\"value\"],[[20,[\"val\"]]]],{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"onClick\",[19,1,[\"actions\",\"save\"]],null],[7],[0,\"Save\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
                "meta": {}
              }));

              _context.next = 6;
              return (0, _wait.default)();

            case 6:
              assert.equal(this.$().text().replace(/[\s]+/g, ''), 'HelloWorldSave', 'Save button is rendered appropriately');

              this.set('val', 'FOO');

              _context.next = 10;
              return (0, _wait.default)();

            case 10:

              assert.equal(this.$().text().replace(/[\s]+/g, ''), 'FOOSave', 'Save button is rendered appropriately');
              done();

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});
define('dummy/tests/test-helper', ['dummy/app', 'dummy/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ck-editor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ck-editor-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
