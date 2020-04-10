/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/custom-event-polyfill/polyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/custom-event-polyfill/polyfill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();


/***/ }),

/***/ "./node_modules/new-event-polyfill/newEventPolyfill.js":
/*!*************************************************************!*\
  !*** ./node_modules/new-event-polyfill/newEventPolyfill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(){function e(e,n){n=n||{bubbles:!1,cancelable:!1,composed:!1};var t=document.createEvent("Event");return t.initEvent(e,n.bubbles,n.cancelable,n.detail),t}"function"!=typeof window.Event&&(e.prototype=window.Event.prototype,window.Event=e)}();


/***/ }),

/***/ "./src/js/checkTrafficType.js":
/*!************************************!*\
  !*** ./src/js/checkTrafficType.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var new_event_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! new-event-polyfill */ "./node_modules/new-event-polyfill/newEventPolyfill.js");
/* harmony import */ var new_event_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(new_event_polyfill__WEBPACK_IMPORTED_MODULE_1__);



(function (d, w) {
  // eslint-disable-next-line no-prototype-builtins
  if (!w.hasOwnProperty('dataLayer')) {
    w.dataLayer = [];
  } // eslint-disable-next-line no-undef


  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/towa/gdpr/checkip', true);

  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      var trafficType = 'error';

      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var tag = d.createElement('meta');
        tag.setAttribute('name', 'traffic-type');
        trafficType = data.internal ? 'internal' : 'external';
        tag.setAttribute('content', trafficType);
        var metaElement = document.getElementsByTagName('head')[0];
        metaElement.insertBefore(tag, metaElement.childNodes[0]);
        w.dataLayer.push({
          'traffic-type': trafficType
        });
        w.dataLayer.push({
          event: 'trafficTypeLoaded'
        });
      } else {
        w.dataLayer.push({
          event: 'trafficTypeLoaded'
        });
      }

      var event = new CustomEvent('towa-gdpr-ipcheck-finished', {
        detail: {
          trafficType: trafficType
        }
      });
      w.dispatchEvent(event);
    }
  };

  xhr.onerror = function (e) {
    w.dataLayer.push({
      event: 'trafficTypeLoaded'
    });
    var event = new CustomEvent('towa-gdpr-ipcheck-finished', {
      detail: {
        trafficType: 'error'
      }
    });
    w.dispatchEvent(event);
  };

  xhr.send(null);
})(document, window);

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi ./src/js/checkTrafficType.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\towa-dsgvo-plugin\wp-content\plugins\towa-gdpr-plugin\src\js\checkTrafficType.js */"./src/js/checkTrafficType.js");


/***/ })

/******/ });