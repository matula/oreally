webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar browser_1 = __webpack_require__(1);\r\nvar core_1 = __webpack_require__(22);\r\nvar http_1 = __webpack_require__(226);\r\nvar router_1 = __webpack_require__(241);\r\nvar oreally_app_1 = __webpack_require__(271);\r\nbrowser_1.bootstrap(oreally_app_1.OreallyApp, [\r\n    http_1.HTTP_PROVIDERS,\r\n    router_1.ROUTER_PROVIDERS,\r\n    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })\r\n])\r\n    .catch(function (err) { return console.error(err); });\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLnRzP2Y5ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtPcmVhbGx5QXBwfSBmcm9tICcuL2FwcC9vcmVhbGx5LWFwcCc7XG5cblxuYm9vdHN0cmFwKE9yZWFsbHlBcHAsIFtcbiAgSFRUUF9QUk9WSURFUlMsXG4gIFJPVVRFUl9QUk9WSURFUlMsXG4gIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXG5dKVxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FwcC50c1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar core_1 = __webpack_require__(22);\r\nvar book_1 = __webpack_require__(272);\r\nvar OreallyApp = (function () {\r\n    function OreallyApp() {\r\n        this.images = [\r\n            '/images/animal1.gif',\r\n            '/images/animal2.gif',\r\n            '/images/animal3.gif',\r\n            '/images/animal4.gif',\r\n            '/images/animal5.gif',\r\n            '/images/animal6.gif',\r\n            '/images/animal7.gif',\r\n            '/images/animal8.gif',\r\n            '/images/animal9.gif',\r\n            '/images/animal10.gif',\r\n            '/images/animal11.gif',\r\n            '/images/animal12.gif'\r\n        ];\r\n        this.model = new book_1.Book('#008fb3', '/images/animal1.gif', 'Angular2 is... good? I guess?', 'HTML in your Javascript', '& other mixing of concerns', 'I.P. Freely');\r\n    }\r\n    OreallyApp.prototype.getColor = function () {\r\n        return this.model.color;\r\n    };\r\n    OreallyApp = __decorate([\r\n        core_1.Component({\r\n            selector: 'oreally-app',\r\n            providers: [],\r\n            pipes: [],\r\n            directives: [],\r\n            templateUrl: 'app/oreally-app.html',\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], OreallyApp);\r\n    return OreallyApp;\r\n}());\r\nexports.OreallyApp = OreallyApp;\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvb3JlYWxseS1hcHAudHM/MWU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jvb2t9IGZyb20gJy4vY29tcG9uZW50cy9ib29rJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvcmVhbGx5LWFwcCcsXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBwaXBlczogW10sXG4gICAgZGlyZWN0aXZlczogW10sXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvb3JlYWxseS1hcHAuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgT3JlYWxseUFwcCB7XG4gICAgaW1hZ2VzID0gW1xuICAgICAgICAnL2ltYWdlcy9hbmltYWwxLmdpZicsXG4gICAgICAgICcvaW1hZ2VzL2FuaW1hbDIuZ2lmJyxcbiAgICAgICAgJy9pbWFnZXMvYW5pbWFsMy5naWYnLFxuICAgICAgICAnL2ltYWdlcy9hbmltYWw0LmdpZicsXG4gICAgICAgICcvaW1hZ2VzL2FuaW1hbDUuZ2lmJyxcbiAgICAgICAgJy9pbWFnZXMvYW5pbWFsNi5naWYnLFxuICAgICAgICAnL2ltYWdlcy9hbmltYWw3LmdpZicsXG4gICAgICAgICcvaW1hZ2VzL2FuaW1hbDguZ2lmJyxcbiAgICAgICAgJy9pbWFnZXMvYW5pbWFsOS5naWYnLFxuICAgICAgICAnL2ltYWdlcy9hbmltYWwxMC5naWYnLFxuICAgICAgICAnL2ltYWdlcy9hbmltYWwxMS5naWYnLFxuICAgICAgICAnL2ltYWdlcy9hbmltYWwxMi5naWYnXG4gICAgXTtcbiAgICBtb2RlbCA9IG5ldyBCb29rKCcjMDA4ZmIzJywgJy9pbWFnZXMvYW5pbWFsMS5naWYnLCAnQW5ndWxhcjIgaXMuLi4gZ29vZD8gSSBndWVzcz8nLCAnSFRNTCBpbiB5b3VyIEphdmFzY3JpcHQnLCAnJiBvdGhlciBtaXhpbmcgb2YgY29uY2VybnMnLCAnSS5QLiBGcmVlbHknKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5jb2xvcjtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYXBwL29yZWFsbHktYXBwLnRzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBaUJBO0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBOUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUF5QkE7QUFBQTtBQXZCQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 272:
/***/ function(module, exports) {

	eval("\"use strict\";\r\nvar Book = (function () {\r\n    function Book(color, image, topText, bookTitle, subTitle, author) {\r\n        this.color = color;\r\n        this.image = image;\r\n        this.topText = topText;\r\n        this.bookTitle = bookTitle;\r\n        this.subTitle = subTitle;\r\n        this.author = author;\r\n    }\r\n    return Book;\r\n}());\r\nexports.Book = Book;\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvY29tcG9uZW50cy9ib29rLnRzPzA5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJvb2sge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2xvcjpzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIGltYWdlOnN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgdG9wVGV4dDpzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIGJvb2tUaXRsZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIHN1YlRpdGxlOnN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgYXV0aG9yOnN0cmluZykge1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hcHAvY29tcG9uZW50cy9ib29rLnRzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

});