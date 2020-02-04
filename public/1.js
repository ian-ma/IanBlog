(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLoginForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLoginForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppLoginForm",
  props: {},
  data: function data() {
    return {
      login_data: {
        email: '',
        password: ''
      },
      errors: [],
      csrfToken: '',
      formAction: '',
      place_holder_height: 50,
      windowHeight: 0,
      registerUrl: ''
    };
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;

    //
    this.windowHeight = window.innerHeight;
    window.addEventListener('resize', function () {
      // console.log(window.innerHeight);
      console.log(_this.windowHeight);
      _this.windowHeight = window.innerHeight;
    });
    this.login_data.email = window.App.email;
    this.errors = window.App.errors;
    this.csrfToken = window.App.csrfToken;
    this.formAction = window.App.formAction;
    this.registerUrl = window.App.registerUrl; //todo may be a bug while native speed emit notice

    if (this.errors.length > 0) {
      var count = 0;
      var timer = setInterval(function () {
        _this.$notify.error({
          title: 'Error',
          message: window.App.errors[count],
          offset: 60,
          duration: 10000
        });

        count++;

        if (count >= _this.errors.length) {
          clearInterval(timer);
        }
      }, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "el-card",
    {
      staticStyle: { width: "400px", margin: "auto" },
      style: { marginTop: (_vm.windowHeight - 360) / 3 + "px" }
    },
    [
      _c(
        "el-form",
        {
          attrs: {
            model: _vm.login_data,
            method: "post",
            action: _vm.formAction
          }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.csrfToken }
          }),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "EMAIL ADDRESS" } },
            [
              _c("el-input", {
                attrs: {
                  type: "email",
                  value: _vm.login_data.email,
                  name: "email"
                },
                model: {
                  value: _vm.login_data.email,
                  callback: function($$v) {
                    _vm.$set(_vm.login_data, "email", $$v)
                  },
                  expression: "login_data.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "PASSWORD" } },
            [
              _c("el-input", {
                attrs: { type: "password", name: "password" },
                model: {
                  value: _vm.login_data.password,
                  callback: function($$v) {
                    _vm.$set(_vm.login_data, "password", $$v)
                  },
                  expression: "login_data.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticStyle: { width: "100%" },
                  attrs: { type: "primary", nativeType: "submit" }
                },
                [_vm._v("\n                Login\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticStyle: { "font-size": "small" },
              attrs: { href: "/register" }
            },
            [_vm._v("Don't have account? Register here")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppLoginForm.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/AppLoginForm.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLoginForm_vue_vue_type_template_id_18a54c97_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true& */ "./resources/js/components/AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true&");
/* harmony import */ var _AppLoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLoginForm.vue?vue&type=script&lang=js& */ "./resources/js/components/AppLoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLoginForm_vue_vue_type_template_id_18a54c97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLoginForm_vue_vue_type_template_id_18a54c97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18a54c97",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppLoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppLoginForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/AppLoginForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLoginForm_vue_vue_type_template_id_18a54c97_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLoginForm.vue?vue&type=template&id=18a54c97&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLoginForm_vue_vue_type_template_id_18a54c97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLoginForm_vue_vue_type_template_id_18a54c97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);