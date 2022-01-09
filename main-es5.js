(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Pneumonia Checker</h1>\n\n<div class=\"information\">\n  You can check if you have Pneumonia by simply uploading the xray images.\n  The application answers with Positive or Negative for each image supplied.\n</div>\n\n<div class=\"content\">\n  <div class=\"container\" appDnd (fileDropped)=\"onFileDropped($event)\">\n    <input type=\"file\" #fileDropRef id=\"fileDropRef\" multiple (change)=\"fileBrowseHandler($event.target.files)\" />\n\n    <img src=\"assets/img/dnd/ic-upload-file.svg\" alt=\"\" />\n    <h3>Drag and drop file here</h3>\n    <h3>or</h3>\n    <label for=\"fileDropRef\">Browse for file</label>\n  </div>\n  <div class=\"files-list\">\n    <div class=\"single-file\" *ngFor=\"let file of files; let i = index\">\n      <div *ngIf=\"result[i]; else spinner\">\n        <img src=\"assets/img/dnd/ic-file.svg\" width=\"45px\" alt=\"file\" />\n        <div class=\"info\">\n          <h4 class=\"name\">\n            {{ file?.name }}\n          </h4>\n\n          <p class=\"result\">{{ result[i] }}</p>\n        </div>\n        <img src=\"assets/img/dnd/ic-delete-file.svg\" class=\"delete\" width=\"20px\" alt=\"file\" (click)=\"deleteFile(i)\" />\n      </div>\n\n      <ng-template #spinner>\n        <ng-spinner size=\"3\" type=\"border\" color=\"warning\"></ng-spinner>\n      </ng-template>\n\n\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress-cont\">\n  <div class=\"progress\" [style.width]=\"progress + '%'\">\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  display: flex;\n  justify-content: center;\n  margin-top: 5%;\n  border-bottom: dashed 1px #222222;\n}\n\n.information {\n  display: flex;\n  justify-content: center;\n  margin-top: 5%;\n}\n\n.content {\n  justify-content: center;\n  align-items: center;\n  height: 50vh;\n  margin-top: 5%;\n}\n\n.content .container {\n  width: 450px;\n  height: 250px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n\n.content .container input {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.content .container label {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n\n.content .container h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #38424c;\n}\n\n.content .fileover {\n  -webkit-animation: shake 1s;\n          animation: shake 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.content .files-list {\n  position: relative;\n  margin: 0px auto;\n  width: 450px;\n  padding: 2rem;\n}\n\n.content .files-list .single-file {\n  padding: 0.5rem;\n  border: dashed 1px #979797;\n  margin-bottom: 1rem;\n}\n\n.content .files-list .single-file div {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.content .files-list .single-file div img.delete {\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n\n.content .files-list .single-file div .info {\n  width: 100%;\n}\n\n.content .files-list .single-file div .info .name {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n\n.content .files-list .single-file div .info .result {\n  font-size: 14px;\n  font-weight: 800;\n  color: #353f4a;\n  margin: 0;\n}\n\n/* Shake animation */\n\n@-webkit-keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvc3Rhcy9EZXNrdG9wL86czrXPhM6xz4DPhM+Fz4fOuc6xzrrPjC8xzr8gzrXOvs6szrzOt869zr8vzqTOtc+Hzr3Ot8+Ezq4gzr3Ov863zrzOv8+Dz43Ovc63L86Vz4HOs86xz4POr86xL1hSQVkvYW5ndWxhci1kcmFnLW4tZHJvcC1kaXJlY3RpdmUtbWFzdGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNHTjs7QURBSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0VOOztBRENJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NOOztBREdFO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNESjs7QURJRTtFQUNFLGtCQUFBO0VBQ0osZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZBOztBRElJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNGTjs7QURJTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0ZWOztBRElRO0VBQ0UsV0FBQTtBQ0ZWOztBREdVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNEWjs7QURHVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDRFo7O0FEU0Esb0JBQUE7O0FBQ0E7RUFDRTtJQUNFLDJDQUFBO0VDTkY7RURTQTtJQUNFLDhDQUFBO0VDUEY7RURVQTtJQUNFLDRDQUFBO0VDUkY7RURXQTtJQUNFLDJDQUFBO0VDVEY7RURZQTtJQUNFLDRDQUFBO0VDVkY7RURhQTtJQUNFLDZDQUFBO0VDWEY7RURjQTtJQUNFLDRDQUFBO0VDWkY7RURlQTtJQUNFLDRDQUFBO0VDYkY7RURnQkE7SUFDRSw2Q0FBQTtFQ2RGO0VEaUJBO0lBQ0UsMkNBQUE7RUNmRjtFRGtCQTtJQUNFLDZDQUFBO0VDaEJGO0FBQ0Y7O0FEM0JBO0VBQ0U7SUFDRSwyQ0FBQTtFQ05GO0VEU0E7SUFDRSw4Q0FBQTtFQ1BGO0VEVUE7SUFDRSw0Q0FBQTtFQ1JGO0VEV0E7SUFDRSwyQ0FBQTtFQ1RGO0VEWUE7SUFDRSw0Q0FBQTtFQ1ZGO0VEYUE7SUFDRSw2Q0FBQTtFQ1hGO0VEY0E7SUFDRSw0Q0FBQTtFQ1pGO0VEZUE7SUFDRSw0Q0FBQTtFQ2JGO0VEZ0JBO0lBQ0UsNkNBQUE7RUNkRjtFRGlCQTtJQUNFLDJDQUFBO0VDZkY7RURrQkE7SUFDRSw2Q0FBQTtFQ2hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggIzIyMjIyMjtcbn1cbi5pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb250ZW50IHtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGlucHV0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxODNweDtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjIwMmY7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzODQyNGM7XG4gICAgfVxuICB9XG5cbiAgLmZpbGVvdmVyIHtcbiAgICBhbmltYXRpb246IHNoYWtlIDFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG5cbiAgLmZpbGVzLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbm1hcmdpbjogMHB4IGF1dG87XG53aWR0aDogNDUwcHg7XG5wYWRkaW5nOiAycmVtO1xuXG4gICAgLnNpbmdsZS1maWxlIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgICAgaW1nLmRlbGV0ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzM1M2Y0YTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlc3VsdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgY29sb3I6ICMzNTNmNGE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIFNoYWtlIGFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG5cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbn1cbiIsImgxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4ICMyMjIyMjI7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHZoO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jb250ZW50IC5jb250YWluZXIge1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICM5Nzk3OTc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGVudCAuY29udGFpbmVyIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uY29udGVudCAuY29udGFpbmVyIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTgzcHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjEuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5jb250ZW50IC5jb250YWluZXIgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzg0MjRjO1xufVxuLmNvbnRlbnQgLmZpbGVvdmVyIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uY29udGVudCAuZmlsZXMtbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgd2lkdGg6IDQ1MHB4O1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmNvbnRlbnQgLmZpbGVzLWxpc3QgLnNpbmdsZS1maWxlIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IGRhc2hlZCAxcHggIzk3OTc5NztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jb250ZW50IC5maWxlcy1saXN0IC5zaW5nbGUtZmlsZSBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jb250ZW50IC5maWxlcy1saXN0IC5zaW5nbGUtZmlsZSBkaXYgaW1nLmRlbGV0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY29udGVudCAuZmlsZXMtbGlzdCAuc2luZ2xlLWZpbGUgZGl2IC5pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudCAuZmlsZXMtbGlzdCAuc2luZ2xlLWZpbGUgZGl2IC5pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM1M2Y0YTtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRlbnQgLmZpbGVzLWxpc3QgLnNpbmdsZS1maWxlIGRpdiAuaW5mbyAucmVzdWx0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzM1M2Y0YTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTaGFrZSBhbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _results_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results.service */ "./src/app/results.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(resultservice) {
                    this.resultservice = resultservice;
                    this.files = [];
                    this.result = [];
                }
                /**
                 * on file drop handler
                 */
                AppComponent.prototype.onFileDropped = function ($event) {
                    this.prepareFilesList($event);
                };
                /**
                 * handle file from browsing
                 */
                AppComponent.prototype.fileBrowseHandler = function (files) {
                    this.prepareFilesList(files);
                };
                /**
                 * Delete file from files list
                 * @param index (File index)
                 */
                AppComponent.prototype.deleteFile = function (index) {
                    if (this.files[index].progress < 100) {
                        console.log("Upload in progress.");
                        return;
                    }
                    this.result.splice(index, 1);
                    this.files.splice(index, 1);
                };
                /**
                 * Simulate the upload process
                 */
                AppComponent.prototype.uploadFilesSimulator = function (index) {
                    var _this = this;
                    setTimeout(function () {
                        if (index === _this.files.length) {
                            return;
                        }
                        else {
                            var progressInterval_1 = setInterval(function () {
                                if (_this.files[index].progress === 100) {
                                    clearInterval(progressInterval_1);
                                    _this.uploadFilesSimulator(index + 1);
                                }
                                else {
                                    _this.files[index].progress += 5;
                                }
                            }, 200);
                        }
                    }, 1000);
                };
                /**
                 * Convert Files list to normal array list
                 * @param files (Files List)
                 */
                AppComponent.prototype.prepareFilesList = function (files) {
                    var _this = this;
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var item = files_1[_i];
                        item.progress = 0;
                        this.resultservice.callService(item).subscribe(function (data) {
                            _this.result.push(data);
                        });
                        this.files.push(item);
                    }
                    this.fileDropEl.nativeElement.value = "";
                    this.uploadFilesSimulator(0);
                };
                /**
                 * format bytes
                 * @param bytes (File size in bytes)
                 * @param decimals (Decimals point)
                 */
                AppComponent.prototype.formatBytes = function (bytes, decimals) {
                    if (decimals === void 0) { decimals = 2; }
                    if (bytes === 0) {
                        return "0 Bytes";
                    }
                    var k = 1024;
                    var dm = decimals <= 0 ? 0 : decimals;
                    var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                    var i = Math.floor(Math.log(bytes) / Math.log(k));
                    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _results_service__WEBPACK_IMPORTED_MODULE_2__["ResultsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileDropRef", { static: false })
            ], AppComponent.prototype, "fileDropEl", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _direcitves_dnd_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direcitves/dnd.directive */ "./src/app/direcitves/dnd.directive.ts");
            /* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/progress/progress.component */ "./src/app/components/progress/progress.component.ts");
            /* harmony import */ var ng_bootstrap_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-bootstrap-spinner */ "./node_modules/ng-bootstrap-spinner/fesm2015/ng-spinner.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _direcitves_dnd_directive__WEBPACK_IMPORTED_MODULE_5__["DndDirective"],
                        _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"]
                    ],
                    imports: [
                        ng_bootstrap_spinner__WEBPACK_IMPORTED_MODULE_7__["NgSpinnerModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/progress/progress.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/components/progress/progress.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".progress-cont {\n  height: 7px;\n  width: 100%;\n  border-radius: 4px;\n  background-color: #d0d0d0;\n  position: relative;\n}\n.progress-cont .progress {\n  width: 0;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  background-color: #4c97cb;\n  transition: 0.5s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvc3Rhcy9EZXNrdG9wL86czrXPhM6xz4DPhM+Fz4fOuc6xzrrPjC8xzr8gzrXOvs6szrzOt869zr8vzqTOtc+Hzr3Ot8+Ezq4gzr3Ov863zrzOv8+Dz43Ovc63L86Vz4HOs86xz4POr86xL1hSQVkvYW5ndWxhci1kcmFnLW4tZHJvcC1kaXJlY3RpdmUtbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtY29udCB7XG4gIGhlaWdodDogN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnByb2dyZXNzIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Yzk3Y2I7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XG4gIH1cbn0iLCIucHJvZ3Jlc3MtY29udCB7XG4gIGhlaWdodDogN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZ3Jlc3MtY29udCAucHJvZ3Jlc3Mge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM5N2NiO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/progress/progress.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/progress/progress.component.ts ***!
          \***********************************************************/
        /*! exports provided: ProgressComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () { return ProgressComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProgressComponent = /** @class */ (function () {
                function ProgressComponent() {
                    this.progress = 0;
                }
                ProgressComponent.prototype.ngOnInit = function () { };
                return ProgressComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProgressComponent.prototype, "progress", void 0);
            ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-progress',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress.component.scss */ "./src/app/components/progress/progress.component.scss")).default]
                })
            ], ProgressComponent);
            /***/ 
        }),
        /***/ "./src/app/direcitves/dnd.directive.ts": 
        /*!*********************************************!*\
          !*** ./src/app/direcitves/dnd.directive.ts ***!
          \*********************************************/
        /*! exports provided: DndDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function () { return DndDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DndDirective = /** @class */ (function () {
                function DndDirective() {
                    this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                // Dragover listener
                DndDirective.prototype.onDragOver = function (evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.fileOver = true;
                };
                // Dragleave listener
                DndDirective.prototype.onDragLeave = function (evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.fileOver = false;
                };
                // Drop listener
                DndDirective.prototype.ondrop = function (evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.fileOver = false;
                    var files = evt.dataTransfer.files;
                    if (files.length > 0) {
                        this.fileDropped.emit(files);
                    }
                };
                return DndDirective;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fileover')
            ], DndDirective.prototype, "fileOver", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DndDirective.prototype, "fileDropped", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])
            ], DndDirective.prototype, "onDragOver", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event'])
            ], DndDirective.prototype, "onDragLeave", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
            ], DndDirective.prototype, "ondrop", null);
            DndDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appDnd]'
                })
            ], DndDirective);
            /***/ 
        }),
        /***/ "./src/app/results.service.ts": 
        /*!************************************!*\
          !*** ./src/app/results.service.ts ***!
          \************************************/
        /*! exports provided: ResultsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsService", function () { return ResultsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ResultsService = /** @class */ (function () {
                function ResultsService(http) {
                    this.http = http;
                }
                ResultsService.prototype.callService = function (item) {
                    var formData = new FormData();
                    formData.append('image', item);
                    return this.http.post('http://127.0.0.1:5000/results', formData);
                };
                return ResultsService;
            }());
            ResultsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ResultsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ResultsService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/kostas/Desktop/Μεταπτυχιακό/1ο εξάμηνο/Τεχνητή νοημοσύνη/Εργασία/XRAY/angular-drag-n-drop-directive-master/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map