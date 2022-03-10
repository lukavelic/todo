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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: rgb(255, 0, 0);\n    --card-medium-priority: rgb(255, 238, 0);\n    --card-low-priority: rgb(37, 184, 0);\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n    --border-radius: 15px;\n}\n\nsvg {\n    overflow: visible;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: var(--border-radius);\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            /* grid-template-columns: 1; */\n            grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n            gap: 20px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            overflow: hidden;\n            height: 150px;\n            transition: height 300ms ease-out;\n            background-color: var(--sidebar-background);\n            border-radius: var(--border-radius);\n        }\n\n            .card.collapsed {\n                height: 50px;\n                transition: height 300ms ease-out;\n            }\n\n            .card-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 0px 20px 5px 20px;\n                height: 50px;\n            }\n\n            \n            .card-content {\n                position: relative;\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n            }\n\n                .card-content.strike:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 25px;\n                    left: 10px;\n                    border-bottom: 2px solid var(--header-background);\n                    width: 85%;\n                }\n\n                .strike {\n                    animation-name: FadeIn;\n                    animation-duration: 1s;\n                    transition-timing-function: linear;\n                  }\n                  \n                  @keyframes FadeIn {\n                    0% {\n                      opacity: 0;\n                    }\n                    100% {\n                      opacity: 1;\n                    }\n                  }\n                \n            .task-icons {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 10px;\n            }\n\n            .card-hider {\n                padding: 0px 20px 5px 20px;\n            }\n\n                .card-description {\n                    padding: 0px 0px 10px 0px;\n                }\n\n                .date-div {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n\n                .card-date {\n                    background-color: var(--content-background);\n                    padding-left: 5px;\n                    border-radius: 5px;\n                    border: none;\n                    outline: none;\n                }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n        }\n\n        /* Checkbox */\n\n        .checkbox-container {  \n            display: flex;  \n            position: relative;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;  \n            font-size: 20px;  \n          }  \n            \n          /* Hide the default checkbox */  \n          .checkbox-container input {  \n            visibility: hidden;  \n            cursor: pointer;  \n          }  \n            \n          /* Create a custom checkbox */  \n          .mark {  \n            position: absolute;  \n            top: 0;  \n            left: 0;  \n            height: 20px;  \n            width: 20px;  \n            background-color: var(--content-background); \n            border-radius: 3px; \n          }  \n            \n          .checkbox-container:hover input ~ .mark {  \n            background-color: gray;  \n          }  \n            \n          .checkbox-container input:checked ~ .mark {  \n            background-color: blue;  \n          }  \n            \n          /* Create the mark/indicator (hidden when not checked) */  \n          .mark:after {  \n            content: \"\";  \n            position: absolute;  \n            display: none;  \n          }  \n            \n          /* Show the mark when checked */  \n          .checkbox-container input:checked ~ .mark:after {  \n            display: block;  \n          }  \n            \n          /* Style the mark/indicator */  \n          .checkbox-container .mark:after {  \n            left: 6px;  \n            top: 2px;  \n            width: 5px;  \n            height: 10px;  \n            border: solid white;  \n            border-width: 0 3px 3px 0;  \n            transform: rotate(45deg);  \n          }  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: rgb(255, 0, 0);\n    --card-medium-priority: rgb(255, 238, 0);\n    --card-low-priority: rgb(37, 184, 0);\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n    --border-radius: 15px;\n}\n\nsvg {\n    overflow: visible;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url('./fonts/CedarvilleCursive-Regular.ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: var(--border-radius);\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            /* grid-template-columns: 1; */\n            grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n            gap: 20px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            overflow: hidden;\n            height: 150px;\n            transition: height 300ms ease-out;\n            background-color: var(--sidebar-background);\n            border-radius: var(--border-radius);\n        }\n\n            .card.collapsed {\n                height: 50px;\n                transition: height 300ms ease-out;\n            }\n\n            .card-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 0px 20px 5px 20px;\n                height: 50px;\n            }\n\n            \n            .card-content {\n                position: relative;\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n            }\n\n                .card-content.strike:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 25px;\n                    left: 10px;\n                    border-bottom: 2px solid var(--header-background);\n                    width: 85%;\n                }\n\n                .strike {\n                    animation-name: FadeIn;\n                    animation-duration: 1s;\n                    transition-timing-function: linear;\n                  }\n                  \n                  @keyframes FadeIn {\n                    0% {\n                      opacity: 0;\n                    }\n                    100% {\n                      opacity: 1;\n                    }\n                  }\n                \n            .task-icons {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 10px;\n            }\n\n            .card-hider {\n                padding: 0px 20px 5px 20px;\n            }\n\n                .card-description {\n                    padding: 0px 0px 10px 0px;\n                }\n\n                .date-div {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n\n                .card-date {\n                    background-color: var(--content-background);\n                    padding-left: 5px;\n                    border-radius: 5px;\n                    border: none;\n                    outline: none;\n                }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n        }\n\n        /* Checkbox */\n\n        .checkbox-container {  \n            display: flex;  \n            position: relative;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;  \n            font-size: 20px;  \n          }  \n            \n          /* Hide the default checkbox */  \n          .checkbox-container input {  \n            visibility: hidden;  \n            cursor: pointer;  \n          }  \n            \n          /* Create a custom checkbox */  \n          .mark {  \n            position: absolute;  \n            top: 0;  \n            left: 0;  \n            height: 20px;  \n            width: 20px;  \n            background-color: var(--content-background); \n            border-radius: 3px; \n          }  \n            \n          .checkbox-container:hover input ~ .mark {  \n            background-color: gray;  \n          }  \n            \n          .checkbox-container input:checked ~ .mark {  \n            background-color: blue;  \n          }  \n            \n          /* Create the mark/indicator (hidden when not checked) */  \n          .mark:after {  \n            content: \"\";  \n            position: absolute;  \n            display: none;  \n          }  \n            \n          /* Show the mark when checked */  \n          .checkbox-container input:checked ~ .mark:after {  \n            display: block;  \n          }  \n            \n          /* Style the mark/indicator */  \n          .checkbox-container .mark:after {  \n            left: 6px;  \n            top: 2px;  \n            width: 5px;  \n            height: 10px;  \n            border: solid white;  \n            border-width: 0 3px 3px 0;  \n            transform: rotate(45deg);  \n          }  "],"sourceRoot":""}]);
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

defaultProject.createNewTask("Task One", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut nulla architecto aliquam dolores fuga? Accusamus deleniti distinctio incidunt, eum tempora dolorum quisquam magnam blanditiis quia quod consectetur excepturi perferendis.", 1, false, "2022-03-04");
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

    deleteTask (taskId) {

        console.log(this)
        console.log(taskId)

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);
        console.log(taskIndex)

        this.taskStorage.splice(taskIndex, 1);

        this.taskCounter--;

        _index__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer.renderTasks();
    }

    checkUncheckTask (taskId) {

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        const status = this.taskStorage[taskIndex].status;

        if(status === false){
            this.taskStorage[taskIndex].status = true;
        } else {
            this.taskStorage[taskIndex].status = false;
        }

        console.log(this.taskStorage)
    }

    changeTaskPriority (taskId) {

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        const priority = this.taskStorage[taskIndex].priority;

        if(priority === 1){
            this.taskStorage[taskIndex].priority = 3;
        } else if (priority === 2){
            this.taskStorage[taskIndex].priority = 1;
        } else if (priority === 3){
            this.taskStorage[taskIndex].priority = 2;
        }

        console.log(this.taskStorage)
    }

    changeDate(newDate, taskId) {

        const dateValue = newDate;
        console.log(dateValue)
        console.log(taskId)

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        console.log(this.taskStorage[taskIndex])

        this.taskStorage[taskIndex].date = dateValue;
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
                cardDiv.setAttribute('class', 'card collapsed');
                cardDiv.setAttribute('id', `${taskObject.id}-card`);                  
                cardContainer.appendChild(cardDiv);

                const cardPriorityStyle = document.createElement('div');
                cardPriorityStyle.setAttribute('class', 'card-priority');
                cardDiv.appendChild(cardPriorityStyle);

                const cardContentDiv = document.createElement('div');
                cardContentDiv.setAttribute('class', 'card-content');
                cardContentDiv.setAttribute('id', `${taskObject.id}-content`)
                cardDiv.appendChild(cardContentDiv);
                
                // Title
                const cardTitle = document.createElement('div');
                cardTitle.setAttribute('class', 'card-title');
                // cardTitle.setAttribute('id', `${taskObject.id}-expand-icon`);
                cardTitle.innerHTML = `${taskObject.name} <div class="task-icons">
                <label class="checkbox-container"><input type="checkbox" id="${taskObject.id}-checkbox"><span class="mark"></span></label>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24" id="${taskObject.id}-expand-icon">
                <path fill="currentColor" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" id="${taskObject.id}-expand-icon"/>
                </svg> <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="delete-project" id="${taskObject.id}-delete-icon">
                <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                </svg>
                </div>`;
                cardContentDiv.appendChild(cardTitle);

                // Checkbox

                const checkbox = document.querySelector(`#${taskObject.id}-checkbox`)
                checkbox.addEventListener('click', function(){project.checkUncheckTask(taskObject.id)})
                checkbox.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.strikethroughTaskIfCompleted)

                // Delete Button

                const deleteIcon = document.querySelector(`#${taskObject.id}-delete-icon`);
                deleteIcon.addEventListener('click', function(){project.deleteTask(taskObject.id)})

                // Expand / Retract button

                const expandIcon = document.querySelector(`#${taskObject.id}-expand-icon`);
                // expandIcon.forEach(element => element.addEventListener('click', DOMRenderer.expandTasks))
                expandIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.expandTasks);

                // const expandIcon = document.createElement('div');
                // expandIcon.setAttribute('class', 'expand-icon')
                // expandIcon.setAttribute('id', `${taskObject.id}-expand-div`);
                // expandIcon.innerHTML = ``
                // cardContentDiv.appendChild(expandIcon)

                // Card Hiders

                const cardHider = document.createElement('div');
                cardHider.setAttribute('class', 'card-hider');
                cardHider.setAttribute('id', `${taskObject.id}-hider`);
                cardContentDiv.appendChild(cardHider);

                // Description
                const cardDescription = document.createElement('div');
                cardDescription.setAttribute('class', 'card-description');
                cardDescription.innerHTML = `${taskObject.description}`;
                cardHider.appendChild(cardDescription);
                // Priority
                if(taskObject.priority === 1) {
                    cardPriorityStyle.setAttribute('class', 'priority-high')
                } else if(taskObject.priority === 2) {
                    cardPriorityStyle.setAttribute('class', 'priority-medium')
                } else if(taskObject.priority === 3) {
                    cardPriorityStyle.setAttribute('class', 'priority-low')
                }

                // Priority toggle

                cardPriorityStyle.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.togglePriority);
                cardPriorityStyle.addEventListener('click', function(){project.changeTaskPriority(taskObject.id)})

                // Due date
                const cardDate = document.createElement('div');
                cardDate.setAttribute('class', 'date-div');
                cardHider.appendChild(cardDate);


                const dateInput = document.createElement('input')
                dateInput.setAttribute('type', 'date');
                dateInput.setAttribute('value', `${taskObject.date}`)
                dateInput.setAttribute('name', 'date');
                dateInput.setAttribute('class', 'card-date');

                const dateLabel = document.createElement('label');
                dateLabel.setAttribute('for', 'date');
                dateLabel.innerText = 'Due: ';

                cardDate.appendChild(dateLabel)
                cardDate.appendChild(dateInput);

                // Change date

                let newDate;
                // const newDate = dateInput.onchange.value
                
                dateInput.addEventListener('blur', function() {
                    newDate = dateInput.value;
                    project.changeDate(newDate, taskObject.id)});

                // const cardCompletionDone = document.createElement('option');
                // cardCompletionDone.innerText = 'Done';
                // cardCompletion.appendChild(cardCompletionDone);

                // const cardCompletionNotDone = document.createElement('option');
                // cardCompletionNotDone.innerText = 'Not Done';
                // cardCompletion.appendChild(cardCompletionNotDone);
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

    expandTasks(event) {
        console.log(event.target)
        const idGetter = event.target.id.slice(0, -12);
        console.log(idGetter);

        const cardHider = document.querySelector(`#${idGetter}-card`);
        console.log(cardHider.classList[1]);
        
        if(cardHider.classList[1] === 'collapsed') {
            cardHider.setAttribute('class', 'card');
        } else {
            cardHider.setAttribute('class', 'card collapsed');
        }
    }

    strikethroughTaskIfCompleted (event) {
        console.log(event)
        const checkedValue = event.target.checked
        const taskId = event.target.id.slice(0, -9);

        const contentDiv = document.querySelector(`#${taskId}-content`)

        if(checkedValue === true) {
            contentDiv.setAttribute('class', 'card-content strike');
        } else {
            contentDiv.setAttribute('class', 'card-content')
        }
        
        
    }

    togglePriority(event) {
        const priorityDiv = event.target;
        const priorityValue = priorityDiv.classList[0];

        if (priorityValue === 'priority-low') {
            priorityDiv.setAttribute('class', 'priority-medium')

        } else if (priorityValue === 'priority-medium') {
            priorityDiv.setAttribute('class', 'priority-high')

        } else if (priorityValue === 'priority-high') {
            priorityDiv.setAttribute('class', 'priority-low')

        }
    }

    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0X3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NlZGFydmlsbGVDdXJzaXZlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQ3NTU2OTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6ICM5NGEzYjg7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiAjZjFmNWY5O1xcbiAgICAtLWNhcmQtaGlnaC1wcmlvcml0eTogcmdiKDI1NSwgMCwgMCk7XFxuICAgIC0tY2FyZC1tZWRpdW0tcHJpb3JpdHk6IHJnYigyNTUsIDIzOCwgMCk7XFxuICAgIC0tY2FyZC1sb3ctcHJpb3JpdHk6IHJnYigzNywgMTg0LCAwKTtcXG4gICAgLS1pY29uLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10aXRsZS1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtd2VpZ2h0OiA4MDA7XFxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGV4dC13ZWlnaHQ6IDYwMDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5zdmcge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zdmcge1xcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IG1pbm1heChjYWxjKDEwMHZoIC0gNjBweCksIDFmcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRleHQtd2VpZ2h0KTtcXG59XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAubG9nbyB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IENlZGFydmlsbGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXRpdGxlLXdlaWdodCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWFyY2ggaW5wdXQsIC5tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zcGFuLXByb2plY3Q6aG92ZXIsICNuZXctcHJvamVjdDpob3ZlciwgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbmV3LXRhc2sge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTsgKi9cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIG1pbi1jb250ZW50KSk7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY2FyZC5jb2xsYXBzZWQge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDVweCAyMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQuc3RyaWtlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc3RyaWtlIHtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBGYWRlSW47XFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBGYWRlSW4ge1xcbiAgICAgICAgICAgICAgICAgICAgMCUge1xcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAudGFzay1pY29ucyB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLWhpZGVyIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggNXB4IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5kYXRlLWRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kYXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktaGlnaCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaGlnaC1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbWVkaXVtLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktbG93IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1sb3ctcHJpb3JpdHkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIFByb2plY3QgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1uYW1lLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC8qIFRJY2sgYnV0dG9uICovXFxuXFxuICAgIC8qIC50aWNrIHtcXG5cXG4gICAgfSAqL1xcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAgIC5jbG9zZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogVGFzbCBNb2RhbCBDb250ZW50L0JveCAqL1xcbiAgICAudGFzay1tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MCUgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQ2hlY2tib3ggKi9cXG5cXG4gICAgICAgIC5jaGVja2JveC1jb250YWluZXIgeyAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgIFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqLyAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQgeyAgXFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi8gIFxcbiAgICAgICAgICAubWFyayB7ICBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXG4gICAgICAgICAgICB0b3A6IDA7ICBcXG4gICAgICAgICAgICBsZWZ0OiAwOyAgXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4OyAgXFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpOyBcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5tYXJrIHsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5tYXJrIHsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIENyZWF0ZSB0aGUgbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqLyAgXFxuICAgICAgICAgIC5tYXJrOmFmdGVyIHsgIFxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogU2hvdyB0aGUgbWFyayB3aGVuIGNoZWNrZWQgKi8gIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogU3R5bGUgdGhlIG1hcmsvaW5kaWNhdG9yICovICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBsZWZ0OiA2cHg7ICBcXG4gICAgICAgICAgICB0b3A6IDJweDsgIFxcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7ICBcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7ICBcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlOyAgXFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDsgIFxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgIFxcbiAgICAgICAgICB9ICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyx3REFBd0Q7SUFDeEQsd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsK0NBQStDO1FBQy9DLDBDQUEwQztJQUM5Qzs7UUFFSTtZQUNJLHVCQUF1QjtZQUN2QixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHlCQUF5QjtZQUN6QixnQ0FBZ0M7UUFDcEM7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSxZQUFZO1lBQ1osVUFBVTtZQUNWLHNCQUFzQjtZQUN0QixtQ0FBbUM7WUFDbkMsWUFBWTtZQUNaLGFBQWE7UUFDakI7O0lBRUo7UUFDSSxlQUFlO1FBQ2YsMkNBQTJDO0lBQy9DOztRQUVJO1lBQ0ksYUFBYTtZQUNiLDJCQUEyQjtZQUMzQixTQUFTO1lBQ1QsbUJBQW1CO1lBQ25CLHNCQUFzQjtRQUMxQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7SUFFSjtRQUNJLGFBQWE7UUFDYiwyREFBMkQ7UUFDM0QsNEJBQTRCO1FBQzVCLGFBQWE7UUFDYixTQUFTO1FBQ1QsMkNBQTJDO0lBQy9DOztRQUVJO1lBQ0ksZUFBZTtZQUNmLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixnQ0FBZ0M7UUFDcEM7WUFDSTtnQkFDSSxhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsU0FBUztZQUNiOztZQUVBO2dCQUNJLGdDQUFnQztZQUNwQztRQUNKO1lBQ0ksZUFBZTtZQUNmLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsK0RBQStEO1lBQy9ELFNBQVM7UUFDYjtRQUNBO1lBQ0ksYUFBYTtZQUNiLCtCQUErQjtZQUMvQixzQkFBc0I7WUFDdEIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixpQ0FBaUM7WUFDakMsMkNBQTJDO1lBQzNDLG1DQUFtQztRQUN2Qzs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLGlDQUFpQztZQUNyQzs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsbUJBQW1CO2dCQUNuQiwwQkFBMEI7Z0JBQzFCLFlBQVk7WUFDaEI7OztZQUdBO2dCQUNJLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQjs7Z0JBRUk7b0JBQ0ksWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixpREFBaUQ7b0JBQ2pELFVBQVU7Z0JBQ2Q7O2dCQUVBO29CQUNJLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixrQ0FBa0M7a0JBQ3BDOztrQkFFQTtvQkFDRTtzQkFDRSxVQUFVO29CQUNaO29CQUNBO3NCQUNFLFVBQVU7b0JBQ1o7a0JBQ0Y7O1lBRU47Z0JBQ0ksYUFBYTtnQkFDYix1QkFBdUI7Z0JBQ3ZCLG1CQUFtQjtnQkFDbkIsU0FBUztZQUNiOztZQUVBO2dCQUNJLDBCQUEwQjtZQUM5Qjs7Z0JBRUk7b0JBQ0kseUJBQXlCO2dCQUM3Qjs7Z0JBRUE7b0JBQ0ksYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLFNBQVM7Z0JBQ2I7O2dCQUVBO29CQUNJLDJDQUEyQztvQkFDM0MsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osYUFBYTtnQkFDakI7O1lBRUo7Z0JBQ0ksMkNBQTJDO2dCQUMzQyw0Q0FBNEM7Z0JBQzVDLCtDQUErQztZQUNuRDs7WUFFQTtnQkFDSSw2Q0FBNkM7Z0JBQzdDLDRDQUE0QztnQkFDNUMsK0NBQStDO1lBQ25EOztZQUVBO2dCQUNJLDBDQUEwQztnQkFDMUMsNENBQTRDO2dCQUM1QywrQ0FBK0M7WUFDbkQ7O1FBRUosMkJBQTJCO0FBQ25DO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDNUQ7O0lBRUksOEJBQThCO0lBQzlCO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIsMkNBQTJDO1FBQzNDLGdCQUFnQixFQUFFLGtDQUFrQztRQUNwRCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1DQUFtQztRQUNuQyxVQUFVLEVBQUUsb0RBQW9EO0lBQ3BFOztRQUVJO1lBQ0ksa0JBQWtCO1lBQ2xCLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsYUFBYTtZQUNiLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsU0FBUztZQUNULGFBQWE7UUFDakI7O1FBRUE7WUFDSSxXQUFXO1lBQ1gsa0JBQWtCO1FBQ3RCOztRQUVBO1lBQ0ksNkJBQTZCO1lBQzdCLGFBQWE7WUFDYixZQUFZO1FBQ2hCOztJQUVKLGdCQUFnQjs7SUFFaEI7O09BRUc7SUFDSCxxQkFBcUI7SUFDckI7UUFDSSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25COztJQUVBLDJCQUEyQjtJQUMzQjtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLDJDQUEyQztRQUMzQyxnQkFBZ0IsRUFBRSxrQ0FBa0M7UUFDcEQsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsVUFBVSxFQUFFLG9EQUFvRDtJQUNwRTs7UUFFSTtZQUNJLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2Isc0JBQXNCO1FBQzFCOztRQUVBLGFBQWE7O1FBRWI7WUFDSSxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsZUFBZTtZQUNmLGVBQWU7VUFDakI7O1VBRUEsOEJBQThCO1VBQzlCO1lBQ0Usa0JBQWtCO1lBQ2xCLGVBQWU7VUFDakI7O1VBRUEsNkJBQTZCO1VBQzdCO1lBQ0Usa0JBQWtCO1lBQ2xCLE1BQU07WUFDTixPQUFPO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCwyQ0FBMkM7WUFDM0Msa0JBQWtCO1VBQ3BCOztVQUVBO1lBQ0Usc0JBQXNCO1VBQ3hCOztVQUVBO1lBQ0Usc0JBQXNCO1VBQ3hCOztVQUVBLHdEQUF3RDtVQUN4RDtZQUNFLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsYUFBYTtVQUNmOztVQUVBLCtCQUErQjtVQUMvQjtZQUNFLGNBQWM7VUFDaEI7O1VBRUEsNkJBQTZCO1VBQzdCO1lBQ0UsU0FBUztZQUNULFFBQVE7WUFDUixVQUFVO1lBQ1YsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsd0JBQXdCO1VBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQ3NTU2OTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6ICM5NGEzYjg7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiAjZjFmNWY5O1xcbiAgICAtLWNhcmQtaGlnaC1wcmlvcml0eTogcmdiKDI1NSwgMCwgMCk7XFxuICAgIC0tY2FyZC1tZWRpdW0tcHJpb3JpdHk6IHJnYigyNTUsIDIzOCwgMCk7XFxuICAgIC0tY2FyZC1sb3ctcHJpb3JpdHk6IHJnYigzNywgMTg0LCAwKTtcXG4gICAgLS1pY29uLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10aXRsZS1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtd2VpZ2h0OiA4MDA7XFxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGV4dC13ZWlnaHQ6IDYwMDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5zdmcge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NlZGFydmlsbGUnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9DZWRhcnZpbGxlQ3Vyc2l2ZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zdmcge1xcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IG1pbm1heChjYWxjKDEwMHZoIC0gNjBweCksIDFmcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRleHQtd2VpZ2h0KTtcXG59XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAubG9nbyB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IENlZGFydmlsbGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXRpdGxlLXdlaWdodCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWFyY2ggaW5wdXQsIC5tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zcGFuLXByb2plY3Q6aG92ZXIsICNuZXctcHJvamVjdDpob3ZlciwgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbmV3LXRhc2sge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTsgKi9cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIG1pbi1jb250ZW50KSk7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY2FyZC5jb2xsYXBzZWQge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDVweCAyMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQuc3RyaWtlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc3RyaWtlIHtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBGYWRlSW47XFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBGYWRlSW4ge1xcbiAgICAgICAgICAgICAgICAgICAgMCUge1xcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAudGFzay1pY29ucyB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLWhpZGVyIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggNXB4IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5kYXRlLWRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kYXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktaGlnaCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaGlnaC1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbWVkaXVtLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktbG93IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1sb3ctcHJpb3JpdHkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIFByb2plY3QgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1uYW1lLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC8qIFRJY2sgYnV0dG9uICovXFxuXFxuICAgIC8qIC50aWNrIHtcXG5cXG4gICAgfSAqL1xcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAgIC5jbG9zZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogVGFzbCBNb2RhbCBDb250ZW50L0JveCAqL1xcbiAgICAudGFzay1tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MCUgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQ2hlY2tib3ggKi9cXG5cXG4gICAgICAgIC5jaGVja2JveC1jb250YWluZXIgeyAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgIFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqLyAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQgeyAgXFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi8gIFxcbiAgICAgICAgICAubWFyayB7ICBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXG4gICAgICAgICAgICB0b3A6IDA7ICBcXG4gICAgICAgICAgICBsZWZ0OiAwOyAgXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4OyAgXFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpOyBcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5tYXJrIHsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5tYXJrIHsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIENyZWF0ZSB0aGUgbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqLyAgXFxuICAgICAgICAgIC5tYXJrOmFmdGVyIHsgIFxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogU2hvdyB0aGUgbWFyayB3aGVuIGNoZWNrZWQgKi8gIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogU3R5bGUgdGhlIG1hcmsvaW5kaWNhdG9yICovICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBsZWZ0OiA2cHg7ICBcXG4gICAgICAgICAgICB0b3A6IDJweDsgIFxcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7ICBcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7ICBcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlOyAgXFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDsgIFxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgIFxcbiAgICAgICAgICB9ICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IENyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgQ3JlYXRlUHJvamVjdFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0X3N0b3JhZ2VcIjtcbmltcG9ydCB7IHJlbmRlckRPTSB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBwcm9qZWN0U3RvcmFnZSA9IG5ldyBDcmVhdGVQcm9qZWN0U3RvcmFnZSgpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0KFwiRGVmYXVsdFwiKTtcbmNvbnN0IGFub3RoZXJQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3QoXCJBbm90aGVyIFByb2plY3RcIik7XG5cbmRlZmF1bHRQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soXCJUYXNrIE9uZVwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5hbSBhdXQgbnVsbGEgYXJjaGl0ZWN0byBhbGlxdWFtIGRvbG9yZXMgZnVnYT8gQWNjdXNhbXVzIGRlbGVuaXRpIGRpc3RpbmN0aW8gaW5jaWR1bnQsIGV1bSB0ZW1wb3JhIGRvbG9ydW0gcXVpc3F1YW0gbWFnbmFtIGJsYW5kaXRpaXMgcXVpYSBxdW9kIGNvbnNlY3RldHVyIGV4Y2VwdHVyaSBwZXJmZXJlbmRpcy5cIiwgMSwgZmFsc2UsIFwiMjAyMi0wMy0wNFwiKTtcbmRlZmF1bHRQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soXCJUYXNrIFR3b1wiLCBcIkJhbmFuYXMsIGFwcGxlc1wiLCAzLCBmYWxzZSwgXCIyMDIyLTAzLTE1XCIpO1xuZGVmYXVsdFByb2plY3QuY3JlYXRlTmV3VGFzayhcIlRhc2sgVGhyZWVcIiwgXCJCYW5hbmFzLCBhcHBsZXNcIiwgMiwgZmFsc2UsIFwiMjAyMi0wNC0yMFwiKTtcblxuY29uc3QgRE9NUmVuZGVyZXIgPSBuZXcgcmVuZGVyRE9NKCk7XG5cbkRPTVJlbmRlcmVyLnJlbmRlclByb2plY3RMaXN0KCk7XG5ET01SZW5kZXJlci5yZW5kZXJUYXNrcygpO1xuRE9NUmVuZGVyZXIubmV3UHJvamVjdENsaWNrKCk7XG5ET01SZW5kZXJlci5uZXdUYXNrQ2xpY2soKTtcblxuZXhwb3J0IHsgcHJvamVjdFN0b3JhZ2UsIERPTVJlbmRlcmVyIH0iLCJpbXBvcnQgeyBwcm9qZWN0U3RvcmFnZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBET01SZW5kZXJlciB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNsYXNzIENyZWF0ZVByb2plY3RTdG9yYWdlIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgfTtcblxuICAgIC8vIGZpbmQgYW5kIHNlbGVjdCBwcm9qZWN0IGJ5IGlkXG5cbiAgICBwcm9qZWN0R2V0dGVyKHByb2plY3RJZCkge1xuXG4gICAgICAgIGNvbnN0IGZpbmRQcm9qZWN0SW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gcHJvamVjdElkO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0U3RvcmFnZS5saXN0LmZpbmRJbmRleChmaW5kUHJvamVjdEluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UubGlzdFtwcm9qZWN0SW5kZXhdKVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0U3RvcmFnZS5saXN0W3Byb2plY3RJbmRleF07XG5cbiAgICB9O1xuXG4gICAgcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlKCkge1xuXG4gICAgICAgIGNvbnN0IHNsaWNlZElkID0gdGhpcy5pZC5zbGljZSgwLCAtMTIpO1xuXG4gICAgICAgIGNvbnN0IGZpbmRQcm9qZWN0SW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gc2xpY2VkSWQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RTdG9yYWdlLmxpc3QuZmluZEluZGV4KGZpbmRQcm9qZWN0SW5kZXgpO1xuXG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3Quc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG5cbiAgICAgICAgRE9NUmVuZGVyZXIucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9XG5cblxufTtcblxuZXhwb3J0IHsgQ3JlYXRlUHJvamVjdFN0b3JhZ2UgfTsiLCJpbXBvcnQgeyBET01SZW5kZXJlciwgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL2luZGV4J1xuXG4vLyBwcm9qZWN0IG9iamVjdHNcblxuY2xhc3MgQ3JlYXRlUHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUd1aWQoKTtcbiAgICAgICAgdGhpcy50YXNrQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGFza1N0b3JhZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0VG9TdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBzaG91bGQgZ28gaW4gcHJvamVjdCBzdG9yYWdlXG5cbiAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKCkge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LnB1c2godGhpcyk7XG4gICAgICAgIC8vIERPTVJlbmRlcmVyLnJlbmRlclByb2plY3RMaXN0KCk7IFxuICAgIH1cblxuICAgIC8vIGFkZCB0YXNrcyB0byBwcm9qZWN0IG9iamVjdFxuXG4gICAgY3JlYXRlTmV3VGFzayAobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUpIHtcblxuICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVHdWlkKCksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50YXNrU3RvcmFnZS5wdXNoKHRhc2spO1xuXG4gICAgICAgIHRoaXMudGFza0NvdW50ZXIrKztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdGFza3MgZnJvbSBwcm9qZWN0IG9iamVjdFxuXG4gICAgZGVsZXRlVGFzayAodGFza0lkKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgY29uc29sZS5sb2codGFza0lkKVxuXG4gICAgICAgIGNvbnN0IGZpbmRUYXNrSW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gdGFza0lkO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0aGlzLnRhc2tTdG9yYWdlLmZpbmRJbmRleChmaW5kVGFza0luZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0luZGV4KVxuXG4gICAgICAgIHRoaXMudGFza1N0b3JhZ2Uuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy50YXNrQ291bnRlci0tO1xuXG4gICAgICAgIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tVbmNoZWNrVGFzayAodGFza0lkKSB7XG5cbiAgICAgICAgY29uc3QgZmluZFRhc2tJbmRleCA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0YXNrSWQ7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza1N0b3JhZ2UuZmluZEluZGV4KGZpbmRUYXNrSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5zdGF0dXM7XG5cbiAgICAgICAgaWYoc3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0uc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza1N0b3JhZ2UpXG4gICAgfVxuXG4gICAgY2hhbmdlVGFza1ByaW9yaXR5ICh0YXNrSWQpIHtcblxuICAgICAgICBjb25zdCBmaW5kVGFza0luZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHRhc2tJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGhpcy50YXNrU3RvcmFnZS5maW5kSW5kZXgoZmluZFRhc2tJbmRleCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0ucHJpb3JpdHk7XG5cbiAgICAgICAgaWYocHJpb3JpdHkgPT09IDEpe1xuICAgICAgICAgICAgdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLnByaW9yaXR5ID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gMil7XG4gICAgICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAzKXtcbiAgICAgICAgICAgIHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5wcmlvcml0eSA9IDI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tTdG9yYWdlKVxuICAgIH1cblxuICAgIGNoYW5nZURhdGUobmV3RGF0ZSwgdGFza0lkKSB7XG5cbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gbmV3RGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZVZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQpXG5cbiAgICAgICAgY29uc3QgZmluZFRhc2tJbmRleCA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0YXNrSWQ7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza1N0b3JhZ2UuZmluZEluZGV4KGZpbmRUYXNrSW5kZXgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XSlcblxuICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0uZGF0ZSA9IGRhdGVWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBpZFxuXG4gICAgZ2VuZXJhdGVHdWlkKCkge1xuICAgICAgICBsZXQgcmVzdWx0LCBpLCBqO1xuICAgICAgICByZXN1bHQgPSAnQSc7IC8vIHNob3VsZCBub3Qgc3RhcnQgd2l0aCBudW1iZXIgZm9yIHF1ZXJ5c2VsZWN0b3JcbiAgICAgICAgZm9yKGo9MDsgajwzMjsgaisrKSB7XG4gICAgICAgICAgaWYoIGogPT0gOCB8fCBqID09IDEyIHx8IGogPT0gMTYgfHwgaiA9PSAyMClcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICctJztcbiAgICAgICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbn1cblxuZXhwb3J0IHsgQ3JlYXRlUHJvamVjdCB9OyIsImltcG9ydCB7IENyZWF0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgRE9NUmVuZGVyZXIgfSBmcm9tICcuL2luZGV4J1xuXG4vLyBzaG93IHRhc2tzIG9uIG1haW4gY29udGVudFxuXG5jbGFzcyByZW5kZXJET00ge1xuXG4gICAgLy8gcmVuZGVyIGxpc3Qgb2YgcHJvamVjdHNcblxuICAgIHJlbmRlclByb2plY3RMaXN0KCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0VWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICAgICAgcHJvamVjdExpc3RVbEVsZW1lbnQuaW5uZXJIVE1MID0gYGA7XG4gICAgICAgIFxuXG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RMaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50Lm5hbWUpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJzcGFuLXByb2plY3RcIiBpZD1cIiR7ZWxlbWVudC5pZH0tc3BhblwiPiR7ZWxlbWVudC5uYW1lfTwvc3Bhbj4gPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiIGlkPVwiJHtlbGVtZW50LmlkfS1kZWxldGUtaWNvblwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIucmVuZGVyVGFza3MpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdFVsRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdExpRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtZW50LmlkfS1kZWxldGUtaWNvbmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlSWNvbilcbiAgICAgICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0U3RvcmFnZS5yZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHJlbmRlciB0YXNrcyBvZiBmaXJzdCBwcm9qZWN0IG9uIGZpcnN0IGxvYWRcblxuICAgIHJlbmRlclRhc2tzKGV2ZW50KSB7XG5cbiAgICAgICAgbGV0IHByb2plY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG5cbiAgICAgICAgaWYoZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdFswXSAhPSBcInRhc2stbW9kYWwtdGlja1wiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCBldmVudCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCAtNSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpXG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2UucHJvamVjdEdldHRlcihwcm9qZWN0SWQpO1xuICAgICAgICB9ICAgZWxzZSBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJ0YXNrLW1vZGFsLXRpY2tcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1wcm9qZWN0LXRpdGxlJykuaWQ7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2UucHJvamVjdEdldHRlcihwcm9qZWN0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdFN0b3JhZ2UubGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLmxpc3RbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3Qgb24gbG9hZCBhbmQgeWVzIGV2ZW50JylcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdC5pZDtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IGAke3Byb2plY3ROYW1lfWA7XG4gICAgICAgICAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RJZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gYGA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBwcm9qZWN0LnRhc2tTdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGFza0NvbnRhaW5lcikge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza09iamVjdCA9IHRhc2tDb250YWluZXJbcHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIGNvbGxhcHNlZCcpO1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tPYmplY3QuaWR9LWNhcmRgKTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFByaW9yaXR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRQcmlvcml0eVN0eWxlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza09iamVjdC5pZH0tY29udGVudGApXG4gICAgICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkQ29udGVudERpdik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVGl0bGVcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgLy8gY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrT2JqZWN0LmlkfS1leHBhbmQtaWNvbmApO1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHt0YXNrT2JqZWN0Lm5hbWV9IDxkaXYgY2xhc3M9XCJ0YXNrLWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHt0YXNrT2JqZWN0LmlkfS1jaGVja2JveFwiPjxzcGFuIGNsYXNzPVwibWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGlkPVwiJHt0YXNrT2JqZWN0LmlkfS1leHBhbmQtaWNvblwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEwLDIxVjE5SDYuNDFMMTAuOTEsMTQuNUw5LjUsMTMuMDlMNSwxNy41OVYxNEgzVjIxSDEwTTE0LjUsMTAuOTFMMTksNi40MVYxMEgyMVYzSDE0VjVIMTcuNTlMMTMuMDksOS41TDE0LjUsMTAuOTFaXCIgaWQ9XCIke3Rhc2tPYmplY3QuaWR9LWV4cGFuZC1pY29uXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPiA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCIgaWQ9XCIke3Rhc2tPYmplY3QuaWR9LWRlbGV0ZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVja2JveFxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrT2JqZWN0LmlkfS1jaGVja2JveGApXG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3Byb2plY3QuY2hlY2tVbmNoZWNrVGFzayh0YXNrT2JqZWN0LmlkKX0pXG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5zdHJpa2V0aHJvdWdoVGFza0lmQ29tcGxldGVkKVxuXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIEJ1dHRvblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tPYmplY3QuaWR9LWRlbGV0ZS1pY29uYCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7cHJvamVjdC5kZWxldGVUYXNrKHRhc2tPYmplY3QuaWQpfSlcblxuICAgICAgICAgICAgICAgIC8vIEV4cGFuZCAvIFJldHJhY3QgYnV0dG9uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza09iamVjdC5pZH0tZXhwYW5kLWljb25gKTtcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRJY29uLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIuZXhwYW5kVGFza3MpKVxuICAgICAgICAgICAgICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5leHBhbmRUYXNrcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZC1pY29uJylcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrT2JqZWN0LmlkfS1leHBhbmQtZGl2YCk7XG4gICAgICAgICAgICAgICAgLy8gZXhwYW5kSWNvbi5pbm5lckhUTUwgPSBgYFxuICAgICAgICAgICAgICAgIC8vIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGV4cGFuZEljb24pXG5cbiAgICAgICAgICAgICAgICAvLyBDYXJkIEhpZGVyc1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEhpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZEhpZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1oaWRlcicpO1xuICAgICAgICAgICAgICAgIGNhcmRIaWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza09iamVjdC5pZH0taGlkZXJgKTtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkSGlkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke3Rhc2tPYmplY3QuZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgICAgICBjYXJkSGlkZXIuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxuICAgICAgICAgICAgICAgIGlmKHRhc2tPYmplY3QucHJpb3JpdHkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1oaWdoJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGFza09iamVjdC5wcmlvcml0eSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LW1lZGl1bScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRhc2tPYmplY3QucHJpb3JpdHkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sb3cnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5IHRvZ2dsZVxuXG4gICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci50b2dnbGVQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3Byb2plY3QuY2hhbmdlVGFza1ByaW9yaXR5KHRhc2tPYmplY3QuaWQpfSlcblxuICAgICAgICAgICAgICAgIC8vIER1ZSBkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGUtZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZEhpZGVyLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dGFza09iamVjdC5kYXRlfWApXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWU6ICc7XG5cbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpXG4gICAgICAgICAgICAgICAgY2FyZERhdGUuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkYXRlXG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBuZXdEYXRlID0gZGF0ZUlucHV0Lm9uY2hhbmdlLnZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5jaGFuZ2VEYXRlKG5ld0RhdGUsIHRhc2tPYmplY3QuaWQpfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYXJkQ29tcGxldGlvbkRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBjYXJkQ29tcGxldGlvbkRvbmUuaW5uZXJUZXh0ID0gJ0RvbmUnO1xuICAgICAgICAgICAgICAgIC8vIGNhcmRDb21wbGV0aW9uLmFwcGVuZENoaWxkKGNhcmRDb21wbGV0aW9uRG9uZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYXJkQ29tcGxldGlvbk5vdERvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBjYXJkQ29tcGxldGlvbk5vdERvbmUuaW5uZXJUZXh0ID0gJ05vdCBEb25lJztcbiAgICAgICAgICAgICAgICAvLyBjYXJkQ29tcGxldGlvbi5hcHBlbmRDaGlsZChjYXJkQ29tcGxldGlvbk5vdERvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFxuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBcblxuICAgIC8vIHNlbGVjdCBwcm9qZWN0IGZyb20gbGlzdFxuXG5cblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBsaXN0ZW5lclxuXG4gICAgbmV3UHJvamVjdENsaWNrKCkge1xuXG4gICAgICAgIC8vIHNob3cgbW9kYWwgd2l0aCBuYW1lIGFuZCB0aWNrbWFya1xuICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuZXctcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IHRpY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwtdGljaycpO1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0RWxlbWVudClcbiAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3BlblByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSAoZXZlbnQpID0+IHsgICAgICAgIFxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3RNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RGcm9tSW5wdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuZm9yRWFjaCggZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RNb2RhbCkpXG4gICAgXG4gICAgICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcbiAgICAgICAgdGlja0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIuY3JlYXRlUHJvamVjdEZyb21JbnB1dClcbiAgICBcbiAgICBcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIFxuICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlbnRlcktleSk7XG4gICAgfTtcblxuICAgIC8vIFxuXG4gICAgXG4gICAgXG4gICAgLy8gY3JlYXRlIG5ldyB0YXNrIGxpc3RlbmVyXG5cbiAgICBuZXdUYXNrQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25ldy10YXNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2tJY29uKVxuICAgIFxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IHRpY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwtdGljaycpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aWNrSWNvbilcbiAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gY29uc3QgZW50ZXJLZXkgPSAoZXZlbnQpID0+IHsgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgLy8gICAgICAgICBjbG9zZVRhc2tNb2RhbCgpO1xuICAgICAgICAvLyAgICAgICAgIC8vIGNyZWF0ZVByb2plY3RGcm9tSW5wdXQoKTsgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIG5ld1Rhc2tJY29uLmZvckVhY2goIGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrTW9kYWwpKVxuICAgIFxuICAgICAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLmNyZWF0ZVRhc2tGcm9tSW5wdXQpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKTtcbiAgICBcbiAgICBcbiAgICAgICAgLy8gY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIFxuICAgICAgICAvLyBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlbnRlcktleSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZVByb2plY3RGcm9tSW5wdXQgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdChpbnB1dFZhbHVlKTtcbiAgICBcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBET01SZW5kZXJlci5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIFxuICAgIH07XG5cbiAgICBjcmVhdGVUYXNrRnJvbUlucHV0KCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdFRpdGxlLmlkXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJZClcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2UucHJvamVjdEdldHRlcihwcm9qZWN0SWQpO1xuICAgIFxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgIFxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHlWYWx1ZSA9IHBhcnNlSW50KHByaW9yaXR5VmFsdWUpO1xuICAgIFxuICAgICAgICBwcm9qZWN0LmNyZWF0ZU5ld1Rhc2sobmFtZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBwcmlvcml0eVZhbHVlLCBmYWxzZSwgZGF0ZVZhbHVlKTsgIFxuICAgIFxuICAgIH07XG5cbiAgICBleHBhbmRUYXNrcyhldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgIGNvbnN0IGlkR2V0dGVyID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIC0xMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkR2V0dGVyKTtcblxuICAgICAgICBjb25zdCBjYXJkSGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZEdldHRlcn0tY2FyZGApO1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJkSGlkZXIuY2xhc3NMaXN0WzFdKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGNhcmRIaWRlci5jbGFzc0xpc3RbMV0gPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICBjYXJkSGlkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXJkSGlkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIGNvbGxhcHNlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RyaWtldGhyb3VnaFRhc2tJZkNvbXBsZXRlZCAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgIGNvbnN0IGNoZWNrZWRWYWx1ZSA9IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCAtOSk7XG5cbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJZH0tY29udGVudGApXG5cbiAgICAgICAgaWYoY2hlY2tlZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250ZW50IHN0cmlrZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGVudCcpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZVByaW9yaXR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHlEaXYuY2xhc3NMaXN0WzBdO1xuXG4gICAgICAgIGlmIChwcmlvcml0eVZhbHVlID09PSAncHJpb3JpdHktbG93Jykge1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1tZWRpdW0nKVxuXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gJ3ByaW9yaXR5LW1lZGl1bScpIHtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaGlnaCcpXG5cbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eVZhbHVlID09PSAncHJpb3JpdHktaGlnaCcpIHtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbG93JylcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59O1xuXG5leHBvcnQgeyByZW5kZXJET00gfTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=