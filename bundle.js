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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: 10px;\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task-icon {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            grid-template-rows: repeat(auto-fit);\n            gap: 50px;\n        }\n        .card {\n            box-sizing: border-box;\n            height: 300px;\n            /* width: 300px; */\n            padding: 20px;\n            background-color: var(--sidebar-background);\n            border-radius: 20px;\n        }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: 20px;\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,6BAA6B;IAC7B,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,4CAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,4CAAiD;AACrD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,wDAAwD;IACxD,wBAAwB;IACxB,+BAA+B;AACnC;;IAEI;QACI,kBAAkB;QAClB,aAAa;QACb,+CAA+C;QAC/C,0CAA0C;IAC9C;;QAEI;YACI,uBAAuB;YACvB,iBAAiB;YACjB,kBAAkB;YAClB,yBAAyB;YACzB,gCAAgC;QACpC;;QAEA;YACI,aAAa;YACb,mBAAmB;YACnB,SAAS;YACT,kBAAkB;QACtB;;QAEA;YACI,YAAY;YACZ,UAAU;YACV,sBAAsB;YACtB,mBAAmB;YACnB,YAAY;YACZ,aAAa;QACjB;;IAEJ;QACI,eAAe;QACf,2CAA2C;IAC/C;;QAEI;YACI,aAAa;YACb,2BAA2B;YAC3B,SAAS;YACT,mBAAmB;YACnB,sBAAsB;QAC1B;;QAEA;YACI,aAAa;YACb,gBAAgB;YAChB,mBAAmB;YACnB,8BAA8B;YAC9B,mBAAmB;YACnB,gBAAgB;QACpB;;QAEA;YACI,eAAe;QACnB;;IAEJ;QACI,aAAa;QACb,2DAA2D;QAC3D,4BAA4B;QAC5B,aAAa;QACb,SAAS;QACT,2CAA2C;IAC/C;;QAEI;YACI,eAAe;YACf,aAAa;YACb,8BAA8B;YAC9B,mBAAmB;YACnB,eAAe;YACf,gCAAgC;QACpC;YACI;gBACI,aAAa;gBACb,mBAAmB;gBACnB,SAAS;YACb;;YAEA;gBACI,gCAAgC;YACpC;QACJ;YACI,eAAe;YACf,aAAa;YACb,2DAA2D;YAC3D,oCAAoC;YACpC,SAAS;QACb;QACA;YACI,sBAAsB;YACtB,aAAa;YACb,kBAAkB;YAClB,aAAa;YACb,2CAA2C;YAC3C,mBAAmB;QACvB;;QAEA,2BAA2B;AACnC;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;AAC5D;;IAEI,sBAAsB;IACtB;QACI,aAAa;QACb,kCAAkC;QAClC,4BAA4B;QAC5B,2CAA2C;QAC3C,gBAAgB,EAAE,kCAAkC;QACpD,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,UAAU,EAAE,oDAAoD;IACpE;;QAEI;YACI,kBAAkB;YAClB,kBAAkB;QACtB;;QAEA;YACI,kBAAkB;YAClB,eAAe;YACf,aAAa;YACb,8BAA8B;YAC9B,mBAAmB;YACnB,SAAS;YACT,aAAa;QACjB;;QAEA;YACI,WAAW;YACX,kBAAkB;QACtB;;QAEA;YACI,6BAA6B;YAC7B,aAAa;YACb,YAAY;QAChB;;IAEJ,gBAAgB;;IAEhB;;OAEG;IACH,qBAAqB;IACrB;QACI,wBAAwB;QACxB,YAAY;QACZ,eAAe;QACf,iBAAiB;IACrB;;IAEA;;QAEI,YAAY;QACZ,qBAAqB;QACrB,eAAe;IACnB","sourcesContent":[":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url('./fonts/CedarvilleCursive-Regular.ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: 10px;\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task-icon {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            grid-template-rows: repeat(auto-fit);\n            gap: 50px;\n        }\n        .card {\n            box-sizing: border-box;\n            height: 300px;\n            /* width: 300px; */\n            padding: 20px;\n            background-color: var(--sidebar-background);\n            border-radius: 20px;\n        }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: 20px;\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }"],"sourceRoot":""}]);
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

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectStorage": () => (/* binding */ createProjectStorage),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectStorage": () => (/* binding */ projectStorage)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


// create new object to hold project objects

class createProjectStorage {
    constructor () {
        this.list = [];
    }
}

const projectStorage = new createProjectStorage('default');

// project objects

class createProject {
    constructor (name) {
        this.name = name // .replace(/[^A-Z0-9]/ig, "_"); // removes whitespace, replace with underscore
        this.id = this.generateGuid();
        this.taskCounter = 0;
        this.taskStorage = [];
        this.addProjectToStorage();
    }

    addProjectToStorage() {
        projectStorage.list.push(this);
        _render__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer.renderProjectList();
    }

    removeProjectFromStorage() {

        const projectID = this.id.slice(0, -12);

        const findProjectIndex = (element) => element.id === projectID;
        
        const projectIndex = projectStorage.list.findIndex(findProjectIndex);

        projectStorage.list.splice(projectIndex, 1);
        _render__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer.renderProjectList();
    }

    // add tasks to project object

    createNewTask (name, description, priority, status, date) {

        const taskName = 'task' + this.taskCounter;
        this.taskStorage[taskName] = {
            name: name,
            description: description,
            priority: priority,
            status: status,
            date: date,
        }

        this.taskCounter++;
    }

    // remove tasks from project object

    deleteTask (taskName) {

        delete this[taskName];

        this.taskCounter--;
    }

    // id

    generateGuid() {
        let result, i, j;
        result = 'A';
        for(j=0; j<32; j++) {
          if( j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
          i = Math.floor(Math.random()*16).toString(16).toUpperCase();
          result = result + i;
        }
        return result;
      }

}

// const testProject = new createProject('default space test');
// const testProjectTwo = new createProject('test');
// const testProjectThree = new createProject('anothertest');
// const testProjectFour = new createProject('ua');

// testProject.addProjectToStorage();
// testProjectTwo.addProjectToStorage()
// testProjectThree.addProjectToStorage()
// testProjectFour.addProjectToStorage()

// console.log(projectStorage)

// testProjectThree.removeProjectFromStorage();

// console.log(projectStorage)

// testProject.createNewTask('new task', 'buy bottles', 1, false, 22022022);

// console.log(projectStorage)

// testProject.deleteTask('task0');

// console.log(projectStorage)





/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMRenderer": () => (/* binding */ DOMRenderer)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


// show tasks on main content



// click to create new project


const newProjectClick = (() => {

    // show modal with name and tickmark

    const newProjectElement = document.querySelectorAll('#new-project');
    const modal = document.querySelector('#myModal');
    const closeIcon = document.querySelector('.close');
    const tickIcon = document.querySelector('.tick');

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    
    const openModal = () => {
        modal.style.display = "block";
    }

    const closeModal = () => {
        modal.style.display = "none";
    }

    const enterKey = (event) => {        
        if(event.keyCode === 13) {
            closeModal();
            createProjectFromInput();
        }
    }
    
    newProjectElement.forEach( element => element.addEventListener('click', openModal))

    closeIcon.addEventListener('click', closeModal);
    tickIcon.addEventListener('click', closeModal);


    const inputElement = document.querySelector('.project-name-input');

    inputElement.addEventListener('keyup', enterKey);
})();



const createProjectFromInput = () => {

    let input = document.querySelector('.project-name-input');
    const inputValue = input.value;

    const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.createProject(inputValue);

    input.value = '';

};

const newProjectNameGetter = (() => {

    const projectNameInputClick = document.querySelector('.tick');
    projectNameInputClick.addEventListener('click', createProjectFromInput);

})();

// new task click

// const newTaskClick = (() => {
//     const newTaskIcon = document.querySelector('#new-task-icon').addEventListener('click');

// })();

// render new project list

class renderDOM {

    renderProjectList() {

        const projectListUlElement = document.querySelector('.list');
        projectListUlElement.innerHTML = ``;

        _projects__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.forEach( element => {

            const thisElement = element;

            const projectListLiElement = document.createElement('li');
            projectListLiElement.setAttribute('class', 'list-item');
            projectListLiElement.setAttribute('id', element.name);

            projectListLiElement.innerHTML = `<span class="span-project" id="${element.id}-span">${element.name}</span> <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${element.id}-delete-icon">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
            </svg>`; // replace projectName with value from input to get rid of possible underscores

            projectListLiElement.firstElementChild.addEventListener('click', DOMRenderer.renderTasksOnProjectClick);

            projectListUlElement.appendChild(projectListLiElement);

            const deleteIcon = document.querySelector(`#${element.id}-delete-icon`);
            deleteIcon.addEventListener('click', thisElement.removeProjectFromStorage);
        })
    }

    renderTasksOnProjectClick(event) {

        const projectName = event.target.innerHTML;
        const projectId = event.target.id;

        const contentTitle = document.querySelector('.content-project-title');
        contentTitle.innerText = `${projectName}`;
        contentTitle.setAttribute('id', projectId);

        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = ``;

        _projects__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.forEach(element => {
            if(element.name === projectName) {

                const object = element.taskStorage;
                
                for (const property in object) {

                    const cardDiv = document.createElement('div');
                    cardDiv.setAttribute('class', 'card');

                    const cardTitle = document.createElement('div');
                    cardTitle.setAttribute('class', 'card-title');
                    cardTitle.innerHTML = `${element.name}`;
                    cardDiv.appendChild(cardTitle);

                    cardContainer.appendChild(cardDiv);
                    
                }

                element.taskStorage.forEach(element => {

                    const cardDiv = document.createElement('div');
                    cardDiv.setAttribute('class', 'card');

                    const cardTitle = document.createElement('div');
                    cardTitle.setAttribute('class', 'card-title');
                    cardTitle.innerHTML = `${element.name}`;
                    cardDiv.appendChild(cardTitle);

                    cardContainer.appendChild(cardDiv);
                });
            }
        })

    }


}


    // each project to have X linked to the object to delete

const DOMRenderer = new renderDOM();





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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");




const defaultProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.createProject('Default');
const anotherProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.createProject('To Do Project');

defaultProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
defaultProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
defaultProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);

anotherProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
anotherProject.createNewTask('Store list', 'Bananas, apples', 1, false, 4032022);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDs7O0FBR0E7OztBQUdBOztBQUVBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25LdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUM0RDtBQUMxQzs7QUFFdkMsMkJBQTJCLG9EQUFhO0FBQ3hDLDJCQUEyQixvREFBYTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDc1NTY5O1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogIzk0YTNiODtcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6ICNmMWY1Zjk7XFxuICAgIC0taWNvbi1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRpdGxlLXdlaWdodDogODAwO1xcbiAgICAtLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRleHQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2VkYXJ2aWxsZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDMwMHB4KSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBtaW5tYXgoY2FsYygxMDB2aCAtIDYwcHgpLCAxZnIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10ZXh0LXdlaWdodCk7XFxufVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmxvZ28ge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDZWRhcnZpbGxlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS13ZWlnaHQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlYXJjaCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIGlucHV0LCAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zcGFuLXByb2plY3Q6aG92ZXIsICNuZXctcHJvamVjdDpob3ZlciwgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbmV3LXRhc2staWNvbiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQpO1xcbiAgICAgICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgLyogd2lkdGg6IDMwMHB4OyAqL1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MCUgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1uYW1lLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC8qIFRJY2sgYnV0dG9uICovXFxuXFxuICAgIC8qIC50aWNrIHtcXG5cXG4gICAgfSAqL1xcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAgIC5jbG9zZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHdEQUF3RDtJQUN4RCx3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYiwrQ0FBK0M7UUFDL0MsMENBQTBDO0lBQzlDOztRQUVJO1lBQ0ksdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIseUJBQXlCO1lBQ3pCLGdDQUFnQztRQUNwQzs7UUFFQTtZQUNJLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsU0FBUztZQUNULGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLFlBQVk7WUFDWixVQUFVO1lBQ1Ysc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osYUFBYTtRQUNqQjs7SUFFSjtRQUNJLGVBQWU7UUFDZiwyQ0FBMkM7SUFDL0M7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsMkJBQTJCO1lBQzNCLFNBQVM7WUFDVCxtQkFBbUI7WUFDbkIsc0JBQXNCO1FBQzFCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsOEJBQThCO1lBQzlCLG1CQUFtQjtZQUNuQixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxlQUFlO1FBQ25COztJQUVKO1FBQ0ksYUFBYTtRQUNiLDJEQUEyRDtRQUMzRCw0QkFBNEI7UUFDNUIsYUFBYTtRQUNiLFNBQVM7UUFDVCwyQ0FBMkM7SUFDL0M7O1FBRUk7WUFDSSxlQUFlO1lBQ2YsYUFBYTtZQUNiLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdDQUFnQztRQUNwQztZQUNJO2dCQUNJLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixTQUFTO1lBQ2I7O1lBRUE7Z0JBQ0ksZ0NBQWdDO1lBQ3BDO1FBQ0o7WUFDSSxlQUFlO1lBQ2YsYUFBYTtZQUNiLDJEQUEyRDtZQUMzRCxvQ0FBb0M7WUFDcEMsU0FBUztRQUNiO1FBQ0E7WUFDSSxzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsMkNBQTJDO1lBQzNDLG1CQUFtQjtRQUN2Qjs7UUFFQSwyQkFBMkI7QUFDbkM7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUM1RDs7SUFFSSxzQkFBc0I7SUFDdEI7UUFDSSxhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLDRCQUE0QjtRQUM1QiwyQ0FBMkM7UUFDM0MsZ0JBQWdCLEVBQUUsa0NBQWtDO1FBQ3BELGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFVBQVUsRUFBRSxvREFBb0Q7SUFDcEU7O1FBRUk7WUFDSSxrQkFBa0I7WUFDbEIsa0JBQWtCO1FBQ3RCOztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsYUFBYTtRQUNqQjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSw2QkFBNkI7WUFDN0IsYUFBYTtZQUNiLFlBQVk7UUFDaEI7O0lBRUosZ0JBQWdCOztJQUVoQjs7T0FFRztJQUNILHFCQUFxQjtJQUNyQjtRQUNJLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGVBQWU7SUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDc1NTY5O1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogIzk0YTNiODtcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6ICNmMWY1Zjk7XFxuICAgIC0taWNvbi1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRpdGxlLXdlaWdodDogODAwO1xcbiAgICAtLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRleHQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDMwMHB4KSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBtaW5tYXgoY2FsYygxMDB2aCAtIDYwcHgpLCAxZnIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10ZXh0LXdlaWdodCk7XFxufVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmxvZ28ge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDZWRhcnZpbGxlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS13ZWlnaHQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlYXJjaCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIGlucHV0LCAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zcGFuLXByb2plY3Q6aG92ZXIsICNuZXctcHJvamVjdDpob3ZlciwgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbmV3LXRhc2staWNvbiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQpO1xcbiAgICAgICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICAgICAgLyogd2lkdGg6IDMwMHB4OyAqL1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MCUgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1uYW1lLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC8qIFRJY2sgYnV0dG9uICovXFxuXFxuICAgIC8qIC50aWNrIHtcXG5cXG4gICAgfSAqL1xcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAgIC5jbG9zZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgRE9NUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcblxuLy8gY3JlYXRlIG5ldyBvYmplY3QgdG8gaG9sZCBwcm9qZWN0IG9iamVjdHNcblxuY2xhc3MgY3JlYXRlUHJvamVjdFN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0U3RvcmFnZSA9IG5ldyBjcmVhdGVQcm9qZWN0U3RvcmFnZSgnZGVmYXVsdCcpO1xuXG4vLyBwcm9qZWN0IG9iamVjdHNcblxuY2xhc3MgY3JlYXRlUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSAvLyAucmVwbGFjZSgvW15BLVowLTldL2lnLCBcIl9cIik7IC8vIHJlbW92ZXMgd2hpdGVzcGFjZSwgcmVwbGFjZSB3aXRoIHVuZGVyc2NvcmVcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2VuZXJhdGVHdWlkKCk7XG4gICAgICAgIHRoaXMudGFza0NvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRhc2tTdG9yYWdlID0gW107XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdFRvU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3RUb1N0b3JhZ2UoKSB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3QucHVzaCh0aGlzKTtcbiAgICAgICAgRE9NUmVuZGVyZXIucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UoKSB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gdGhpcy5pZC5zbGljZSgwLCAtMTIpO1xuXG4gICAgICAgIGNvbnN0IGZpbmRQcm9qZWN0SW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gcHJvamVjdElEO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdFN0b3JhZ2UubGlzdC5maW5kSW5kZXgoZmluZFByb2plY3RJbmRleCk7XG5cbiAgICAgICAgcHJvamVjdFN0b3JhZ2UubGlzdC5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgRE9NUmVuZGVyZXIucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdGFza3MgdG8gcHJvamVjdCBvYmplY3RcblxuICAgIGNyZWF0ZU5ld1Rhc2sgKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlKSB7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSAndGFzaycgKyB0aGlzLnRhc2tDb3VudGVyO1xuICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tOYW1lXSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhc2tDb3VudGVyKys7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHRhc2tzIGZyb20gcHJvamVjdCBvYmplY3RcblxuICAgIGRlbGV0ZVRhc2sgKHRhc2tOYW1lKSB7XG5cbiAgICAgICAgZGVsZXRlIHRoaXNbdGFza05hbWVdO1xuXG4gICAgICAgIHRoaXMudGFza0NvdW50ZXItLTtcbiAgICB9XG5cbiAgICAvLyBpZFxuXG4gICAgZ2VuZXJhdGVHdWlkKCkge1xuICAgICAgICBsZXQgcmVzdWx0LCBpLCBqO1xuICAgICAgICByZXN1bHQgPSAnQSc7XG4gICAgICAgIGZvcihqPTA7IGo8MzI7IGorKykge1xuICAgICAgICAgIGlmKCBqID09IDggfHwgaiA9PSAxMiB8fCBqID09IDE2IHx8IGogPT0gMjApXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAnLSc7XG4gICAgICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNikudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG59XG5cbi8vIGNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3QoJ2RlZmF1bHQgc3BhY2UgdGVzdCcpO1xuLy8gY29uc3QgdGVzdFByb2plY3RUd28gPSBuZXcgY3JlYXRlUHJvamVjdCgndGVzdCcpO1xuLy8gY29uc3QgdGVzdFByb2plY3RUaHJlZSA9IG5ldyBjcmVhdGVQcm9qZWN0KCdhbm90aGVydGVzdCcpO1xuLy8gY29uc3QgdGVzdFByb2plY3RGb3VyID0gbmV3IGNyZWF0ZVByb2plY3QoJ3VhJyk7XG5cbi8vIHRlc3RQcm9qZWN0LmFkZFByb2plY3RUb1N0b3JhZ2UoKTtcbi8vIHRlc3RQcm9qZWN0VHdvLmFkZFByb2plY3RUb1N0b3JhZ2UoKVxuLy8gdGVzdFByb2plY3RUaHJlZS5hZGRQcm9qZWN0VG9TdG9yYWdlKClcbi8vIHRlc3RQcm9qZWN0Rm91ci5hZGRQcm9qZWN0VG9TdG9yYWdlKClcblxuLy8gY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG5cbi8vIHRlc3RQcm9qZWN0VGhyZWUucmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlKCk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuXG4vLyB0ZXN0UHJvamVjdC5jcmVhdGVOZXdUYXNrKCduZXcgdGFzaycsICdidXkgYm90dGxlcycsIDEsIGZhbHNlLCAyMjAyMjAyMik7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuXG4vLyB0ZXN0UHJvamVjdC5kZWxldGVUYXNrKCd0YXNrMCcpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFN0b3JhZ2UsIGNyZWF0ZVByb2plY3QsIHByb2plY3RTdG9yYWdlfTtcblxuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3RzJ1xuXG4vLyBzaG93IHRhc2tzIG9uIG1haW4gY29udGVudFxuXG5cblxuLy8gY2xpY2sgdG8gY3JlYXRlIG5ldyBwcm9qZWN0XG5cblxuY29uc3QgbmV3UHJvamVjdENsaWNrID0gKCgpID0+IHtcblxuICAgIC8vIHNob3cgbW9kYWwgd2l0aCBuYW1lIGFuZCB0aWNrbWFya1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU1vZGFsJyk7XG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgY29uc3QgdGlja0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGljaycpO1xuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRlcktleSA9IChldmVudCkgPT4geyAgICAgICAgXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RnJvbUlucHV0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbmV3UHJvamVjdEVsZW1lbnQuZm9yRWFjaCggZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKSlcblxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cblxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKTtcblxuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGVudGVyS2V5KTtcbn0pKCk7XG5cblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0RnJvbUlucHV0ID0gKCkgPT4ge1xuXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdChpbnB1dFZhbHVlKTtcblxuICAgIGlucHV0LnZhbHVlID0gJyc7XG5cbn07XG5cbmNvbnN0IG5ld1Byb2plY3ROYW1lR2V0dGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXRDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWNrJyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dENsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdEZyb21JbnB1dCk7XG5cbn0pKCk7XG5cbi8vIG5ldyB0YXNrIGNsaWNrXG5cbi8vIGNvbnN0IG5ld1Rhc2tDbGljayA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3QgbmV3VGFza0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2staWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG5cbi8vIH0pKCk7XG5cbi8vIHJlbmRlciBuZXcgcHJvamVjdCBsaXN0XG5cbmNsYXNzIHJlbmRlckRPTSB7XG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgICAgIHByb2plY3RMaXN0VWxFbGVtZW50LmlubmVySFRNTCA9IGBgO1xuXG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3QuZm9yRWFjaCggZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRoaXNFbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RMaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50Lm5hbWUpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJzcGFuLXByb2plY3RcIiBpZD1cIiR7ZWxlbWVudC5pZH0tc3BhblwiPiR7ZWxlbWVudC5uYW1lfTwvc3Bhbj4gPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiIGlkPVwiJHtlbGVtZW50LmlkfS1kZWxldGUtaWNvblwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPmA7IC8vIHJlcGxhY2UgcHJvamVjdE5hbWUgd2l0aCB2YWx1ZSBmcm9tIGlucHV0IHRvIGdldCByaWQgb2YgcG9zc2libGUgdW5kZXJzY29yZXNcblxuICAgICAgICAgICAgcHJvamVjdExpc3RMaUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5yZW5kZXJUYXNrc09uUHJvamVjdENsaWNrKTtcblxuICAgICAgICAgICAgcHJvamVjdExpc3RVbEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RMaUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudC5pZH0tZGVsZXRlLWljb25gKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzRWxlbWVudC5yZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlclRhc2tzT25Qcm9qZWN0Q2xpY2soZXZlbnQpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5pZDtcblxuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RJZCk7XG5cbiAgICAgICAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGBgO1xuXG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQubmFtZSA9PT0gcHJvamVjdE5hbWUpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGVsZW1lbnQudGFza1N0b3JhZ2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke2VsZW1lbnQubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudC50YXNrU3RvcmFnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjYXJkVGl0bGUuaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbn1cblxuXG4gICAgLy8gZWFjaCBwcm9qZWN0IHRvIGhhdmUgWCBsaW5rZWQgdG8gdGhlIG9iamVjdCB0byBkZWxldGVcblxuY29uc3QgRE9NUmVuZGVyZXIgPSBuZXcgcmVuZGVyRE9NKCk7XG5cbmV4cG9ydCB7IERPTVJlbmRlcmVyIH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFN0b3JhZ2UsIGNyZWF0ZVByb2plY3QsIHByb2plY3RTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBET01SZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdCgnRGVmYXVsdCcpO1xuY29uc3QgYW5vdGhlclByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdCgnVG8gRG8gUHJvamVjdCcpO1xuXG5kZWZhdWx0UHJvamVjdC5jcmVhdGVOZXdUYXNrKCdTdG9yZSBsaXN0JywgJ0JhbmFuYXMsIGFwcGxlcycsIDEsIGZhbHNlLCA0MDMyMDIyKTtcbmRlZmF1bHRQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soJ1N0b3JlIGxpc3QnLCAnQmFuYW5hcywgYXBwbGVzJywgMSwgZmFsc2UsIDQwMzIwMjIpO1xuZGVmYXVsdFByb2plY3QuY3JlYXRlTmV3VGFzaygnU3RvcmUgbGlzdCcsICdCYW5hbmFzLCBhcHBsZXMnLCAxLCBmYWxzZSwgNDAzMjAyMik7XG5cbmFub3RoZXJQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soJ1N0b3JlIGxpc3QnLCAnQmFuYW5hcywgYXBwbGVzJywgMSwgZmFsc2UsIDQwMzIwMjIpO1xuYW5vdGhlclByb2plY3QuY3JlYXRlTmV3VGFzaygnU3RvcmUgbGlzdCcsICdCYW5hbmFzLCBhcHBsZXMnLCAxLCBmYWxzZSwgNDAzMjAyMik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9