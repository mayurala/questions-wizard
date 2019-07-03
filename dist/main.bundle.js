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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/data.js":
/*!*************************!*\
  !*** ./src/api/data.js ***!
  \*************************/
/*! exports provided: questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
var questions = [{
  id: 'Q-101',
  title: 'What is India\'s capital',
  type: 'radiogroup',
  options: ['Delhi', 'Mumbai', 'Kolkatta', 'Pune']
}, {
  id: 'Q-103',
  title: "Grand Central Terminal, Park Avenue, New York is the world's",
  type: 'radiogroup',
  options: ['largest railway station', 'highest railway station', 'longest railway station', 'None of the above']
}, {
  id: 'Q-103',
  title: 'Entomology is the science that studies',
  type: 'dropdown',
  options: ['Behavior of human beings', 'Insects', 'The origin and history of technical and scientific terms', 'The formation of rocks']
}];

/***/ }),

/***/ "./src/component/answer-type.js":
/*!**************************************!*\
  !*** ./src/component/answer-type.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnswerOption; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnswerOption =
/*#__PURE__*/
function () {
  function AnswerOption(type, option) {
    _classCallCheck(this, AnswerOption);

    this.type = type;
    this.option = option || [];
  }

  _createClass(AnswerOption, [{
    key: "typeRadio",
    value: function typeRadio() {
      return "<div>\n        ".concat(this.option.map(function (item) {
        return "<input type=\"radio\" class=\"radio\" name=\"answer\" value=\"".concat(item, "\">").concat(item, "<br>");
      }), "\n      </div>");
    }
  }, {
    key: "typeDropDown",
    value: function typeDropDown() {
      return "<select class=\"dropdown\">\n        ".concat(this.option.map(function (item) {
        return "<option  value=\"".concat(item, "\">").concat(item, "</option>");
      }), "\n      </select>");
    }
  }, {
    key: "selectPreviousAnswer",
    value: function selectPreviousAnswer(eleName) {
      if (this.type === 'radiogroup') {
        var ele = document.querySelectorAll('input[name="answer"]');
        ele.forEach(function (item) {
          item.value === eleName ? item.checked = true : '';
        });
      } else {
        document.querySelector('.dropdown').value = eleName;
      }
    }
  }]);

  return AnswerOption;
}();



/***/ }),

/***/ "./src/component/bottom-button.js":
/*!****************************************!*\
  !*** ./src/component/bottom-button.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionButton; });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/component/button.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ActionButton =
/*#__PURE__*/
function () {
  function ActionButton(action, maxValue) {
    _classCallCheck(this, ActionButton);

    this.buttonLabel = ['Previous', 'Next'];
    this.currentCount = 0;
    this.willCounterMove = false;
    this.action = action;
    this.maxValue = maxValue;
  }

  _createClass(ActionButton, [{
    key: "allowCounter",
    value: function allowCounter() {
      this.willCounterMove = true;
    }
  }, {
    key: "render",
    value: function render() {
      return this.getElement();
    }
  }, {
    key: "getElement",
    value: function getElement() {
      var _this = this;

      var element = document.createElement('div');
      element.innerHTML = "".concat(this.buttonLabel.map(function (item) {
        return Object(_button__WEBPACK_IMPORTED_MODULE_0__["QuestionButtons"])(item);
      }));

      element.onclick = function (e) {
        if (!_this.willCounterMove && e.target.innerText !== _this.buttonLabel[0]) {
          alert('Please provide the answer before move to next!');
          return;
        }

        var indx = 0;

        switch (e.target.innerText) {
          case _this.buttonLabel[0]:
            indx = -1;
            break;

          case _this.buttonLabel[1]:
            indx = 1;
            break;
        }

        _this.currentCount = indx === -1 ? Math.max(_this.currentCount + indx, 0) : Math.min(_this.currentCount + indx, _this.maxValue - 1);
        _this.willCounterMove = false;

        _this.action(_this.currentCount, e.target.innerText);
      };

      return element;
    }
  }]);

  return ActionButton;
}();



/***/ }),

/***/ "./src/component/button.js":
/*!*********************************!*\
  !*** ./src/component/button.js ***!
  \*********************************/
/*! exports provided: QuestionButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionButtons", function() { return QuestionButtons; });
var QuestionButtons = function QuestionButtons(value) {
  return "<button id='".concat(value, "'>").concat(value, "</button>");
};

/***/ }),

/***/ "./src/component/questions.js":
/*!************************************!*\
  !*** ./src/component/questions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionWZ; });
/* harmony import */ var _answer_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answer-type */ "./src/component/answer-type.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var QuestionWZ =
/*#__PURE__*/
function (_AnswerOption) {
  _inherits(QuestionWZ, _AnswerOption);

  function QuestionWZ(question, cb) {
    var _this;

    _classCallCheck(this, QuestionWZ);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionWZ).call(this, question.type, question.options));
    _this.question = question;
    document.addEventListener('click', function (event) {
      if (!event.target.matches('.radio')) return;
      cb(event.target.value);
    });
    document.addEventListener('change', function (event) {
      if (!event.target.matches('.dropdown')) return;
      cb(event.target.value);
    });
    return _this;
  }

  _createClass(QuestionWZ, [{
    key: "changeQuestion",
    value: function changeQuestion(question) {
      this.question = question;
      this.type = question.type;
      this.option = question.options;
    }
  }, {
    key: "render",
    value: function render() {
      return "<div><h3>".concat(this.question.title, "</h3></div>").concat(this.question.type === 'radiogroup' ? this.typeRadio() : this.typeDropDown());
    }
  }]);

  return QuestionWZ;
}(_answer_type__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/component/status-bar.js":
/*!*************************************!*\
  !*** ./src/component/status-bar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusBar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function getElement(ele) {
  return ele ? ele : document.querySelectorAll('[data-progress]')[0];
}

var StatusBar =
/*#__PURE__*/
function () {
  function StatusBar() {
    _classCallCheck(this, StatusBar);

    this.value = 0;
  }

  _createClass(StatusBar, [{
    key: "render",
    value: function render() {
      return "<div id=\"progress-count\">1/2</div><div><progress data-progress='data-progress'  max='100' value='".concat(this.value, "' /></div>");
    }
  }, {
    key: "updateCount",
    set: function set(value) {
      document.getElementById('progress-count').innerHTML = value;
    }
  }, {
    key: "progress",
    set: function set(value) {
      this.value = value;
      this.element = getElement(this.element);
      this.element.value = value;
    },
    get: function get() {
      return this.value;
    }
  }]);

  return StatusBar;
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_status_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/status-bar */ "./src/component/status-bar.js");
/* harmony import */ var _component_questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/questions */ "./src/component/questions.js");
/* harmony import */ var _component_bottom_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/bottom-button */ "./src/component/bottom-button.js");
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/data */ "./src/api/data.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var statusBar;
var questionWz;
var questionsAttempt = 0;
var currentAnswer = null;
var questionContainer;
var actionButton;
var questionsData = _api_data__WEBPACK_IMPORTED_MODULE_3__["questions"].map(function (item) {
  return _objectSpread({}, item, {
    attempt: ''
  });
});

function showStatusBar() {
  statusBar = new _component_status_bar__WEBPACK_IMPORTED_MODULE_0__["default"]();
  document.getElementById('progress-container').innerHTML = statusBar.render();
  statusBar.updateCount = "0/".concat(questionsData.length);
  statusBar.progress = updateProgress();
}

function showQuestion() {
  questionWz = new _component_questions__WEBPACK_IMPORTED_MODULE_1__["default"](questionsData[questionsAttempt], onAnswerSubmit);
  questionContainer = document.getElementById('question-wizard');
  questionContainer.innerHTML = questionWz.render();
}

function showButtons() {
  actionButton = new _component_bottom_button__WEBPACK_IMPORTED_MODULE_2__["default"](updateCounter, questionsData.length);
  document.getElementById('action-button').appendChild(actionButton.render());
}

function updateCounter(count, actionType) {
  var indx = questionsAttempt;
  questionsAttempt = count;
  moveToQuestion(questionsData[count]);

  if (actionType !== 'Previous') {
    questionsData[indx].attempt = currentAnswer;
    questionsData[count].attempt.length > 2 ? questionWz.selectPreviousAnswer(questionsData[count].attempt) : '';
    statusBar.updateCount = "".concat(questionsData.filter(function (item) {
      return item.attempt.length > 2;
    }).length, "/").concat(questionsData.length);
    statusBar.progress = updateProgress();
  } else {
    questionWz.selectPreviousAnswer(questionsData[count].attempt);
  }
}

function onAnswerSubmit(option) {
  currentAnswer = option;
  actionButton.allowCounter();
}

function moveToQuestion(num) {
  questionWz.changeQuestion(num);
  questionContainer.innerHTML = questionWz.render();
}

function updateProgress() {
  return questionsAttempt / questionsData.length * 100;
}

showStatusBar();
showQuestion();
showButtons();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map