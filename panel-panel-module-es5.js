function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-panel-module"], {
  /***/
  "./node_modules/sweetalert2/dist/sweetalert2.js":
  /*!******************************************************!*\
    !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSweetalert2DistSweetalert2Js(module, exports, __webpack_require__) {
    /*!
    * sweetalert2 v9.14.0
    * Released under the MIT License.
    */
    (function (global, factory) {
      true ? module.exports = factory() : undefined;
    })(this, function () {
      'use strict';

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function () {
          var Super = _getPrototypeOf(Derived),
              result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      var consolePrefix = 'SweetAlert2:';
      /**
       * Filter the unique values into a new array
       * @param arr
       */

      var uniqueArray = function uniqueArray(arr) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
          if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
          }
        }

        return result;
      };
      /**
       * Capitalize the first letter of a string
       * @param str
       */


      var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      /**
       * Returns the array ob object values (Object.values isn't supported in IE11)
       * @param obj
       */


      var objectValues = function objectValues(obj) {
        return Object.keys(obj).map(function (key) {
          return obj[key];
        });
      };
      /**
       * Convert NodeList to Array
       * @param nodeList
       */


      var toArray = function toArray(nodeList) {
        return Array.prototype.slice.call(nodeList);
      };
      /**
       * Standardise console warnings
       * @param message
       */


      var warn = function warn(message) {
        console.warn("".concat(consolePrefix, " ").concat(message));
      };
      /**
       * Standardise console errors
       * @param message
       */


      var error = function error(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
      };
      /**
       * Private global state for `warnOnce`
       * @type {Array}
       * @private
       */


      var previousWarnOnceMessages = [];
      /**
       * Show a console warning, but only if it hasn't already been shown
       * @param message
       */

      var warnOnce = function warnOnce(message) {
        if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
          previousWarnOnceMessages.push(message);
          warn(message);
        }
      };
      /**
       * Show a one-time console warning about deprecated params/methods
       */


      var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
        warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
      };
      /**
       * If `arg` is a function, call it (with no arguments or context) and return the result.
       * Otherwise, just pass the value through
       * @param arg
       */


      var callIfFunction = function callIfFunction(arg) {
        return typeof arg === 'function' ? arg() : arg;
      };

      var isPromise = function isPromise(arg) {
        return arg && Promise.resolve(arg) === arg;
      };

      var DismissReason = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
      });

      var isJqueryElement = function isJqueryElement(elem) {
        return _typeof(elem) === 'object' && elem.jquery;
      };

      var isElement = function isElement(elem) {
        return elem instanceof Element || isJqueryElement(elem);
      };

      var argsToParams = function argsToParams(args) {
        var params = {};

        if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
          _extends(params, args[0]);
        } else {
          ['title', 'html', 'icon'].forEach(function (name, index) {
            var arg = args[index];

            if (typeof arg === 'string' || isElement(arg)) {
              params[name] = arg;
            } else if (arg !== undefined) {
              error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
            }
          });
        }

        return params;
      };

      var swalPrefix = 'swal2-';

      var prefix = function prefix(items) {
        var result = {};

        for (var i in items) {
          result[items[i]] = swalPrefix + items[i];
        }

        return result;
      };

      var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
      var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

      var getContainer = function getContainer() {
        return document.body.querySelector(".".concat(swalClasses.container));
      };

      var elementBySelector = function elementBySelector(selectorString) {
        var container = getContainer();
        return container ? container.querySelector(selectorString) : null;
      };

      var elementByClass = function elementByClass(className) {
        return elementBySelector(".".concat(className));
      };

      var getPopup = function getPopup() {
        return elementByClass(swalClasses.popup);
      };

      var getIcons = function getIcons() {
        var popup = getPopup();
        return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
      };

      var getIcon = function getIcon() {
        var visibleIcon = getIcons().filter(function (icon) {
          return isVisible(icon);
        });
        return visibleIcon.length ? visibleIcon[0] : null;
      };

      var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
      };

      var getContent = function getContent() {
        return elementByClass(swalClasses.content);
      };

      var getHtmlContainer = function getHtmlContainer() {
        return elementByClass(swalClasses['html-container']);
      };

      var getImage = function getImage() {
        return elementByClass(swalClasses.image);
      };

      var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses['progress-steps']);
      };

      var getValidationMessage = function getValidationMessage() {
        return elementByClass(swalClasses['validation-message']);
      };

      var getConfirmButton = function getConfirmButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
      };

      var getCancelButton = function getCancelButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
      };

      var getActions = function getActions() {
        return elementByClass(swalClasses.actions);
      };

      var getHeader = function getHeader() {
        return elementByClass(swalClasses.header);
      };

      var getFooter = function getFooter() {
        return elementByClass(swalClasses.footer);
      };

      var getTimerProgressBar = function getTimerProgressBar() {
        return elementByClass(swalClasses['timer-progress-bar']);
      };

      var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
      }; // https://github.com/jkup/focusable/blob/master/index.js


      var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

      var getFocusableElements = function getFocusableElements() {
        var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
        .sort(function (a, b) {
          a = parseInt(a.getAttribute('tabindex'));
          b = parseInt(b.getAttribute('tabindex'));

          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          }

          return 0;
        });
        var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
          return el.getAttribute('tabindex') !== '-1';
        });
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
          return isVisible(el);
        });
      };

      var isModal = function isModal() {
        return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
      };

      var isToast = function isToast() {
        return document.body.classList.contains(swalClasses['toast-shown']);
      };

      var isLoading = function isLoading() {
        return getPopup().hasAttribute('data-loading');
      };

      var states = {
        previousBodyPadding: null
      };

      var setInnerHtml = function setInnerHtml(elem, html) {
        // #1926
        elem.textContent = '';

        if (html) {
          var parser = new DOMParser();
          var parsed = parser.parseFromString(html, "text/html");
          toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
            elem.appendChild(child);
          });
          toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
            elem.appendChild(child);
          });
        }
      };

      var hasClass = function hasClass(elem, className) {
        if (!className) {
          return false;
        }

        var classList = className.split(/\s+/);

        for (var i = 0; i < classList.length; i++) {
          if (!elem.classList.contains(classList[i])) {
            return false;
          }
        }

        return true;
      };

      var removeCustomClasses = function removeCustomClasses(elem, params) {
        toArray(elem.classList).forEach(function (className) {
          if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
            elem.classList.remove(className);
          }
        });
      };

      var applyCustomClass = function applyCustomClass(elem, params, className) {
        removeCustomClasses(elem, params);

        if (params.customClass && params.customClass[className]) {
          if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
            return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
          }

          addClass(elem, params.customClass[className]);
        }
      };

      function getInput(content, inputType) {
        if (!inputType) {
          return null;
        }

        switch (inputType) {
          case 'select':
          case 'textarea':
          case 'file':
            return getChildByClass(content, swalClasses[inputType]);

          case 'checkbox':
            return content.querySelector(".".concat(swalClasses.checkbox, " input"));

          case 'radio':
            return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

          case 'range':
            return content.querySelector(".".concat(swalClasses.range, " input"));

          default:
            return getChildByClass(content, swalClasses.input);
        }
      }

      var focusInput = function focusInput(input) {
        input.focus(); // place cursor at end of text in text input

        if (input.type !== 'file') {
          // http://stackoverflow.com/a/2345915
          var val = input.value;
          input.value = '';
          input.value = val;
        }
      };

      var toggleClass = function toggleClass(target, classList, condition) {
        if (!target || !classList) {
          return;
        }

        if (typeof classList === 'string') {
          classList = classList.split(/\s+/).filter(Boolean);
        }

        classList.forEach(function (className) {
          if (target.forEach) {
            target.forEach(function (elem) {
              condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
          } else {
            condition ? target.classList.add(className) : target.classList.remove(className);
          }
        });
      };

      var addClass = function addClass(target, classList) {
        toggleClass(target, classList, true);
      };

      var removeClass = function removeClass(target, classList) {
        toggleClass(target, classList, false);
      };

      var getChildByClass = function getChildByClass(elem, className) {
        for (var i = 0; i < elem.childNodes.length; i++) {
          if (hasClass(elem.childNodes[i], className)) {
            return elem.childNodes[i];
          }
        }
      };

      var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
        if (value || parseInt(value) === 0) {
          elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
        } else {
          elem.style.removeProperty(property);
        }
      };

      var show = function show(elem) {
        var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
        elem.style.opacity = '';
        elem.style.display = display;
      };

      var hide = function hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
      };

      var toggle = function toggle(elem, condition, display) {
        condition ? show(elem, display) : hide(elem);
      }; // borrowed from jquery $(elem).is(':visible') implementation


      var isVisible = function isVisible(elem) {
        return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
      };
      /* istanbul ignore next */


      var isScrollable = function isScrollable(elem) {
        return !!(elem.scrollHeight > elem.clientHeight);
      }; // borrowed from https://stackoverflow.com/a/46352119


      var hasCssAnimation = function hasCssAnimation(elem) {
        var style = window.getComputedStyle(elem);
        var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
        var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
        return animDuration > 0 || transDuration > 0;
      };

      var contains = function contains(haystack, needle) {
        if (typeof haystack.contains === 'function') {
          return haystack.contains(needle);
        }
      };

      var animateTimerProgressBar = function animateTimerProgressBar(timer) {
        var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var timerProgressBar = getTimerProgressBar();

        if (isVisible(timerProgressBar)) {
          if (reset) {
            timerProgressBar.style.transition = 'none';
            timerProgressBar.style.width = '100%';
          }

          setTimeout(function () {
            timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
            timerProgressBar.style.width = '0%';
          }, 10);
        }
      };

      var stopTimerProgressBar = function stopTimerProgressBar() {
        var timerProgressBar = getTimerProgressBar();
        var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = '100%';
        var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
      }; // Detect Node env


      var isNodeEnv = function isNodeEnv() {
        return typeof window === 'undefined' || typeof document === 'undefined';
      };

      var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

      var resetOldContainer = function resetOldContainer() {
        var oldContainer = getContainer();

        if (!oldContainer) {
          return false;
        }

        oldContainer.parentNode.removeChild(oldContainer);
        removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
        return true;
      };

      var oldInputVal; // IE11 workaround, see #1109 for details

      var resetValidationMessage = function resetValidationMessage(e) {
        if (Swal.isVisible() && oldInputVal !== e.target.value) {
          Swal.resetValidationMessage();
        }

        oldInputVal = e.target.value;
      };

      var addInputChangeListeners = function addInputChangeListeners() {
        var content = getContent();
        var input = getChildByClass(content, swalClasses.input);
        var file = getChildByClass(content, swalClasses.file);
        var range = content.querySelector(".".concat(swalClasses.range, " input"));
        var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
        var select = getChildByClass(content, swalClasses.select);
        var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getChildByClass(content, swalClasses.textarea);
        input.oninput = resetValidationMessage;
        file.onchange = resetValidationMessage;
        select.onchange = resetValidationMessage;
        checkbox.onchange = resetValidationMessage;
        textarea.oninput = resetValidationMessage;

        range.oninput = function (e) {
          resetValidationMessage(e);
          rangeOutput.value = range.value;
        };

        range.onchange = function (e) {
          resetValidationMessage(e);
          range.nextSibling.value = range.value;
        };
      };

      var getTarget = function getTarget(target) {
        return typeof target === 'string' ? document.querySelector(target) : target;
      };

      var setupAccessibility = function setupAccessibility(params) {
        var popup = getPopup();
        popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
        popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

        if (!params.toast) {
          popup.setAttribute('aria-modal', 'true');
        }
      };

      var setupRTL = function setupRTL(targetElement) {
        if (window.getComputedStyle(targetElement).direction === 'rtl') {
          addClass(getContainer(), swalClasses.rtl);
        }
      };
      /*
       * Add modal + backdrop to DOM
       */


      var init = function init(params) {
        // Clean up the old popup container if it exists
        var oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */

        if (isNodeEnv()) {
          error('SweetAlert2 requires document to initialize');
          return;
        }

        var container = document.createElement('div');
        container.className = swalClasses.container;

        if (oldContainerExisted) {
          addClass(container, swalClasses['no-transition']);
        }

        setInnerHtml(container, sweetHTML);
        var targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
      };

      var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
        // DOM element
        if (param instanceof HTMLElement) {
          target.appendChild(param); // Object
        } else if (_typeof(param) === 'object') {
          handleObject(param, target); // Plain string
        } else if (param) {
          setInnerHtml(target, param);
        }
      };

      var handleObject = function handleObject(param, target) {
        // JQuery element(s)
        if (param.jquery) {
          handleJqueryElem(target, param); // For other objects use their string representation
        } else {
          setInnerHtml(target, param.toString());
        }
      };

      var handleJqueryElem = function handleJqueryElem(target, elem) {
        target.textContent = '';

        if (0 in elem) {
          for (var i = 0; (i in elem); i++) {
            target.appendChild(elem[i].cloneNode(true));
          }
        } else {
          target.appendChild(elem.cloneNode(true));
        }
      };

      var animationEndEvent = function () {
        // Prevent run in Node env

        /* istanbul ignore if */
        if (isNodeEnv()) {
          return false;
        }

        var testEl = document.createElement('div');
        var transEndEventNames = {
          WebkitAnimation: 'webkitAnimationEnd',
          OAnimation: 'oAnimationEnd oanimationend',
          animation: 'animationend'
        };

        for (var i in transEndEventNames) {
          if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
            return transEndEventNames[i];
          }
        }

        return false;
      }(); // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js


      var measureScrollbar = function measureScrollbar() {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = swalClasses['scrollbar-measure'];
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      };

      var renderActions = function renderActions(instance, params) {
        var actions = getActions();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton(); // Actions (buttons) wrapper

        if (!params.showConfirmButton && !params.showCancelButton) {
          hide(actions);
        } // Custom class


        applyCustomClass(actions, params, 'actions'); // Render confirm button

        renderButton(confirmButton, 'confirm', params); // render Cancel Button

        renderButton(cancelButton, 'cancel', params);

        if (params.buttonsStyling) {
          handleButtonsStyling(confirmButton, cancelButton, params);
        } else {
          removeClass([confirmButton, cancelButton], swalClasses.styled);
          confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
          cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
        }

        if (params.reverseButtons) {
          confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
        }
      };

      function handleButtonsStyling(confirmButton, cancelButton, params) {
        addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

        if (params.confirmButtonColor) {
          confirmButton.style.backgroundColor = params.confirmButtonColor;
        }

        if (params.cancelButtonColor) {
          cancelButton.style.backgroundColor = params.cancelButtonColor;
        } // Loading state


        if (!isLoading()) {
          var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
          confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
          confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
        }
      }

      function renderButton(button, buttonType, params) {
        toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
        setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

        button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
        // Add buttons custom classes

        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, "".concat(buttonType, "Button"));
        addClass(button, params["".concat(buttonType, "ButtonClass")]);
      }

      function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === 'string') {
          container.style.background = backdrop;
        } else if (!backdrop) {
          addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
        }
      }

      function handlePositionParam(container, position) {
        if (position in swalClasses) {
          addClass(container, swalClasses[position]);
        } else {
          warn('The "position" parameter is not valid, defaulting to "center"');
          addClass(container, swalClasses.center);
        }
      }

      function handleGrowParam(container, grow) {
        if (grow && typeof grow === 'string') {
          var growClass = "grow-".concat(grow);

          if (growClass in swalClasses) {
            addClass(container, swalClasses[growClass]);
          }
        }
      }

      var renderContainer = function renderContainer(instance, params) {
        var container = getContainer();

        if (!container) {
          return;
        }

        handleBackdropParam(container, params.backdrop);

        if (!params.backdrop && params.allowOutsideClick) {
          warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        }

        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow); // Custom class

        applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

        var queueStep = document.body.getAttribute('data-swal2-queue-step');

        if (queueStep) {
          container.setAttribute('data-queue-step', queueStep);
          document.body.removeAttribute('data-swal2-queue-step');
        }
      };
      /**
       * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
       * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
       * This is the approach that Babel will probably take to implement private methods/fields
       *   https://github.com/tc39/proposal-private-methods
       *   https://github.com/babel/babel/pull/7555
       * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
       *   then we can use that language feature.
       */


      var privateProps = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
      };
      var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

      var renderInput = function renderInput(instance, params) {
        var content = getContent();
        var innerParams = privateProps.innerParams.get(instance);
        var rerender = !innerParams || params.input !== innerParams.input;
        inputTypes.forEach(function (inputType) {
          var inputClass = swalClasses[inputType];
          var inputContainer = getChildByClass(content, inputClass); // set attributes

          setAttributes(inputType, params.inputAttributes); // set class

          inputContainer.className = inputClass;

          if (rerender) {
            hide(inputContainer);
          }
        });

        if (params.input) {
          if (rerender) {
            showInput(params);
          } // set custom class


          setCustomClass(params);
        }
      };

      var showInput = function showInput(params) {
        if (!renderInputType[params.input]) {
          return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
        }

        var inputContainer = getInputContainer(params.input);
        var input = renderInputType[params.input](inputContainer, params);
        show(input); // input autofocus

        setTimeout(function () {
          focusInput(input);
        });
      };

      var removeAttributes = function removeAttributes(input) {
        for (var i = 0; i < input.attributes.length; i++) {
          var attrName = input.attributes[i].name;

          if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
            input.removeAttribute(attrName);
          }
        }
      };

      var setAttributes = function setAttributes(inputType, inputAttributes) {
        var input = getInput(getContent(), inputType);

        if (!input) {
          return;
        }

        removeAttributes(input);

        for (var attr in inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputType === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, inputAttributes[attr]);
        }
      };

      var setCustomClass = function setCustomClass(params) {
        var inputContainer = getInputContainer(params.input);

        if (params.customClass) {
          addClass(inputContainer, params.customClass.input);
        }
      };

      var setInputPlaceholder = function setInputPlaceholder(input, params) {
        if (!input.placeholder || params.inputPlaceholder) {
          input.placeholder = params.inputPlaceholder;
        }
      };

      var getInputContainer = function getInputContainer(inputType) {
        var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
        return getChildByClass(getContent(), inputClass);
      };

      var renderInputType = {};

      renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
        if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
          input.value = params.inputValue;
        } else if (!isPromise(params.inputValue)) {
          warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
        }

        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
      };

      renderInputType.file = function (input, params) {
        setInputPlaceholder(input, params);
        return input;
      };

      renderInputType.range = function (range, params) {
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        return range;
      };

      renderInputType.select = function (select, params) {
        select.textContent = '';

        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          setInnerHtml(placeholder, params.inputPlaceholder);
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }

        return select;
      };

      renderInputType.radio = function (radio) {
        radio.textContent = '';
        return radio;
      };

      renderInputType.checkbox = function (checkboxContainer, params) {
        var checkbox = getInput(getContent(), 'checkbox');
        checkbox.value = 1;
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        var label = checkboxContainer.querySelector('span');
        setInnerHtml(label, params.inputPlaceholder);
        return checkboxContainer;
      };

      renderInputType.textarea = function (textarea, params) {
        textarea.value = params.inputValue;
        setInputPlaceholder(textarea, params);

        if ('MutationObserver' in window) {
          // #1699
          var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
          var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

          var outputsize = function outputsize() {
            var contentWidth = textarea.offsetWidth + popupPadding;

            if (contentWidth > initialPopupWidth) {
              getPopup().style.width = "".concat(contentWidth, "px");
            } else {
              getPopup().style.width = null;
            }
          };

          new MutationObserver(outputsize).observe(textarea, {
            attributes: true,
            attributeFilter: ['style']
          });
        }

        return textarea;
      };

      var renderContent = function renderContent(instance, params) {
        var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

        if (params.html) {
          parseHtmlToContainer(params.html, content);
          show(content, 'block'); // Content as plain text
        } else if (params.text) {
          content.textContent = params.text;
          show(content, 'block'); // No content
        } else {
          hide(content);
        }

        renderInput(instance, params); // Custom class

        applyCustomClass(getContent(), params, 'content');
      };

      var renderFooter = function renderFooter(instance, params) {
        var footer = getFooter();
        toggle(footer, params.footer);

        if (params.footer) {
          parseHtmlToContainer(params.footer, footer);
        } // Custom class


        applyCustomClass(footer, params, 'footer');
      };

      var renderCloseButton = function renderCloseButton(instance, params) {
        var closeButton = getCloseButton();
        setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

        applyCustomClass(closeButton, params, 'closeButton');
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
      };

      var renderIcon = function renderIcon(instance, params) {
        var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

        if (innerParams && params.icon === innerParams.icon && getIcon()) {
          applyCustomClass(getIcon(), params, 'icon');
          return;
        }

        hideAllIcons();

        if (!params.icon) {
          return;
        }

        if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
          var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
          show(icon); // Custom or default content

          setContent(icon, params);
          adjustSuccessIconBackgoundColor(); // Custom class

          applyCustomClass(icon, params, 'icon'); // Animate icon

          addClass(icon, params.showClass.icon);
        } else {
          error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
        }
      };

      var hideAllIcons = function hideAllIcons() {
        var icons = getIcons();

        for (var i = 0; i < icons.length; i++) {
          hide(icons[i]);
        }
      }; // Adjust success icon background color to match the popup background color


      var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
        var popup = getPopup();
        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
        var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

        for (var i = 0; i < successIconParts.length; i++) {
          successIconParts[i].style.backgroundColor = popupBackgroundColor;
        }
      };

      var setContent = function setContent(icon, params) {
        icon.textContent = '';

        if (params.iconHtml) {
          setInnerHtml(icon, iconContent(params.iconHtml));
        } else if (params.icon === 'success') {
          setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
        } else if (params.icon === 'error') {
          setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
        } else {
          var defaultIconHtml = {
            question: '?',
            warning: '!',
            info: 'i'
          };
          setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
        }
      };

      var iconContent = function iconContent(content) {
        return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
      };

      var renderImage = function renderImage(instance, params) {
        var image = getImage();

        if (!params.imageUrl) {
          return hide(image);
        }

        show(image, ''); // Src, alt

        image.setAttribute('src', params.imageUrl);
        image.setAttribute('alt', params.imageAlt); // Width, height

        applyNumericalStyle(image, 'width', params.imageWidth);
        applyNumericalStyle(image, 'height', params.imageHeight); // Class

        image.className = swalClasses.image;
        applyCustomClass(image, params, 'image');
      };

      var currentSteps = [];
      /*
       * Global function for chaining sweetAlert popups
       */

      var queue = function queue(steps) {
        var Swal = this;
        currentSteps = steps;

        var resetAndResolve = function resetAndResolve(resolve, value) {
          currentSteps = [];
          resolve(value);
        };

        var queueResult = [];
        return new Promise(function (resolve) {
          (function step(i, callback) {
            if (i < currentSteps.length) {
              document.body.setAttribute('data-swal2-queue-step', i);
              Swal.fire(currentSteps[i]).then(function (result) {
                if (typeof result.value !== 'undefined') {
                  queueResult.push(result.value);
                  step(i + 1, callback);
                } else {
                  resetAndResolve(resolve, {
                    dismiss: result.dismiss
                  });
                }
              });
            } else {
              resetAndResolve(resolve, {
                value: queueResult
              });
            }
          })(0);
        });
      };
      /*
       * Global function for getting the index of current popup in queue
       */


      var getQueueStep = function getQueueStep() {
        return getContainer() && getContainer().getAttribute('data-queue-step');
      };
      /*
       * Global function for inserting a popup to the queue
       */


      var insertQueueStep = function insertQueueStep(step, index) {
        if (index && index < currentSteps.length) {
          return currentSteps.splice(index, 0, step);
        }

        return currentSteps.push(step);
      };
      /*
       * Global function for deleting a popup from the queue
       */


      var deleteQueueStep = function deleteQueueStep(index) {
        if (typeof currentSteps[index] !== 'undefined') {
          currentSteps.splice(index, 1);
        }
      };

      var createStepElement = function createStepElement(step) {
        var stepEl = document.createElement('li');
        addClass(stepEl, swalClasses['progress-step']);
        setInnerHtml(stepEl, step);
        return stepEl;
      };

      var createLineElement = function createLineElement(params) {
        var lineEl = document.createElement('li');
        addClass(lineEl, swalClasses['progress-step-line']);

        if (params.progressStepsDistance) {
          lineEl.style.width = params.progressStepsDistance;
        }

        return lineEl;
      };

      var renderProgressSteps = function renderProgressSteps(instance, params) {
        var progressStepsContainer = getProgressSteps();

        if (!params.progressSteps || params.progressSteps.length === 0) {
          return hide(progressStepsContainer);
        }

        show(progressStepsContainer);
        progressStepsContainer.textContent = '';
        var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

        if (currentProgressStep >= params.progressSteps.length) {
          warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
        }

        params.progressSteps.forEach(function (step, index) {
          var stepEl = createStepElement(step);
          progressStepsContainer.appendChild(stepEl);

          if (index === currentProgressStep) {
            addClass(stepEl, swalClasses['active-progress-step']);
          }

          if (index !== params.progressSteps.length - 1) {
            var lineEl = createLineElement(step);
            progressStepsContainer.appendChild(lineEl);
          }
        });
      };

      var renderTitle = function renderTitle(instance, params) {
        var title = getTitle();
        toggle(title, params.title || params.titleText);

        if (params.title) {
          parseHtmlToContainer(params.title, title);
        }

        if (params.titleText) {
          title.innerText = params.titleText;
        } // Custom class


        applyCustomClass(title, params, 'title');
      };

      var renderHeader = function renderHeader(instance, params) {
        var header = getHeader(); // Custom class

        applyCustomClass(header, params, 'header'); // Progress steps

        renderProgressSteps(instance, params); // Icon

        renderIcon(instance, params); // Image

        renderImage(instance, params); // Title

        renderTitle(instance, params); // Close button

        renderCloseButton(instance, params);
      };

      var renderPopup = function renderPopup(instance, params) {
        var popup = getPopup(); // Width

        applyNumericalStyle(popup, 'width', params.width); // Padding

        applyNumericalStyle(popup, 'padding', params.padding); // Background

        if (params.background) {
          popup.style.background = params.background;
        } // Classes


        addClasses(popup, params);
      };

      var addClasses = function addClasses(popup, params) {
        // Default Class + showClass when updating Swal.update({})
        popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

        if (params.toast) {
          addClass([document.documentElement, document.body], swalClasses['toast-shown']);
          addClass(popup, swalClasses.toast);
        } else {
          addClass(popup, swalClasses.modal);
        } // Custom class


        applyCustomClass(popup, params, 'popup');

        if (typeof params.customClass === 'string') {
          addClass(popup, params.customClass);
        } // Icon class (#1842)


        if (params.icon) {
          addClass(popup, swalClasses["icon-".concat(params.icon)]);
        }
      };

      var render = function render(instance, params) {
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderHeader(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);

        if (typeof params.onRender === 'function') {
          params.onRender(getPopup());
        }
      };
      /*
       * Global function to determine if SweetAlert2 popup is shown
       */


      var isVisible$1 = function isVisible$$1() {
        return isVisible(getPopup());
      };
      /*
       * Global function to click 'Confirm' button
       */


      var clickConfirm = function clickConfirm() {
        return getConfirmButton() && getConfirmButton().click();
      };
      /*
       * Global function to click 'Cancel' button
       */


      var clickCancel = function clickCancel() {
        return getCancelButton() && getCancelButton().click();
      };

      function fire() {
        var Swal = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _construct(Swal, args);
      }
      /**
       * Returns an extended version of `Swal` containing `params` as defaults.
       * Useful for reusing Swal configuration.
       *
       * For example:
       *
       * Before:
       * const textPromptOptions = { input: 'text', showCancelButton: true }
       * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
       * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
       *
       * After:
       * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
       * const {value: firstName} = await TextPrompt('What is your first name?')
       * const {value: lastName} = await TextPrompt('What is your last name?')
       *
       * @param mixinParams
       */


      function mixin(mixinParams) {
        var MixinSwal = /*#__PURE__*/function (_this) {
          _inherits(MixinSwal, _this);

          var _super = _createSuper(MixinSwal);

          function MixinSwal() {
            _classCallCheck(this, MixinSwal);

            return _super.apply(this, arguments);
          }

          _createClass(MixinSwal, [{
            key: "_main",
            value: function _main(params) {
              return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
            }
          }]);

          return MixinSwal;
        }(this);

        return MixinSwal;
      }
      /**
       * Show spinner instead of Confirm button
       */


      var showLoading = function showLoading() {
        var popup = getPopup();

        if (!popup) {
          Swal.fire();
        }

        popup = getPopup();
        var actions = getActions();
        var confirmButton = getConfirmButton();
        show(actions);
        show(confirmButton, 'inline-block');
        addClass([popup, actions], swalClasses.loading);
        confirmButton.disabled = true;
        popup.setAttribute('data-loading', true);
        popup.setAttribute('aria-busy', true);
        popup.focus();
      };

      var RESTORE_FOCUS_TIMEOUT = 100;
      var globalState = {};

      var focusPreviousActiveElement = function focusPreviousActiveElement() {
        if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
          globalState.previousActiveElement.focus();
          globalState.previousActiveElement = null;
        } else if (document.body) {
          document.body.focus();
        }
      }; // Restore previous active (focused) element


      var restoreActiveElement = function restoreActiveElement() {
        return new Promise(function (resolve) {
          var x = window.scrollX;
          var y = window.scrollY;
          globalState.restoreFocusTimeout = setTimeout(function () {
            focusPreviousActiveElement();
            resolve();
          }, RESTORE_FOCUS_TIMEOUT); // issues/900

          /* istanbul ignore if */

          if (typeof x !== 'undefined' && typeof y !== 'undefined') {
            // IE doesn't have scrollX/scrollY support
            window.scrollTo(x, y);
          }
        });
      };
      /**
       * If `timer` parameter is set, returns number of milliseconds of timer remained.
       * Otherwise, returns undefined.
       */


      var getTimerLeft = function getTimerLeft() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
      };
      /**
       * Stop timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       */


      var stopTimer = function stopTimer() {
        if (globalState.timeout) {
          stopTimerProgressBar();
          return globalState.timeout.stop();
        }
      };
      /**
       * Resume timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       */


      var resumeTimer = function resumeTimer() {
        if (globalState.timeout) {
          var remaining = globalState.timeout.start();
          animateTimerProgressBar(remaining);
          return remaining;
        }
      };
      /**
       * Resume timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       */


      var toggleTimer = function toggleTimer() {
        var timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
      };
      /**
       * Increase timer. Returns number of milliseconds of an updated timer.
       * If `timer` parameter isn't set, returns undefined.
       */


      var increaseTimer = function increaseTimer(n) {
        if (globalState.timeout) {
          var remaining = globalState.timeout.increase(n);
          animateTimerProgressBar(remaining, true);
          return remaining;
        }
      };
      /**
       * Check if timer is running. Returns true if timer is running
       * or false if timer is paused or stopped.
       * If `timer` parameter isn't set, returns undefined
       */


      var isTimerRunning = function isTimerRunning() {
        return globalState.timeout && globalState.timeout.isRunning();
      };

      var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: undefined,
        iconHtml: undefined,
        toast: false,
        animation: true,
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        },
        customClass: undefined,
        target: 'body',
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showCancelButton: false,
        preConfirm: undefined,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: undefined,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusCancel: false,
        showCloseButton: false,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        showLoaderOnConfirm: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: '',
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        validationMessage: undefined,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        onBeforeOpen: undefined,
        onOpen: undefined,
        onRender: undefined,
        onClose: undefined,
        onAfterClose: undefined,
        onDestroy: undefined,
        scrollbarPadding: true
      };
      var updatableParams = ['title', 'titleText', 'text', 'html', 'footer', 'icon', 'hideClass', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep', 'onClose', 'onAfterClose', 'onDestroy'];
      var deprecatedParams = {
        animation: 'showClass" and "hideClass'
      };
      var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
      /**
       * Is valid parameter
       * @param {String} paramName
       */

      var isValidParameter = function isValidParameter(paramName) {
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
      };
      /**
       * Is valid parameter for Swal.update() method
       * @param {String} paramName
       */


      var isUpdatableParameter = function isUpdatableParameter(paramName) {
        return updatableParams.indexOf(paramName) !== -1;
      };
      /**
       * Is deprecated parameter
       * @param {String} paramName
       */


      var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
        return deprecatedParams[paramName];
      };

      var checkIfParamIsValid = function checkIfParamIsValid(param) {
        if (!isValidParameter(param)) {
          warn("Unknown parameter \"".concat(param, "\""));
        }
      };

      var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
        if (toastIncompatibleParams.indexOf(param) !== -1) {
          warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
        }
      };

      var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
        if (isDeprecatedParameter(param)) {
          warnAboutDepreation(param, isDeprecatedParameter(param));
        }
      };
      /**
       * Show relevant warnings for given params
       *
       * @param params
       */


      var showWarningsForParams = function showWarningsForParams(params) {
        for (var param in params) {
          checkIfParamIsValid(param);

          if (params.toast) {
            checkIfToastParamIsValid(param);
          }

          checkIfParamIsDeprecated(param);
        }
      };

      var staticMethods = /*#__PURE__*/Object.freeze({
        isValidParameter: isValidParameter,
        isUpdatableParameter: isUpdatableParameter,
        isDeprecatedParameter: isDeprecatedParameter,
        argsToParams: argsToParams,
        isVisible: isVisible$1,
        clickConfirm: clickConfirm,
        clickCancel: clickCancel,
        getContainer: getContainer,
        getPopup: getPopup,
        getTitle: getTitle,
        getContent: getContent,
        getHtmlContainer: getHtmlContainer,
        getImage: getImage,
        getIcon: getIcon,
        getIcons: getIcons,
        getCloseButton: getCloseButton,
        getActions: getActions,
        getConfirmButton: getConfirmButton,
        getCancelButton: getCancelButton,
        getHeader: getHeader,
        getFooter: getFooter,
        getTimerProgressBar: getTimerProgressBar,
        getFocusableElements: getFocusableElements,
        getValidationMessage: getValidationMessage,
        isLoading: isLoading,
        fire: fire,
        mixin: mixin,
        queue: queue,
        getQueueStep: getQueueStep,
        insertQueueStep: insertQueueStep,
        deleteQueueStep: deleteQueueStep,
        showLoading: showLoading,
        enableLoading: showLoading,
        getTimerLeft: getTimerLeft,
        stopTimer: stopTimer,
        resumeTimer: resumeTimer,
        toggleTimer: toggleTimer,
        increaseTimer: increaseTimer,
        isTimerRunning: isTimerRunning
      });
      /**
       * Enables buttons and hide loader.
       */

      function hideLoading() {
        // do nothing if popup is closed
        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams) {
          return;
        }

        var domCache = privateProps.domCache.get(this);

        if (!innerParams.showConfirmButton) {
          hide(domCache.confirmButton);

          if (!innerParams.showCancelButton) {
            hide(domCache.actions);
          }
        }

        removeClass([domCache.popup, domCache.actions], swalClasses.loading);
        domCache.popup.removeAttribute('aria-busy');
        domCache.popup.removeAttribute('data-loading');
        domCache.confirmButton.disabled = false;
        domCache.cancelButton.disabled = false;
      }

      function getInput$1(instance) {
        var innerParams = privateProps.innerParams.get(instance || this);
        var domCache = privateProps.domCache.get(instance || this);

        if (!domCache) {
          return null;
        }

        return getInput(domCache.content, innerParams.input);
      }

      var fixScrollbar = function fixScrollbar() {
        // for queues, do not do this more than once
        if (states.previousBodyPadding !== null) {
          return;
        } // if the body has overflow


        if (document.body.scrollHeight > window.innerHeight) {
          // add padding so the content doesn't shift after removal of scrollbar
          states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
          document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
        }
      };

      var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
          document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
          states.previousBodyPadding = null;
        }
      };
      /* istanbul ignore file */


      var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
          var offset = document.body.scrollTop;
          document.body.style.top = "".concat(offset * -1, "px");
          addClass(document.body, swalClasses.iosfix);
          lockBodyScroll();
        }
      };

      var lockBodyScroll = function lockBodyScroll() {
        // #1246
        var container = getContainer();
        var preventTouchMove;

        container.ontouchstart = function (e) {
          preventTouchMove = shouldPreventTouchMove(e.target);
        };

        container.ontouchmove = function (e) {
          if (preventTouchMove) {
            e.preventDefault();
            e.stopPropagation();
          }
        };
      };

      var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
        var container = getContainer();

        if (target === container) {
          return true;
        }

        if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
        !(isScrollable(getContent()) && // #1944
        getContent().contains(target))) {
          return true;
        }

        return false;
      };

      var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
          var offset = parseInt(document.body.style.top, 10);
          removeClass(document.body, swalClasses.iosfix);
          document.body.style.top = '';
          document.body.scrollTop = offset * -1;
        }
      };
      /* istanbul ignore file */


      var isIE11 = function isIE11() {
        return !!window.MSInputMethodContext && !!document.documentMode;
      }; // Fix IE11 centering sweetalert2/issues/933


      var fixVerticalPositionIE = function fixVerticalPositionIE() {
        var container = getContainer();
        var popup = getPopup();
        container.style.removeProperty('align-items');

        if (popup.offsetTop < 0) {
          container.style.alignItems = 'flex-start';
        }
      };

      var IEfix = function IEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
          fixVerticalPositionIE();
          window.addEventListener('resize', fixVerticalPositionIE);
        }
      };

      var undoIEfix = function undoIEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
          window.removeEventListener('resize', fixVerticalPositionIE);
        }
      }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
      // elements not within the active modal dialog will not be surfaced if a user opens a screen
      // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


      var setAriaHidden = function setAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function (el) {
          if (el === getContainer() || contains(el, getContainer())) {
            return;
          }

          if (el.hasAttribute('aria-hidden')) {
            el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
          }

          el.setAttribute('aria-hidden', 'true');
        });
      };

      var unsetAriaHidden = function unsetAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function (el) {
          if (el.hasAttribute('data-previous-aria-hidden')) {
            el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
            el.removeAttribute('data-previous-aria-hidden');
          } else {
            el.removeAttribute('aria-hidden');
          }
        });
      };
      /**
       * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
       * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
       * This is the approach that Babel will probably take to implement private methods/fields
       *   https://github.com/tc39/proposal-private-methods
       *   https://github.com/babel/babel/pull/7555
       * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
       *   then we can use that language feature.
       */


      var privateMethods = {
        swalPromiseResolve: new WeakMap()
      };
      /*
       * Instance method to close sweetAlert
       */

      function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
        if (isToast$$1) {
          triggerOnAfterCloseAndDispose(instance, onAfterClose);
        } else {
          restoreActiveElement().then(function () {
            return triggerOnAfterCloseAndDispose(instance, onAfterClose);
          });
          globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = false;
        }

        if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
          container.parentNode.removeChild(container);
        }

        if (isModal()) {
          undoScrollbar();
          undoIOSfix();
          undoIEfix();
          unsetAriaHidden();
        }

        removeBodyClasses();
      }

      function removeBodyClasses() {
        removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
      }

      function close(resolveValue) {
        var popup = getPopup();

        if (!popup) {
          return;
        }

        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
          return;
        }

        var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        var backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(this, popup, innerParams);

        if (typeof resolveValue !== 'undefined') {
          resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
          resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
        } else {
          resolveValue = {
            isDismissed: true,
            isConfirmed: false
          };
        } // Resolve Swal promise


        swalPromiseResolve(resolveValue || {});
      }

      var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
        var container = getContainer(); // If animation is supported, animate

        var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        var onClose = innerParams.onClose,
            onAfterClose = innerParams.onAfterClose;

        if (onClose !== null && typeof onClose === 'function') {
          onClose(popup);
        }

        if (animationIsSupported) {
          animatePopup(instance, popup, container, onAfterClose);
        } else {
          // Otherwise, remove immediately
          removePopupAndResetState(instance, container, isToast(), onAfterClose);
        }
      };

      var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
        popup.addEventListener(animationEndEvent, function (e) {
          if (e.target === popup) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
        });
      };

      var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
        setTimeout(function () {
          if (typeof onAfterClose === 'function') {
            onAfterClose();
          }

          instance._destroy();
        });
      };

      function setButtonsDisabled(instance, buttons, disabled) {
        var domCache = privateProps.domCache.get(instance);
        buttons.forEach(function (button) {
          domCache[button].disabled = disabled;
        });
      }

      function setInputDisabled(input, disabled) {
        if (!input) {
          return false;
        }

        if (input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode;
          var radios = radiosContainer.querySelectorAll('input');

          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = disabled;
          }
        } else {
          input.disabled = disabled;
        }
      }

      function enableButtons() {
        setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
      }

      function disableButtons() {
        setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
      }

      function enableInput() {
        return setInputDisabled(this.getInput(), false);
      }

      function disableInput() {
        return setInputDisabled(this.getInput(), true);
      }

      function showValidationMessage(error) {
        var domCache = privateProps.domCache.get(this);
        setInnerHtml(domCache.validationMessage, error);
        var popupComputedStyle = window.getComputedStyle(domCache.popup);
        domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
        domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
        show(domCache.validationMessage);
        var input = this.getInput();

        if (input) {
          input.setAttribute('aria-invalid', true);
          input.setAttribute('aria-describedBy', swalClasses['validation-message']);
          focusInput(input);
          addClass(input, swalClasses.inputerror);
        }
      } // Hide block with validation message


      function resetValidationMessage$1() {
        var domCache = privateProps.domCache.get(this);

        if (domCache.validationMessage) {
          hide(domCache.validationMessage);
        }

        var input = this.getInput();

        if (input) {
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedBy');
          removeClass(input, swalClasses.inputerror);
        }
      }

      function getProgressSteps$1() {
        var domCache = privateProps.domCache.get(this);
        return domCache.progressSteps;
      }

      var Timer = /*#__PURE__*/function () {
        function Timer(callback, delay) {
          _classCallCheck(this, Timer);

          this.callback = callback;
          this.remaining = delay;
          this.running = false;
          this.start();
        }

        _createClass(Timer, [{
          key: "start",
          value: function start() {
            if (!this.running) {
              this.running = true;
              this.started = new Date();
              this.id = setTimeout(this.callback, this.remaining);
            }

            return this.remaining;
          }
        }, {
          key: "stop",
          value: function stop() {
            if (this.running) {
              this.running = false;
              clearTimeout(this.id);
              this.remaining -= new Date() - this.started;
            }

            return this.remaining;
          }
        }, {
          key: "increase",
          value: function increase(n) {
            var running = this.running;

            if (running) {
              this.stop();
            }

            this.remaining += n;

            if (running) {
              this.start();
            }

            return this.remaining;
          }
        }, {
          key: "getTimerLeft",
          value: function getTimerLeft() {
            if (this.running) {
              this.stop();
              this.start();
            }

            return this.remaining;
          }
        }, {
          key: "isRunning",
          value: function isRunning() {
            return this.running;
          }
        }]);

        return Timer;
      }();

      var defaultInputValidators = {
        email: function email(string, validationMessage) {
          return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
        },
        url: function url(string, validationMessage) {
          // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
        }
      };

      function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) {
          Object.keys(defaultInputValidators).forEach(function (key) {
            if (params.input === key) {
              params.inputValidator = defaultInputValidators[key];
            }
          });
        }
      }

      function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
          warn('Target parameter is not valid, defaulting to "body"');
          params.target = 'body';
        }
      }
      /**
       * Set type, text and actions on popup
       *
       * @param params
       * @returns {boolean}
       */


      function setParameters(params) {
        setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

        if (params.showLoaderOnConfirm && !params.preConfirm) {
          warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
        } // params.animation will be actually used in renderPopup.js
        // but in case when params.animation is a function, we need to call that function
        // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
        // inside the params.animation function


        params.animation = callIfFunction(params.animation);
        validateCustomTargetElement(params); // Replace newlines with <br> in title

        if (typeof params.title === 'string') {
          params.title = params.title.split('\n').join('<br />');
        }

        init(params);
      }
      /**
       * Open popup, add necessary classes and styles, fix scrollbar
       *
       * @param {Array} params
       */


      var openPopup = function openPopup(params) {
        var container = getContainer();
        var popup = getPopup();

        if (typeof params.onBeforeOpen === 'function') {
          params.onBeforeOpen(popup);
        }

        addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

        setScrollingVisibility(container, popup);

        if (isModal()) {
          fixScrollContainer(container, params.scrollbarPadding);
        }

        if (!isToast() && !globalState.previousActiveElement) {
          globalState.previousActiveElement = document.activeElement;
        }

        if (typeof params.onOpen === 'function') {
          setTimeout(function () {
            return params.onOpen(popup);
          });
        }

        removeClass(container, swalClasses['no-transition']);
      };

      function swalOpenAnimationFinished(event) {
        var popup = getPopup();

        if (event.target !== popup) {
          return;
        }

        var container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = 'auto';
      }

      var setScrollingVisibility = function setScrollingVisibility(container, popup) {
        if (animationEndEvent && hasCssAnimation(popup)) {
          container.style.overflowY = 'hidden';
          popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else {
          container.style.overflowY = 'auto';
        }
      };

      var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
        iOSfix();
        IEfix();
        setAriaHidden();

        if (scrollbarPadding) {
          fixScrollbar();
        } // sweetalert2/issues/1247


        setTimeout(function () {
          container.scrollTop = 0;
        });
      };

      var addClasses$1 = function addClasses(container, popup, params) {
        addClass(container, params.showClass.backdrop);
        show(popup); // Animate popup right after showing it

        addClass(popup, params.showClass.popup);
        addClass([document.documentElement, document.body], swalClasses.shown);

        if (params.heightAuto && params.backdrop && !params.toast) {
          addClass([document.documentElement, document.body], swalClasses['height-auto']);
        }
      };

      var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
        if (params.input === 'select' || params.input === 'radio') {
          handleInputOptions(instance, params);
        } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
          handleInputValue(instance, params);
        }
      };

      var getInputValue = function getInputValue(instance, innerParams) {
        var input = instance.getInput();

        if (!input) {
          return null;
        }

        switch (innerParams.input) {
          case 'checkbox':
            return getCheckboxValue(input);

          case 'radio':
            return getRadioValue(input);

          case 'file':
            return getFileValue(input);

          default:
            return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
      };

      var getCheckboxValue = function getCheckboxValue(input) {
        return input.checked ? 1 : 0;
      };

      var getRadioValue = function getRadioValue(input) {
        return input.checked ? input.value : null;
      };

      var getFileValue = function getFileValue(input) {
        return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
      };

      var handleInputOptions = function handleInputOptions(instance, params) {
        var content = getContent();

        var processInputOptions = function processInputOptions(inputOptions) {
          return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
        };

        if (isPromise(params.inputOptions)) {
          showLoading();
          params.inputOptions.then(function (inputOptions) {
            instance.hideLoading();
            processInputOptions(inputOptions);
          });
        } else if (_typeof(params.inputOptions) === 'object') {
          processInputOptions(params.inputOptions);
        } else {
          error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
        }
      };

      var handleInputValue = function handleInputValue(instance, params) {
        var input = instance.getInput();
        hide(input);
        params.inputValue.then(function (inputValue) {
          input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
          show(input);
          input.focus();
          instance.hideLoading();
        })["catch"](function (err) {
          error("Error in inputValue promise: ".concat(err));
          input.value = '';
          show(input);
          input.focus();
          instance.hideLoading();
        });
      };

      var populateInputOptions = {
        select: function select(content, inputOptions, params) {
          var select = getChildByClass(content, swalClasses.select);

          var renderOption = function renderOption(parent, optionLabel, optionValue) {
            var option = document.createElement('option');
            option.value = optionValue;
            setInnerHtml(option, optionLabel);

            if (params.inputValue.toString() === optionValue.toString()) {
              option.selected = true;
            }

            parent.appendChild(option);
          };

          inputOptions.forEach(function (inputOption) {
            var optionValue = inputOption[0];
            var optionLabel = inputOption[1]; // <optgroup> spec:
            // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
            // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
            // check whether this is a <optgroup>

            if (Array.isArray(optionLabel)) {
              // if it is an array, then it is an <optgroup>
              var optgroup = document.createElement('optgroup');
              optgroup.label = optionValue;
              optgroup.disabled = false; // not configurable for now

              select.appendChild(optgroup);
              optionLabel.forEach(function (o) {
                return renderOption(optgroup, o[1], o[0]);
              });
            } else {
              // case of <option>
              renderOption(select, optionLabel, optionValue);
            }
          });
          select.focus();
        },
        radio: function radio(content, inputOptions, params) {
          var radio = getChildByClass(content, swalClasses.radio);
          inputOptions.forEach(function (inputOption) {
            var radioValue = inputOption[0];
            var radioLabel = inputOption[1];
            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;

            if (params.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true;
            }

            var label = document.createElement('span');
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
          });
          var radios = radio.querySelectorAll('input');

          if (radios.length) {
            radios[0].focus();
          }
        }
      };
      /**
       * Converts `inputOptions` into an array of `[value, label]`s
       * @param inputOptions
       */

      var formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];

        if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
          inputOptions.forEach(function (value, key) {
            var valueFormatted = value;

            if (_typeof(valueFormatted) === 'object') {
              // case of <optgroup>
              valueFormatted = formatInputOptions(valueFormatted);
            }

            result.push([key, valueFormatted]);
          });
        } else {
          Object.keys(inputOptions).forEach(function (key) {
            var valueFormatted = inputOptions[key];

            if (_typeof(valueFormatted) === 'object') {
              // case of <optgroup>
              valueFormatted = formatInputOptions(valueFormatted);
            }

            result.push([key, valueFormatted]);
          });
        }

        return result;
      };

      var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
        instance.disableButtons();

        if (innerParams.input) {
          handleConfirmWithInput(instance, innerParams);
        } else {
          confirm(instance, innerParams, true);
        }
      };

      var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
      };

      var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
        var inputValue = getInputValue(instance, innerParams);

        if (innerParams.inputValidator) {
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function () {
            return innerParams.inputValidator(inputValue, innerParams.validationMessage);
          });
          validationPromise.then(function (validationMessage) {
            instance.enableButtons();
            instance.enableInput();

            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else {
              confirm(instance, innerParams, inputValue);
            }
          });
        } else if (!instance.getInput().checkValidity()) {
          instance.enableButtons();
          instance.showValidationMessage(innerParams.validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      };

      var succeedWith = function succeedWith(instance, value) {
        instance.closePopup({
          value: value
        });
      };

      var confirm = function confirm(instance, innerParams, value) {
        if (innerParams.showLoaderOnConfirm) {
          showLoading(); // TODO: make showLoading an *instance* method
        }

        if (innerParams.preConfirm) {
          instance.resetValidationMessage();
          var preConfirmPromise = Promise.resolve().then(function () {
            return innerParams.preConfirm(value, innerParams.validationMessage);
          });
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(getValidationMessage()) || preConfirmValue === false) {
              instance.hideLoading();
            } else {
              succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
            }
          });
        } else {
          succeedWith(instance, value);
        }
      };

      var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
          globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = false;
        }

        if (!innerParams.toast) {
          globalState.keydownHandler = function (e) {
            return keydownHandler(instance, e, dismissWith);
          };

          globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
          globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
          globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = true;
        }
      }; // Focus handling


      var setFocus = function setFocus(innerParams, index, increment) {
        var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

        for (var i = 0; i < focusableElements.length; i++) {
          index = index + increment; // rollover to first item

          if (index === focusableElements.length) {
            index = 0; // go to last item
          } else if (index === -1) {
            index = focusableElements.length - 1;
          }

          return focusableElements[index].focus();
        } // no visible focusable elements, focus the popup


        getPopup().focus();
      };

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];
      var escKeys = ['Escape', 'Esc' // IE11
      ];

      var keydownHandler = function keydownHandler(instance, e, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);

        if (innerParams.stopKeydownPropagation) {
          e.stopPropagation();
        } // ENTER


        if (e.key === 'Enter') {
          handleEnter(instance, e, innerParams); // TAB
        } else if (e.key === 'Tab') {
          handleTab(e, innerParams); // ARROWS - switch focus between buttons
        } else if (arrowKeys.indexOf(e.key) !== -1) {
          handleArrows(); // ESC
        } else if (escKeys.indexOf(e.key) !== -1) {
          handleEsc(e, innerParams, dismissWith);
        }
      };

      var handleEnter = function handleEnter(instance, e, innerParams) {
        // #720 #721
        if (e.isComposing) {
          return;
        }

        if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          clickConfirm();
          e.preventDefault();
        }
      };

      var handleTab = function handleTab(e, innerParams) {
        var targetElement = e.target;
        var focusableElements = getFocusableElements();
        var btnIndex = -1;

        for (var i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(innerParams, btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(innerParams, btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault();
      };

      var handleArrows = function handleArrows() {
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus(); // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }
      };

      var handleEsc = function handleEsc(e, innerParams, dismissWith) {
        if (callIfFunction(innerParams.allowEscapeKey)) {
          e.preventDefault();
          dismissWith(DismissReason.esc);
        }
      };

      var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);

        if (innerParams.toast) {
          handleToastClick(instance, domCache, dismissWith);
        } else {
          // Ignore click events that had mousedown on the popup but mouseup on the container
          // This can happen when the user drags a slider
          handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

          handleContainerMousedown(domCache);
          handleModalClick(instance, domCache, dismissWith);
        }
      };

      var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
        // Closing toast by internal click
        domCache.popup.onclick = function () {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
            return;
          }

          dismissWith(DismissReason.close);
        };
      };

      var ignoreOutsideClick = false;

      var handleModalMousedown = function handleModalMousedown(domCache) {
        domCache.popup.onmousedown = function () {
          domCache.container.onmouseup = function (e) {
            domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
            // have any other direct children aside of the popup

            if (e.target === domCache.container) {
              ignoreOutsideClick = true;
            }
          };
        };
      };

      var handleContainerMousedown = function handleContainerMousedown(domCache) {
        domCache.container.onmousedown = function () {
          domCache.popup.onmouseup = function (e) {
            domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

            if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
              ignoreOutsideClick = true;
            }
          };
        };
      };

      var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
        domCache.container.onclick = function (e) {
          var innerParams = privateProps.innerParams.get(instance);

          if (ignoreOutsideClick) {
            ignoreOutsideClick = false;
            return;
          }

          if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
            dismissWith(DismissReason.backdrop);
          }
        };
      };

      function _main(userParams) {
        showWarningsForParams(userParams);

        if (globalState.currentInstance) {
          globalState.currentInstance._destroy();
        }

        globalState.currentInstance = this;
        var innerParams = prepareParams(userParams);
        setParameters(innerParams);
        Object.freeze(innerParams); // clear the previous timer

        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        } // clear the restore focus timeout


        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(this);
        render(this, innerParams);
        privateProps.innerParams.set(this, innerParams);
        return swalPromise(this, domCache, innerParams);
      }

      var prepareParams = function prepareParams(userParams) {
        var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

        var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

        var params = _extends({}, defaultParams, userParams);

        params.showClass = showClass;
        params.hideClass = hideClass; // @deprecated

        if (userParams.animation === false) {
          params.showClass = {
            popup: 'swal2-noanimation',
            backdrop: 'swal2-noanimation'
          };
          params.hideClass = {};
        }

        return params;
      };

      var swalPromise = function swalPromise(instance, domCache, innerParams) {
        return new Promise(function (resolve) {
          // functions to handle all closings/dismissals
          var dismissWith = function dismissWith(dismiss) {
            instance.closePopup({
              dismiss: dismiss
            });
          };

          privateMethods.swalPromiseResolve.set(instance, resolve);

          domCache.confirmButton.onclick = function () {
            return handleConfirmButtonClick(instance, innerParams);
          };

          domCache.cancelButton.onclick = function () {
            return handleCancelButtonClick(instance, dismissWith);
          };

          domCache.closeButton.onclick = function () {
            return dismissWith(DismissReason.close);
          };

          handlePopupClick(instance, domCache, dismissWith);
          addKeydownHandler(instance, globalState, innerParams, dismissWith);

          if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
            addClass(document.body, swalClasses['toast-column']);
          } else {
            removeClass(document.body, swalClasses['toast-column']);
          }

          handleInputOptionsAndValue(instance, innerParams);
          openPopup(innerParams);
          setupTimer(globalState, innerParams, dismissWith);
          initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

          setTimeout(function () {
            domCache.container.scrollTop = 0;
          });
        });
      };

      var populateDomCache = function populateDomCache(instance) {
        var domCache = {
          popup: getPopup(),
          container: getContainer(),
          content: getContent(),
          actions: getActions(),
          confirmButton: getConfirmButton(),
          cancelButton: getCancelButton(),
          closeButton: getCloseButton(),
          validationMessage: getValidationMessage(),
          progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
      };

      var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
        var timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);

        if (innerParams.timer) {
          globalState$$1.timeout = new Timer(function () {
            dismissWith('timer');
            delete globalState$$1.timeout;
          }, innerParams.timer);

          if (innerParams.timerProgressBar) {
            show(timerProgressBar);
            setTimeout(function () {
              if (globalState$$1.timeout.running) {
                // timer can be already stopped at this point
                animateTimerProgressBar(innerParams.timer);
              }
            });
          }
        }
      };

      var initFocus = function initFocus(domCache, innerParams) {
        if (innerParams.toast) {
          return;
        }

        if (!callIfFunction(innerParams.allowEnterKey)) {
          return blurActiveElement();
        }

        if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
          return domCache.cancelButton.focus();
        }

        if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
          return domCache.confirmButton.focus();
        }

        setFocus(innerParams, -1, 1);
      };

      var blurActiveElement = function blurActiveElement() {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      };
      /**
       * Updates popup parameters.
       */


      function update(params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(this);

        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
          return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        }

        var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (Swal.isUpdatableParameter(param)) {
            validUpdatableParams[param] = params[param];
          } else {
            warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
          }
        });

        var updatedParams = _extends({}, innerParams, validUpdatableParams);

        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
          params: {
            value: _extends({}, this.params, params),
            writable: false,
            enumerable: true
          }
        });
      }

      function _destroy() {
        var domCache = privateProps.domCache.get(this);
        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams) {
          return; // This instance has already been destroyed
        } // Check if there is another Swal closing


        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
          globalState.swalCloseEventFinishedCallback();
          delete globalState.swalCloseEventFinishedCallback;
        } // Check if there is a swal disposal defer timer


        if (globalState.deferDisposalTimer) {
          clearTimeout(globalState.deferDisposalTimer);
          delete globalState.deferDisposalTimer;
        }

        if (typeof innerParams.onDestroy === 'function') {
          innerParams.onDestroy();
        }

        disposeSwal(this);
      }

      var disposeSwal = function disposeSwal(instance) {
        // Unset this.params so GC will dispose it (#1569)
        delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

        delete globalState.keydownHandler;
        delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

        unsetWeakMaps(privateProps);
        unsetWeakMaps(privateMethods);
      };

      var unsetWeakMaps = function unsetWeakMaps(obj) {
        for (var i in obj) {
          obj[i] = new WeakMap();
        }
      };

      var instanceMethods = /*#__PURE__*/Object.freeze({
        hideLoading: hideLoading,
        disableLoading: hideLoading,
        getInput: getInput$1,
        close: close,
        closePopup: close,
        closeModal: close,
        closeToast: close,
        enableButtons: enableButtons,
        disableButtons: disableButtons,
        enableInput: enableInput,
        disableInput: disableInput,
        showValidationMessage: showValidationMessage,
        resetValidationMessage: resetValidationMessage$1,
        getProgressSteps: getProgressSteps$1,
        _main: _main,
        update: update,
        _destroy: _destroy
      });
      var currentInstance;

      var SweetAlert = /*#__PURE__*/function () {
        function SweetAlert() {
          _classCallCheck(this, SweetAlert); // Prevent run in Node env


          if (typeof window === 'undefined') {
            return;
          } // Check for the existence of Promise


          if (typeof Promise === 'undefined') {
            error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
          }

          currentInstance = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var outerParams = Object.freeze(this.constructor.argsToParams(args));
          Object.defineProperties(this, {
            params: {
              value: outerParams,
              writable: false,
              enumerable: true,
              configurable: true
            }
          });

          var promise = this._main(this.params);

          privateProps.promise.set(this, promise);
        } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


        _createClass(SweetAlert, [{
          key: "then",
          value: function then(onFulfilled) {
            var promise = privateProps.promise.get(this);
            return promise.then(onFulfilled);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var promise = privateProps.promise.get(this);
            return promise["finally"](onFinally);
          }
        }]);

        return SweetAlert;
      }(); // Assign instance methods from src/instanceMethods/*.js to prototype


      _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


      _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


      Object.keys(instanceMethods).forEach(function (key) {
        SweetAlert[key] = function () {
          if (currentInstance) {
            var _currentInstance;

            return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
          }
        };
      });
      SweetAlert.DismissReason = DismissReason;
      SweetAlert.version = '9.14.0';
      var Swal = SweetAlert;
      Swal["default"] = Swal;
      return Swal;
    });

    if (typeof this !== 'undefined' && this.Sweetalert2) {
      this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
    }
    /***/

  },

  /***/
  "./src/app/panel/all-comments/all-comments.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/panel/all-comments/all-comments.component.ts ***!
    \**************************************************************/

  /*! exports provided: AllCommentsComponent */

  /***/
  function srcAppPanelAllCommentsAllCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllCommentsComponent", function () {
      return AllCommentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllCommentsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCommentsComponent_div_2_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var comment_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.viewComment(comment_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCommentsComponent_div_2_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var comment_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4["delete"](comment_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.body);
      }
    }

    var AllCommentsComponent = /*#__PURE__*/function () {
      function AllCommentsComponent(serv) {
        _classCallCheck2(this, AllCommentsComponent);

        this.serv = serv;
        this.update = false;
      }

      _createClass2(AllCommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.serv.getCommentsValues().subscribe(function (res) {
            _this2.comments = res;
          });
        }
      }, {
        key: "delete",
        value: function _delete(comment) {
          var index = this.comments.indexOf(comment);
          this.comments.splice(index, 1); // this.serv.deleteComment(comment.id).subscribe(res=>{
          //   this.comments.splice(index,1);
          // });
        }
      }, {
        key: "viewComment",
        value: function viewComment(comment) {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: comment.name,
            text: comment.body
          });
        }
      }]);

      return AllCommentsComponent;
    }();

    AllCommentsComponent.ɵfac = function AllCommentsComponent_Factory(t) {
      return new (t || AllCommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]));
    };

    AllCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllCommentsComponent,
      selectors: [["app-all-comments"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container", "postsComponent"], [1, "row"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "item"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "footer"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
      template: function AllCommentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllCommentsComponent_div_2_Template, 13, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".postsComponent[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #f5f8fa;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    padding: 0 15px 15px 0;\r\n    text-align: right;\r\n}\r\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\nmargin-right: 8px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]{\r\n    color: #FFFF;\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    width: 100px;\r\n    border:1px solid #794bc4;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    \r\n    margin-bottom: -10px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-image: none;\r\n    background-color: transparent !important;\r\n    border:1px solid #794bc4;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:disabled{\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    cursor: no-drop;\r\n    color:#FFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvYWxsLWNvbW1lbnRzL2FsbC1jb21tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixtRUFBbUU7SUFDbkUsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBOztJQUVJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2FsbC1jb21tZW50cy9hbGwtY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucG9zdHNDb21wb25lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZm9vdGVyIGJ1dHRvbntcclxubWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gICAgY29sb3I6ICNGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjMjA4ZSAwJSwgIzY3MTNkMiAxMDAlKTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzc5NGJjNDtcclxufVxyXG5pbnB1dHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNzk0YmM0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjY2MyMDhlIDAlLCAjNjcxM2QyIDEwMCUpO1xyXG4gICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgY29sb3I6I0ZGRjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-comments',
          templateUrl: './all-comments.component.html',
          styleUrls: ['./all-comments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/all-posts/all-posts.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/panel/all-posts/all-posts.component.ts ***!
    \********************************************************/

  /*! exports provided: AllPostsComponent */

  /***/
  function srcAppPanelAllPostsAllPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllPostsComponent", function () {
      return AllPostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllPostsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPostsComponent_div_2_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var post_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.viewPost(post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPostsComponent_div_2_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var post_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4["delete"](post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.body);
      }
    }

    var AllPostsComponent = /*#__PURE__*/function () {
      function AllPostsComponent(serv) {
        _classCallCheck2(this, AllPostsComponent);

        this.serv = serv;
        this.update = false;
      }

      _createClass2(AllPostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.serv.getValues().subscribe(function (res) {
            _this3.posts = res;
          });
        }
      }, {
        key: "delete",
        value: function _delete(post) {
          var index = this.posts.indexOf(post);
          this.posts.splice(index, 1); // this.serv.deletePost(post.id).subscribe(res=>{
          //   this.posts.splice(index,1);
          // });
        }
      }, {
        key: "viewPost",
        value: function viewPost(post) {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: post.title,
            text: post.body
          });
        }
      }]);

      return AllPostsComponent;
    }();

    AllPostsComponent.ɵfac = function AllPostsComponent_Factory(t) {
      return new (t || AllPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]));
    };

    AllPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllPostsComponent,
      selectors: [["app-all-posts"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container", "postsComponent"], [1, "row"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "item"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "footer"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
      template: function AllPostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllPostsComponent_div_2_Template, 13, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".postsComponent[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #f5f8fa;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    padding: 0 15px 15px 0;\r\n    text-align: right;\r\n}\r\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\nmargin-right: 8px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]{\r\n    color: #FFFF;\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    width: 100px;\r\n    border:1px solid #794bc4;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    \r\n    margin-bottom: -10px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-image: none;\r\n    background-color: transparent !important;\r\n    border:1px solid #794bc4;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:disabled{\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    cursor: no-drop;\r\n    color:#FFF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvYWxsLXBvc3RzL2FsbC1wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixtRUFBbUU7SUFDbkUsWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBOztJQUVJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2FsbC1wb3N0cy9hbGwtcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucG9zdHNDb21wb25lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZm9vdGVyIGJ1dHRvbntcclxubWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICAgIGNvbG9yOiAjRkZGRjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjYzIwOGUgMCUsICM2NzEzZDIgMTAwJSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM3OTRiYzQ7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzc5NGJjNDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjMjA4ZSAwJSwgIzY3MTNkMiAxMDAlKTtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgIGNvbG9yOiNGRkY7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllPostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-posts',
          templateUrl: './all-posts.component.html',
          styleUrls: ['./all-posts.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/comment-control/comment-control.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/panel/comment-control/comment-control.component.ts ***!
    \********************************************************************/

  /*! exports provided: CommentControlComponent */

  /***/
  function srcAppPanelCommentControlCommentControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentControlComponent", function () {
      return CommentControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["commentForm"];

    function CommentControlComponent_div_11_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " name Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentControlComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentControlComponent_div_11_p_1_Template, 2, 0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
      }
    }

    function CommentControlComponent_div_17_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " body Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentControlComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentControlComponent_div_17_p_1_Template, 2, 0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
      }
    }

    function CommentControlComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentControlComponent_div_20_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var comment_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updateComment(comment_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r8.body);
      }
    }

    var CommentControlComponent = /*#__PURE__*/function () {
      function CommentControlComponent(serv) {
        _classCallCheck2(this, CommentControlComponent);

        this.serv = serv;
        this.editmode = true;
      }

      _createClass2(CommentControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.serv.getCommentsValues().subscribe(function (res) {
            _this4.comments = res;
          });
        }
      }, {
        key: "createComment",
        value: function createComment(comment) {
          if (this.editmode) {
            this.comments.unshift(comment.value); //  this.serv.createPost(name).subscribe(res=>{
            //    this.comments.unshift(post.value);
            //    })

            comment.reset();
          } else {
            this.comments[this.index] = comment.value; //  this.serv.updatePost(post.id,post).subscribe(res=>{
            //    this.comments[this.index] = post.value;
            //  });

            comment.reset();
          }
        }
      }, {
        key: "updateComment",
        value: function updateComment(comment) {
          console.log(comment);
          this.index = this.comments.indexOf(comment);
          this.commentInputs.setValue({
            name: this.comments[this.index].name,
            body: this.comments[this.index].body
          });
          this.editmode = false;
        }
      }]);

      return CommentControlComponent;
    }();

    CommentControlComponent.ɵfac = function CommentControlComponent_Factory(t) {
      return new (t || CommentControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    CommentControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentControlComponent,
      selectors: [["app-comment-control"]],
      viewQuery: function CommentControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.commentInputs = _t.first);
        }
      },
      decls: 21,
      vars: 5,
      consts: [[1, "container", "postsComponent"], [1, "row"], [1, "col-md-12", "sticky-top"], [1, "addpost"], [3, "ngSubmit"], ["commentForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "ngModel", "", "name", "name", "required", "", 1, "form-control"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "Bitle"], ["type", "body", "ngModel", "", "name", "body", "required", "", 1, "form-control"], ["body", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-md-12"], [1, "item"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "footer"], [1, "btn", "btn-primary", 3, "click"]],
      template: function CommentControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentControlComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.createComment(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommentControlComponent_div_11_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CommentControlComponent_div_17_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CommentControlComponent_div_20_Template, 11, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.editmode ? "Add " : "Update", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".postsComponent[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #f5f8fa;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    padding: 0 15px 15px 0;\r\n    text-align: right;\r\n}\r\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\nmargin-right: 8px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n.sticky-top[_ngcontent-%COMP%] {\r\n    top: 57px;\r\n    z-index: 1;\r\n}\r\n.addpost[_ngcontent-%COMP%]{\r\n    background: #FFF;\r\n    padding: 20px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\r\n}\r\n.btn-primary[_ngcontent-%COMP%]{\r\n    color: #FFFF;\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    width: 100px;\r\n    border:1px solid #794bc4;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    \r\n    margin-bottom: -10px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-image: none;\r\n    background-color: transparent !important;\r\n    border:1px solid #794bc4;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:disabled{\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    cursor: no-drop;\r\n    color:#FFF;\r\n}\r\n.alert[_ngcontent-%COMP%]{\r\n    padding: 10px 0px 0px 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvY29tbWVudC1jb250cm9sL2NvbW1lbnQtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUVBQW1FO0lBQ25FLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksbUVBQW1FO0lBQ25FLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2NvbW1lbnQtY29udHJvbC9jb21tZW50LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucG9zdHNDb21wb25lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZm9vdGVyIGJ1dHRvbntcclxubWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN0aWNreS10b3Age1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uYWRkcG9zdHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbi5idG4tcHJpbWFyeXtcclxuICAgIGNvbG9yOiAjRkZGRjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjYzIwOGUgMCUsICM2NzEzZDIgMTAwJSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM3OTRiYzQ7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzc5NGJjNDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjMjA4ZSAwJSwgIzY3MTNkMiAxMDAlKTtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgIGNvbG9yOiNGRkY7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-control',
          templateUrl: './comment-control.component.html',
          styleUrls: ['./comment-control.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, {
        commentInputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['commentForm', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/panel/panel.component.ts":
  /*!******************************************!*\
    !*** ./src/app/panel/panel.component.ts ***!
    \******************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcAppPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PanelComponent = /*#__PURE__*/function () {
      function PanelComponent() {
        _classCallCheck2(this, PanelComponent);
      }

      _createClass2(PanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PanelComponent;
    }();

    PanelComponent.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)();
    };

    PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["app-panel"]],
      decls: 15,
      vars: 0,
      consts: [[1, "container"], [1, "row"], [1, "col-md-3"], [1, "list-group", "category", "sticky-top"], ["routerLinkActive", "active", "routerLink", "/panel/posts/all", 1, "list-group-item", "list-group-item-action"], ["routerLinkActive", "active", "routerLink", "/panel/posts/control", 1, "list-group-item", "list-group-item-action"], ["routerLinkActive", "active", "routerLink", "/panel/comments/all", 1, "list-group-item", "list-group-item-action"], ["routerLinkActive", "active", "routerLink", "/panel/comments/control", 1, "list-group-item", "list-group-item-action"], [1, "col-md-9"]],
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " All Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Posts Control ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " All Comments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Comments Control ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".category[_ngcontent-%COMP%]{\r\nwidth:100%;\r\nmargin-bottom: 90px;\r\nmargin-top: 10px;\r\n}\r\n.category[_ngcontent-%COMP%]   .list-group-item.active[_ngcontent-%COMP%] {\r\n    color:#333;\r\n    border:0;\r\n    background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);\r\n}\r\n@media only screen and (max-width: 768px){\r\n   \r\n    .dash[_ngcontent-%COMP%]   .minSizwCat[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n   .dash[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .dash[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n        margin-bottom: 10px;\r\n    }\r\n    .dash[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n        background-color: #fcb316;\r\n    }\r\n}\r\n.minSizwCat[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.copyright[_ngcontent-%COMP%]{\r\nbackground-color: #000000;\r\ntext-align: center;\r\npadding: 15px;\r\nmargin-top: 25px;\r\nwidth: 100%;\r\ncolor:#FFF;\r\n}\r\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\nmargin: 0;\r\n}\r\n.copyright[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\ncolor:#fcb316; \r\n}\r\n.sticky-top[_ngcontent-%COMP%] { top: 60px; z-index: 1; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7SUFDUiwrRUFBK0U7QUFDbkY7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7R0FDRDtRQUNLLGFBQWE7SUFDakI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGNBQWMsU0FBUyxFQUFFLFVBQVUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhdGVnb3J5e1xyXG53aWR0aDoxMDAlO1xyXG5tYXJnaW4tYm90dG9tOiA5MHB4O1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXRlZ29yeSAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmRjYmYxIDAlLCAjZmRjYmYxIDElLCAjZTZkZWU5IDEwMCUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgXHJcbiAgICAuZGFzaCAubWluU2l6d0NhdHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgLmRhc2ggIC5jYXRlZ29yeXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmRhc2ggbmF2e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZGFzaCBuYXYgLm5hdi1pdGVtICAuYWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2IzMTY7XHJcbiAgICB9XHJcbn1cclxuLm1pblNpendDYXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbm1hcmdpbi10b3A6IDI1cHg7XHJcbndpZHRoOiAxMDAlO1xyXG5jb2xvcjojRkZGO1xyXG59XHJcbi5jb3B5cmlnaHQgcHtcclxubWFyZ2luOiAwO1xyXG59XHJcbi5jb3B5cmlnaHQgc3BhbntcclxuY29sb3I6I2ZjYjMxNjsgXHJcbn1cclxuLnN0aWNreS10b3AgeyB0b3A6IDYwcHg7IHotaW5kZXg6IDE7IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-panel',
          templateUrl: './panel.component.html',
          styleUrls: ['./panel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/panel.module.ts":
  /*!***************************************!*\
    !*** ./src/app/panel/panel.module.ts ***!
    \***************************************/

  /*! exports provided: PanelModule */

  /***/
  function srcAppPanelPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelModule", function () {
      return PanelModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _post_control_post_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-control/post-control.component */
    "./src/app/panel/post-control/post-control.component.ts");
    /* harmony import */


    var _panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./panel.component */
    "./src/app/panel/panel.component.ts");
    /* harmony import */


    var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-posts/all-posts.component */
    "./src/app/panel/all-posts/all-posts.component.ts");
    /* harmony import */


    var _all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-comments/all-comments.component */
    "./src/app/panel/all-comments/all-comments.component.ts");
    /* harmony import */


    var _comment_control_comment_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comment-control/comment-control.component */
    "./src/app/panel/comment-control/comment-control.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var routes = [{
      path: '',
      component: _panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"],
      children: [{
        path: 'posts/all',
        component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_5__["AllPostsComponent"]
      }, {
        path: 'posts/control',
        component: _post_control_post_control_component__WEBPACK_IMPORTED_MODULE_3__["PostControlComponent"]
      }, {
        path: 'comments/all',
        component: _all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_6__["AllCommentsComponent"]
      }, {
        path: 'comments/control',
        component: _comment_control_comment_control_component__WEBPACK_IMPORTED_MODULE_7__["CommentControlComponent"]
      }, {
        path: '',
        redirectTo: 'posts/all',
        pathMatch: 'full'
      }]
    }];

    var PanelModule = function PanelModule() {
      _classCallCheck2(this, PanelModule);
    };

    PanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelModule
    });
    PanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PanelModule_Factory(t) {
        return new (t || PanelModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PanelModule, {
        declarations: [_post_control_post_control_component__WEBPACK_IMPORTED_MODULE_3__["PostControlComponent"], _panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_5__["AllPostsComponent"], _all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_6__["AllCommentsComponent"], _comment_control_comment_control_component__WEBPACK_IMPORTED_MODULE_7__["CommentControlComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_post_control_post_control_component__WEBPACK_IMPORTED_MODULE_3__["PostControlComponent"], _panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_5__["AllPostsComponent"], _all_comments_all_comments_component__WEBPACK_IMPORTED_MODULE_6__["AllCommentsComponent"], _comment_control_comment_control_component__WEBPACK_IMPORTED_MODULE_7__["CommentControlComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel/post-control/post-control.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/panel/post-control/post-control.component.ts ***!
    \**************************************************************/

  /*! exports provided: PostControlComponent */

  /***/
  function srcAppPanelPostControlPostControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostControlComponent", function () {
      return PostControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["f"];

    function PostControlComponent_div_11_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " title Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostControlComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostControlComponent_div_11_p_1_Template, 2, 0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
      }
    }

    function PostControlComponent_div_17_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " body Is Required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostControlComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostControlComponent_div_17_p_1_Template, 2, 0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
      }
    }

    function PostControlComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostControlComponent_div_20_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var post_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updatePost(post_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r8.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r8.body);
      }
    }

    var PostControlComponent = /*#__PURE__*/function () {
      function PostControlComponent(serv) {
        _classCallCheck2(this, PostControlComponent);

        this.serv = serv;
        this.editmode = true;
      }

      _createClass2(PostControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.serv.getValues().subscribe(function (res) {
            _this5.posts = res;
          });
        }
      }, {
        key: "createPost",
        value: function createPost(post) {
          if (this.editmode) {
            this.posts.unshift(post.value); //  this.serv.createPost(name).subscribe(res=>{
            //    this.posts.unshift(post.value);
            //    })

            post.reset();
          } else {
            this.posts[this.index] = post.value; //  this.serv.updatePost(post.id,post).subscribe(res=>{
            //    this.posts[this.index] = post.value;
            //  });

            post.reset();
          }
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          this.index = this.posts.indexOf(post);
          this.postInputs.setValue({
            title: this.posts[this.index].title,
            body: this.posts[this.index].body
          });
          this.editmode = false;
        }
      }]);

      return PostControlComponent;
    }();

    PostControlComponent.ɵfac = function PostControlComponent_Factory(t) {
      return new (t || PostControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    PostControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostControlComponent,
      selectors: [["app-post-control"]],
      viewQuery: function PostControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postInputs = _t.first);
        }
      },
      decls: 21,
      vars: 5,
      consts: [[1, "container", "postsComponent"], [1, "row"], [1, "col-md-12", "sticky-top"], [1, "addpost"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "Title"], ["type", "text", "ngModel", "", "name", "title", "required", "", 1, "form-control"], ["title", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "Bitle"], ["type", "body", "ngModel", "", "name", "body", "required", "", 1, "form-control"], ["body", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-md-12"], [1, "item"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "footer"], [1, "btn", "btn-primary", 3, "click"]],
      template: function PostControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostControlComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.createPost(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostControlComponent_div_11_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PostControlComponent_div_17_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostControlComponent_div_20_Template, 11, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.editmode ? "Add Post " : "Update", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".postsComponent[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #f5f8fa;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    padding: 0 15px 15px 0;\r\n    text-align: right;\r\n}\r\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\nmargin-right: 8px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\r\n.sticky-top[_ngcontent-%COMP%] {\r\n    top: 57px;\r\n    z-index: 1;\r\n}\r\n.addpost[_ngcontent-%COMP%]{\r\n    background: #FFF;\r\n    padding: 20px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\r\n}\r\n.btn-primary[_ngcontent-%COMP%]{\r\n    color: #FFFF;\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    width: 100px;\r\n    border:1px solid #794bc4;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    \r\n    margin-bottom: -10px;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-image: none;\r\n    background-color: transparent !important;\r\n    border:1px solid #794bc4;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:disabled{\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    cursor: no-drop;\r\n    color:#FFF;\r\n}\r\n.alert[_ngcontent-%COMP%]{\r\n    padding: 10px 0px 0px 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcG9zdC1jb250cm9sL3Bvc3QtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUVBQW1FO0lBQ25FLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksbUVBQW1FO0lBQ25FLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3Bvc3QtY29udHJvbC9wb3N0LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucG9zdHNDb21wb25lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZm9vdGVyIGJ1dHRvbntcclxubWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN0aWNreS10b3Age1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uYWRkcG9zdHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbi5idG4tcHJpbWFyeXtcclxuICAgIGNvbG9yOiAjRkZGRjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjYzIwOGUgMCUsICM2NzEzZDIgMTAwJSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM3OTRiYzQ7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzc5NGJjNDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjMjA4ZSAwJSwgIzY3MTNkMiAxMDAlKTtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgIGNvbG9yOiNGRkY7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-control',
          templateUrl: './post-control.component.html',
          styleUrls: ['./post-control.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, {
        postInputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['f', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=panel-panel-module-es5.js.map