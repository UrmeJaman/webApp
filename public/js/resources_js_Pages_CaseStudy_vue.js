(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_CaseStudy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CaseStudy.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CaseStudy.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_head_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue/head.vue */ "./resources/js/Pages/vue/head.vue");
/* harmony import */ var _vue_loader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue/loader.vue */ "./resources/js/Pages/vue/loader.vue");
/* harmony import */ var _vue_nav_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/nav.vue */ "./resources/js/Pages/vue/nav.vue");
/* harmony import */ var _vue_work_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/work.vue */ "./resources/js/Pages/vue/work.vue");
/* harmony import */ var _vue_footer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/footer.vue */ "./resources/js/Pages/vue/footer.vue");
/* harmony import */ var _vue_pageCiecle_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/pageCiecle.vue */ "./resources/js/Pages/vue/pageCiecle.vue");
/* harmony import */ var _lib_TemplateMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../lib/TemplateMain */ "./resources/js/lib/TemplateMain.js");
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







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _vue_head_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Loader: _vue_loader_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Nav: _vue_nav_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Work: _vue_work_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Footer: _vue_footer_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Page: _vue_pageCiecle_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      (0,_lib_TemplateMain__WEBPACK_IMPORTED_MODULE_6__.TemplateMain)();
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

/***/ "./resources/js/Pages/CaseStudy.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/CaseStudy.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CaseStudy_vue_vue_type_template_id_be7f46c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaseStudy.vue?vue&type=template&id=be7f46c0& */ "./resources/js/Pages/CaseStudy.vue?vue&type=template&id=be7f46c0&");
/* harmony import */ var _CaseStudy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudy.vue?vue&type=script&lang=js& */ "./resources/js/Pages/CaseStudy.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CaseStudy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CaseStudy_vue_vue_type_template_id_be7f46c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _CaseStudy_vue_vue_type_template_id_be7f46c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/CaseStudy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/footer.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/vue/footer.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_4178a28d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=4178a28d& */ "./resources/js/Pages/vue/footer.vue?vue&type=template&id=4178a28d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _footer_vue_vue_type_template_id_4178a28d___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_4178a28d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/footer.vue"
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

/***/ "./resources/js/Pages/vue/loader.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/vue/loader.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_vue_vue_type_template_id_0305bdf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.vue?vue&type=template&id=0305bdf6& */ "./resources/js/Pages/vue/loader.vue?vue&type=template&id=0305bdf6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _loader_vue_vue_type_template_id_0305bdf6___WEBPACK_IMPORTED_MODULE_0__.render,
  _loader_vue_vue_type_template_id_0305bdf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/nav.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/vue/nav.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav_vue_vue_type_template_id_79059ebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.vue?vue&type=template&id=79059ebe& */ "./resources/js/Pages/vue/nav.vue?vue&type=template&id=79059ebe&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _nav_vue_vue_type_template_id_79059ebe___WEBPACK_IMPORTED_MODULE_0__.render,
  _nav_vue_vue_type_template_id_79059ebe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/nav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/pageCiecle.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/vue/pageCiecle.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageCiecle_vue_vue_type_template_id_3582dade___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageCiecle.vue?vue&type=template&id=3582dade& */ "./resources/js/Pages/vue/pageCiecle.vue?vue&type=template&id=3582dade&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _pageCiecle_vue_vue_type_template_id_3582dade___WEBPACK_IMPORTED_MODULE_0__.render,
  _pageCiecle_vue_vue_type_template_id_3582dade___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/pageCiecle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/work.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/vue/work.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _work_vue_vue_type_template_id_34123783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.vue?vue&type=template&id=34123783& */ "./resources/js/Pages/vue/work.vue?vue&type=template&id=34123783&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _work_vue_vue_type_template_id_34123783___WEBPACK_IMPORTED_MODULE_0__.render,
  _work_vue_vue_type_template_id_34123783___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/work.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/CaseStudy.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/CaseStudy.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaseStudy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CaseStudy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/CaseStudy.vue?vue&type=template&id=be7f46c0&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/CaseStudy.vue?vue&type=template&id=be7f46c0& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_template_id_be7f46c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_template_id_be7f46c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudy_vue_vue_type_template_id_be7f46c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaseStudy.vue?vue&type=template&id=be7f46c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CaseStudy.vue?vue&type=template&id=be7f46c0&");


/***/ }),

/***/ "./resources/js/Pages/vue/footer.vue?vue&type=template&id=4178a28d&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/vue/footer.vue?vue&type=template&id=4178a28d& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_4178a28d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_4178a28d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_4178a28d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=4178a28d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/footer.vue?vue&type=template&id=4178a28d&");


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

/***/ "./resources/js/Pages/vue/loader.vue?vue&type=template&id=0305bdf6&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/vue/loader.vue?vue&type=template&id=0305bdf6& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_0305bdf6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_0305bdf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_0305bdf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=0305bdf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/loader.vue?vue&type=template&id=0305bdf6&");


/***/ }),

/***/ "./resources/js/Pages/vue/nav.vue?vue&type=template&id=79059ebe&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/vue/nav.vue?vue&type=template&id=79059ebe& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_79059ebe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_79059ebe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_79059ebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nav.vue?vue&type=template&id=79059ebe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/nav.vue?vue&type=template&id=79059ebe&");


/***/ }),

/***/ "./resources/js/Pages/vue/pageCiecle.vue?vue&type=template&id=3582dade&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/vue/pageCiecle.vue?vue&type=template&id=3582dade& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageCiecle_vue_vue_type_template_id_3582dade___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageCiecle_vue_vue_type_template_id_3582dade___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageCiecle_vue_vue_type_template_id_3582dade___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pageCiecle.vue?vue&type=template&id=3582dade& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/pageCiecle.vue?vue&type=template&id=3582dade&");


/***/ }),

/***/ "./resources/js/Pages/vue/work.vue?vue&type=template&id=34123783&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/vue/work.vue?vue&type=template&id=34123783& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_34123783___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_34123783___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_work_vue_vue_type_template_id_34123783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./work.vue?vue&type=template&id=34123783& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/work.vue?vue&type=template&id=34123783&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CaseStudy.vue?vue&type=template&id=be7f46c0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CaseStudy.vue?vue&type=template&id=be7f46c0& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("Loader"),
      _vm._v(" "),
      _c("Head"),
      _vm._v(" "),
      _c("Nav"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("Work"),
      _vm._v(" "),
      _c("Page"),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "hero-wrap hero-wrap-2",
        staticStyle: { "background-image": "url('images/bg_3.jpg')" },
        attrs: { "data-stellar-background-ratio": "0.5" }
      },
      [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass:
                "row no-gutters slider-text align-items-end justify-content-center"
            },
            [
              _c(
                "div",
                { staticClass: "col-md-9 ftco-animate pb-5 text-center" },
                [
                  _c("h1", { staticClass: "mb-3 bread" }, [
                    _vm._v("Case Study")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "breadcrumbs" }, [
                    _c("span", { staticClass: "mr-2" }, [
                      _c("a", { attrs: { href: "index.html" } }, [
                        _vm._v("Home "),
                        _c("i", { staticClass: "fa fa-chevron-right" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v("Case Study "),
                      _c("i", { staticClass: "fa fa-chevron-right" })
                    ])
                  ])
                ]
              )
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/footer.vue?vue&type=template&id=4178a28d&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/footer.vue?vue&type=template&id=4178a28d& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    return _c(
      "footer",
      { staticClass: "ftco-footer ftco-footer-2 ftco-section" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row mb-5" }, [
            _c("div", { staticClass: "col-md" }, [
              _c("div", { staticClass: "ftco-footer-widget mb-4" }, [
                _c("h2", { staticClass: "ftco-footer-logo" }, [
                  _vm._v("\n                        IT"),
                  _c("span", [_vm._v("solution")])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                        Far far away, behind the word mountains, far from\n                        the countries Vokalia and Consonantia, there live\n                        the blind texts.\n                    "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "ftco-footer-social list-unstyled mt-2" },
                  [
                    _c("li", { staticClass: "ftco-animate" }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("span", { staticClass: "fa fa-twitter" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "ftco-animate" }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("span", { staticClass: "fa fa-facebook" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "ftco-animate" }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("span", { staticClass: "fa fa-instagram" })
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md" }, [
              _c("div", { staticClass: "ftco-footer-widget mb-4 ml-md-5" }, [
                _c("h2", { staticClass: "ftco-heading-2" }, [
                  _vm._v("Explore")
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "list-unstyled" }, [
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("About")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Contact")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("What We Do")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Plans & Pricing")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Refund Policy")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Call Us")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md" }, [
              _c("div", { staticClass: "ftco-footer-widget mb-4" }, [
                _c("h2", { staticClass: "ftco-heading-2" }, [_vm._v("Legal")]),
                _vm._v(" "),
                _c("ul", { staticClass: "list-unstyled" }, [
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Join Us")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Blog")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Privacy & Policy")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Terms & Conditions")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Careers")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      { staticClass: "py-2 d-block", attrs: { href: "#" } },
                      [_vm._v("Contact")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md" }, [
              _c("div", { staticClass: "ftco-footer-widget mb-4" }, [
                _c("h2", { staticClass: "ftco-heading-2" }, [
                  _vm._v("Have a Questions?")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-23 mb-3" }, [
                  _c("ul", [
                    _c("li", [
                      _c("span", { staticClass: "icon fa fa-map marker" }),
                      _c("span", { staticClass: "text" }, [
                        _vm._v(
                          "203 Fake St. Mountain View, San\n                                    Francisco, California, USA"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("span", { staticClass: "icon fa fa-phone" }),
                        _c("span", { staticClass: "text" }, [
                          _vm._v("+2 392 3929 210")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("span", {
                          staticClass: "icon fa fa-paper-plane pr-4"
                        }),
                        _c("span", { staticClass: "text" }, [
                          _vm._v("info@yourdomain.com")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("p", [
                _vm._v(
                  "\n                    Copyright ©\n                    "
                ),
                _vm._v(
                  "\n                    All rights reserved | This template is made with\n                    "
                ),
                _c("i", {
                  staticClass: "fa fa-heart",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" by\n                    "),
                _c(
                  "a",
                  { attrs: { href: "https://colorlib.com", target: "_blank" } },
                  [_vm._v("Colorlib")]
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/loader.vue?vue&type=template&id=0305bdf6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/loader.vue?vue&type=template&id=0305bdf6& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "show fullscreen", attrs: { id: "ftco-loader" } },
    [
      _c(
        "svg",
        { staticClass: "circular", attrs: { width: "48px", height: "48px" } },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/nav.vue?vue&type=template&id=79059ebe&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/nav.vue?vue&type=template&id=79059ebe& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    return _c(
      "nav",
      {
        staticClass:
          "navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",
        attrs: { id: "ftco-navbar" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c(
            "a",
            { staticClass: "navbar-brand", attrs: { href: "index.html" } },
            [
              _c("img", {
                staticStyle: { width: "30%" },
                attrs: { src: "images/neu.png", alt: "Girl in a jacket" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#ftco-nav",
                "aria-controls": "ftco-nav",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              }
            },
            [
              _c("span", { staticClass: "oi oi-menu" }),
              _vm._v(" Menu\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "ftco-nav" }
            },
            [
              _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                _c("li", { staticClass: "nav-item active" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "/" } }, [
                    _vm._v("Home")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "/about" } },
                    [_vm._v("About")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "/service" } },
                    [_vm._v("Services")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "/caseStudy" } },
                    [_vm._v("Case Study")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "/blog" } },
                    [_vm._v("Blog")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "/contact" } },
                    [_vm._v("Contact us")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item " }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "login" } },
                    [_vm._v("Login")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item cta" }, [
                  _c(
                    "a",
                    { staticClass: "nav-link", attrs: { href: "/quete" } },
                    [_vm._v(" Get Quete")]
                  )
                ])
              ])
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/pageCiecle.vue?vue&type=template&id=3582dade&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/pageCiecle.vue?vue&type=template&id=3582dade& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col text-center" }, [
        _c("div", { staticClass: "block-27" }, [
          _c("ul", [
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("<")])]),
            _vm._v(" "),
            _c("li", { staticClass: "active" }, [_c("span", [_vm._v("1")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("2")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("3")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("4")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("5")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v(">")])])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/work.vue?vue&type=template&id=34123783&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/work.vue?vue&type=template&id=34123783& ***!
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
    return _c("div", { staticClass: "ftco-section ftco-no-pt" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center pb-5" }, [
          _c(
            "div",
            {
              staticClass: "col-md-12 heading-section text-center ftco-animate"
            },
            [
              _c("h2", { staticClass: "mb-4" }, [
                _vm._v("Our Strategic "),
                _c("span", [_vm._v("Work")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6 col-lg-3 ftco-animate" }, [
            _c("div", { staticClass: "project" }, [
              _c("div", { staticClass: "img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/work-1.jpg", alt: "Colorlib Template" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text text-center" }, [
                _c("span", [_vm._v("Web Development")]),
                _vm._v(" "),
                _c("h3", [
                  _c("a", { attrs: { href: "project.html" } }, [
                    _vm._v("Best Solution for Information Technology")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "icon image-popup d-flex justify-content-center align-items-center",
                  attrs: { href: "images/work-1.jpg" }
                },
                [_c("span", { staticClass: "fa fa-expand" })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-3 ftco-animate" }, [
            _c("div", { staticClass: "project" }, [
              _c("div", { staticClass: "img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/work-2.jpg", alt: "Colorlib Template" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text text-center" }, [
                _c("span", [_vm._v("Web Application")]),
                _vm._v(" "),
                _c("h3", [
                  _c("a", { attrs: { href: "project.html" } }, [
                    _vm._v("Creative Idea Build Up")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "icon image-popup d-flex justify-content-center align-items-center",
                  attrs: { href: "images/work-2.jpg" }
                },
                [_c("span", { staticClass: "fa fa-expand" })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-3 ftco-animate" }, [
            _c("div", { staticClass: "project" }, [
              _c("div", { staticClass: "img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/work-3.jpg", alt: "Colorlib Template" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text text-center" }, [
                _c("span", [_vm._v("Web Development")]),
                _vm._v(" "),
                _c("h3", [
                  _c("a", { attrs: { href: "project.html" } }, [
                    _vm._v("Web Design Concept & Web Analysis")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "icon image-popup d-flex justify-content-center align-items-center",
                  attrs: { href: "images/work-3.jpg" }
                },
                [_c("span", { staticClass: "fa fa-expand" })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-3 ftco-animate" }, [
            _c("div", { staticClass: "project" }, [
              _c("div", { staticClass: "img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/work-4.jpg", alt: "Colorlib Template" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text text-center" }, [
                _c("span", [_vm._v("UI/UX Strategy")]),
                _vm._v(" "),
                _c("h3", [
                  _c("a", { attrs: { href: "project.html" } }, [
                    _vm._v(
                      "Strategy for Enduring Customer\n                                Relationships"
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "icon image-popup d-flex justify-content-center align-items-center",
                  attrs: { href: "images/work-4.jpg" }
                },
                [_c("span", { staticClass: "fa fa-expand" })]
              )
            ])
          ])
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