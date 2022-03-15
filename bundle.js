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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: rgb(255, 0, 0);\n    --card-medium-priority: rgb(255, 238, 0);\n    --card-low-priority: rgb(37, 184, 0);\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n    --border-radius: 15px;\n}\n\nsvg {\n    overflow: visible;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: var(--border-radius);\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n        font-size: 1.2rem;\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n            font-size: 1rem;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            /* grid-template-columns: 1; */\n            grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n            gap: 20px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            overflow: hidden;\n            height: 150px;\n            transition: height 300ms ease-out;\n            background-color: var(--sidebar-background);\n            border-radius: var(--border-radius);\n        }\n\n            .card.collapsed {\n                height: 50px;\n                transition: height 300ms ease-out;\n            }\n\n            .card-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 0px 20px 5px 20px;\n                height: 50px;\n            }\n\n            \n            .card-content {\n                position: relative;\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n\n                .card-content.strike:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 25px;\n                    left: 10px;\n                    border-bottom: 2px solid var(--header-background);\n                    width: 85%;\n                }\n\n                /* .strike {\n                    animation-name: FadeIn;\n                    animation-duration: 1s;\n                    transition-timing-function: linear;\n                  }\n                  \n                  @keyframes FadeIn {\n                    0% {\n                      opacity: 0;\n                    }\n                    100% {\n                      opacity: 1;\n                    }\n                  } */\n                \n            .task-icons {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 10px;\n            }\n\n            .card-hider {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height: 80px;\n                padding: 0px 20px 20px 20px;\n            }\n\n                .card-description {\n                    padding: 0px 0px 10px 0px;\n                    font-weight: 100;\n                }\n\n                .date-div {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n\n                .card-date {\n                    background-color: var(--content-background);\n                    padding-left: 5px;\n                    border-radius: 5px;\n                    border: none;\n                    outline: none;\n                }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px 20px 0px 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n            border-radius: 5px;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n\n        .task-input input, textarea, select {\n            height: 24px;\n            padding-left: 5px;\n            border-radius: 5px;\n            outline: none;\n            border: none;\n            background-color: var(--content-background);\n        }\n\n        .task-input textarea {\n            height: 48px;\n        }\n\n        .submit-task-button {\n            padding-top: 10px;\n            outline: none;\n            background-color: transparent;\n            border: none;\n        }\n\n        /* Checkbox */\n\n        .checkbox-container {  \n            display: flex;  \n            position: relative;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;  \n            font-size: 20px;  \n          }  \n            \n          /* Hide the default checkbox */  \n          .checkbox-container input {  \n            visibility: hidden;  \n            cursor: pointer;  \n          }  \n            \n          /* Create a custom checkbox */  \n          .mark {  \n            position: absolute;  \n            top: 0;  \n            left: 0;  \n            height: 20px;  \n            width: 20px;  \n            background-color: var(--content-background); \n            border-radius: 3px; \n          }  \n            \n          .checkbox-container:hover input ~ .mark {  \n            background-color: gray;  \n          }  \n            \n          .checkbox-container input:checked ~ .mark {  \n            background-color: rgb(58, 58, 255);  \n          }  \n            \n          /* Create the mark/indicator (hidden when not checked) */  \n          .mark:after {  \n            content: \"\";  \n            position: absolute;  \n            display: none;  \n          }  \n            \n          /* Show the mark when checked */  \n          .checkbox-container input:checked ~ .mark:after {  \n            display: block;  \n          }  \n            \n          /* Style the mark/indicator */  \n          .checkbox-container .mark:after {  \n            left: 6px;  \n            top: 2px;  \n            width: 5px;  \n            height: 10px;  \n            border: solid white;  \n            border-width: 0 3px 3px 0;  \n            transform: rotate(45deg);  \n          }  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header-background: #475569;\n    --sidebar-background: #94a3b8;\n    --content-background: #f1f5f9;\n    --card-high-priority: rgb(255, 0, 0);\n    --card-medium-priority: rgb(255, 238, 0);\n    --card-low-priority: rgb(37, 184, 0);\n    --icon-color: white;\n    --title-color: white;\n    --title-weight: 800;\n    --text-color: white;\n    --text-weight: 600;\n    --border-radius: 15px;\n}\n\nsvg {\n    overflow: visible;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Cedarville';\n    src: url('./fonts/CedarvilleCursive-Regular.ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto;\n}\n\nsvg {\n    color: var(--icon-color);\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n    grid-template-rows: 60px minmax(calc(100vh - 60px), 1fr);\n    color: var(--text-color);\n    font-weight: var(--text-weight);\n}\n\n    .header {\n        grid-column: 1 / 3;\n        display: grid;\n        grid-template-columns: minmax(200px, 300px) 1fr;\n        background-color: var(--header-background);\n    }\n\n        .logo {\n            font-family: Cedarville;\n            font-size: 1.9rem;\n            text-align: center;\n            color: var(--title-color);\n            font-weight: var(--title-weight);\n        }\n\n        .search {\n            display: flex;\n            align-items: center;\n            gap: 20px;\n            padding-left: 30px;\n        }\n\n        .search input, .modal-content input {\n            height: 24px;\n            width: 50%;\n            padding: 0 10px 0 10px;\n            border-radius: var(--border-radius);\n            border: none;\n            outline: none;\n        }\n\n    .sidebar {\n        grid-row: 2 / 3;\n        background-color: var(--sidebar-background);\n        font-size: 1.2rem;\n    }\n\n        .projects-header {\n            display: flex;\n            justify-content: flex-start;\n            gap: 10px;\n            align-items: center;\n            padding: 20px 0 0 20px;\n        }\n\n        .list-item {\n            display: flex;\n            padding-top: 5px;\n            padding-right: 20px;\n            justify-content: space-between;\n            align-items: center;\n            list-style: none;\n            font-size: 1rem;\n        }\n\n        .span-project:hover, #new-project:hover, .delete-project {\n            cursor: pointer;\n        }\n\n    .content {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n        grid-template-rows: 60px 1fr;\n        padding: 50px;\n        gap: 50px;\n        background-color: var(--content-background);\n    }\n\n        .content-header {\n            grid-row: 1 / 2;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            font-size: 3rem;\n            color: var(--sidebar-background);\n        }\n            .new-task {\n                display: flex;\n                align-items: center;\n                gap: 20px;\n            }\n\n            #new-task {\n                color: var(--sidebar-background);\n            }\n        .card-container {\n            grid-row: 2 / 3;\n            display: grid;\n            /* grid-template-columns: 1; */\n            grid-template-rows: repeat(auto-fit, minmax(50px, min-content));\n            gap: 20px;\n        }\n        .card {\n            display: grid;\n            grid-template-columns: 20px 1fr;\n            box-sizing: border-box;\n            overflow: hidden;\n            height: 150px;\n            transition: height 300ms ease-out;\n            background-color: var(--sidebar-background);\n            border-radius: var(--border-radius);\n        }\n\n            .card.collapsed {\n                height: 50px;\n                transition: height 300ms ease-out;\n            }\n\n            .card-title {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 0px 20px 5px 20px;\n                height: 50px;\n            }\n\n            \n            .card-content {\n                position: relative;\n                grid-column: 2 / 3;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n\n                .card-content.strike:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 25px;\n                    left: 10px;\n                    border-bottom: 2px solid var(--header-background);\n                    width: 85%;\n                }\n\n                /* .strike {\n                    animation-name: FadeIn;\n                    animation-duration: 1s;\n                    transition-timing-function: linear;\n                  }\n                  \n                  @keyframes FadeIn {\n                    0% {\n                      opacity: 0;\n                    }\n                    100% {\n                      opacity: 1;\n                    }\n                  } */\n                \n            .task-icons {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 10px;\n            }\n\n            .card-hider {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height: 80px;\n                padding: 0px 20px 20px 20px;\n            }\n\n                .card-description {\n                    padding: 0px 0px 10px 0px;\n                    font-weight: 100;\n                }\n\n                .date-div {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                }\n\n                .card-date {\n                    background-color: var(--content-background);\n                    padding-left: 5px;\n                    border-radius: 5px;\n                    border: none;\n                    outline: none;\n                }\n\n            .priority-high {\n                background-color: var(--card-high-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-medium {\n                background-color: var(--card-medium-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n            .priority-low {\n                background-color: var(--card-low-priority);\n                border-top-left-radius: var(--border-radius);\n                border-bottom-left-radius: var(--border-radius);\n            }\n\n        /* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.2); /* Black w/ opacity */\n}\n  \n    /* Project Modal Content/Box */\n    .modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .modal-title {\n            grid-column: 2 / 3;\n            text-align: center;\n        }\n\n        .modal-input {\n            grid-column: 2 / 3;\n            grid-row: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            gap: 20px;\n            padding: 20px 20px 0px 20px;\n        }\n\n        .modal-content input {\n            width: 100%;\n            align-self: center;\n            border-radius: 5px;\n        }\n\n        .submit-name-button {\n            background-color: transparent;\n            outline: none;\n            border: none;\n        }\n\n    /* TIck button */\n\n    /* .tick {\n\n    } */\n    /* The Close Button */\n    .close {\n        color: var(--text-color);\n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n    }\n\n    .close:hover,\n    .close:focus {\n        color: black;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    /* Tasl Modal Content/Box */\n    .task-modal-content {\n        display: grid;\n        grid-template-columns: 1fr 80% 1fr;\n        grid-template-rows: 40px 1fr;\n        background-color: var(--sidebar-background);\n        margin: 15% auto; /* 15% from the top and centered */\n        padding: 20px;\n        border: 1px solid #888;\n        border-radius: var(--border-radius);\n        width: 30%; /* Could be more or less, depending on screen size */\n    }\n\n        .task-input {\n            grid-column: 2 / 3;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n\n        .task-input input, textarea, select {\n            height: 24px;\n            padding-left: 5px;\n            border-radius: 5px;\n            outline: none;\n            border: none;\n            background-color: var(--content-background);\n        }\n\n        .task-input textarea {\n            height: 48px;\n        }\n\n        .submit-task-button {\n            padding-top: 10px;\n            outline: none;\n            background-color: transparent;\n            border: none;\n        }\n\n        /* Checkbox */\n\n        .checkbox-container {  \n            display: flex;  \n            position: relative;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;  \n            font-size: 20px;  \n          }  \n            \n          /* Hide the default checkbox */  \n          .checkbox-container input {  \n            visibility: hidden;  \n            cursor: pointer;  \n          }  \n            \n          /* Create a custom checkbox */  \n          .mark {  \n            position: absolute;  \n            top: 0;  \n            left: 0;  \n            height: 20px;  \n            width: 20px;  \n            background-color: var(--content-background); \n            border-radius: 3px; \n          }  \n            \n          .checkbox-container:hover input ~ .mark {  \n            background-color: gray;  \n          }  \n            \n          .checkbox-container input:checked ~ .mark {  \n            background-color: rgb(58, 58, 255);  \n          }  \n            \n          /* Create the mark/indicator (hidden when not checked) */  \n          .mark:after {  \n            content: \"\";  \n            position: absolute;  \n            display: none;  \n          }  \n            \n          /* Show the mark when checked */  \n          .checkbox-container input:checked ~ .mark:after {  \n            display: block;  \n          }  \n            \n          /* Style the mark/indicator */  \n          .checkbox-container .mark:after {  \n            left: 6px;  \n            top: 2px;  \n            width: 5px;  \n            height: 10px;  \n            border: solid white;  \n            border-width: 0 3px 3px 0;  \n            transform: rotate(45deg);  \n          }  "],"sourceRoot":""}]);
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.js");






const projectStorage = new _project_storage__WEBPACK_IMPORTED_MODULE_2__.CreateProjectStorage();

// const defaultProject = new CreateProject("Default");

// defaultProject.createNewTask("Task One", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut nulla architecto aliquam dolores fuga? Accusamus deleniti distinctio incidunt, eum tempora dolorum quisquam magnam blanditiis quia quod consectetur excepturi perferendis.", 1, false, "2022-03-04");
// defaultProject.createNewTask("Task Two", "Bananas, apples", 3, false, "2022-03-15");
// defaultProject.createNewTask("Task Three", "Bananas, apples", 2, false, "2022-04-20");

const DOMRenderer = new _render__WEBPACK_IMPORTED_MODULE_3__.renderDOM();

(0,_local_storage__WEBPACK_IMPORTED_MODULE_4__.getLocalStorage)();

DOMRenderer.renderProjectList();
DOMRenderer.renderTasks();
DOMRenderer.newProjectClick();
DOMRenderer.newTaskClick();

// projectStorage.clearStorage();
console.log(projectStorage);

// on project creation, stringify and push to local storage (maybe take projectStorage and push the whole thing)
// on page load, get from storage, parse, proto back methods, store in projectStorage

// tasks not sure yet, could work with the above by itself



/***/ }),

/***/ "./src/local_storage.js":
/*!******************************!*\
  !*** ./src/local_storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage),
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const setLocalStorage = () => {

    localStorage.clear();
    const projectStorageSerialized = JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.projectStorage);
    console.log(projectStorageSerialized);
    localStorage.setItem('projectStorage', projectStorageSerialized);
    console.log(localStorage);
}

const getLocalStorage = () => {

    console.log(localStorage);

    if(localStorage.length > 0) {

        const storage = localStorage.getItem('projectStorage');
        const storageDeserialized = JSON.parse(storage);

        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projectStorage)

        _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.clearStorage();

        // Object.setPrototypeOf(storageDeserialized, CreateProject);
        // storageDeserialized.__proto__ = CreateProject.prototype;
        console.log(storageDeserialized);

        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projectStorage);

        storageDeserialized.list.forEach(element => {
            
            element.__proto__ = _projects__WEBPACK_IMPORTED_MODULE_1__.CreateProject.prototype;
            // Object.setPrototypeOf(element, CreateProject);
            console.log(element);

            _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.push(element);
            console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projectStorage  )       
        });
    } else {
        const defaultProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.CreateProject("Default");
    }

}



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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.js");




class CreateProjectStorage {

    constructor () {
        this.list = [];
    };

    // find and select project by id

    projectGetter(projectId) {

        const findProjectIndex = (element) => element.id === projectId;
        const projectIndex = _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.findIndex(findProjectIndex);

        return _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list[projectIndex];

    };

    removeProjectFromStorage() {

        const slicedId = this.id.slice(0, -12);

        const findProjectIndex = (element) => element.id === slicedId;
        const projectIndex = _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.findIndex(findProjectIndex);

        _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.splice(projectIndex, 1);

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
        _index__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer.renderProjectList();
    }

    // clear storage

    clearStorage() {
        // delete projectStorage.list;
        _index__WEBPACK_IMPORTED_MODULE_0__.projectStorage.list.length = 0;
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
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.js");



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

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
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

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
    }

    // remove tasks from project object

    deleteTask (taskId) {

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        this.taskStorage.splice(taskIndex, 1);

        this.taskCounter--;

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
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

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)()
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

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)()
    }

    changeDate(newDate, taskId) {

        const dateValue = newDate;

        const findTaskIndex = (element) => element.id === taskId;
        const taskIndex = this.taskStorage.findIndex(findTaskIndex);

        this.taskStorage[taskIndex].date = dateValue;

        (0,_local_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)()
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
            deleteIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.removeProjectFromStorage);
            deleteIcon.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.DOMRenderer.renderTasks);
        });
    };

    // render tasks of first project on first load

    renderTasks(event) {

        let project;

        if(event !== undefined && event.currentTarget.classList[0] != "task-modal-tick") {
            const projectId = event.target.id.slice(0, -5);
            project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.projectGetter(projectId);
        }   else if (event !== undefined && event.currentTarget.classList[0] === "task-modal-tick") {
            const projectId = document.querySelector('.content-project-title').id;
            project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.projectGetter(projectId);
            }
            else if (_index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.list.length > 0) {
                project = _index__WEBPACK_IMPORTED_MODULE_1__.projectStorage.list[0];
            }

        if (project !== undefined) {
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
    
        const modal = document.querySelector('#task-modal');
        const closeIcon = document.querySelector('.task-modal-close');
        const tickIcon = document.querySelector('.task-modal-tick');
    
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
        const projectId = projectTitle.id;

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

        if(project === undefined) {
            alert('Please Select/Create a Project Before Creating Tasks!')
        }    
        project.createNewTask(nameValue, descriptionValue, priorityValue, false, dateValue);        

        nameInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    
    };

    expandTasks(event) {
        const idGetter = event.target.id.slice(0, -12);

        const cardHider = document.querySelector(`#${idGetter}-card`);
        
        if(cardHider.classList[1] === 'collapsed') {
            cardHider.setAttribute('class', 'card');
        } else {
            cardHider.setAttribute('class', 'card collapsed');
        }
    }

    strikethroughTaskIfCompleted (event) {
        const checkedValue = event.target.checked;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxhQUFhLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxjQUFjLGNBQWMsWUFBWSxRQUFRLEtBQUssYUFBYSxjQUFjLFlBQVksYUFBYSxZQUFZLE9BQU8sTUFBTSxXQUFXLGFBQWEsWUFBWSxXQUFXLGFBQWEsWUFBWSxPQUFPLGtCQUFrQixPQUFPLEtBQUssV0FBVyxhQUFhLGNBQWMsWUFBWSxNQUFNLEtBQUssV0FBVyxhQUFhLGNBQWMsWUFBWSxhQUFhLE9BQU8sTUFBTSxhQUFhLGNBQWMsUUFBUSxNQUFNLFdBQVcsYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGNBQWMsY0FBYyxZQUFZLFdBQVcsUUFBUSxLQUFLLGFBQWEsY0FBYyxjQUFjLE9BQU8sS0FBSyxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssYUFBYSxjQUFjLGNBQWMsT0FBTyxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsV0FBVyxZQUFZLGFBQWEsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEseUJBQXlCLFdBQVcsWUFBWSxhQUFhLHVCQUF1QixPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGlDQUFpQyxtQ0FBbUMsb0NBQW9DLG9DQUFvQywyQ0FBMkMsK0NBQStDLDJDQUEyQywwQkFBMEIsMkJBQTJCLDBCQUEwQiwwQkFBMEIseUJBQXlCLDRCQUE0QixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsZ0JBQWdCLDRCQUE0Qiw2Q0FBNkMsR0FBRyxnQkFBZ0IsZ0NBQWdDLHdEQUF3RCxHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsR0FBRyxTQUFTLCtCQUErQixHQUFHLGdCQUFnQixvQkFBb0Isc0RBQXNELCtEQUErRCwrQkFBK0Isc0NBQXNDLEdBQUcsaUJBQWlCLDZCQUE2Qix3QkFBd0IsMERBQTBELHFEQUFxRCxPQUFPLG1CQUFtQixzQ0FBc0MsZ0NBQWdDLGlDQUFpQyx3Q0FBd0MsK0NBQStDLFdBQVcscUJBQXFCLDRCQUE0QixrQ0FBa0Msd0JBQXdCLGlDQUFpQyxXQUFXLGlEQUFpRCwyQkFBMkIseUJBQXlCLHFDQUFxQyxrREFBa0QsMkJBQTJCLDRCQUE0QixXQUFXLGtCQUFrQiwwQkFBMEIsc0RBQXNELDRCQUE0QixPQUFPLDhCQUE4Qiw0QkFBNEIsMENBQTBDLHdCQUF3QixrQ0FBa0MscUNBQXFDLFdBQVcsd0JBQXdCLDRCQUE0QiwrQkFBK0Isa0NBQWtDLDZDQUE2QyxrQ0FBa0MsK0JBQStCLDhCQUE4QixXQUFXLHNFQUFzRSw4QkFBOEIsV0FBVyxrQkFBa0Isd0JBQXdCLHNFQUFzRSx1Q0FBdUMsd0JBQXdCLG9CQUFvQixzREFBc0QsT0FBTyw2QkFBNkIsOEJBQThCLDRCQUE0Qiw2Q0FBNkMsa0NBQWtDLDhCQUE4QiwrQ0FBK0MsV0FBVyx5QkFBeUIsZ0NBQWdDLHNDQUFzQyw0QkFBNEIsZUFBZSwyQkFBMkIsbURBQW1ELGVBQWUsMkJBQTJCLDhCQUE4Qiw0QkFBNEIsMkNBQTJDLGdGQUFnRix3QkFBd0IsV0FBVyxpQkFBaUIsNEJBQTRCLDhDQUE4QyxxQ0FBcUMsK0JBQStCLDRCQUE0QixnREFBZ0QsMERBQTBELGtEQUFrRCxXQUFXLGlDQUFpQywrQkFBK0Isb0RBQW9ELGVBQWUsNkJBQTZCLGdDQUFnQyxpREFBaUQsc0NBQXNDLDZDQUE2QywrQkFBK0IsZUFBZSw2Q0FBNkMscUNBQXFDLHFDQUFxQyxnQ0FBZ0MseUNBQXlDLCtCQUErQixlQUFlLGdEQUFnRCxxQ0FBcUMseUNBQXlDLGdDQUFnQyxpQ0FBaUMsd0VBQXdFLGlDQUFpQyxtQkFBbUIsZ0NBQWdDLDZDQUE2Qyw2Q0FBNkMseURBQXlELHFCQUFxQiwyREFBMkQsMEJBQTBCLG1DQUFtQyx1QkFBdUIsNEJBQTRCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLCtDQUErQyxnQ0FBZ0MsMENBQTBDLHNDQUFzQyw0QkFBNEIsZUFBZSw2QkFBNkIsZ0NBQWdDLHlDQUF5QyxpREFBaUQsK0JBQStCLDhDQUE4QyxlQUFlLHVDQUF1QyxnREFBZ0QsdUNBQXVDLG1CQUFtQiwrQkFBK0Isb0NBQW9DLDBDQUEwQyxnQ0FBZ0MsbUJBQW1CLGdDQUFnQyxrRUFBa0Usd0NBQXdDLHlDQUF5QyxtQ0FBbUMsb0NBQW9DLG1CQUFtQixnQ0FBZ0MsOERBQThELCtEQUErRCxrRUFBa0UsZUFBZSxrQ0FBa0MsZ0VBQWdFLCtEQUErRCxrRUFBa0UsZUFBZSwrQkFBK0IsNkRBQTZELCtEQUErRCxrRUFBa0UsZUFBZSxrREFBa0QscUJBQXFCLDhDQUE4QyxxQ0FBcUMsOEJBQThCLGFBQWEsbUJBQW1CLG9DQUFvQyx1Q0FBdUMsaUVBQWlFLDZEQUE2RCx5QkFBeUIsK0RBQStELHdCQUF3Qiw2Q0FBNkMsdUNBQXVDLHNEQUFzRCw0QkFBNEIsMkRBQTJELGlDQUFpQyw4Q0FBOEMsc0JBQXNCLDREQUE0RCwwQkFBMEIsaUNBQWlDLGlDQUFpQyxXQUFXLDBCQUEwQixpQ0FBaUMsOEJBQThCLDRCQUE0QixxQ0FBcUMsNkNBQTZDLGtDQUFrQyx3QkFBd0IsMENBQTBDLFdBQVcsa0NBQWtDLDBCQUEwQixpQ0FBaUMsaUNBQWlDLFdBQVcsaUNBQWlDLDRDQUE0Qyw0QkFBNEIsMkJBQTJCLFdBQVcsMkNBQTJDLFVBQVUsNENBQTRDLG1DQUFtQyx1QkFBdUIsMEJBQTBCLDRCQUE0QixPQUFPLHlDQUF5Qyx1QkFBdUIsZ0NBQWdDLDBCQUEwQixPQUFPLCtEQUErRCx3QkFBd0IsNkNBQTZDLHVDQUF1QyxzREFBc0QsNEJBQTRCLDJEQUEyRCxpQ0FBaUMsOENBQThDLHNCQUFzQiw0REFBNEQseUJBQXlCLGlDQUFpQyw0QkFBNEIscUNBQXFDLHdCQUF3QixXQUFXLGlEQUFpRCwyQkFBMkIsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsMkJBQTJCLDBEQUEwRCxXQUFXLGtDQUFrQywyQkFBMkIsV0FBVyxpQ0FBaUMsZ0NBQWdDLDRCQUE0Qiw0Q0FBNEMsMkJBQTJCLFdBQVcsNkRBQTZELDhCQUE4QixpQ0FBaUMsa0NBQWtDLHNDQUFzQyxnQ0FBZ0MsZ0NBQWdDLGVBQWUsb0dBQW9HLG1DQUFtQyxnQ0FBZ0MsZUFBZSwrRUFBK0UsbUNBQW1DLHVCQUF1Qix3QkFBd0IsNkJBQTZCLDRCQUE0QiwyREFBMkQsa0NBQWtDLGVBQWUscUVBQXFFLHVDQUF1QyxlQUFlLHVFQUF1RSxtREFBbUQsZUFBZSxnSEFBZ0gsOEJBQThCLG1DQUFtQyw4QkFBOEIsZUFBZSwySEFBMkgsK0JBQStCLGVBQWUseUdBQXlHLDBCQUEwQix5QkFBeUIsMkJBQTJCLDZCQUE2QixvQ0FBb0MsMENBQTBDLHlDQUF5QyxlQUFlLG1CQUFtQjtBQUNsNjFCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNzQjtBQUNjO0FBQ3BCO0FBQ2E7O0FBRWxELDJCQUEyQixrRUFBb0I7O0FBRS9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsOENBQVM7O0FBRWpDLCtEQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCd0M7QUFDRzs7QUFFM0M7O0FBRUE7QUFDQSxvREFBb0Qsa0RBQWM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isa0RBQWM7O0FBRWxDLFFBQVEsK0RBQTJCOztBQUVuQztBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGtEQUFjOztBQUVsQztBQUNBO0FBQ0EsZ0NBQWdDLDhEQUF1QjtBQUN2RDtBQUNBOztBQUVBLFlBQVksNERBQXdCO0FBQ3BDLHdCQUF3QixrREFBYztBQUN0QyxTQUFTO0FBQ1QsTUFBTTtBQUNOLG1DQUFtQyxvREFBYTtBQUNoRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUN5QztBQUNIO0FBQ1k7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBNkI7O0FBRTFELGVBQWUsdURBQW1COztBQUVsQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBNkI7O0FBRTFELFFBQVEsOERBQTBCOztBQUVsQyxRQUFRLCtEQUFlO0FBQ3ZCLFFBQVEsaUVBQTZCO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhEQUEwQjtBQUNsQzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDcUQ7QUFDYzs7QUFFbkU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLDREQUF3Qjs7QUFFaEMsUUFBUSwrREFBZTtBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFFBQVEsK0RBQWU7QUFDdkI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLCtEQUFlO0FBQ3ZCLFFBQVEsMkRBQXVCO0FBQy9COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLFFBQVEsK0RBQWU7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsUUFBUSwrREFBZTtBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsK0RBQWU7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEgwQztBQUNGO0FBQ0g7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLCtEQUEyQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBLCtFQUErRSxXQUFXLFNBQVMsYUFBYSwrQkFBK0IsOERBQThELFdBQVc7QUFDeE47QUFDQTs7QUFFQSw2RUFBNkUsMkRBQXVCOztBQUVwRzs7QUFFQSwwREFBMEQsV0FBVztBQUNyRSxpREFBaUQsMkVBQXVDO0FBQ3hGLGlEQUFpRCwyREFBdUI7QUFDeEUsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsZ0VBQTRCO0FBQ2xELFlBQVk7QUFDWjtBQUNBLHNCQUFzQixnRUFBNEI7QUFDbEQ7QUFDQSxxQkFBcUIsOERBQTBCO0FBQy9DLDBCQUEwQiwwREFBc0I7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxpQkFBaUI7QUFDMUQsK0VBQStFLGNBQWMsYUFBYSxlQUFlO0FBQ3pILHVDQUF1Qyx1Q0FBdUMsY0FBYztBQUM1Rix1S0FBdUssY0FBYztBQUNyTCw4Q0FBOEMsOERBQThELGNBQWM7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNERBQTRELGNBQWM7QUFDMUUsOERBQThELHdDQUF3QztBQUN0RyxtREFBbUQsNEVBQXdDOztBQUUzRjs7QUFFQSw4REFBOEQsY0FBYztBQUM1RSxnRUFBZ0Usa0NBQWtDOztBQUVsRzs7QUFFQSw4REFBOEQsY0FBYztBQUM1RTtBQUNBLHFEQUFxRCwyREFBdUI7O0FBRTVFO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsdUJBQXVCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUEsNERBQTRELDhEQUEwQjtBQUN0Rix1RUFBdUUsMENBQTBDOztBQUVqSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFrQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzRUFBa0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbUVBQStCO0FBQzFFLDJDQUEyQywyREFBdUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvREFBYTtBQUM1QztBQUNBOztBQUVBLFFBQVEsaUVBQTZCO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsZ0VBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0QsT0FBTzs7QUFFN0Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25ZckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9jYWxfc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3Rfc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDc1NTY5O1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZDogIzk0YTNiODtcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6ICNmMWY1Zjk7XFxuICAgIC0tY2FyZC1oaWdoLXByaW9yaXR5OiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgLS1jYXJkLW1lZGl1bS1wcmlvcml0eTogcmdiKDI1NSwgMjM4LCAwKTtcXG4gICAgLS1jYXJkLWxvdy1wcmlvcml0eTogcmdiKDM3LCAxODQsIDApO1xcbiAgICAtLWljb24tY29sb3I6IHdoaXRlO1xcbiAgICAtLXRpdGxlLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10aXRsZS13ZWlnaHQ6IDgwMDtcXG4gICAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcXG4gICAgLS10ZXh0LXdlaWdodDogNjAwO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbnN2ZyB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NlZGFydmlsbGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbnN2ZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggbWlubWF4KGNhbGMoMTAwdmggLSA2MHB4KSwgMWZyKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdGV4dC13ZWlnaHQpO1xcbn1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDMwMHB4KSAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5sb2dvIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogQ2VkYXJ2aWxsZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tdGl0bGUtd2VpZ2h0KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWFyY2gge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlYXJjaCBpbnB1dCwgLm1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcblxcbiAgICAgICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saXN0LWl0ZW0ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNwYW4tcHJvamVjdDpob3ZlciwgI25ldy1wcm9qZWN0OmhvdmVyLCAuZGVsZXRlLXByb2plY3Qge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgICBnYXA6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcbiAgICB9XFxuXFxuICAgICAgICAuY29udGVudC1oZWFkZXIge1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAubmV3LXRhc2sge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNuZXctdGFzayB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOyAqL1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgbWluLWNvbnRlbnQpKTtcXG4gICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuY2FyZCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyO1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlLW91dDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLmNvbGxhcHNlZCB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHggNXB4IDIwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1jb250ZW50LnN0cmlrZTphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLyogLnN0cmlrZSB7XFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogRmFkZUluO1xcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgRmFkZUluIHtcXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgIH0gKi9cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgLnRhc2staWNvbnMge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY2FyZC1oaWRlciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZGF0ZS1kaXYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQtZGF0ZSB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LWhpZ2gge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWhpZ2gtcHJpb3JpdHkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLW1lZGl1bS1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LWxvdyB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbG93LXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG4gIFxcbiAgICAvKiBQcm9qZWN0IE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAgIC5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MCUgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC10aXRsZSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1pbnB1dCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwcHggMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC1uYW1lLWJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC8qIFRJY2sgYnV0dG9uICovXFxuXFxuICAgIC8qIC50aWNrIHtcXG5cXG4gICAgfSAqL1xcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAgIC5jbG9zZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2U6aG92ZXIsXFxuICAgIC5jbG9zZTpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogVGFzbCBNb2RhbCBDb250ZW50L0JveCAqL1xcbiAgICAudGFzay1tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MCUgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgIHdpZHRoOiAzMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1pbnB1dCB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKiBDaGVja2JveCAqL1xcblxcbiAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciB7ICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAgXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7ICBcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICBcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqLyAgXFxuICAgICAgICAgIC5tYXJrIHsgIFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgICAgICAgICAgIHRvcDogMDsgIFxcbiAgICAgICAgICAgIGxlZnQ6IDA7ICBcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7ICBcXG4gICAgICAgICAgICB3aWR0aDogMjBweDsgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7IFxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLm1hcmsgeyAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLm1hcmsgeyAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgMjU1KTsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogQ3JlYXRlIHRoZSBtYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovICBcXG4gICAgICAgICAgLm1hcms6YWZ0ZXIgeyAgXFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7ICBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBTaG93IHRoZSBtYXJrIHdoZW4gY2hlY2tlZCAqLyAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5tYXJrOmFmdGVyIHsgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBTdHlsZSB0aGUgbWFyay9pbmRpY2F0b3IgKi8gIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIC5tYXJrOmFmdGVyIHsgIFxcbiAgICAgICAgICAgIGxlZnQ6IDZweDsgIFxcbiAgICAgICAgICAgIHRvcDogMnB4OyAgXFxuICAgICAgICAgICAgd2lkdGg6IDVweDsgIFxcbiAgICAgICAgICAgIGhlaWdodDogMTBweDsgIFxcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7ICBcXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwOyAgXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAgXFxuICAgICAgICAgIH0gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHdEQUF3RDtJQUN4RCx3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYiwrQ0FBK0M7UUFDL0MsMENBQTBDO0lBQzlDOztRQUVJO1lBQ0ksdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIseUJBQXlCO1lBQ3pCLGdDQUFnQztRQUNwQzs7UUFFQTtZQUNJLGFBQWE7WUFDYixt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bUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLGVBQWU7WUFDZixlQUFlO1VBQ2pCOztVQUVBLDhCQUE4QjtVQUM5QjtZQUNFLGtCQUFrQjtZQUNsQixlQUFlO1VBQ2pCOztVQUVBLDZCQUE2QjtVQUM3QjtZQUNFLGtCQUFrQjtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsMkNBQTJDO1lBQzNDLGtCQUFrQjtVQUNwQjs7VUFFQTtZQUNFLHNCQUFzQjtVQUN4Qjs7VUFFQTtZQUNFLGtDQUFrQztVQUNwQzs7VUFFQSx3REFBd0Q7VUFDeEQ7WUFDRSxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGFBQWE7VUFDZjs7VUFFQSwrQkFBK0I7VUFDL0I7WUFDRSxjQUFjO1VBQ2hCOztVQUVBLDZCQUE2QjtVQUM3QjtZQUNFLFNBQVM7WUFDVCxRQUFRO1lBQ1IsVUFBVTtZQUNWLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHdCQUF3QjtVQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0NzU1Njk7XFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjOTRhM2I4O1xcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogI2YxZjVmOTtcXG4gICAgLS1jYXJkLWhpZ2gtcHJpb3JpdHk6IHJnYigyNTUsIDAsIDApO1xcbiAgICAtLWNhcmQtbWVkaXVtLXByaW9yaXR5OiByZ2IoMjU1LCAyMzgsIDApO1xcbiAgICAtLWNhcmQtbG93LXByaW9yaXR5OiByZ2IoMzcsIDE4NCwgMCk7XFxuICAgIC0taWNvbi1jb2xvcjogd2hpdGU7XFxuICAgIC0tdGl0bGUtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRpdGxlLXdlaWdodDogODAwO1xcbiAgICAtLXRleHQtY29sb3I6IHdoaXRlO1xcbiAgICAtLXRleHQtd2VpZ2h0OiA2MDA7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuc3ZnIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuc3ZnIHtcXG4gICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDMwMHB4KSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBtaW5tYXgoY2FsYygxMDB2aCAtIDYwcHgpLCAxZnIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10ZXh0LXdlaWdodCk7XFxufVxcblxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gICAgfVxcblxcbiAgICAgICAgLmxvZ28ge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDZWRhcnZpbGxlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS10aXRsZS13ZWlnaHQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlYXJjaCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VhcmNoIGlucHV0LCAubW9kYWwtY29udGVudCBpbnB1dCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3QtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3Bhbi1wcm9qZWN0OmhvdmVyLCAjbmV3LXByb2plY3Q6aG92ZXIsIC5kZWxldGUtcHJvamVjdCB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAuY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbiAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgIGdhcDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5jb250ZW50LWhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5uZXctdGFzayB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI25ldy10YXNrIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7ICovXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCBtaW4tY29udGVudCkpO1xcbiAgICAgICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2Utb3V0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhcmQuY29sbGFwc2VkIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweCA1cHggMjBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQuc3RyaWtlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAvKiAuc3RyaWtlIHtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBGYWRlSW47XFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBGYWRlSW4ge1xcbiAgICAgICAgICAgICAgICAgICAgMCUge1xcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfSAqL1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAudGFzay1pY29ucyB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jYXJkLWhpZGVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5kYXRlLWRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC1kYXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktaGlnaCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaGlnaC1wcmlvcml0eSk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtbWVkaXVtLXByaW9yaXR5KTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJpb3JpdHktbG93IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1sb3ctcHJpb3JpdHkpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcbiAgXFxuICAgIC8qIFByb2plY3QgTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gICAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWlucHV0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3VibWl0LW5hbWUtYnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLyogVEljayBidXR0b24gKi9cXG5cXG4gICAgLyogLnRpY2sge1xcblxcbiAgICB9ICovXFxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4gICAgLmNsb3NlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZTpob3ZlcixcXG4gICAgLmNsb3NlOmZvY3VzIHtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBUYXNsIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAgIC50YXNrLW1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAgICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLnRhc2staW5wdXQge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2staW5wdXQgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWlucHV0IHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3VibWl0LXRhc2stYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIENoZWNrYm94ICovXFxuXFxuICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIHsgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIEhpZGUgdGhlIGRlZmF1bHQgY2hlY2tib3ggKi8gIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHsgIFxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgIFxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcbiAgICAgICAgICB9ICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovICBcXG4gICAgICAgICAgLm1hcmsgeyAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXFxuICAgICAgICAgICAgdG9wOiAwOyAgXFxuICAgICAgICAgICAgbGVmdDogMDsgIFxcbiAgICAgICAgICAgIGhlaWdodDogMjBweDsgIFxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4OyAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTsgXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAubWFyayB7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAubWFyayB7ICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDU4LCAyNTUpOyAgXFxuICAgICAgICAgIH0gIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAvKiBDcmVhdGUgdGhlIG1hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi8gIFxcbiAgICAgICAgICAubWFyazphZnRlciB7ICBcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjsgIFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIFNob3cgdGhlIG1hcmsgd2hlbiBjaGVja2VkICovICBcXG4gICAgICAgICAgLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLm1hcms6YWZ0ZXIgeyAgXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICBcXG4gICAgICAgICAgfSAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgIC8qIFN0eWxlIHRoZSBtYXJrL2luZGljYXRvciAqLyAgXFxuICAgICAgICAgIC5jaGVja2JveC1jb250YWluZXIgLm1hcms6YWZ0ZXIgeyAgXFxuICAgICAgICAgICAgbGVmdDogNnB4OyAgXFxuICAgICAgICAgICAgdG9wOiAycHg7ICBcXG4gICAgICAgICAgICB3aWR0aDogNXB4OyAgXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4OyAgXFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTsgIFxcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7ICBcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICBcXG4gICAgICAgICAgfSAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBDcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IENyZWF0ZVByb2plY3RTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdF9zdG9yYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJET00gfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxfc3RvcmFnZSc7XG5cbmNvbnN0IHByb2plY3RTdG9yYWdlID0gbmV3IENyZWF0ZVByb2plY3RTdG9yYWdlKCk7XG5cbi8vIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIpO1xuXG4vLyBkZWZhdWx0UHJvamVjdC5jcmVhdGVOZXdUYXNrKFwiVGFzayBPbmVcIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOYW0gYXV0IG51bGxhIGFyY2hpdGVjdG8gYWxpcXVhbSBkb2xvcmVzIGZ1Z2E/IEFjY3VzYW11cyBkZWxlbml0aSBkaXN0aW5jdGlvIGluY2lkdW50LCBldW0gdGVtcG9yYSBkb2xvcnVtIHF1aXNxdWFtIG1hZ25hbSBibGFuZGl0aWlzIHF1aWEgcXVvZCBjb25zZWN0ZXR1ciBleGNlcHR1cmkgcGVyZmVyZW5kaXMuXCIsIDEsIGZhbHNlLCBcIjIwMjItMDMtMDRcIik7XG4vLyBkZWZhdWx0UHJvamVjdC5jcmVhdGVOZXdUYXNrKFwiVGFzayBUd29cIiwgXCJCYW5hbmFzLCBhcHBsZXNcIiwgMywgZmFsc2UsIFwiMjAyMi0wMy0xNVwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soXCJUYXNrIFRocmVlXCIsIFwiQmFuYW5hcywgYXBwbGVzXCIsIDIsIGZhbHNlLCBcIjIwMjItMDQtMjBcIik7XG5cbmNvbnN0IERPTVJlbmRlcmVyID0gbmV3IHJlbmRlckRPTSgpO1xuXG5nZXRMb2NhbFN0b3JhZ2UoKTtcblxuRE9NUmVuZGVyZXIucmVuZGVyUHJvamVjdExpc3QoKTtcbkRPTVJlbmRlcmVyLnJlbmRlclRhc2tzKCk7XG5ET01SZW5kZXJlci5uZXdQcm9qZWN0Q2xpY2soKTtcbkRPTVJlbmRlcmVyLm5ld1Rhc2tDbGljaygpO1xuXG4vLyBwcm9qZWN0U3RvcmFnZS5jbGVhclN0b3JhZ2UoKTtcbmNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKTtcblxuLy8gb24gcHJvamVjdCBjcmVhdGlvbiwgc3RyaW5naWZ5IGFuZCBwdXNoIHRvIGxvY2FsIHN0b3JhZ2UgKG1heWJlIHRha2UgcHJvamVjdFN0b3JhZ2UgYW5kIHB1c2ggdGhlIHdob2xlIHRoaW5nKVxuLy8gb24gcGFnZSBsb2FkLCBnZXQgZnJvbSBzdG9yYWdlLCBwYXJzZSwgcHJvdG8gYmFjayBtZXRob2RzLCBzdG9yZSBpbiBwcm9qZWN0U3RvcmFnZVxuXG4vLyB0YXNrcyBub3Qgc3VyZSB5ZXQsIGNvdWxkIHdvcmsgd2l0aCB0aGUgYWJvdmUgYnkgaXRzZWxmXG5cbmV4cG9ydCB7IHByb2plY3RTdG9yYWdlLCBET01SZW5kZXJlciB9IiwiaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgQ3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG5jb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG5cbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBjb25zdCBwcm9qZWN0U3RvcmFnZVNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3RvcmFnZSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VTZXJpYWxpemVkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnLCBwcm9qZWN0U3RvcmFnZVNlcmlhbGl6ZWQpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59XG5cbmNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbiAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnKTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZURlc2VyaWFsaXplZCA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG5cbiAgICAgICAgcHJvamVjdFN0b3JhZ2UuY2xlYXJTdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN0b3JhZ2VEZXNlcmlhbGl6ZWQsIENyZWF0ZVByb2plY3QpO1xuICAgICAgICAvLyBzdG9yYWdlRGVzZXJpYWxpemVkLl9fcHJvdG9fXyA9IENyZWF0ZVByb2plY3QucHJvdG90eXBlO1xuICAgICAgICBjb25zb2xlLmxvZyhzdG9yYWdlRGVzZXJpYWxpemVkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSk7XG5cbiAgICAgICAgc3RvcmFnZURlc2VyaWFsaXplZC5saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZW1lbnQuX19wcm90b19fID0gQ3JlYXRlUHJvamVjdC5wcm90b3R5cGU7XG4gICAgICAgICAgICAvLyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgQ3JlYXRlUHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcblxuICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2UubGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UgICkgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IENyZWF0ZVByb2plY3QoXCJEZWZhdWx0XCIpO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBzZXRMb2NhbFN0b3JhZ2UsIGdldExvY2FsU3RvcmFnZSB9OyIsImltcG9ydCB7IHByb2plY3RTdG9yYWdlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IERPTVJlbmRlcmVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxfc3RvcmFnZSc7XG5cbmNsYXNzIENyZWF0ZVByb2plY3RTdG9yYWdlIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgfTtcblxuICAgIC8vIGZpbmQgYW5kIHNlbGVjdCBwcm9qZWN0IGJ5IGlkXG5cbiAgICBwcm9qZWN0R2V0dGVyKHByb2plY3RJZCkge1xuXG4gICAgICAgIGNvbnN0IGZpbmRQcm9qZWN0SW5kZXggPSAoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gcHJvamVjdElkO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0U3RvcmFnZS5saXN0LmZpbmRJbmRleChmaW5kUHJvamVjdEluZGV4KTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdFN0b3JhZ2UubGlzdFtwcm9qZWN0SW5kZXhdO1xuXG4gICAgfTtcblxuICAgIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZSgpIHtcblxuICAgICAgICBjb25zdCBzbGljZWRJZCA9IHRoaXMuaWQuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBmaW5kUHJvamVjdEluZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHNsaWNlZElkO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0U3RvcmFnZS5saXN0LmZpbmRJbmRleChmaW5kUHJvamVjdEluZGV4KTtcblxuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xuICAgICAgICBET01SZW5kZXJlci5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHN0b3JhZ2VcblxuICAgIGNsZWFyU3RvcmFnZSgpIHtcbiAgICAgICAgLy8gZGVsZXRlIHByb2plY3RTdG9yYWdlLmxpc3Q7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3QubGVuZ3RoID0gMDtcbiAgICB9XG5cblxufTtcblxuZXhwb3J0IHsgQ3JlYXRlUHJvamVjdFN0b3JhZ2UgfTsiLCJpbXBvcnQgeyBET01SZW5kZXJlciwgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgc2V0TG9jYWxTdG9yYWdlLCBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsX3N0b3JhZ2UnO1xuXG4vLyBwcm9qZWN0IG9iamVjdHNcblxuY2xhc3MgQ3JlYXRlUHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUd1aWQoKTtcbiAgICAgICAgdGhpcy50YXNrQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGFza1N0b3JhZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0VG9TdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBzaG91bGQgZ28gaW4gcHJvamVjdCBzdG9yYWdlXG5cbiAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKCkge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5saXN0LnB1c2godGhpcyk7XG5cbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHRhc2tzIHRvIHByb2plY3Qgb2JqZWN0XG5cbiAgICBjcmVhdGVOZXdUYXNrIChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cywgZGF0ZSkge1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZUd1aWQoKSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRhc2tTdG9yYWdlLnB1c2godGFzayk7XG5cbiAgICAgICAgdGhpcy50YXNrQ291bnRlcisrO1xuXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB0YXNrcyBmcm9tIHByb2plY3Qgb2JqZWN0XG5cbiAgICBkZWxldGVUYXNrICh0YXNrSWQpIHtcblxuICAgICAgICBjb25zdCBmaW5kVGFza0luZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHRhc2tJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGhpcy50YXNrU3RvcmFnZS5maW5kSW5kZXgoZmluZFRhc2tJbmRleCk7XG5cbiAgICAgICAgdGhpcy50YXNrU3RvcmFnZS5zcGxpY2UodGFza0luZGV4LCAxKTtcblxuICAgICAgICB0aGlzLnRhc2tDb3VudGVyLS07XG5cbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIERPTVJlbmRlcmVyLnJlbmRlclRhc2tzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tVbmNoZWNrVGFzayAodGFza0lkKSB7XG5cbiAgICAgICAgY29uc3QgZmluZFRhc2tJbmRleCA9IChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSB0YXNrSWQ7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMudGFza1N0b3JhZ2UuZmluZEluZGV4KGZpbmRUYXNrSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5zdGF0dXM7XG5cbiAgICAgICAgaWYoc3RhdHVzID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0uc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpXG4gICAgfVxuXG4gICAgY2hhbmdlVGFza1ByaW9yaXR5ICh0YXNrSWQpIHtcblxuICAgICAgICBjb25zdCBmaW5kVGFza0luZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHRhc2tJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGhpcy50YXNrU3RvcmFnZS5maW5kSW5kZXgoZmluZFRhc2tJbmRleCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0ucHJpb3JpdHk7XG5cbiAgICAgICAgaWYocHJpb3JpdHkgPT09IDEpe1xuICAgICAgICAgICAgdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLnByaW9yaXR5ID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gMil7XG4gICAgICAgICAgICB0aGlzLnRhc2tTdG9yYWdlW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAzKXtcbiAgICAgICAgICAgIHRoaXMudGFza1N0b3JhZ2VbdGFza0luZGV4XS5wcmlvcml0eSA9IDI7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKVxuICAgIH1cblxuICAgIGNoYW5nZURhdGUobmV3RGF0ZSwgdGFza0lkKSB7XG5cbiAgICAgICAgY29uc3QgZGF0ZVZhbHVlID0gbmV3RGF0ZTtcblxuICAgICAgICBjb25zdCBmaW5kVGFza0luZGV4ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHRhc2tJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGhpcy50YXNrU3RvcmFnZS5maW5kSW5kZXgoZmluZFRhc2tJbmRleCk7XG5cbiAgICAgICAgdGhpcy50YXNrU3RvcmFnZVt0YXNrSW5kZXhdLmRhdGUgPSBkYXRlVmFsdWU7XG5cbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKClcbiAgICB9XG5cbiAgICAvLyBpZFxuXG4gICAgZ2VuZXJhdGVHdWlkKCkge1xuICAgICAgICBsZXQgcmVzdWx0LCBpLCBqO1xuICAgICAgICByZXN1bHQgPSAnQSc7IC8vIHNob3VsZCBub3Qgc3RhcnQgd2l0aCBudW1iZXIgZm9yIHF1ZXJ5c2VsZWN0b3JcbiAgICAgICAgZm9yKGo9MDsgajwzMjsgaisrKSB7XG4gICAgICAgICAgaWYoIGogPT0gOCB8fCBqID09IDEyIHx8IGogPT0gMTYgfHwgaiA9PSAyMClcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICctJztcbiAgICAgICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbn1cblxuZXhwb3J0IHsgQ3JlYXRlUHJvamVjdCB9OyIsImltcG9ydCB7IENyZWF0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgRE9NUmVuZGVyZXIgfSBmcm9tICcuL2luZGV4J1xuXG4vLyBzaG93IHRhc2tzIG9uIG1haW4gY29udGVudFxuXG5jbGFzcyByZW5kZXJET00ge1xuXG4gICAgLy8gcmVuZGVyIGxpc3Qgb2YgcHJvamVjdHNcblxuICAgIHJlbmRlclByb2plY3RMaXN0KCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0VWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICAgICAgcHJvamVjdExpc3RVbEVsZW1lbnQuaW5uZXJIVE1MID0gYGA7XG4gICAgICAgIFxuXG4gICAgICAgIHByb2plY3RTdG9yYWdlLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RMaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWl0ZW0nKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50Lm5hbWUpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdExpRWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJzcGFuLXByb2plY3RcIiBpZD1cIiR7ZWxlbWVudC5pZH0tc3BhblwiPiR7ZWxlbWVudC5uYW1lfTwvc3Bhbj4gPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiIGlkPVwiJHtlbGVtZW50LmlkfS1kZWxldGUtaWNvblwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQzYuNDcsMiAyLDYuNDcgMiwxMkMyLDE3LjUzIDYuNDcsMjIgMTIsMjJDMTcuNTMsMjIgMjIsMTcuNTMgMjIsMTJDMjIsNi40NyAxNy41MywyIDEyLDJNMTQuNTksOEwxMiwxMC41OUw5LjQxLDhMOCw5LjQxTDEwLjU5LDEyTDgsMTQuNTlMOS40MSwxNkwxMiwxMy40MUwxNC41OSwxNkwxNiwxNC41OUwxMy40MSwxMkwxNiw5LjQxTDE0LjU5LDhaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0TGlFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIucmVuZGVyVGFza3MpO1xuXG4gICAgICAgICAgICBwcm9qZWN0TGlzdFVsRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdExpRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtZW50LmlkfS1kZWxldGUtaWNvbmApO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RTdG9yYWdlLnJlbW92ZVByb2plY3RGcm9tU3RvcmFnZSk7XG4gICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIucmVuZGVyVGFza3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gcmVuZGVyIHRhc2tzIG9mIGZpcnN0IHByb2plY3Qgb24gZmlyc3QgbG9hZFxuXG4gICAgcmVuZGVyVGFza3MoZXZlbnQpIHtcblxuICAgICAgICBsZXQgcHJvamVjdDtcblxuICAgICAgICBpZihldmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0WzBdICE9IFwidGFzay1tb2RhbC10aWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCAtNSk7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdFN0b3JhZ2UucHJvamVjdEdldHRlcihwcm9qZWN0SWQpO1xuICAgICAgICB9ICAgZWxzZSBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJ0YXNrLW1vZGFsLXRpY2tcIikge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpLmlkO1xuICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2plY3RTdG9yYWdlLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3QgPSBwcm9qZWN0U3RvcmFnZS5saXN0WzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdC5pZDtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IGAke3Byb2plY3ROYW1lfWA7XG4gICAgICAgICAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3RJZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gYGA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBwcm9qZWN0LnRhc2tTdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGFza0NvbnRhaW5lcikge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza09iamVjdCA9IHRhc2tDb250YWluZXJbcHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIGNvbGxhcHNlZCcpO1xuICAgICAgICAgICAgICAgIGNhcmREaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tPYmplY3QuaWR9LWNhcmRgKTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFByaW9yaXR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRQcmlvcml0eVN0eWxlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza09iamVjdC5pZH0tY29udGVudGApXG4gICAgICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkQ29udGVudERpdik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVGl0bGVcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hTdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYodGFza09iamVjdC5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTdGF0dXMgPSAnY2hlY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRlbnQgc3RyaWtlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke3Rhc2tPYmplY3QubmFtZX0gPGRpdiBjbGFzcz1cInRhc2staWNvbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke3Rhc2tPYmplY3QuaWR9LWNoZWNrYm94XCIgJHtjaGVja2JveFN0YXR1c30+PHNwYW4gY2xhc3M9XCJtYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgaWQ9XCIke3Rhc2tPYmplY3QuaWR9LWV4cGFuZC1pY29uXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTAsMjFWMTlINi40MUwxMC45MSwxNC41TDkuNSwxMy4wOUw1LDE3LjU5VjE0SDNWMjFIMTBNMTQuNSwxMC45MUwxOSw2LjQxVjEwSDIxVjNIMTRWNUgxNy41OUwxMy4wOSw5LjVMMTQuNSwxMC45MVpcIiBpZD1cIiR7dGFza09iamVjdC5pZH0tZXhwYW5kLWljb25cIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+IDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIiBpZD1cIiR7dGFza09iamVjdC5pZH0tZGVsZXRlLWljb25cIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJDNi40NywyIDIsNi40NyAyLDEyQzIsMTcuNTMgNi40NywyMiAxMiwyMkMxNy41MywyMiAyMiwxNy41MyAyMiwxMkMyMiw2LjQ3IDE3LjUzLDIgMTIsMk0xNC41OSw4TDEyLDEwLjU5TDkuNDEsOEw4LDkuNDFMMTAuNTksMTJMOCwxNC41OUw5LjQxLDE2TDEyLDEzLjQxTDE0LjU5LDE2TDE2LDE0LjU5TDEzLjQxLDEyTDE2LDkuNDFMMTQuNTksOFpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrYm94XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tPYmplY3QuaWR9LWNoZWNrYm94YClcbiAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7cHJvamVjdC5jaGVja1VuY2hlY2tUYXNrKHRhc2tPYmplY3QuaWQpfSlcbiAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnN0cmlrZXRocm91Z2hUYXNrSWZDb21wbGV0ZWQpXG5cbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgQnV0dG9uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFza09iamVjdC5pZH0tZGVsZXRlLWljb25gKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtwcm9qZWN0LmRlbGV0ZVRhc2sodGFza09iamVjdC5pZCl9KVxuXG4gICAgICAgICAgICAgICAgLy8gRXhwYW5kIC8gUmV0cmFjdCBidXR0b25cblxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrT2JqZWN0LmlkfS1leHBhbmQtaWNvbmApO1xuICAgICAgICAgICAgICAgIC8vIGV4cGFuZEljb24uZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01SZW5kZXJlci5leHBhbmRUYXNrcykpXG4gICAgICAgICAgICAgICAgZXhwYW5kSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLmV4cGFuZFRhc2tzKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXhwYW5kLWljb24nKVxuICAgICAgICAgICAgICAgIC8vIGV4cGFuZEljb24uc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tPYmplY3QuaWR9LWV4cGFuZC1kaXZgKTtcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRJY29uLmlubmVySFRNTCA9IGBgXG4gICAgICAgICAgICAgICAgLy8gY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbilcblxuICAgICAgICAgICAgICAgIC8vIENhcmQgSGlkZXJzXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkSGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkSGlkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWhpZGVyJyk7XG4gICAgICAgICAgICAgICAgY2FyZEhpZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrT2JqZWN0LmlkfS1oaWRlcmApO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmRIaWRlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYCR7dGFza09iamVjdC5kZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgICAgIGNhcmRIaWRlci5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5XG4gICAgICAgICAgICAgICAgaWYodGFza09iamVjdC5wcmlvcml0eSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWhpZ2gnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0YXNrT2JqZWN0LnByaW9yaXR5ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRQcmlvcml0eVN0eWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbWVkaXVtJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGFza09iamVjdC5wcmlvcml0eSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5LWxvdycpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJpb3JpdHkgdG9nZ2xlXG5cbiAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLnRvZ2dsZVByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBjYXJkUHJpb3JpdHlTdHlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7cHJvamVjdC5jaGFuZ2VUYXNrUHJpb3JpdHkodGFza09iamVjdC5pZCl9KVxuXG4gICAgICAgICAgICAgICAgLy8gRHVlIGRhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhcmREYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZS1kaXYnKTtcbiAgICAgICAgICAgICAgICBjYXJkSGlkZXIuYXBwZW5kQ2hpbGQoY2FyZERhdGUpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrT2JqZWN0LmRhdGV9YClcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWRhdGUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZTogJztcblxuICAgICAgICAgICAgICAgIGNhcmREYXRlLmFwcGVuZENoaWxkKGRhdGVMYWJlbClcbiAgICAgICAgICAgICAgICBjYXJkRGF0ZS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRhdGVcblxuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5ld0RhdGUgPSBkYXRlSW5wdXQub25jaGFuZ2UudmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmNoYW5nZURhdGUobmV3RGF0ZSwgdGFza09iamVjdC5pZCl9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhcmRDb21wbGV0aW9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIGNhcmRDb21wbGV0aW9uRG9uZS5pbm5lclRleHQgPSAnRG9uZSc7XG4gICAgICAgICAgICAgICAgLy8gY2FyZENvbXBsZXRpb24uYXBwZW5kQ2hpbGQoY2FyZENvbXBsZXRpb25Eb25lKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNhcmRDb21wbGV0aW9uTm90RG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIGNhcmRDb21wbGV0aW9uTm90RG9uZS5pbm5lclRleHQgPSAnTm90IERvbmUnO1xuICAgICAgICAgICAgICAgIC8vIGNhcmRDb21wbGV0aW9uLmFwcGVuZENoaWxkKGNhcmRDb21wbGV0aW9uTm90RG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgXG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIFxuXG4gICAgLy8gc2VsZWN0IHByb2plY3QgZnJvbSBsaXN0XG5cblxuXG4gICAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0IGxpc3RlbmVyXG5cbiAgICBuZXdQcm9qZWN0Q2xpY2soKSB7XG5cbiAgICAgICAgLy8gc2hvdyBtb2RhbCB3aXRoIG5hbWUgYW5kIHRpY2ttYXJrXG4gICAgXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25ldy1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbW9kYWwnKTtcbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwtY2xvc2UnKTtcbiAgICAgICAgY29uc3QgdGlja0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbC10aWNrJyk7XG4gICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gKGV2ZW50KSA9PiB7ICAgICAgICBcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBET01SZW5kZXJlci5jcmVhdGVQcm9qZWN0RnJvbUlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmZvckVhY2goIGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0TW9kYWwpKVxuICAgIFxuICAgICAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0TW9kYWwpO1xuICAgICAgICB0aWNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTVJlbmRlcmVyLmNyZWF0ZVByb2plY3RGcm9tSW5wdXQpXG4gICAgXG4gICAgXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBcbiAgICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZW50ZXJLZXkpO1xuICAgIH07XG5cbiAgICAvLyBcblxuICAgIFxuICAgIFxuICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBsaXN0ZW5lclxuXG4gICAgbmV3VGFza0NsaWNrKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuZXctdGFzaycpO1xuICAgIFxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1vZGFsLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IHRpY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbW9kYWwtdGljaycpO1xuICAgIFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBvcGVuVGFza01vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjbG9zZVRhc2tNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBjb25zdCBlbnRlcktleSA9IChldmVudCkgPT4geyAgICAgICAgXG4gICAgICAgIC8vICAgICBpZihldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAvLyAgICAgICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgICAgIC8vICAgICAgICAgLy8gY3JlYXRlUHJvamVjdEZyb21JbnB1dCgpOyBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgbmV3VGFza0ljb24uZm9yRWFjaCggZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tNb2RhbCkpXG4gICAgXG4gICAgICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcbiAgICAgICAgdGlja0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIuY3JlYXRlVGFza0Zyb21JbnB1dCk7XG4gICAgICAgIHRpY2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NUmVuZGVyZXIucmVuZGVyVGFza3MpO1xuICAgIFxuICAgIFxuICAgICAgICAvLyBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgXG4gICAgICAgIC8vIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGVudGVyS2V5KTtcbiAgICB9O1xuXG4gICAgY3JlYXRlUHJvamVjdEZyb21JbnB1dCA9ICgpID0+IHtcblxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0KGlucHV0VmFsdWUpO1xuICAgIFxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIERPTVJlbmRlcmVyLnJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgXG4gICAgfTtcblxuICAgIGNyZWF0ZVRhc2tGcm9tSW5wdXQoKSB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtcHJvamVjdC10aXRsZScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0VGl0bGUuaWQ7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RHZXR0ZXIocHJvamVjdElkKTtcbiAgICBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBuYW1lVmFsdWUgPSBuYW1lSW5wdXQudmFsdWU7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGF0ZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlVmFsdWUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wcmlvcml0eScpO1xuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICAgIHByaW9yaXR5VmFsdWUgPSBwYXJzZUludChwcmlvcml0eVZhbHVlKTtcblxuICAgICAgICBpZihwcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgU2VsZWN0L0NyZWF0ZSBhIFByb2plY3QgQmVmb3JlIENyZWF0aW5nIFRhc2tzIScpXG4gICAgICAgIH0gICAgXG4gICAgICAgIHByb2plY3QuY3JlYXRlTmV3VGFzayhuYW1lVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHByaW9yaXR5VmFsdWUsIGZhbHNlLCBkYXRlVmFsdWUpOyAgICAgICAgXG5cbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgXG4gICAgfTtcblxuICAgIGV4cGFuZFRhc2tzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlkR2V0dGVyID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIC0xMik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWRHZXR0ZXJ9LWNhcmRgKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGNhcmRIaWRlci5jbGFzc0xpc3RbMV0gPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICBjYXJkSGlkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXJkSGlkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkIGNvbGxhcHNlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RyaWtldGhyb3VnaFRhc2tJZkNvbXBsZXRlZCAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2hlY2tlZFZhbHVlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCAtOSk7XG5cbiAgICAgICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tJZH0tY29udGVudGApXG5cbiAgICAgICAgaWYoY2hlY2tlZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250ZW50IHN0cmlrZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGVudCcpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZVByaW9yaXR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHlEaXYuY2xhc3NMaXN0WzBdO1xuXG4gICAgICAgIGlmIChwcmlvcml0eVZhbHVlID09PSAncHJpb3JpdHktbG93Jykge1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eS1tZWRpdW0nKVxuXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHlWYWx1ZSA9PT0gJ3ByaW9yaXR5LW1lZGl1bScpIHtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktaGlnaCcpXG5cbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eVZhbHVlID09PSAncHJpb3JpdHktaGlnaCcpIHtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHktbG93JylcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59O1xuXG5leHBvcnQgeyByZW5kZXJET00gfTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=