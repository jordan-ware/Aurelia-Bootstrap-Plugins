define(['exports', 'aurelia-framework', 'jquery', 'bootstrap-tagsinput/dist/bootstrap-tagsinput'], function (exports, _aureliaFramework, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AbaTagsInputCustomElement = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;

  var AbaTagsInputCustomElement = exports.AbaTagsInputCustomElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = (_class2 = function () {
    function AbaTagsInputCustomElement(elm) {
      _classCallCheck(this, AbaTagsInputCustomElement);

      _initDefineProp(this, 'element', _descriptor, this);

      _initDefineProp(this, 'model', _descriptor2, this);

      _initDefineProp(this, 'allowDuplicates', _descriptor3, this);

      _initDefineProp(this, 'cancelConfirmKeysOnEmpty', _descriptor4, this);

      _initDefineProp(this, 'confirmKeys', _descriptor5, this);

      _initDefineProp(this, 'focusClass', _descriptor6, this);

      _initDefineProp(this, 'freeInput', _descriptor7, this);

      _initDefineProp(this, 'itemValue', _descriptor8, this);

      _initDefineProp(this, 'itemText', _descriptor9, this);

      _initDefineProp(this, 'maxTags', _descriptor10, this);

      _initDefineProp(this, 'maxChars', _descriptor11, this);

      _initDefineProp(this, 'onTagExists', _descriptor12, this);

      _initDefineProp(this, 'tagClass', _descriptor13, this);

      _initDefineProp(this, 'trimValue', _descriptor14, this);

      _initDefineProp(this, 'typeahead', _descriptor15, this);

      _initDefineProp(this, 'onBeforeItemAdd', _descriptor16, this);

      _initDefineProp(this, 'onBeforeItemRemove', _descriptor17, this);

      _initDefineProp(this, 'onItemAdded', _descriptor18, this);

      _initDefineProp(this, 'onItemAddedOnInit', _descriptor19, this);

      _initDefineProp(this, 'onItemRemoved', _descriptor20, this);

      this.events = {};
      this.methods = {};
      this.options = {};

      this.elm = elm;
    }

    AbaTagsInputCustomElement.prototype.attached = function attached() {
      this.domElm = (0, _jquery2.default)(this.elm);

      this.attachOptions();
      this.applyExposeEvents();
      this.exposeMethods();

      this.domElm.tagsinput(this.options);

      this.element = {
        events: this.events,
        options: this.options,
        methods: this.methods
      };
    };

    AbaTagsInputCustomElement.prototype.attachOptions = function attachOptions() {
      var options = {
        allowDuplicates: this.allowDuplicates,
        cancelConfirmKeysOnEmpty: this.cancelConfirmKeysOnEmpty,
        confirmKeys: this.confirmKeys,
        focusClass: this.focusClass,
        freeInput: this.freeInput,
        maxChars: this.maxChars,
        maxTags: this.maxTags,
        tagClass: this.tagClass,
        trimValue: this.trimValue,
        typeahead: this.typeahead
      };

      if (this.itemValue) {
        options.itemValue = this.itemValue;
      }
      if (this.itemText) {
        options.itemText = this.itemText;
      }
      if (this.onTagExists) {
        options.onTagExists = this.onTagExists;
      }

      this.options = options;
    };

    AbaTagsInputCustomElement.prototype.applyExposeEvents = function applyExposeEvents() {
      var _this = this;

      this.domElm.on('beforeItemAdd', function (e) {
        if (typeof _this.onBeforeItemAdd === 'function') {
          _this.onBeforeItemAdd(e);
        }
        if (typeof _this.events.onBeforeItemAdd === 'function') {
          _this.events.onBeforeItemAdd(e);
        }
      });

      this.domElm.on('beforeItemRemove', function (e) {
        if (typeof _this.onBeforeItemRemove === 'function') {
          _this.onBeforeItemRemove(e);
        }
        if (typeof _this.events.onBeforeItemRemove === 'function') {
          _this.events.onBeforeItemRemove(e);
        }
      });

      this.domElm.on('itemAdded', function (e) {
        _this.model = _this.domElm.tagsinput('items');
        if (typeof _this.onItemAdded === 'function') {
          _this.onItemAdded(e);
        }
        if (typeof _this.events.onItemAdded === 'function') {
          _this.events.onItemAdded(e);
        }
      });

      this.domElm.on('itemAddedOnInit', function (e) {
        if (typeof _this.onItemAddedOnInit === 'function') {
          _this.onItemAddedOnInit(e);
        }
        if (typeof _this.events.onItemAddedOnInit === 'function') {
          _this.events.onItemAddedOnInit(e);
        }
      });

      this.domElm.on('itemRemoved', function (e) {
        _this.model = _this.domElm.tagsinput('items');
        if (typeof _this.onItemRemoved === 'function') {
          _this.onItemRemoved(e);
        }
        if (typeof _this.events.onItemRemoved === 'function') {
          _this.events.onItemRemoved(e);
        }
      });
    };

    AbaTagsInputCustomElement.prototype.exposeMethods = function exposeMethods() {
      var _this2 = this;

      var methods = {
        add: function add(value) {
          return _this2.domElm.tagsinput('add', value);
        },
        destroy: function destroy() {
          return _this2.domElm.tagsinput('destroy');
        },
        focus: function focus() {
          return _this2.domElm.tagsinput('focus');
        },
        input: function input() {
          return _this2.domElm.tagsinput('input');
        },
        refresh: function refresh() {
          return _this2.domElm.tagsinput('refresh');
        },
        remove: function remove(value) {
          return _this2.domElm.tagsinput('remove', value);
        },
        removeAll: function removeAll() {
          return _this2.domElm.tagsinput('removeAll');
        }
      };

      this.methods = methods;
    };

    AbaTagsInputCustomElement.prototype.detached = function detached() {
      this.domElm.tagsinput('destroy');
    };

    return AbaTagsInputCustomElement;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'element', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'allowDuplicates', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'cancelConfirmKeysOnEmpty', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'confirmKeys', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [13, 44];
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'focusClass', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'focus';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'freeInput', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'itemValue', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'itemText', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'maxTags', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'maxChars', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'onTagExists', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'tagClass', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'label label-info';
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'trimValue', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'typeahead', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'onBeforeItemAdd', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'onBeforeItemRemove', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'onItemAdded', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'onItemAddedOnInit', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'onItemRemoved', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});