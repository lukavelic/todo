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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: rgb(255, 0, 0);\n    --card-medium-priority: rgb(255, 238, 0);\n    --card-low-priority: rgb(37, 184, 0);\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n    --border-radius: 15px;\n}\n\nsvg {\n    overflow: visible;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: var(--border-radius);\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n        font-size: 1.2rem;\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n            font-size: 1rem;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            /* grid-template-columns: 1; */\n            grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n            gap: 20px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            overflow: hidden;\n            height: 150px;\n            transition: height 300ms ease-out;\n            background-color: var(--sidebar-background);\n            border-radius: var(--border-radius);\n        }\n\n            .card.collapsed {\n                height: 50px;\n                transition: height 300ms ease-out;\n            }\n\n            .card-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 0px 20px 5px 20px;\n                height: 50px;\n            }\n\n            \n            .card-content {\n                position: relative;\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n\n                .card-content.strike:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 25px;\n                    left: 10px;\n                    border-bottom: 2px solid var(--header-background);\n                    width: 85%;\n                }\n\n                .strike {\n                    animation-name: FadeIn;\n                    animation-duration: 1s;\n                    transition-timing-function: linear;\n                  }\n                  \n                  @keyframes FadeIn {\n                    0% {\n                      opacity: 0;\n                    }\n                    100% {\n                      opacity: 1;\n                    }\n                  }\n                \n            .task-icons {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 10px;\n            }\n\n            .card-hider {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height: 80px;\n                padding: 0px 20px 20px 20px;\n            }\n\n                .card-description {\n                    padding: 0px 0px 10px 0px;\n                    font-weight: 100;\n                }\n\n                .date-div {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n\n                .card-date {\n                    background-color: var(--content-background);\n                    padding-left: 5px;\n                    border-radius: 5px;\n                    border: none;\n                    outline: none;\n                }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px 20px 0px 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n            border-radius: 5px;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n\n        .task-input input, textarea, select {\n            height: 24px;\n            padding-left: 5px;\n            border-radius: 5px;\n            outline: none;\n            border: none;\n            background-color: var(--content-background);\n        }\n\n        .task-input textarea {\n            height: 48px;\n        }\n\n        .submit-task-button {\n            padding-top: 10px;\n            outline: none;\n            background-color: transparent;\n            border: none;\n        }\n\n        /* Checkbox */\n\n        .checkbox-container {  \n            display: flex;  \n            position: relative;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;  \n            font-size: 20px;  \n          }  \n            \n          /* Hide the default checkbox */  \n          .checkbox-container input {  \n            visibility: hidden;  \n            cursor: pointer;  \n          }  \n            \n          /* Create a custom checkbox */  \n          .mark {  \n            position: absolute;  \n            top: 0;  \n            left: 0;  \n            height: 20px;  \n            width: 20px;  \n            background-color: var(--content-background); \n            border-radius: 3px; \n          }  \n            \n          .checkbox-container:hover input ~ .mark {  \n            background-color: gray;  \n          }  \n            \n          .checkbox-container input:checked ~ .mark {  \n            background-color: rgb(58, 58, 255);  \n          }  \n            \n          /* Create the mark/indicator (hidden when not checked) */  \n          .mark:after {  \n            content: \"\";  \n            position: absolute;  \n            display: none;  \n          }  \n            \n          /* Show the mark when checked */  \n          .checkbox-container input:checked ~ .mark:after {  \n            display: block;  \n          }  \n            \n          /* Style the mark/indicator */  \n          .checkbox-container .mark:after {  \n            left: 6px;  \n            top: 2px;  \n            width: 5px;  \n            height: 10px;  \n            border: solid white;  \n            border-width: 0 3px 3px 0;  \n            transform: rotate(45deg);  \n          }  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: rgb(255, 0, 0);\n    --card-medium-priority: rgb(255, 238, 0);\n    --card-low-priority: rgb(37, 184, 0);\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n    --border-radius: 15px;\n}\n\nsvg {\n    overflow: visible;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url('./fonts/CedarvilleCursive-Regular.ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: var(--border-radius);\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n        font-size: 1.2rem;\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n            font-size: 1rem;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            /* grid-template-columns: 1; */\n            grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n            gap: 20px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            overflow: hidden;\n            height: 150px;\n            transition: height 300ms ease-out;\n            background-color: var(--sidebar-background);\n            border-radius: var(--border-radius);\n        }\n\n            .card.collapsed {\n                height: 50px;\n                transition: height 300ms ease-out;\n            }\n\n            .card-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 0px 20px 5px 20px;\n                height: 50px;\n            }\n\n            \n            .card-content {\n                position: relative;\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n\n                .card-content.strike:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 25px;\n                    left: 10px;\n                    border-bottom: 2px solid var(--header-background);\n                    width: 85%;\n                }\n\n                .strike {\n                    animation-name: FadeIn;\n                    animation-duration: 1s;\n                    transition-timing-function: linear;\n                  }\n                  \n                  @keyframes FadeIn {\n                    0% {\n                      opacity: 0;\n                    }\n                    100% {\n                      opacity: 1;\n                    }\n                  }\n                \n            .task-icons {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 10px;\n            }\n\n            .card-hider {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height: 80px;\n                padding: 0px 20px 20px 20px;\n            }\n\n                .card-description {\n                    padding: 0px 0px 10px 0px;\n                    font-weight: 100;\n                }\n\n                .date-div {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n\n                .card-date {\n                    background-color: var(--content-background);\n                    padding-left: 5px;\n                    border-radius: 5px;\n                    border: none;\n                    outline: none;\n                }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px 20px 0px 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n            border-radius: 5px;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n\n        .task-input input, textarea, select {\n            height: 24px;\n            padding-left: 5px;\n            border-radius: 5px;\n            outline: none;\n            border: none;\n            background-color: var(--content-background);\n        }\n\n        .task-input textarea {\n            height: 48px;\n        }\n\n        .submit-task-button {\n            padding-top: 10px;\n            outline: none;\n            background-color: transparent;\n            border: none;\n        }\n\n        /* Checkbox */\n\n        .checkbox-container {  \n            display: flex;  \n            position: relative;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;  \n            font-size: 20px;  \n          }  \n            \n          /* Hide the default checkbox */  \n          .checkbox-container input {  \n            visibility: hidden;  \n            cursor: pointer;  \n          }  \n            \n          /* Create a custom checkbox */  \n          .mark {  \n            position: absolute;  \n            top: 0;  \n            left: 0;  \n            height: 20px;  \n            width: 20px;  \n            background-color: var(--content-background); \n            border-radius: 3px; \n          }  \n            \n          .checkbox-container:hover input ~ .mark {  \n            background-color: gray;  \n          }  \n            \n          .checkbox-container input:checked ~ .mark {  \n            background-color: rgb(58, 58, 255);  \n          }  \n            \n          /* Create the mark/indicator (hidden when not checked) */  \n          .mark:after {  \n            content: \"\";  \n            position: absolute;  \n            display: none;  \n          }  \n            \n          /* Show the mark when checked */  \n          .checkbox-container input:checked ~ .mark:after {  \n            display: block;  \n          }  \n            \n          /* Style the mark/indicator */  \n          .checkbox-container .mark:after {  \n            left: 6px;  \n            top: 2px;  \n            width: 5px;  \n            height: 10px;  \n            border: solid white;  \n            border-width: 0 3px 3px 0;  \n            transform: rotate(45deg);  \n          }  "],"sourceRoot":""}]);
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

                let checkboxStatus;
                if(taskObject.status === true) {
                    checkboxStatus = 'checked'
                    cardContentDiv.setAttribute('class', 'card-content strike');
                }

                cardTitle.innerHTML = `${taskObject.name} <div class="task-icons">
                <label class="checkbox-container"><input type="checkbox" id="${taskObject.id}-checkbox" ${checkboxStatus}><span class="mark"></span></label>
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
                _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.createProjectFromInput();
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

        nameInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxhQUFhLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxjQUFjLGNBQWMsWUFBWSxRQUFRLEtBQUssYUFBYSxjQUFjLFlBQVksYUFBYSxZQUFZLE9BQU8sTUFBTSxXQUFXLGFBQWEsWUFBWSxXQUFXLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxjQUFjLGNBQWMsUUFBUSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sS0FBSyxXQUFXLGFBQWEsY0FBYyxZQUFZLE1BQU0sS0FBSyxXQUFXLGFBQWEsY0FBYyxZQUFZLGFBQWEsT0FBTyxNQUFNLGFBQWEsY0FBYyxRQUFRLE1BQU0sV0FBVyxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsY0FBYyxjQUFjLFlBQVksV0FBVyxRQUFRLEtBQUssYUFBYSxjQUFjLGNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaFpyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0X3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NlZGFydmlsbGVDdXJzaXZlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQ3NTU2OTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6ICM5NGEzYjg7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiAjZjFmNWY5O1xcbiAgICAtLWNhcmQtaGlnaC1wcmlvcml0eTogcmdiKDI1NSwgMCwgMCk7XFxuICAgIC0tY2FyZC1tZWRpdW0tcHJpb3JpdHk6IHJnYigyNTUsIDIzOCwgMCk7XFxuICAgIC0tY2FyZC1sb3ctcHJpb3JpdHk6IHJnYigzNywgMTg0LCAwKTtcXG4gICAgLS1pY29uLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10aXRsZS1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtd2VpZ2h0OiA4MDA7XFxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGV4dC13ZWlnaHQ6IDYwMDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5zdmcge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG5zdmcge1xcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IG1pbm1heChjYWxjKDEwMHZoIC0gNjBweCksIDFmcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXRleHQtd2VpZ2h0KTtcXG59XFxuXFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAubG9nbyB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IENlZGFydmlsbGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXRpdGxlLXdlaWdodCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWFyY2ggaW5wdXQsIC5tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubGlzdC1pdGVtIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zcGFuLXByb2plY3Q6aG92ZXIsICNuZXctcHJvamVjdDpob3ZlciwgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLm5ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjbmV3LXRhc2sge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTsgKi9cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIG1pbi1jb250ZW50KSk7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY2FyZC5jb2xsYXBzZWQge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDVweCAyMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQtY29udGVudC5zdHJpa2U6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zdHJpa2Uge1xcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IEZhZGVJbjtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIEZhZGVJbiB7XFxuICAgICAgICAgICAgICAgICAgICAwJSB7XFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC50YXNrLWljb25zIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQtaGlkZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMjBweCAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmRhdGUtZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWRhdGUge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS1oaWdoIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1oaWdoLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktbWVkaXVtIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1tZWRpdW0tcHJpb3JpdHkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS1sb3cge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWxvdy1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuICBcXG4gICAgLyogUHJvamVjdCBNb2RhbCBDb250ZW50L0JveCAqL1xcbiAgICAubW9kYWwtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAlIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICB3aWR0aDogMzAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICB9XFxuXFxuICAgICAgICAubW9kYWwtdGl0bGUge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtaW5wdXQge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMHB4IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdWJtaXQtbmFtZS1idXR0b24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAvKiBUSWNrIGJ1dHRvbiAqL1xcblxcbiAgICAvKiAudGljayB7XFxuXFxuICAgIH0gKi9cXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbiAgICAuY2xvc2Uge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlOmhvdmVyLFxcbiAgICAuY2xvc2U6Zm9jdXMge1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIFRhc2wgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLnRhc2stbW9kYWwtY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAlIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICB3aWR0aDogMzAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICB9XFxuXFxuICAgICAgICAudGFzay1pbnB1dCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1pbnB1dCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2staW5wdXQgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdWJtaXQtdGFzay1idXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogQ2hlY2tib3ggKi9cXG5cXG4gICAgICAgIC5jaGVja2JveC1jb250YWluZXIgeyAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgIFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCAqLyAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQgeyAgXFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi8gIFxcbiAgICAgICAgICAubWFyayB7ICBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXG4gICAgICAgICAgICB0b3A6IDA7ICBcXG4gICAgICAgICAgICBsZWZ0OiAwOyAgXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4OyAgXFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpOyBcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5tYXJrIHsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5tYXJrIHsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTgsIDI1NSk7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIENyZWF0ZSB0aGUgbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqLyAgXFxuICAgICAgICAgIC5tYXJrOmFmdGVyIHsgIFxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogU2hvdyB0aGUgbWFyayB3aGVuIGNoZWNrZWQgKi8gIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogU3R5bGUgdGhlIG1hcmsvaW5kaWNhdG9yICovICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBsZWZ0OiA2cHg7ICBcXG4gICAgICAgICAgICB0b3A6IDJweDsgIFxcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7ICBcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7ICBcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlOyAgXFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDsgIFxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgIFxcbiAgICAgICAgICB9ICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVC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O1lBQ1gsa0JBQWtCO1lBQ2xCLGFBQWE7VUFDZjs7VUFFQSwrQkFBK0I7VUFDL0I7WUFDRSxjQUFjO1VBQ2hCOztVQUVBLDZCQUE2QjtVQUM3QjtZQUNFLFNBQVM7WUFDVCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHdCQUF3QjtVQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0NzU1Njk7XFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjOTRhM2I4O1xcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogI2YxZjVmOTtcXG4gICAgLS1jYXJkLWhpZ2gtcHJpb3JpdHk6IHJnYigyNTUsIDAsIDApO1xcbiAgICAtLWNhcmQtbWVkaXVtLXByaW9yaXR5OiByZ2IoMjU1LCAyMzgsIDApO1xcbiAgICAtLWNhcmQtbG93LXByaW9yaXR5OiByZ2IoMzcsIDE4NCwgMCk7XFxuICAgIC0taWNvbi1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRpdGxlLXdlaWdodDogODAwO1xcbiAgICAtLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRleHQtd2VpZ2h0OiA2MDA7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuc3ZnIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDMwMHB4KSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBtaW5tYXgoY2FsYygxMDB2aCAtIDYwcHgpLCAxZnIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10ZXh0LXdlaWdodCk7XFxufVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmxvZ28ge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDZWRhcnZpbGxlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS13ZWlnaHQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlYXJjaCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIGlucHV0LCAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3Bhbi1wcm9qZWN0OmhvdmVyLCAjbmV3LXByb2plY3Q6aG92ZXIsIC5kZWxldGUtcHJvamVjdCB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbiAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50LWhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5uZXctdGFzayB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI25ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7ICovXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCBtaW4tY29udGVudCkpO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQuY29sbGFwc2VkIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweCA1cHggMjBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQuc3RyaWtlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc3RyaWtlIHtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBGYWRlSW47XFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBGYWRlSW4ge1xcbiAgICAgICAgICAgICAgICAgICAgMCUge1xcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAudGFzay1pY29ucyB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLWhpZGVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5kYXRlLWRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kYXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktaGlnaCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaGlnaC1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbWVkaXVtLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktbG93IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1sb3ctcHJpb3JpdHkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIFByb2plY3QgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3VibWl0LW5hbWUtYnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLyogVEljayBidXR0b24gKi9cXG5cXG4gICAgLyogLnRpY2sge1xcblxcbiAgICB9ICovXFxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4gICAgLmNsb3NlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZTpob3ZlcixcXG4gICAgLmNsb3NlOmZvY3VzIHtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBUYXNsIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAgIC50YXNrLW1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLnRhc2staW5wdXQge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2staW5wdXQgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3VibWl0LXRhc2stYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIENoZWNrYm94ICovXFxuXFxuICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIHsgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIEhpZGUgdGhlIGRlZmF1bHQgY2hlY2tib3ggKi8gIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHsgIFxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgIFxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovICBcXG4gICAgICAgICAgLm1hcmsgeyAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXFxuICAgICAgICAgICAgdG9wOiAwOyAgXFxuICAgICAgICAgICAgbGVmdDogMDsgIFxcbiAgICAgICAgICAgIGhlaWdodDogMjBweDsgIFxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4OyAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTsgXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAubWFyayB7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAubWFyayB7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDU4LCAyNTUpOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBDcmVhdGUgdGhlIG1hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi8gIFxcbiAgICAgICAgICAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjsgIFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIFNob3cgdGhlIG1hcmsgd2hlbiBjaGVja2VkICovICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLm1hcms6YWZ0ZXIgeyAgXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIFN0eWxlIHRoZSBtYXJrL2luZGljYXRvciAqLyAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgLm1hcms6YWZ0ZXIgeyAgXFxuICAgICAgICAgICAgbGVmdDogNnB4OyAgXFxuICAgICAgICAgICAgdG9wOiAycHg7ICBcXG4gICAgICAgICAgICB3aWR0aDogNXB4OyAgXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4OyAgXFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTsgIFxcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7ICBcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICBcXG4gICAgICAgICAgfSAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBDcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IENyZWF0ZVByb2plY3RTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdF9zdG9yYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJET00gfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBuZXcgQ3JlYXRlUHJvamVjdFN0b3JhZ2UoKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdChcIkRlZmF1bHRcIik7XG5jb25zdCBhbm90aGVyUHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0KFwiQW5vdGhlciBQcm9qZWN0XCIpO1xuXG5kZWZhdWx0UHJvamVjdC5jcmVhdGVOZXdUYXNrKFwiVGFzayBPbmVcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOYW0gYXV0IG51bGxhIGFyY2hpdGVjdG8gYWxpcXVhbSBkb2xvcmVzIGZ1Z2E/IEFjY3VzYW11cyBkZWxlbml0aSBkaXN0aW5jdGlvIGluY2lkdW50LCBldW0gdGVtcG9yYSBkb2xvcnVtIHF1aXNxdWFtIG1hZ25hbSBibGFuZGl0aWlzIHF1aWEgcXVvZCBjb25zZWN0ZXR1ciBleGNlcHR1cmkgcGVyZmVyZW5kaXMuXCIsIDEsIGZhbHNlLCBcIjIwMjItMDMtMDRcIik7XG5kZWZhdWx0UHJvamVjdC5jcmVhdGVOZXdUYXNrKFwiVGFzayBUd29cIiwgXCJCYW5hbmFzLCBhcHBsZXNcIiwgMywgZmFsc2UsIFwiMjAyMi0wMy0xNVwiKTtcbmRlZmF1bHRQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soXCJUYXNrIFRocmVlXCIsIFwiQmFuYW5hcywgYXBwbGVzXCIsIDIsIGZhbHNlLCBcIjIwMjItMDQtMjBcIik7XG5cbmNvbnN0IERPTVJlbmRlcmVyID0gbmV3IHJlbmRlckRPTSgpO1xuXG5ET01SZW5kZXJlci5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuRE9NUmVuZGVyZXIucmVuZGVyVGFza3MoKTtcbkRPTVJlbmRlcmVyLm5ld1Byb2plY3RDbGljaygpO1xuRE9NUmVuZGVyZXIubmV3VGFza0NsaWNrKCk7XG5cbmV4cG9ydCB7IHByb2plY3RTdG9yYWdlLCBET01SZW5kZXJlciB9IiwiaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgRE9NUmVuZGVyZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jbGFzcyBDcmVhdGVQcm9qZWN0U3RvcmFnZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH07XG5cbiAgICAvLyBmaW5kIGFuZCBzZWxlY3QgcHJvamVjdCBieSBpZFxuXG4gICAgcHJvamVjdEdldHRlcihwcm9qZWN0SWQpIHtcblxuICAgICAgICBjb25zdCBmaW5kUHJvamVjdEluZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHByb2plY3RJZDtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdFN0b3JhZ2UubGlzdC5maW5kSW5kZXgoZmluZFByb2plY3RJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlLmxpc3RbcHJvamVjdEluZGV4XSlcblxuICAgICAgICByZXR1cm4gcHJvamVjdFN0b3JhZ2UubGlzdFtwcm9qZWN0SW5kZXhdO1xuXG4gICAgfTtcblxuICAgIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZSgpIHtcblxuICAgICAgICBjb25zdCBzbGljZWRJZCA9IHRoaXMuaWQuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBmaW5kUHJvamVjdEluZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHNsaWNlZElkO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0U3RvcmFnZS5saXN0LmZpbmRJbmRleChmaW5kUHJvamVjdEluZGV4KTtcblxuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuXG4gICAgICAgIERPTVJlbmRlcmVyLnJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCB7IENyZWF0ZVByb2plY3RTdG9yYWdlIH07IiwiaW1wb3J0IHsgRE9NUmVuZGVyZXIsIHByb2plY3RTdG9yYWdlIH0gZnJvbSAnLi9pbmRleCdcblxuLy8gcHJvamVjdCBvYmplY3RzXG5cbmNsYXNzIENyZWF0ZVByb2plY3Qge1xuXG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2VuZXJhdGVHdWlkKCk7XG4gICAgICAgIHRoaXMudGFza0NvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRhc2tTdG9yYWdlID0gW107XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdFRvU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIGdvIGluIHByb2plY3Qgc3RvcmFnZVxuXG4gICAgYWRkUHJvamVjdFRvU3RvcmFnZSgpIHtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2UubGlzdC5wdXNoKHRoaXMpO1xuICAgICAgICAvLyBET01SZW5kZXJlci5yZW5kZXJQcm9qZWN0TGlzdCgpOyBcbiAgICB9XG5cbiAgICAvLyBhZGQgdGFza3MgdG8gcHJvamVjdCBvYmplY3RcblxuICAgIGNyZWF0ZU5ld1Rhc2sgKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlKSB7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmdlbmVyYXRlR3VpZCgpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudGFza1N0b3JhZ2UucHVzaCh0YXNrKTtcblxuICAgICAgICB0aGlzLnRhc2tDb3VudGVyKys7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHRhc2tzIGZyb20gcHJvamVjdCBvYmplY3RcblxuICAgIGRlbGV0ZVRhc2sgKHRhc2tJZCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJZClcblxuICAgICAgICBjb25zdCBmaW5kVGFza0luZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHRhc2tJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGhpcy50YXNrU3RvcmFnZS5maW5kSW5kZXgoZmluZFRhc2tJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbmRleClcblxuICAgICAgICB0aGlzLnRhc2tTdG9yYWdlLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMudGFza0NvdW50ZXItLTtcblxuICAgICAgICBET01SZW5kZXJlci5yZW5kZXJUYXNrcygpO1xuICAgIH1cblxuICAgIGNoZWNrVW5jaGVja1Rhc2sgKHRhc2tJZCkge1xuXG4gICAgICAgIGNvbnN0IGZpbmRUYXNrSW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gdGFza0lkO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0aGlzLnRhc2tTdG9yYWdlLmZpbmRJbmRleChmaW5kVGFza0luZGV4KTtcblxuICAgICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0uc3RhdHVzO1xuXG4gICAgICAgIGlmKHN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLnN0YXR1cyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0uc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tTdG9yYWdlKVxuICAgIH1cblxuICAgIGNoYW5nZVRhc2tQcmlvcml0eSAodGFza0lkKSB7XG5cbiAgICAgICAgY29uc3QgZmluZFRhc2tJbmRleCA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0YXNrSWQ7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza1N0b3JhZ2UuZmluZEluZGV4KGZpbmRUYXNrSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLnByaW9yaXR5O1xuXG4gICAgICAgIGlmKHByaW9yaXR5ID09PSAxKXtcbiAgICAgICAgICAgIHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5wcmlvcml0eSA9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IDIpe1xuICAgICAgICAgICAgdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLnByaW9yaXR5ID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gMyl7XG4gICAgICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXNrU3RvcmFnZSlcbiAgICB9XG5cbiAgICBjaGFuZ2VEYXRlKG5ld0RhdGUsIHRhc2tJZCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IG5ld0RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGVWYWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2codGFza0lkKVxuXG4gICAgICAgIGNvbnN0IGZpbmRUYXNrSW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gdGFza0lkO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0aGlzLnRhc2tTdG9yYWdlLmZpbmRJbmRleChmaW5kVGFza0luZGV4KTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0pXG5cbiAgICAgICAgdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLmRhdGUgPSBkYXRlVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaWRcblxuICAgIGdlbmVyYXRlR3VpZCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCwgaSwgajtcbiAgICAgICAgcmVzdWx0ID0gJ0EnOyAvLyBzaG91bGQgbm90IHN0YXJ0IHdpdGggbnVtYmVyIGZvciBxdWVyeXNlbGVjdG9yXG4gICAgICAgIGZvcihqPTA7IGo8MzI7IGorKykge1xuICAgICAgICAgIGlmKCBqID09IDggfHwgaiA9PSAxMiB8fCBqID09IDE2IHx8IGogPT0gMjApXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAnLSc7XG4gICAgICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNikudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG59XG5cbmV4cG9ydCB7IENyZWF0ZVByb2plY3QgfTsiLCJpbXBvcnQgeyBDcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0cydcbmltcG9ydCB7IHByb2plY3RTdG9yYWdlIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IERPTVJlbmRlcmVyIH0gZnJvbSAnLi9pbmRleCdcblxuLy8gc2hvdyB0YXNrcyBvbiBtYWluIGNvbnRlbnRcblxuY2xhc3MgcmVuZGVyRE9NIHtcblxuICAgIC8vIHJlbmRlciBsaXN0IG9mIHByb2plY3RzXG5cbiAgICByZW5kZXJQcm9qZWN0TGlzdCgpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgICAgIHByb2plY3RMaXN0VWxFbGVtZW50LmlubmVySFRNTCA9IGBgO1xuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0TGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudC5uYW1lKTtcblxuICAgICAgICAgICAgcHJvamVjdExpc3RMaUVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwic3Bhbi1wcm9qZWN0XCIgaWQ9XCIke2VsZW1lbnQuaWR9LXNwYW5cIj4ke2VsZW1lbnQubmFtZX08L3NwYW4+IDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIiBpZD1cIiR7ZWxlbWVudC5pZH0tZGVsZXRlLWljb25cIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyLDIwQzcuNTksMjAgNCwxNi40MSA0LDEyQzQsNy41OSA3LjU5LDQgMTIsNEMxNi40MSw0IDIwLDcuNTkgMjAsMTJDMjAsMTYuNDEgMTYuNDEsMjAgMTIsMjBNMTIsMkM2LjQ3LDIgMiw2LjQ3IDIsMTJDMiwxNy41MyA2LjQ3LDIyIDEyLDIyQzE3LjUzLDIyIDIyLDE3LjUzIDIyLDEyQzIyLDYuNDcgMTcuNTMsMiAxMiwyTTE0LjU5LDhMMTIsMTAuNTlMOS40MSw4TDgsOS40MUwxMC41OSwxMkw4LDE0LjU5TDkuNDEsMTZMMTIsMTMuNDFMMTQuNTksMTZMMTYsMTQuNTlMMTMuNDEsMTJMMTYsOS40MUwxNC41OSw4WlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKTtcblxuICAgICAgICAgICAgcHJvamVjdExpc3RVbEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RMaUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudC5pZH0tZGVsZXRlLWljb25gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZUljb24pXG4gICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFN0b3JhZ2UucmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5yZW5kZXJUYXNrcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZW5kZXIgdGFza3Mgb2YgZmlyc3QgcHJvamVjdCBvbiBmaXJzdCBsb2FkXG5cbiAgICByZW5kZXJUYXNrcyhldmVudCkge1xuXG4gICAgICAgIGxldCBwcm9qZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuXG4gICAgICAgIGlmKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF0gIT0gXCJ0YXNrLW1vZGFsLXRpY2tcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgZXZlbnQnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgLTUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdElkKVxuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICAgICAgfSAgIGVsc2UgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwidGFzay1tb2RhbC10aWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpLmlkO1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RTdG9yYWdlLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0U3RvcmFnZS5saXN0WzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IG9uIGxvYWQgYW5kIHllcyBldmVudCcpXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgICAgICAgY29udGVudFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0SWQpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGBgO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gcHJvamVjdC50YXNrU3RvcmFnZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRhc2tDb250YWluZXIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSB0YXNrQ29udGFpbmVyW3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCBjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrT2JqZWN0LmlkfS1jYXJkYCk7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRQcmlvcml0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkUHJpb3JpdHlTdHlsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tPYmplY3QuaWR9LWNvbnRlbnRgKVxuICAgICAgICAgICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnREaXYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFRpdGxlXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94U3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmKHRhc2tPYmplY3Quc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U3RhdHVzID0gJ2NoZWNrZWQnXG4gICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250ZW50IHN0cmlrZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHt0YXNrT2JqZWN0Lm5hbWV9IDxkaXYgY2xhc3M9XCJ0YXNrLWljb25zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHt0YXNrT2JqZWN0LmlkfS1jaGVja2JveFwiICR7Y2hlY2tib3hTdGF0dXN9PjxzcGFuIGNsYXNzPVwibWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGlkPVwiJHt0YXNrT2JqZWN0LmlkfS1leHBhbmQtaWNvblwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEwLDIxVjE5SDYuNDFMMTAuOTEsMTQuNUw5LjUsMTMuMDlMNSwxNy41OVYxNEgzVjIxSDEwTTE0LjUsMTAuOTFMMTksNi40MVYxMEgyMVYzSDE0VjVIMTcuNTlMMTMuMDksOS41TDE0LjUsMTAuOTFaXCIgaWQ9XCIke3Rhc2tPYmplY3QuaWR9LWV4cGFuZC1pY29uXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPiA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCIgaWQ9XCIke3Rhc2tPYmplY3QuaWR9LWRlbGV0ZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVja2JveFxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrT2JqZWN0LmlkfS1jaGVja2JveGApXG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3Byb2plY3QuY2hlY2tVbmNoZWNrVGFzayh0YXNrT2JqZWN0LmlkKX0pXG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5zdHJpa2V0aHJvdWdoVGFza0lmQ29tcGxldGVkKVxuXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIEJ1dHRvblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tPYmplY3QuaWR9LWRlbGV0ZS1pY29uYCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7cHJvamVjdC5kZWxldGVUYXNrKHRhc2tPYmplY3QuaWQpfSlcblxuICAgICAgICAgICAgICAgIC8vIEV4cGFuZCAvIFJldHJhY3QgYnV0dG9uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza09iamVjdC5pZH0tZXhwYW5kLWljb25gKTtcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRJY29uLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIuZXhwYW5kVGFza3MpKVxuICAgICAgICAgICAgICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5leHBhbmRUYXNrcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZC1pY29uJylcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrT2JqZWN0LmlkfS1leHBhbmQtZGl2YCk7XG4gICAgICAgICAgICAgICAgLy8gZXhwYW5kSWNvbi5pbm5lckhUTUwgPSBgYFxuICAgICAgICAgICAgICAgIC8vIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGV4cGFuZEljb24pXG5cbiAgICAgICAgICAgICAgICAvLyBDYXJkIEhpZGVyc1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEhpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZEhpZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1oaWRlcicpO1xuICAgICAgICAgICAgICAgIGNhcmRIaWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza09iamVjdC5pZH0taGlkZXJgKTtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkSGlkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke3Rhc2tPYmplY3QuZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgICAgICBjYXJkSGlkZXIuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxuICAgICAgICAgICAgICAgIGlmKHRhc2tPYmplY3QucHJpb3JpdHkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1oaWdoJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGFza09iamVjdC5wcmlvcml0eSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LW1lZGl1bScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRhc2tPYmplY3QucHJpb3JpdHkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1sb3cnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5IHRvZ2dsZVxuXG4gICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci50b2dnbGVQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgY2FyZFByaW9yaXR5U3R5bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe3Byb2plY3QuY2hhbmdlVGFza1ByaW9yaXR5KHRhc2tPYmplY3QuaWQpfSlcblxuICAgICAgICAgICAgICAgIC8vIER1ZSBkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGUtZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZEhpZGVyLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dGFza09iamVjdC5kYXRlfWApXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1kYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWU6ICc7XG5cbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpXG4gICAgICAgICAgICAgICAgY2FyZERhdGUuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBkYXRlXG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBuZXdEYXRlID0gZGF0ZUlucHV0Lm9uY2hhbmdlLnZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5jaGFuZ2VEYXRlKG5ld0RhdGUsIHRhc2tPYmplY3QuaWQpfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYXJkQ29tcGxldGlvbkRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBjYXJkQ29tcGxldGlvbkRvbmUuaW5uZXJUZXh0ID0gJ0RvbmUnO1xuICAgICAgICAgICAgICAgIC8vIGNhcmRDb21wbGV0aW9uLmFwcGVuZENoaWxkKGNhcmRDb21wbGV0aW9uRG9uZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYXJkQ29tcGxldGlvbk5vdERvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAvLyBjYXJkQ29tcGxldGlvbk5vdERvbmUuaW5uZXJUZXh0ID0gJ05vdCBEb25lJztcbiAgICAgICAgICAgICAgICAvLyBjYXJkQ29tcGxldGlvbi5hcHBlbmRDaGlsZChjYXJkQ29tcGxldGlvbk5vdERvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFxuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBcblxuICAgIC8vIHNlbGVjdCBwcm9qZWN0IGZyb20gbGlzdFxuXG5cblxuICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBsaXN0ZW5lclxuXG4gICAgbmV3UHJvamVjdENsaWNrKCkge1xuXG4gICAgICAgIC8vIHNob3cgbW9kYWwgd2l0aCBuYW1lIGFuZCB0aWNrbWFya1xuICAgIFxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuZXctcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IHRpY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwtdGljaycpO1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0RWxlbWVudClcbiAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3BlblByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSAoZXZlbnQpID0+IHsgICAgICAgIFxuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3RNb2RhbCgpO1xuICAgICAgICAgICAgICAgIERPTVJlbmRlcmVyLmNyZWF0ZVByb2plY3RGcm9tSW5wdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuZm9yRWFjaCggZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByb2plY3RNb2RhbCkpXG4gICAgXG4gICAgICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcbiAgICAgICAgdGlja0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIuY3JlYXRlUHJvamVjdEZyb21JbnB1dClcbiAgICBcbiAgICBcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIFxuICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlbnRlcktleSk7XG4gICAgfTtcblxuICAgIC8vIFxuXG4gICAgXG4gICAgXG4gICAgLy8gY3JlYXRlIG5ldyB0YXNrIGxpc3RlbmVyXG5cbiAgICBuZXdUYXNrQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25ldy10YXNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2tJY29uKVxuICAgIFxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IHRpY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwtdGljaycpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aWNrSWNvbilcbiAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gY29uc3QgZW50ZXJLZXkgPSAoZXZlbnQpID0+IHsgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgLy8gICAgICAgICBjbG9zZVRhc2tNb2RhbCgpO1xuICAgICAgICAvLyAgICAgICAgIC8vIGNyZWF0ZVByb2plY3RGcm9tSW5wdXQoKTsgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIG5ld1Rhc2tJY29uLmZvckVhY2goIGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrTW9kYWwpKVxuICAgIFxuICAgICAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLmNyZWF0ZVRhc2tGcm9tSW5wdXQpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKTtcbiAgICBcbiAgICBcbiAgICAgICAgLy8gY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIFxuICAgICAgICAvLyBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlbnRlcktleSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZVByb2plY3RGcm9tSW5wdXQgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdChpbnB1dFZhbHVlKTtcbiAgICBcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICBET01SZW5kZXJlci5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIFxuICAgIH07XG5cbiAgICBjcmVhdGVUYXNrRnJvbUlucHV0KCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdFRpdGxlLmlkXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJZClcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2UucHJvamVjdEdldHRlcihwcm9qZWN0SWQpO1xuICAgIFxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVWYWx1ZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgIFxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHlWYWx1ZSA9IHBhcnNlSW50KHByaW9yaXR5VmFsdWUpO1xuICAgIFxuICAgICAgICBwcm9qZWN0LmNyZWF0ZU5ld1Rhc2sobmFtZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBwcmlvcml0eVZhbHVlLCBmYWxzZSwgZGF0ZVZhbHVlKTtcblxuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICBcbiAgICB9O1xuXG4gICAgZXhwYW5kVGFza3MoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgICAgICBjb25zdCBpZEdldHRlciA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCAtMTIpO1xuICAgICAgICBjb25zb2xlLmxvZyhpZEdldHRlcik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWRHZXR0ZXJ9LWNhcmRgKTtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZEhpZGVyLmNsYXNzTGlzdFsxXSk7XG4gICAgICAgIFxuICAgICAgICBpZihjYXJkSGlkZXIuY2xhc3NMaXN0WzFdID09PSAnY29sbGFwc2VkJykge1xuICAgICAgICAgICAgY2FyZEhpZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FyZEhpZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZCBjb2xsYXBzZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0cmlrZXRocm91Z2hUYXNrSWZDb21wbGV0ZWQgKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBjb25zdCBjaGVja2VkVmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZFxuICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgLTkpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrSWR9LWNvbnRlbnRgKVxuXG4gICAgICAgIGlmKGNoZWNrZWRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGVudCBzdHJpa2UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRlbnQnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVQcmlvcml0eShldmVudCkge1xuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5RGl2LmNsYXNzTGlzdFswXTtcblxuICAgICAgICBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gJ3ByaW9yaXR5LWxvdycpIHtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbWVkaXVtJylcblxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5VmFsdWUgPT09ICdwcmlvcml0eS1tZWRpdW0nKSB7XG4gICAgICAgICAgICBwcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWhpZ2gnKVxuXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gJ3ByaW9yaXR5LWhpZ2gnKSB7XG4gICAgICAgICAgICBwcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxvdycpXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufTtcblxuZXhwb3J0IHsgcmVuZGVyRE9NIH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9