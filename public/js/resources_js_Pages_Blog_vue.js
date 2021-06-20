(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Blog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Blog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Blog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_head_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue/head.vue */ "./resources/js/Pages/vue/head.vue");
/* harmony import */ var _lib_TemplateMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/TemplateMain */ "./resources/js/lib/TemplateMain.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _vue_head_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      (0,_lib_TemplateMain__WEBPACK_IMPORTED_MODULE_1__.TemplateMain)();
    });
  }
});

/***/ }),

/***/ "./resources/js/lib/TemplateMain.js":
/*!******************************************!*\
  !*** ./resources/js/lib/TemplateMain.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateMain": () => (/* binding */ TemplateMain)
/* harmony export */ });
function TemplateMain() {
  (function ($) {
    "use strict";

    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll"
    });

    var fullHeight = function fullHeight() {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    };

    fullHeight(); // loader

    var loader = function loader() {
      setTimeout(function () {
        if ($("#ftco-loader").length > 0) {
          $("#ftco-loader").removeClass("show");
        }
      }, 1);
    };

    loader(); // Scrollax

    $.Scrollax();

    var carousel = function carousel() {
      $(".carousel-testimony").owlCarousel({
        autoplay: true,
        autoHeight: true,
        center: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: true,
        dots: false,
        navText: ['<span class="fa fa-chevron-left">', '<span class="fa fa-chevron-right">'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });
    };

    carousel();
    $("nav .dropdown").hover(function () {
      var $this = $(this); // 	 timer;
      // clearTimeout(timer);

      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true); // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');

      $this.find(".dropdown-menu").addClass("show");
    }, function () {
      var $this = $(this); // timer;
      // timer = setTimeout(function(){

      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false); // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');

      $this.find(".dropdown-menu").removeClass("show"); // }, 100);
    });
    $("#dropdown04").on("show.bs.dropdown", function () {
      console.log("show");
    }); // scroll

    var scrollWindow = function scrollWindow() {
      $(window).scroll(function () {
        var $w = $(this),
            st = $w.scrollTop(),
            navbar = $(".ftco_navbar"),
            sd = $(".js-scroll-wrap");

        if (st > 150) {
          if (!navbar.hasClass("scrolled")) {
            navbar.addClass("scrolled");
          }
        }

        if (st < 150) {
          if (navbar.hasClass("scrolled")) {
            navbar.removeClass("scrolled sleep");
          }
        }

        if (st > 350) {
          if (!navbar.hasClass("awake")) {
            navbar.addClass("awake");
          }

          if (sd.length > 0) {
            sd.addClass("sleep");
          }
        }

        if (st < 350) {
          if (navbar.hasClass("awake")) {
            navbar.removeClass("awake");
            navbar.addClass("sleep");
          }

          if (sd.length > 0) {
            sd.removeClass("sleep");
          }
        }
      });
    };

    scrollWindow();

    var counter = function counter() {
      $("#section-counter, .hero-wrap, .ftco-counter").waypoint(function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
                num = $this.data("number");
            console.log(num);
            $this.animateNumber({
              number: num,
              numberStep: comma_separator_number_step
            }, 7000);
          });
        }
      }, {
        offset: "95%"
      });
    };

    counter();

    var contentWayPoint = function contentWayPoint() {
      var i = 0;
      $(".ftco-animate").waypoint(function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          i++;
          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(function () {
                var effect = el.data("animate-effect");

                if (effect === "fadeIn") {
                  el.addClass("fadeIn ftco-animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft ftco-animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight ftco-animated");
                } else {
                  el.addClass("fadeInUp ftco-animated");
                }

                el.removeClass("item-animate");
              }, k * 50, "easeInOutExpo");
            });
          }, 100);
        }
      }, {
        offset: "95%"
      });
    };

    contentWayPoint(); // magnific popup

    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom",
      // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS

      }
    });
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  })(jQuery);
}

/***/ }),

/***/ "./resources/js/Pages/Blog.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Blog.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blog_vue_vue_type_template_id_5ff005cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=5ff005cb& */ "./resources/js/Pages/Blog.vue?vue&type=template&id=5ff005cb&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Blog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Blog_vue_vue_type_template_id_5ff005cb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Blog_vue_vue_type_template_id_5ff005cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Blog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/head.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/vue/head.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _head_vue_vue_type_template_id_2105825c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head.vue?vue&type=template&id=2105825c& */ "./resources/js/Pages/vue/head.vue?vue&type=template&id=2105825c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _head_vue_vue_type_template_id_2105825c___WEBPACK_IMPORTED_MODULE_0__.render,
  _head_vue_vue_type_template_id_2105825c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/head.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Blog.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Blog.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Blog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Blog.vue?vue&type=template&id=5ff005cb&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Blog.vue?vue&type=template&id=5ff005cb& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_5ff005cb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_5ff005cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_5ff005cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blog.vue?vue&type=template&id=5ff005cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Blog.vue?vue&type=template&id=5ff005cb&");


/***/ }),

/***/ "./resources/js/Pages/vue/head.vue?vue&type=template&id=2105825c&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/vue/head.vue?vue&type=template&id=2105825c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_head_vue_vue_type_template_id_2105825c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_head_vue_vue_type_template_id_2105825c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_head_vue_vue_type_template_id_2105825c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./head.vue?vue&type=template&id=2105825c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/head.vue?vue&type=template&id=2105825c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Blog.vue?vue&type=template&id=5ff005cb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Blog.vue?vue&type=template&id=5ff005cb& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Head"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "show fullscreen", attrs: { id: "ftco-loader" } },
        [
          _c(
            "svg",
            {
              staticClass: "circular",
              attrs: { width: "48px", height: "48px" }
            },
            [
              _c("circle", {
                staticClass: "path-bg",
                attrs: {
                  cx: "24",
                  cy: "24",
                  r: "22",
                  fill: "none",
                  "stroke-width": "4",
                  stroke: "#eeeeee"
                }
              }),
              _vm._v(" "),
              _c("circle", {
                staticClass: "path",
                attrs: {
                  cx: "24",
                  cy: "24",
                  r: "22",
                  fill: "none",
                  "stroke-width": "4",
                  "stroke-miterlimit": "10",
                  stroke: "#F96D00"
                }
              })
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/head.vue?vue&type=template&id=2105825c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/head.vue?vue&type=template&id=2105825c& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wrap" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-between" }, [
          _c(
            "div",
            { staticClass: "col-12 col-md d-flex align-items-center" },
            [
              _c("p", { staticClass: "mb-0 phone" }, [
                _c("span", { staticClass: "mailus" }, [_vm._v("Phone no:")]),
                _vm._v(" "),
                _c("a", { attrs: { href: "#" } }, [_vm._v("+00 1234 567")]),
                _vm._v(" or\n                    "),
                _c("span", { staticClass: "mailus" }, [_vm._v("email us:")]),
                _vm._v(" "),
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("emailsample@email.com")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 col-md d-flex justify-content-md-end" },
            [
              _c("div", { staticClass: "social-media" }, [
                _c("p", { staticClass: "mb-0 d-flex" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center",
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-facebook" }, [
                        _c("i", { staticClass: "sr-only" }, [
                          _vm._v("Facebook")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center",
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-twitter" }, [
                        _c("i", { staticClass: "sr-only" }, [_vm._v("Twitter")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center",
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-instagram" }, [
                        _c("i", { staticClass: "sr-only" }, [
                          _vm._v("Instagram")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center",
                      attrs: { href: "#" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-dribbble" }, [
                        _c("i", { staticClass: "sr-only" }, [
                          _vm._v("Dribbble")
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);