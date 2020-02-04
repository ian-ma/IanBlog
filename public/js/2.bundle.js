(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppMenuBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppMenuBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppMenuBar",
  methods: {
    handleClick: function handleClick(e) {
      console.log(e);
      this.$notify({
        title: e.type + " " + e.target.id,
        offset: 61
      });
    },
    gotoUrl: function gotoUrl(url) {
      window.location.href = url;
    },
    logout: function logout() {
      console.log('logout');
      this.$post('/logout', '');
    }
  },
  data: function data() {
    return {
      // Fake data
      categories: [{
        title: 'Vue',
        src: '/vue'
      }, {
        title: 'Laravel',
        src: '/laravel'
      }, {
        title: 'Movie',
        src: '/movie'
      }, {
        title: 'Build this site',
        src: '/this-site'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    [
      _c("el-col", { attrs: { span: 24 } }, [
        _c(
          "header",
          {
            staticStyle: { display: "flex", "justify-content": "space-between" }
          },
          [
            _c(
              "el-menu",
              {
                staticStyle: { "flex-grow": "1", display: "flex" },
                attrs: { mode: "horizontal" }
              },
              [
                _c("el-menu-item", [
                  _c("img", {
                    attrs: {
                      id: "icon-image",
                      width: "60",
                      height: "60",
                      src: "/pic/tank-vector-png100x100.png",
                      alt: "icon"
                    },
                    on: { click: _vm.handleClick }
                  })
                ]),
                _vm._v(" "),
                _c("el-menu-item", [
                  _vm._v("\n                    Dashboard\n                ")
                ]),
                _vm._v(" "),
                _vm._l(_vm.categories, function(category) {
                  return _c(
                    "el-menu-item",
                    {
                      key: category.id,
                      on: {
                        click: function($event) {
                          return _vm.gotoUrl(category.src)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(category.title) +
                          "\n                "
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c("el-menu-item", [
                  _vm._v("\n                    About Me\n                ")
                ]),
                _vm._v(" "),
                _c("el-menu-item", {
                  staticStyle: { width: "max-content", "flex-grow": "1" }
                }),
                _vm._v(" "),
                _c(
                  "el-menu-item",
                  [
                    _c("el-input", { attrs: { placeholder: "search" } }, [
                      _c("i", {
                        staticClass: "el-icon-search",
                        attrs: { slot: "suffix", id: "search-icon" },
                        on: { click: _vm.handleClick },
                        slot: "suffix"
                      })
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-menu-item",
                  [
                    _c(
                      "el-dropdown",
                      { attrs: { trigger: "click" } },
                      [
                        _c("i", {
                          staticClass: "el-icon-s-tools",
                          staticStyle: { "font-size": "30px" }
                        }),
                        _vm._v(" "),
                        _c(
                          "el-dropdown-menu",
                          {
                            attrs: { slot: "dropdown", width: "400" },
                            slot: "dropdown"
                          },
                          [
                            _c("el-dropdown-item", [
                              _vm._v(
                                "\n                                Profile\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("el-dropdown-item", [
                              _vm._v(
                                "\n                                Setting\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("el-dropdown-item", { attrs: { divided: "" } }, [
                              _c("i", { on: { click: _vm.logout } }, [
                                _vm._v("Logout")
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppMenuBar.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AppMenuBar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppMenuBar_vue_vue_type_template_id_ffcaa004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true& */ "./resources/js/components/AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true&");
/* harmony import */ var _AppMenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppMenuBar.vue?vue&type=script&lang=js& */ "./resources/js/components/AppMenuBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppMenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppMenuBar_vue_vue_type_template_id_ffcaa004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppMenuBar_vue_vue_type_template_id_ffcaa004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ffcaa004",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppMenuBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppMenuBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AppMenuBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppMenuBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppMenuBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuBar_vue_vue_type_template_id_ffcaa004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppMenuBar.vue?vue&type=template&id=ffcaa004&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuBar_vue_vue_type_template_id_ffcaa004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMenuBar_vue_vue_type_template_id_ffcaa004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);