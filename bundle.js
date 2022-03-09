/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CedarvilleCursive-Regular.ttf */ "./src/fonts/CedarvilleCursive-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: red;\n    --card-medium-priority: yellow;\n    --card-low-priority: green;\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: 10px;\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            grid-template-rows: repeat(auto-fit);\n            gap: 50px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            height: 300px;\n            background-color: var(--sidebar-background);\n            border-radius: 20px;\n        }\n            .card-content {\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n                padding: 20px;\n            }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: 20px;\n                border-bottom-left-radius: 20px;\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: 20px;\n                border-bottom-left-radius: 20px;\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: 20px;\n                border-bottom-left-radius: 20px;\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: 20px;\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: 20px;\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n        }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: red;\n    --card-medium-priority: yellow;\n    --card-low-priority: green;\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url('./fonts/CedarvilleCursive-Regular.ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: 10px;\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            grid-template-rows: repeat(auto-fit);\n            gap: 50px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            height: 300px;\n            background-color: var(--sidebar-background);\n            border-radius: 20px;\n        }\n            .card-content {\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n                padding: 20px;\n            }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: 20px;\n                border-bottom-left-radius: 20px;\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: 20px;\n                border-bottom-left-radius: 20px;\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: 20px;\n                border-bottom-left-radius: 20px;\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: 20px;\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: 20px;\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n        }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectStorage": () => (/* binding */ projectStorage),
/* harmony export */   "DOMRenderer": () => (/* binding */ DOMRenderer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _project_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_storage */ "./src/project_storage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");





const projectStorage = new _project_storage__WEBPACK_IMPORTED_MODULE_2__.CreateProjectStorage();

const defaultProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.CreateProject("Default");
const anotherProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.CreateProject("Another Project");

defaultProject.createNewTask("Task One", "Bananas, apples", 1, false, "2022-03-04");
defaultProject.createNewTask("Task Two", "Bananas, apples", 3, false, "2022-03-15");
defaultProject.createNewTask("Task Three", "Bananas, apples", 2, false, "2022-04-20");

const DOMRenderer = new _render__WEBPACK_IMPORTED_MODULE_3__.renderDOM();

DOMRenderer.renderProjectList();
DOMRenderer.renderTasks();
DOMRenderer.newProjectClick();
DOMRenderer.newTaskClick();



/***/ }),

/***/ "./src/project_storage.js":
/*!********************************!*\
  !*** ./src/project_storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectStorage": () => (/* binding */ CreateProjectStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



class CreateProjectStorage {

    constructor () {
        this.list = [];
    };

    // find and select project by id

    projectGetter(projectId) {

        const findProjectIndex = (element) => element.id === projectId;
        const projectIndex = _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.findIndex(findProjectIndex);
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list[projectIndex])

        return _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list[projectIndex];

    };

    removeProjectFromStorage() {

        const slicedId = this.id.slice(0, -12);

        const findProjectIndex = (element) => element.id === slicedId;
        const projectIndex = _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.findIndex(findProjectIndex);

        _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.splice(projectIndex, 1);

        _index__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer.renderProjectList();
    }


};



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProject": () => (/* binding */ CreateProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


// project objects

class CreateProject {

    constructor (name) {
        this.name = name;
        this.id = this.generateGuid();
        this.taskCounter = 0;
        this.taskStorage = [];
        this.addProjectToStorage();
    }

    // this should go in project storage

    addProjectToStorage() {
        _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.push(this);
        // DOMRenderer.renderProjectList(); 
    }

    // add tasks to project object

    createNewTask (name, description, priority, status, date) {

        const task = {
            id: this.generateGuid(),
            name,
            description,
            priority,
            status,
            date,
        };

        this.taskStorage.push(task);

        this.taskCounter++;
    }

    // remove tasks from project object

    deleteTask (selectedProject, taskId) {

        console.log(selectedProject.taskStorage)

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = selectedProject.taskStorage.findIndex(findTaskIndex);
        console.log(taskIndex)

        selectedProject.taskStorage.splice(taskIndex, 1);

        selectedProject.taskCounter--;
    }

    // id

    generateGuid() {
        let result, i, j;
        result = 'A'; // should not start with number for queryselector
        for(j=0; j<32; j++) {
          if( j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
          i = Math.floor(Math.random()*16).toString(16).toUpperCase();
          result = result + i;
        }
        return result;
      }

}



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDOM": () => (/* binding */ renderDOM)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");




// show tasks on main content

class renderDOM {

    // render list of projects

    renderProjectList() {

        const projectListUlElement = document.querySelector('.list');
        projectListUlElement.innerHTML = ``;
        

        _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.list.forEach(element => {

            const projectListLiElement = document.createElement('li');
            projectListLiElement.setAttribute('class', 'list-item');
            projectListLiElement.setAttribute('id', element.name);

            projectListLiElement.innerHTML = `<span class="span-project" id="${element.id}-span">${element.name}</span> <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${element.id}-delete-icon">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
            </svg>`;

            projectListLiElement.firstElementChild.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.renderTasks);

            projectListUlElement.appendChild(projectListLiElement);

            const deleteIcon = document.querySelector(`#${element.id}-delete-icon`);
            console.log(deleteIcon)
            deleteIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.removeProjectFromStorage);
            deleteIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.renderTasks);
        });
    };

    // render tasks of first project on first load

    renderTasks(event) {

        let project;
        console.log(project)

        if(event !== undefined && event.currentTarget.classList[0] != "task-modal-tick") {
            console.log('test event')
            console.log(event)
            const projectId = event.target.id.slice(0, -5);
            console.log(projectId)
            project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.projectGetter(projectId);
        }   else if (event !== undefined && event.currentTarget.classList[0] === "task-modal-tick") {
            console.log(event)
            const projectId = document.querySelector('.content-project-title').id;
            project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.projectGetter(projectId);
            }
            else if (_index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.list.length > 0) {
                project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.list[0];
            }

        if (project !== undefined) {
            console.log('test on load and yes event')
            const projectName = project.name;
            const projectId = project.id;

            const contentTitle = document.querySelector('.content-project-title');
            contentTitle.innerText = `${projectName}`;
            contentTitle.setAttribute('id', projectId);

            const cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = ``;

            const taskContainer = project.taskStorage;
                    
            for (const property in taskContainer) {

                const taskObject = taskContainer[property];

                const cardDiv = document.createElement('div');
                cardDiv.setAttribute('class', 'card');                    
                cardContainer.appendChild(cardDiv);

                const cardPriorityStyle = document.createElement('div');
                cardPriorityStyle.setAttribute('class', 'card-priority');
                cardDiv.appendChild(cardPriorityStyle);

                const cardContentDiv = document.createElement('div');
                cardContentDiv.setAttribute('class', 'card-content');
                cardDiv.appendChild(cardContentDiv);
                
                // Title
                const cardTitle = document.createElement('div');
                cardTitle.setAttribute('class', 'card-title');
                cardTitle.innerHTML = `${taskObject.name}`;
                cardContentDiv.appendChild(cardTitle);
                // Description
                const cardDescription = document.createElement('div');
                cardDescription.setAttribute('class', 'card-description');
                cardDescription.innerHTML = `${taskObject.description}`;
                cardContentDiv.appendChild(cardDescription);
                // Priority
                if(taskObject.priority === 1) {
                    cardPriorityStyle.setAttribute('class', 'priority-high')
                } else if(taskObject.priority === 2) {
                    cardPriorityStyle.setAttribute('class', 'priority-medium')
                } else if(taskObject.priority === 3) {
                    cardPriorityStyle.setAttribute('class', 'priority-low')
                }
                // Due date
                const cardDate = document.createElement('input')
                cardDate.setAttribute('type', 'date');
                cardDate.setAttribute('value', `${taskObject.date}`)
                cardDate.setAttribute('name', 'date');
                cardDate.setAttribute('class', 'card-date');

                const cardDateLabel = document.createElement('label');
                cardDateLabel.setAttribute('for', 'date');
                cardDateLabel.innerText = 'Due:';

                cardContentDiv.appendChild(cardDateLabel)
                cardContentDiv.appendChild(cardDate);

                // Completion
                const cardCompletion = document.createElement('select');
                cardCompletion.setAttribute('class', 'card-completion');
                cardContentDiv.appendChild(cardCompletion);

                const cardCompletionDone = document.createElement('option');
                cardCompletionDone.innerText = 'Done';
                cardCompletion.appendChild(cardCompletionDone);

                const cardCompletionNotDone = document.createElement('option');
                cardCompletionNotDone.innerText = 'Not Done';
                cardCompletion.appendChild(cardCompletionNotDone);
            }
        } else {
            const contentTitle = document.querySelector('.content-project-title');
            contentTitle.innerText = '';

            const cardContainer = document.querySelector('.card-container');
            cardContainer.innerHTML = '';
        }
    };

    

    // add event listeners 

    // select project from list



    // create new project listener

    newProjectClick() {

        // show modal with name and tickmark
    
        const newProjectElement = document.querySelectorAll('#new-project');
        const modal = document.querySelector('#project-modal');
        const closeIcon = document.querySelector('.project-modal-close');
        const tickIcon = document.querySelector('.project-modal-tick');
    
        console.log(newProjectElement)
    
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
        
        const openProjectModal = () => {
            modal.style.display = "block";
        }
    
        const closeProjectModal = () => {
            modal.style.display = "none";
        }
    
        const enterKey = (event) => {        
            if(event.keyCode === 13) {
                closeProjectModal();
                createProjectFromInput();
            }
        }
        
        newProjectElement.forEach( element => element.addEventListener('click', openProjectModal))
    
        closeIcon.addEventListener('click', closeProjectModal);
        tickIcon.addEventListener('click', closeProjectModal);
        tickIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.createProjectFromInput)
    
    
        const inputElement = document.querySelector('.project-name-input');
    
        inputElement.addEventListener('keyup', enterKey);
    };

    // 

    
    
    // create new task listener

    newTaskClick() {
        const newTaskIcon = document.querySelectorAll('#new-task');
        console.log(newTaskIcon)
    
        const modal = document.querySelector('#task-modal');
        const closeIcon = document.querySelector('.task-modal-close');
        const tickIcon = document.querySelector('.task-modal-tick');
        console.log(tickIcon)
    
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
        
        const openTaskModal = () => {
            modal.style.display = "block";
        }
    
        const closeTaskModal = () => {
            modal.style.display = "none";
        }
    
        // const enterKey = (event) => {        
        //     if(event.keyCode === 13) {
        //         closeTaskModal();
        //         // createProjectFromInput(); 
        //     }
        // }
        
        newTaskIcon.forEach( element => element.addEventListener('click', openTaskModal))
    
        closeIcon.addEventListener('click', closeTaskModal);
        tickIcon.addEventListener('click', closeTaskModal);
        tickIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.createTaskFromInput);
        tickIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.renderTasks);
    
    
        // const inputElement = document.querySelector('.project-name-input');
    
        // inputElement.addEventListener('keyup', enterKey);
    };

    createProjectFromInput = () => {

        let input = document.querySelector('.project-name-input');
        const inputValue = input.value;
    
        const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.CreateProject(inputValue);
    
        input.value = '';

        _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.renderProjectList();
    
    };

    createTaskFromInput() {

        const projectTitle = document.querySelector('.content-project-title');
        const projectId = projectTitle.id
        console.log(projectId)

        const project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.projectGetter(projectId);
    
        const nameInput = document.querySelector('.task-name-input');
        const nameValue = nameInput.value;
    
        const descriptionInput = document.querySelector('.task-description-input');
        const descriptionValue = descriptionInput.value;
    
        const dateInput = document.querySelector('.task-date-input');
        const dateValue = dateInput.value;
    
        const priorityInput = document.querySelector('.task-priority');
        let priorityValue = priorityInput.value;
        priorityValue = parseInt(priorityValue);
    
        project.createNewTask(nameValue, descriptionValue, priorityValue, false, dateValue);  
    
    };
};





/***/ }),

/***/ "./src/fonts/CedarvilleCursive-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/CedarvilleCursive-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a669593f51bb81ad0cc1.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdSckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdF9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DZWRhcnZpbGxlQ3Vyc2l2ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0NzU1Njk7XFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjOTRhM2I4O1xcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogI2YxZjVmOTtcXG4gICAgLS1jYXJkLWhpZ2gtcHJpb3JpdHk6IHJlZDtcXG4gICAgLS1jYXJkLW1lZGl1bS1wcmlvcml0eTogeWVsbG93O1xcbiAgICAtLWNhcmQtbG93LXByaW9yaXR5OiBncmVlbjtcXG4gICAgLS1pY29uLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10aXRsZS1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtd2VpZ2h0OiA4MDA7XFxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGV4dC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zdmcge1xcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IG1pbm1heChjYWxjKDEwMHZoIC0gNjBweCksIDFmcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRleHQtd2VpZ2h0KTtcXG59XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAubG9nbyB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IENlZGFydmlsbGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXRpdGxlLXdlaWdodCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWFyY2ggaW5wdXQsIC5tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNwYW4tcHJvamVjdDpob3ZlciwgI25ldy1wcm9qZWN0OmhvdmVyLCAuZGVsZXRlLXByb2plY3Qge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICBnYXA6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAuY29udGVudC1oZWFkZXIge1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAubmV3LXRhc2sge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNuZXctdGFzayB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQpO1xcbiAgICAgICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktaGlnaCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaGlnaC1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLW1lZGl1bS1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS1sb3cge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWxvdy1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIFByb2plY3QgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMzAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICB9XFxuXFxuICAgICAgICAubW9kYWwtdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtaW5wdXQge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3VibWl0LW5hbWUtYnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLyogVEljayBidXR0b24gKi9cXG5cXG4gICAgLyogLnRpY2sge1xcblxcbiAgICB9ICovXFxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4gICAgLmNsb3NlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZTpob3ZlcixcXG4gICAgLmNsb3NlOmZvY3VzIHtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBUYXNsIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAgIC50YXNrLW1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMzAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICB9XFxuXFxuICAgICAgICAudGFzay1pbnB1dCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHdEQUF3RDtJQUN4RCx3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYiwrQ0FBK0M7UUFDL0MsMENBQTBDO0lBQzlDOztRQUVJO1lBQ0ksdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIseUJBQXlCO1lBQ3pCLGdDQUFnQztRQUNwQzs7UUFFQTtZQUNJLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsU0FBUztZQUNULGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLFlBQVk7WUFDWixVQUFVO1lBQ1Ysc0JB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Y2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQ3NTU2OTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6ICM5NGEzYjg7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiAjZjFmNWY5O1xcbiAgICAtLWNhcmQtaGlnaC1wcmlvcml0eTogcmVkO1xcbiAgICAtLWNhcmQtbWVkaXVtLXByaW9yaXR5OiB5ZWxsb3c7XFxuICAgIC0tY2FyZC1sb3ctcHJpb3JpdHk6IGdyZWVuO1xcbiAgICAtLWljb24tY29sb3I6IHdoaXRlO1xcbiAgICAtLXRpdGxlLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10aXRsZS13ZWlnaHQ6IDgwMDtcXG4gICAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10ZXh0LXdlaWdodDogNjAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2VkYXJ2aWxsZSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0NlZGFydmlsbGVDdXJzaXZlLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbnN2ZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggbWlubWF4KGNhbGMoMTAwdmggLSA2MHB4KSwgMWZyKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGV4dC13ZWlnaHQpO1xcbn1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDMwMHB4KSAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5sb2dvIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogQ2VkYXJ2aWxsZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tdGl0bGUtd2VpZ2h0KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWFyY2gge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlYXJjaCBpbnB1dCwgLm1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saXN0LWl0ZW0ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3Bhbi1wcm9qZWN0OmhvdmVyLCAjbmV3LXByb2plY3Q6aG92ZXIsIC5kZWxldGUtcHJvamVjdCB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbiAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50LWhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5uZXctdGFzayB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI25ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCk7XFxuICAgICAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS1oaWdoIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1oaWdoLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbWVkaXVtLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LWxvdyB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbG93LXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuICBcXG4gICAgLyogUHJvamVjdCBNb2RhbCBDb250ZW50L0JveCAqL1xcbiAgICAubW9kYWwtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAlIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC10aXRsZSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1pbnB1dCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdWJtaXQtbmFtZS1idXR0b24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAvKiBUSWNrIGJ1dHRvbiAqL1xcblxcbiAgICAvKiAudGljayB7XFxuXFxuICAgIH0gKi9cXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbiAgICAuY2xvc2Uge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlOmhvdmVyLFxcbiAgICAuY2xvc2U6Zm9jdXMge1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIFRhc2wgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLnRhc2stbW9kYWwtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAlIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgQ3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBDcmVhdGVQcm9qZWN0U3RvcmFnZSB9IGZyb20gXCIuL3Byb2plY3Rfc3RvcmFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyRE9NIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IHByb2plY3RTdG9yYWdlID0gbmV3IENyZWF0ZVByb2plY3RTdG9yYWdlKCk7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIpO1xuY29uc3QgYW5vdGhlclByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdChcIkFub3RoZXIgUHJvamVjdFwiKTtcblxuZGVmYXVsdFByb2plY3QuY3JlYXRlTmV3VGFzayhcIlRhc2sgT25lXCIsIFwiQmFuYW5hcywgYXBwbGVzXCIsIDEsIGZhbHNlLCBcIjIwMjItMDMtMDRcIik7XG5kZWZhdWx0UHJvamVjdC5jcmVhdGVOZXdUYXNrKFwiVGFzayBUd29cIiwgXCJCYW5hbmFzLCBhcHBsZXNcIiwgMywgZmFsc2UsIFwiMjAyMi0wMy0xNVwiKTtcbmRlZmF1bHRQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soXCJUYXNrIFRocmVlXCIsIFwiQmFuYW5hcywgYXBwbGVzXCIsIDIsIGZhbHNlLCBcIjIwMjItMDQtMjBcIik7XG5cbmNvbnN0IERPTVJlbmRlcmVyID0gbmV3IHJlbmRlckRPTSgpO1xuXG5ET01SZW5kZXJlci5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuRE9NUmVuZGVyZXIucmVuZGVyVGFza3MoKTtcbkRPTVJlbmRlcmVyLm5ld1Byb2plY3RDbGljaygpO1xuRE9NUmVuZGVyZXIubmV3VGFza0NsaWNrKCk7XG5cbmV4cG9ydCB7IHByb2plY3RTdG9yYWdlLCBET01SZW5kZXJlciB9IiwiaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgRE9NUmVuZGVyZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jbGFzcyBDcmVhdGVQcm9qZWN0U3RvcmFnZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH07XG5cbiAgICAvLyBmaW5kIGFuZCBzZWxlY3QgcHJvamVjdCBieSBpZFxuXG4gICAgcHJvamVjdEdldHRlcihwcm9qZWN0SWQpIHtcblxuICAgICAgICBjb25zdCBmaW5kUHJvamVjdEluZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHByb2plY3RJZDtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdFN0b3JhZ2UubGlzdC5maW5kSW5kZXgoZmluZFByb2plY3RJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlLmxpc3RbcHJvamVjdEluZGV4XSlcblxuICAgICAgICByZXR1cm4gcHJvamVjdFN0b3JhZ2UubGlzdFtwcm9qZWN0SW5kZXhdO1xuXG4gICAgfTtcblxuICAgIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZSgpIHtcblxuICAgICAgICBjb25zdCBzbGljZWRJZCA9IHRoaXMuaWQuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBmaW5kUHJvamVjdEluZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHNsaWNlZElkO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0U3RvcmFnZS5saXN0LmZpbmRJbmRleChmaW5kUHJvamVjdEluZGV4KTtcblxuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuXG4gICAgICAgIERPTVJlbmRlcmVyLnJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCB7IENyZWF0ZVByb2plY3RTdG9yYWdlIH07IiwiaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL2luZGV4J1xuXG4vLyBwcm9qZWN0IG9iamVjdHNcblxuY2xhc3MgQ3JlYXRlUHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUd1aWQoKTtcbiAgICAgICAgdGhpcy50YXNrQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGFza1N0b3JhZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0VG9TdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBzaG91bGQgZ28gaW4gcHJvamVjdCBzdG9yYWdlXG5cbiAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKCkge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LnB1c2godGhpcyk7XG4gICAgICAgIC8vIERPTVJlbmRlcmVyLnJlbmRlclByb2plY3RMaXN0KCk7IFxuICAgIH1cblxuICAgIC8vIGFkZCB0YXNrcyB0byBwcm9qZWN0IG9iamVjdFxuXG4gICAgY3JlYXRlTmV3VGFzayAobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUpIHtcblxuICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVHdWlkKCksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50YXNrU3RvcmFnZS5wdXNoKHRhc2spO1xuXG4gICAgICAgIHRoaXMudGFza0NvdW50ZXIrKztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdGFza3MgZnJvbSBwcm9qZWN0IG9iamVjdFxuXG4gICAgZGVsZXRlVGFzayAoc2VsZWN0ZWRQcm9qZWN0LCB0YXNrSWQpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QudGFza1N0b3JhZ2UpXG5cbiAgICAgICAgY29uc3QgZmluZFRhc2tJbmRleCA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0YXNrSWQ7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHNlbGVjdGVkUHJvamVjdC50YXNrU3RvcmFnZS5maW5kSW5kZXgoZmluZFRhc2tJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbmRleClcblxuICAgICAgICBzZWxlY3RlZFByb2plY3QudGFza1N0b3JhZ2Uuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG5cbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tDb3VudGVyLS07XG4gICAgfVxuXG4gICAgLy8gaWRcblxuICAgIGdlbmVyYXRlR3VpZCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCwgaSwgajtcbiAgICAgICAgcmVzdWx0ID0gJ0EnOyAvLyBzaG91bGQgbm90IHN0YXJ0IHdpdGggbnVtYmVyIGZvciBxdWVyeXNlbGVjdG9yXG4gICAgICAgIGZvcihqPTA7IGo8MzI7IGorKykge1xuICAgICAgICAgIGlmKCBqID09IDggfHwgaiA9PSAxMiB8fCBqID09IDE2IHx8IGogPT0gMjApXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAnLSc7XG4gICAgICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNikudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG59XG5cbmV4cG9ydCB7IENyZWF0ZVByb2plY3QgfTsiLCJpbXBvcnQgeyBDcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0cydcbmltcG9ydCB7IHByb2plY3RTdG9yYWdlIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IERPTVJlbmRlcmVyIH0gZnJvbSAnLi9pbmRleCdcblxuLy8gc2hvdyB0YXNrcyBvbiBtYWluIGNvbnRlbnRcblxuY2xhc3MgcmVuZGVyRE9NIHtcblxuICAgIC8vIHJlbmRlciBsaXN0IG9mIHByb2plY3RzXG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgICAgIHByb2plY3RMaXN0VWxFbGVtZW50LmlubmVySFRNTCA9IGBgO1xuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0TGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudC5uYW1lKTtcblxuICAgICAgICAgICAgcHJvamVjdExpc3RMaUVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwic3Bhbi1wcm9qZWN0XCIgaWQ9XCIke2VsZW1lbnQuaWR9LXNwYW5cIj4ke2VsZW1lbnQubmFtZX08L3NwYW4+IDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIiBpZD1cIiR7ZWxlbWVudC5pZH0tZGVsZXRlLWljb25cIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyLDIwQzcuNTksMjAgNCwxNi40MSA0LDEyQzQsNy41OSA3LjU5LDQgMTIsNEMxNi40MSw0IDIwLDcuNTkgMjAsMTJDMjAsMTYuNDEgMTYuNDEsMjAgMTIsMjBNMTIsMkM2LjQ3LDIgMiw2LjQ3IDIsMTJDMiwxNy41MyA2LjQ3LDIyIDEyLDIyQzE3LjUzLDIyIDIyLDE3LjUzIDIyLDEyQzIyLDYuNDcgMTcuNTMsMiAxMiwyTTE0LjU5LDhMMTIsMTAuNTlMOS40MSw4TDgsOS40MUwxMC41OSwxMkw4LDE0LjU5TDkuNDEsMTZMMTIsMTMuNDFMMTQuNTksMTZMMTYsMTQuNTlMMTMuNDEsMTJMMTYsOS40MUwxNC41OSw4WlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKTtcblxuICAgICAgICAgICAgcHJvamVjdExpc3RVbEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RMaUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudC5pZH0tZGVsZXRlLWljb25gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZUljb24pXG4gICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFN0b3JhZ2UucmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5yZW5kZXJUYXNrcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZW5kZXIgdGFza3Mgb2YgZmlyc3QgcHJvamVjdCBvbiBmaXJzdCBsb2FkXG5cbiAgICByZW5kZXJUYXNrcyhldmVudCkge1xuXG4gICAgICAgIGxldCBwcm9qZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuXG4gICAgICAgIGlmKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF0gIT0gXCJ0YXNrLW1vZGFsLXRpY2tcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgZXZlbnQnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgLTUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdElkKVxuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICAgICAgfSAgIGVsc2UgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwidGFzay1tb2RhbC10aWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpLmlkO1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RTdG9yYWdlLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0U3RvcmFnZS5saXN0WzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IG9uIGxvYWQgYW5kIHllcyBldmVudCcpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgICAgICAgY29udGVudFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0SWQpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGBgO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gcHJvamVjdC50YXNrU3RvcmFnZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRhc2tDb250YWluZXIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSB0YXNrQ29udGFpbmVyW3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRQcmlvcml0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkUHJpb3JpdHlTdHlsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkQ29udGVudERpdik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVGl0bGVcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke3Rhc2tPYmplY3QubmFtZX1gO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke3Rhc2tPYmplY3QuZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5XG4gICAgICAgICAgICAgICAgaWYodGFza09iamVjdC5wcmlvcml0eSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWhpZ2gnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0YXNrT2JqZWN0LnByaW9yaXR5ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRQcmlvcml0eVN0eWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbWVkaXVtJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGFza09iamVjdC5wcmlvcml0eSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxvdycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIER1ZSBkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgY2FyZERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dGFza09iamVjdC5kYXRlfWApXG4gICAgICAgICAgICAgICAgY2FyZERhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY2FyZERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgY2FyZERhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlOic7XG5cbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkRGF0ZUxhYmVsKVxuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmREYXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIENvbXBsZXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkQ29tcGxldGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNhcmRDb21wbGV0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb21wbGV0aW9uJyk7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZENvbXBsZXRpb24pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZENvbXBsZXRpb25Eb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgY2FyZENvbXBsZXRpb25Eb25lLmlubmVyVGV4dCA9ICdEb25lJztcbiAgICAgICAgICAgICAgICBjYXJkQ29tcGxldGlvbi5hcHBlbmRDaGlsZChjYXJkQ29tcGxldGlvbkRvbmUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZENvbXBsZXRpb25Ob3REb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgY2FyZENvbXBsZXRpb25Ob3REb25lLmlubmVyVGV4dCA9ICdOb3QgRG9uZSc7XG4gICAgICAgICAgICAgICAgY2FyZENvbXBsZXRpb24uYXBwZW5kQ2hpbGQoY2FyZENvbXBsZXRpb25Ob3REb25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSAnJztcblxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgXG5cbiAgICAvLyBzZWxlY3QgcHJvamVjdCBmcm9tIGxpc3RcblxuXG5cbiAgICAvLyBjcmVhdGUgbmV3IHByb2plY3QgbGlzdGVuZXJcblxuICAgIG5ld1Byb2plY3RDbGljaygpIHtcblxuICAgICAgICAvLyBzaG93IG1vZGFsIHdpdGggbmFtZSBhbmQgdGlja21hcmtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmV3LXByb2plY3QnKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1tb2RhbCcpO1xuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbC1jbG9zZScpO1xuICAgICAgICBjb25zdCB0aWNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsLXRpY2snKTtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvamVjdEVsZW1lbnQpXG4gICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gKGV2ZW50KSA9PiB7ICAgICAgICBcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0RnJvbUlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmZvckVhY2goIGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0TW9kYWwpKVxuICAgIFxuICAgICAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0TW9kYWwpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLmNyZWF0ZVByb2plY3RGcm9tSW5wdXQpXG4gICAgXG4gICAgXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBcbiAgICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZW50ZXJLZXkpO1xuICAgIH07XG5cbiAgICAvLyBcblxuICAgIFxuICAgIFxuICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBsaXN0ZW5lclxuXG4gICAgbmV3VGFza0NsaWNrKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuZXctdGFzaycpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrSWNvbilcbiAgICBcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpO1xuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1tb2RhbC1jbG9zZScpO1xuICAgICAgICBjb25zdCB0aWNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsLXRpY2snKTtcbiAgICAgICAgY29uc29sZS5sb2codGlja0ljb24pXG4gICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGNsb3NlVGFza01vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIGNvbnN0IGVudGVyS2V5ID0gKGV2ZW50KSA9PiB7ICAgICAgICBcbiAgICAgICAgLy8gICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIC8vICAgICAgICAgY2xvc2VUYXNrTW9kYWwoKTtcbiAgICAgICAgLy8gICAgICAgICAvLyBjcmVhdGVQcm9qZWN0RnJvbUlucHV0KCk7IFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICBuZXdUYXNrSWNvbi5mb3JFYWNoKCBlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01vZGFsKSlcbiAgICBcbiAgICAgICAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcbiAgICAgICAgdGlja0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5jcmVhdGVUYXNrRnJvbUlucHV0KTtcbiAgICAgICAgdGlja0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5yZW5kZXJUYXNrcyk7XG4gICAgXG4gICAgXG4gICAgICAgIC8vIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBcbiAgICAgICAgLy8gaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZW50ZXJLZXkpO1xuICAgIH07XG5cbiAgICBjcmVhdGVQcm9qZWN0RnJvbUlucHV0ID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3QoaW5wdXRWYWx1ZSk7XG4gICAgXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgRE9NUmVuZGVyZXIucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICBcbiAgICB9O1xuXG4gICAgY3JlYXRlVGFza0Zyb21JbnB1dCgpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RUaXRsZS5pZFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBuYW1lVmFsdWUgPSBuYW1lSW5wdXQudmFsdWU7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGF0ZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wcmlvcml0eScpO1xuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICAgIHByaW9yaXR5VmFsdWUgPSBwYXJzZUludChwcmlvcml0eVZhbHVlKTtcbiAgICBcbiAgICAgICAgcHJvamVjdC5jcmVhdGVOZXdUYXNrKG5hbWVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgZmFsc2UsIGRhdGVWYWx1ZSk7ICBcbiAgICBcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgcmVuZGVyRE9NIH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9