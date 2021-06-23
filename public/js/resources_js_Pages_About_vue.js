(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_About_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_head_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue/head.vue */ "./resources/js/Pages/vue/head.vue");
/* harmony import */ var _vue_loader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue/loader.vue */ "./resources/js/Pages/vue/loader.vue");
/* harmony import */ var _vue_nav_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/nav.vue */ "./resources/js/Pages/vue/nav.vue");
/* harmony import */ var _vue_history_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/history.vue */ "./resources/js/Pages/vue/history.vue");
/* harmony import */ var _vue_consult_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/consult.vue */ "./resources/js/Pages/vue/consult.vue");
/* harmony import */ var _vue_service_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/service.vue */ "./resources/js/Pages/vue/service.vue");
/* harmony import */ var _vue_work_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vue/work.vue */ "./resources/js/Pages/vue/work.vue");
/* harmony import */ var _vue_testimoni_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vue/testimoni.vue */ "./resources/js/Pages/vue/testimoni.vue");
/* harmony import */ var _vue_blog_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vue/blog.vue */ "./resources/js/Pages/vue/blog.vue");
/* harmony import */ var _vue_appointment_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vue/appointment.vue */ "./resources/js/Pages/vue/appointment.vue");
/* harmony import */ var _vue_footer_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vue/footer.vue */ "./resources/js/Pages/vue/footer.vue");
/* harmony import */ var _vue_question_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vue/question.vue */ "./resources/js/Pages/vue/question.vue");
/* harmony import */ var _lib_TemplateMain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../lib/TemplateMain */ "./resources/js/lib/TemplateMain.js");
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













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Head: _vue_head_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Loader: _vue_loader_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Nav: _vue_nav_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    History: _vue_history_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Consult: _vue_consult_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Service: _vue_service_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    Work: _vue_work_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    Question: _vue_question_vue__WEBPACK_IMPORTED_MODULE_11__.default,
    Testimoni: _vue_testimoni_vue__WEBPACK_IMPORTED_MODULE_7__.default,
    Blog: _vue_blog_vue__WEBPACK_IMPORTED_MODULE_8__.default,
    Appointment: _vue_appointment_vue__WEBPACK_IMPORTED_MODULE_9__.default,
    Footer: _vue_footer_vue__WEBPACK_IMPORTED_MODULE_10__.default
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      (0,_lib_TemplateMain__WEBPACK_IMPORTED_MODULE_12__.TemplateMain)();
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

/***/ "./resources/js/Pages/About.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/About.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=169e1534& */ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/Pages/About.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/appointment.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/vue/appointment.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appointment_vue_vue_type_template_id_61817f1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment.vue?vue&type=template&id=61817f1d& */ "./resources/js/Pages/vue/appointment.vue?vue&type=template&id=61817f1d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _appointment_vue_vue_type_template_id_61817f1d___WEBPACK_IMPORTED_MODULE_0__.render,
  _appointment_vue_vue_type_template_id_61817f1d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/appointment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/blog.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/vue/blog.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blog_vue_vue_type_template_id_0a8fef94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.vue?vue&type=template&id=0a8fef94& */ "./resources/js/Pages/vue/blog.vue?vue&type=template&id=0a8fef94&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _blog_vue_vue_type_template_id_0a8fef94___WEBPACK_IMPORTED_MODULE_0__.render,
  _blog_vue_vue_type_template_id_0a8fef94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/blog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/consult.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/vue/consult.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consult_vue_vue_type_template_id_7aa853ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consult.vue?vue&type=template&id=7aa853ea& */ "./resources/js/Pages/vue/consult.vue?vue&type=template&id=7aa853ea&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _consult_vue_vue_type_template_id_7aa853ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _consult_vue_vue_type_template_id_7aa853ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/consult.vue"
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

/***/ "./resources/js/Pages/vue/history.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/vue/history.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _history_vue_vue_type_template_id_7886aedc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.vue?vue&type=template&id=7886aedc& */ "./resources/js/Pages/vue/history.vue?vue&type=template&id=7886aedc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _history_vue_vue_type_template_id_7886aedc___WEBPACK_IMPORTED_MODULE_0__.render,
  _history_vue_vue_type_template_id_7886aedc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/history.vue"
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

/***/ "./resources/js/Pages/vue/question.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/vue/question.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _question_vue_vue_type_template_id_21297cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.vue?vue&type=template&id=21297cd8& */ "./resources/js/Pages/vue/question.vue?vue&type=template&id=21297cd8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _question_vue_vue_type_template_id_21297cd8___WEBPACK_IMPORTED_MODULE_0__.render,
  _question_vue_vue_type_template_id_21297cd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/question.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/service.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/vue/service.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_vue_vue_type_template_id_3bd09233___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.vue?vue&type=template&id=3bd09233& */ "./resources/js/Pages/vue/service.vue?vue&type=template&id=3bd09233&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _service_vue_vue_type_template_id_3bd09233___WEBPACK_IMPORTED_MODULE_0__.render,
  _service_vue_vue_type_template_id_3bd09233___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/service.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/vue/testimoni.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/vue/testimoni.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _testimoni_vue_vue_type_template_id_9e1a901c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimoni.vue?vue&type=template&id=9e1a901c& */ "./resources/js/Pages/vue/testimoni.vue?vue&type=template&id=9e1a901c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _testimoni_vue_vue_type_template_id_9e1a901c___WEBPACK_IMPORTED_MODULE_0__.render,
  _testimoni_vue_vue_type_template_id_9e1a901c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/vue/testimoni.vue"
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

/***/ "./resources/js/Pages/About.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=template&id=169e1534& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=169e1534& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&");


/***/ }),

/***/ "./resources/js/Pages/vue/appointment.vue?vue&type=template&id=61817f1d&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/vue/appointment.vue?vue&type=template&id=61817f1d& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_template_id_61817f1d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_template_id_61817f1d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_template_id_61817f1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appointment.vue?vue&type=template&id=61817f1d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/appointment.vue?vue&type=template&id=61817f1d&");


/***/ }),

/***/ "./resources/js/Pages/vue/blog.vue?vue&type=template&id=0a8fef94&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/vue/blog.vue?vue&type=template&id=0a8fef94& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_0a8fef94___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_0a8fef94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_template_id_0a8fef94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./blog.vue?vue&type=template&id=0a8fef94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/blog.vue?vue&type=template&id=0a8fef94&");


/***/ }),

/***/ "./resources/js/Pages/vue/consult.vue?vue&type=template&id=7aa853ea&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/vue/consult.vue?vue&type=template&id=7aa853ea& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_consult_vue_vue_type_template_id_7aa853ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_consult_vue_vue_type_template_id_7aa853ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_consult_vue_vue_type_template_id_7aa853ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./consult.vue?vue&type=template&id=7aa853ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/consult.vue?vue&type=template&id=7aa853ea&");


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

/***/ "./resources/js/Pages/vue/history.vue?vue&type=template&id=7886aedc&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/vue/history.vue?vue&type=template&id=7886aedc& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_7886aedc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_7886aedc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_7886aedc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./history.vue?vue&type=template&id=7886aedc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/history.vue?vue&type=template&id=7886aedc&");


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

/***/ "./resources/js/Pages/vue/question.vue?vue&type=template&id=21297cd8&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/vue/question.vue?vue&type=template&id=21297cd8& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_template_id_21297cd8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_template_id_21297cd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_template_id_21297cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./question.vue?vue&type=template&id=21297cd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/question.vue?vue&type=template&id=21297cd8&");


/***/ }),

/***/ "./resources/js/Pages/vue/service.vue?vue&type=template&id=3bd09233&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/vue/service.vue?vue&type=template&id=3bd09233& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_template_id_3bd09233___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_template_id_3bd09233___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_template_id_3bd09233___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./service.vue?vue&type=template&id=3bd09233& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/service.vue?vue&type=template&id=3bd09233&");


/***/ }),

/***/ "./resources/js/Pages/vue/testimoni.vue?vue&type=template&id=9e1a901c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/vue/testimoni.vue?vue&type=template&id=9e1a901c& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimoni_vue_vue_type_template_id_9e1a901c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimoni_vue_vue_type_template_id_9e1a901c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_testimoni_vue_vue_type_template_id_9e1a901c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./testimoni.vue?vue&type=template&id=9e1a901c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/testimoni.vue?vue&type=template&id=9e1a901c&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=template&id=169e1534& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("History"),
      _vm._v(" "),
      _c("Consult"),
      _vm._v(" "),
      _c("Testimoni"),
      _vm._v(" "),
      _c("Question"),
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
                  _c("h1", { staticClass: "mb-3 bread" }, [_vm._v("About Us")]),
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
                      _vm._v("About us "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/appointment.vue?vue&type=template&id=61817f1d&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/appointment.vue?vue&type=template&id=61817f1d& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      "section",
      {
        staticClass: "ftco-appointment ftco-section img",
        staticStyle: { "background-image": "url(images/bg_2.jpg)" }
      },
      [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 half ftco-animate" }, [
              _c("h2", { staticClass: "mb-4" }, [
                _vm._v("Don't hesitate to contact us")
              ]),
              _vm._v(" "),
              _c(
                "form",
                { staticClass: "appointment", attrs: { action: "#" } },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Your Name" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Email" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "form-field" }, [
                          _c("div", { staticClass: "select-wrap" }, [
                            _c("div", { staticClass: "icon" }, [
                              _c("span", { staticClass: "fa fa-chevron-down" })
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                staticClass: "form-control",
                                attrs: { name: "", id: "" }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Services")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Web Development")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Database Analysis")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Server Security")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("UX/UI Strategy")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Branding")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Applications")
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: {
                            name: "",
                            id: "",
                            cols: "30",
                            rows: "7",
                            placeholder: "Message"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "btn btn-primary py-3 px-4",
                          attrs: { type: "submit", value: "Send message" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/blog.vue?vue&type=template&id=0a8fef94&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/blog.vue?vue&type=template&id=0a8fef94& ***!
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
    return _c("div", { staticClass: "ftco-section bg-light" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center mb-5 pb-3" }, [
          _c(
            "div",
            {
              staticClass: "col-md-7 heading-section text-center ftco-animate"
            },
            [_c("h2", [_vm._v("Read our latest blog")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row d-flex" }, [
          _c("div", { staticClass: "col-md-4 d-flex ftco-animate" }, [
            _c("div", { staticClass: "blog-entry justify-content-end" }, [
              _c("a", {
                staticClass: "block-20",
                staticStyle: {
                  "background-image": "url('images/image_1.jpg')"
                },
                attrs: { href: "blog-single.html" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text mt-3 float-right d-block" }, [
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center pt-2 mb-4 topp" },
                  [
                    _c("div", { staticClass: "one" }, [
                      _c("span", { staticClass: "day" }, [_vm._v("29")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "two pl-1" }, [
                      _c("span", { staticClass: "yr" }, [_vm._v("2020")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "mos" }, [_vm._v("June")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "heading" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v(
                      "Why Lead Generation is Key for Business\n                                Growth"
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 d-flex ftco-animate" }, [
            _c("div", { staticClass: "blog-entry justify-content-end" }, [
              _c("a", {
                staticClass: "block-20",
                staticStyle: {
                  "background-image": "url('images/image_2.jpg')"
                },
                attrs: { href: "blog-single.html" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text mt-3 float-right d-block" }, [
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center pt-2 mb-4 topp" },
                  [
                    _c("div", { staticClass: "one" }, [
                      _c("span", { staticClass: "day" }, [_vm._v("29")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "two pl-1" }, [
                      _c("span", { staticClass: "yr" }, [_vm._v("2020")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "mos" }, [_vm._v("June")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "heading" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v(
                      "Why Lead Generation is Key for Business\n                                Growth"
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 d-flex ftco-animate" }, [
            _c("div", { staticClass: "blog-entry" }, [
              _c("a", {
                staticClass: "block-20",
                staticStyle: {
                  "background-image": "url('images/image_3.jpg')"
                },
                attrs: { href: "blog-single.html" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text mt-3 float-right d-block" }, [
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center pt-2 mb-4 topp" },
                  [
                    _c("div", { staticClass: "one" }, [
                      _c("span", { staticClass: "day" }, [_vm._v("29")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "two pl-1" }, [
                      _c("span", { staticClass: "yr" }, [_vm._v("2020")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "mos" }, [_vm._v("June")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "heading" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v(
                      "Why Lead Generation is Key for Business\n                                Growth"
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/consult.vue?vue&type=template&id=7aa853ea&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/consult.vue?vue&type=template&id=7aa853ea& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      "div",
      { staticClass: "ftco-counter img", attrs: { id: "section-counter" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row no-gutters d-flex" }, [
            _c("div", { staticClass: "col-md-6 d-flex" }, [
              _c("div", {
                staticClass: "img d-flex align-self-stretch",
                staticStyle: { "background-image": "url(images/about.jpg)" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 p-3 pl-md-5 py-5 bg-primary" }, [
              _c("div", { staticClass: "row justify-content-start pb-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-12 heading-section heading-section-white ftco-animate"
                  },
                  [
                    _c("h2", { staticClass: "mb-4" }, [
                      _vm._v(
                        "\n                            Consult us here in "
                      ),
                      _c("span", [_vm._v("ITSolution")])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                            Far far away, behind the word mountains, far\n                            from the countries Vokalia and Consonantia\n                        "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-6 justify-content-center counter-wrap ftco-animate"
                  },
                  [
                    _c("div", { staticClass: "block-18 mb-4" }, [
                      _c("div", { staticClass: "text" }, [
                        _c(
                          "strong",
                          {
                            staticClass: "number",
                            attrs: { "data-number": "750" }
                          },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("span", [_vm._v("Project Complete")])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-6 justify-content-center counter-wrap ftco-animate"
                  },
                  [
                    _c("div", { staticClass: "block-18 mb-4" }, [
                      _c("div", { staticClass: "text" }, [
                        _c(
                          "strong",
                          {
                            staticClass: "number",
                            attrs: { "data-number": "568" }
                          },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("span", [_vm._v("Happy Clients")])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-6 justify-content-center counter-wrap ftco-animate"
                  },
                  [
                    _c("div", { staticClass: "block-18 mb-4" }, [
                      _c("div", { staticClass: "text" }, [
                        _c(
                          "strong",
                          {
                            staticClass: "number",
                            attrs: { "data-number": "478" }
                          },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("span", [_vm._v("Business Partners")])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-6 justify-content-center counter-wrap ftco-animate"
                  },
                  [
                    _c("div", { staticClass: "block-18 mb-4" }, [
                      _c("div", { staticClass: "text" }, [
                        _c(
                          "strong",
                          {
                            staticClass: "number",
                            attrs: { "data-number": "780" }
                          },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("span", [_vm._v("IT Consultant")])
                      ])
                    ])
                  ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/history.vue?vue&type=template&id=7886aedc&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/history.vue?vue&type=template&id=7886aedc& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "ftco-section" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center pb-5" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-6 heading-section text-center ftco-animate"
            },
            [
              _c("h2", { staticClass: "mb-4" }, [
                _vm._v("\n                    More than "),
                _c("span", [_vm._v("35+")]),
                _vm._v(" years we provide\n                    "),
                _c("span", [_vm._v("IT Solution")])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                    Far far away, behind the word mountains, far from the\n                    countries Vokalia and Consonantia\n                "
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "services-2 text-center" }, [
              _c("div", { staticClass: "icon" }, [
                _c("span", { staticClass: "flaticon-web-programming" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text" }, [
                _c("h3", [_vm._v("Web Development")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                            Far far away, behind the word mountains, far\n                            from the countries Vokalia and Consonantia\n                        "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "images/services.svg", alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "services-2 text-center" }, [
              _c("div", { staticClass: "icon" }, [
                _c("span", { staticClass: "flaticon-secure" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text" }, [
                _c("h3", [_vm._v("Server Security")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                            Far far away, behind the word mountains, far\n                            from the countries Vokalia and Consonantia\n                        "
                  )
                ])
              ])
            ])
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/question.vue?vue&type=template&id=21297cd8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/question.vue?vue&type=template&id=21297cd8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "ftco-section bg-light ftco-faqs" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 order-md-last" }, [
            _c("div", {
              staticClass:
                "img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0",
              staticStyle: { "background-image": "url(images/about.jpg)" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex mt-3" }, [
              _c("div", {
                staticClass: "img img-2 mr-md-2 w-100",
                staticStyle: { "background-image": "url(images/about-1.jpg)" }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "img img-2 ml-md-2 w-100",
                staticStyle: { "background-image": "url(images/about-2.jpg)" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6" }, [
            _c("div", { staticClass: "heading-section mb-5 mt-5 mt-lg-0" }, [
              _c("h2", { staticClass: "mb-3" }, [
                _vm._v("Frequently Asks Questions")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "myaccordion w-100",
                attrs: { id: "accordion", "aria-multiselectable": "true" }
              },
              [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-header p-0",
                      attrs: { id: "headingOne" }
                    },
                    [
                      _c("h2", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "d-flex py-3 px-4 align-items-center justify-content-between btn btn-link",
                            attrs: {
                              href: "#collapseOne",
                              "data-parent": "#accordion",
                              "data-toggle": "collapse",
                              "aria-expanded": "true",
                              "aria-controls": "collapseOne"
                            }
                          },
                          [
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n                                        How can we help your business?\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse show",
                      attrs: {
                        id: "collapseOne",
                        role: "tabpanel",
                        "aria-labelledby": "headingOne"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body py-3 px-0" }, [
                        _c("ol", [
                          _c("li", [
                            _vm._v(
                              "\n                                        Far far away, behind the word\n                                        mountains\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Consonantia, there live the blind\n                                        texts\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        When she reached the first hills of\n                                        the Italic Mountains\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Bookmarksgrove, the headline of\n                                        Alphabet Village\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Separated they live in\n                                        Bookmarksgrove right\n                                    "
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-header p-0",
                      attrs: { id: "headingTwo", role: "tab" }
                    },
                    [
                      _c("h2", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "d-flex py-3 px-4 align-items-center justify-content-between btn btn-link",
                            attrs: {
                              href: "#collapseTwo",
                              "data-parent": "#accordion",
                              "data-toggle": "collapse",
                              "aria-expanded": "false",
                              "aria-controls": "collapseTwo"
                            }
                          },
                          [
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n                                        How long does it take to build a\n                                        website?\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse",
                      attrs: {
                        id: "collapseTwo",
                        role: "tabpanel",
                        "aria-labelledby": "headingTwo"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body py-3 px-0" }, [
                        _c("ol", [
                          _c("li", [
                            _vm._v(
                              "\n                                        Far far away, behind the word\n                                        mountains\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Consonantia, there live the blind\n                                        texts\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        When she reached the first hills of\n                                        the Italic Mountains\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Bookmarksgrove, the headline of\n                                        Alphabet Village\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Separated they live in\n                                        Bookmarksgrove right\n                                    "
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-header p-0",
                      attrs: { id: "headingThree", role: "tab" }
                    },
                    [
                      _c("h2", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "d-flex py-3 px-4 align-items-center justify-content-between btn btn-link",
                            attrs: {
                              href: "#collapseThree",
                              "data-parent": "#accordion",
                              "data-toggle": "collapse",
                              "aria-expanded": "false",
                              "aria-controls": "collapseThree"
                            }
                          },
                          [
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n                                        Can I help your IT Solution for\n                                        business?\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse",
                      attrs: {
                        id: "collapseThree",
                        role: "tabpanel",
                        "aria-labelledby": "headingTwo"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body py-3 px-0" }, [
                        _c("ol", [
                          _c("li", [
                            _vm._v(
                              "\n                                        Far far away, behind the word\n                                        mountains\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Consonantia, there live the blind\n                                        texts\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        When she reached the first hills of\n                                        the Italic Mountains\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Bookmarksgrove, the headline of\n                                        Alphabet Village\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "\n                                        Separated they live in\n                                        Bookmarksgrove right\n                                    "
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card-header p-0",
                      attrs: { id: "headingFour", role: "tab" }
                    },
                    [
                      _c("h2", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "d-flex py-3 px-4 align-items-center justify-content-between btn btn-link",
                            attrs: {
                              href: "#collapseFour",
                              "data-parent": "#accordion",
                              "data-toggle": "collapse",
                              "aria-expanded": "false",
                              "aria-controls": "collapseFour"
                            }
                          },
                          [
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n                                        What are those requirements for\n                                        ITSolutions?\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse",
                      attrs: {
                        id: "collapseFour",
                        role: "tabpanel",
                        "aria-labelledby": "headingTwo"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body py-3 px-0" }, [
                        _c("p", [
                          _vm._v(
                            "\n                                    Far far away, behind the word mountains,\n                                    far from the countries Vokalia and\n                                    Consonantia, there live the blind texts.\n                                    Separated they live in Bookmarksgrove\n                                    right at the coast of the Semantics, a\n                                    large language ocean.\n                                "
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/service.vue?vue&type=template&id=3bd09233&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/service.vue?vue&type=template&id=3bd09233& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "ftco-section services-section" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center pb-5" }, [
          _c(
            "div",
            {
              staticClass: "col-md-6 heading-section text-center ftco-animate"
            },
            [
              _c("h2", { staticClass: "mb-4" }, [
                _vm._v("\n                    Our Exclusive "),
                _c("span", [_vm._v("IT Solution")]),
                _vm._v(" Services\n                ")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row d-flex no-gutters" }, [
          _c(
            "div",
            { staticClass: "col-md-3 d-flex align-self-stretch ftco-animate" },
            [
              _c("div", { staticClass: "media block-6 services d-block" }, [
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _c("div", { staticClass: "icon" }, [
                  _c("span", { staticClass: "flaticon-web-programming" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "heading mb-3" }, [
                    _vm._v("Web Development")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            203 Fake St. Mountain View, San Francisco,\n                            California, USA\n                        "
                    )
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-3 d-flex align-self-stretch ftco-animate" },
            [
              _c("div", { staticClass: "media block-6 services d-block" }, [
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _c("div", { staticClass: "icon" }, [
                  _c("span", { staticClass: "flaticon-stats" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "heading mb-3" }, [
                    _vm._v("Database Analysis")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            A small river named Duden flows by their place\n                            and supplies.\n                        "
                    )
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-3 d-flex align-self-stretch ftco-animate" },
            [
              _c("div", { staticClass: "media block-6 services d-block" }, [
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _c("div", { staticClass: "icon" }, [
                  _c("span", { staticClass: "flaticon-secure" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "heading mb-3" }, [
                    _vm._v("Server Security")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            A small river named Duden flows by their place\n                            and supplies.\n                        "
                    )
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-3 d-flex align-self-stretch ftco-animate" },
            [
              _c("div", { staticClass: "media block-6 services d-block" }, [
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _c("div", { staticClass: "icon" }, [
                  _c("span", { staticClass: "flaticon-presentation" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "heading mb-3" }, [
                    _vm._v("UX/UI Strategy")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            A small river named Duden flows by their place\n                            and supplies.\n                        "
                    )
                  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/testimoni.vue?vue&type=template&id=9e1a901c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/vue/testimoni.vue?vue&type=template&id=9e1a901c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      "div",
      {
        staticClass: "ftco-section ftco-no-pb testimony-section",
        staticStyle: { "background-image": "url(images/bg_1.jpg)" }
      },
      [
        _c("div", { staticClass: "overlay-1" }),
        _vm._v(" "),
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row justify-content-center mb-5 pb-3" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-md-7 text-center heading-section heading-section-white ftco-animate"
              },
              [
                _c("h2", { staticClass: "mb-4" }, [
                  _vm._v("Our insights & creative ideas")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row ftco-animate" }, [
            _c("div", { staticClass: "col-md-12 testimonial" }, [
              _c(
                "div",
                { staticClass: "carousel-testimony owl-carousel ftco-owl" },
                [
                  _c("div", { staticClass: "item" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "testimony-wrap d-flex align-items-stretch",
                        staticStyle: {
                          "background-image": "url(images/testimony-1.jpg)"
                        }
                      },
                      [
                        _c("div", { staticClass: "overlay" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text" }, [
                          _c("div", { staticClass: "line" }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-4" }, [
                            _vm._v(
                              "\n                                    Far far away, behind the word mountains,\n                                    far from the countries Vokalia and\n                                    Consonantia, there live the blind texts.\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "name" }, [
                            _vm._v("Donna Scott")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "position" }, [
                            _vm._v("Marketing Manager")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "item" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "testimony-wrap d-flex align-items-stretch",
                        staticStyle: {
                          "background-image": "url(images/testimony-2.jpg)"
                        }
                      },
                      [
                        _c("div", { staticClass: "overlay" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text" }, [
                          _c("div", { staticClass: "line" }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-4" }, [
                            _vm._v(
                              "\n                                    Far far away, behind the word mountains,\n                                    far from the countries Vokalia and\n                                    Consonantia, there live the blind texts.\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "name" }, [
                            _vm._v("Roger Scott")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "position" }, [
                            _vm._v("Interface Designer")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "item" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "testimony-wrap d-flex align-items-stretch",
                        staticStyle: {
                          "background-image": "url(images/testimony-3.jpg)"
                        }
                      },
                      [
                        _c("div", { staticClass: "overlay" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text" }, [
                          _c("div", { staticClass: "line" }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-4" }, [
                            _vm._v(
                              "\n                                    Far far away, behind the word mountains,\n                                    far from the countries Vokalia and\n                                    Consonantia, there live the blind texts.\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "name" }, [
                            _vm._v("Roger Scott")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "position" }, [
                            _vm._v("UI Designer")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "item" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "testimony-wrap d-flex align-items-stretch",
                        staticStyle: {
                          "background-image": "url(images/testimony-4.jpg)"
                        }
                      },
                      [
                        _c("div", { staticClass: "overlay" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text" }, [
                          _c("div", { staticClass: "line" }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-4" }, [
                            _vm._v(
                              "\n                                    Far far away, behind the word mountains,\n                                    far from the countries Vokalia and\n                                    Consonantia, there live the blind texts.\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "name" }, [
                            _vm._v("Roger Scott")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "position" }, [
                            _vm._v("Web Developer")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "item" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "testimony-wrap d-flex align-items-stretch",
                        staticStyle: {
                          "background-image": "url(images/testimony-5.jpg)"
                        }
                      },
                      [
                        _c("div", { staticClass: "overlay" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text" }, [
                          _c("div", { staticClass: "line" }),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-4" }, [
                            _vm._v(
                              "\n                                    Far far away, behind the word mountains,\n                                    far from the countries Vokalia and\n                                    Consonantia, there live the blind texts.\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "name" }, [
                            _vm._v("Roger Scott")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "position" }, [
                            _vm._v("System Analyst")
                          ])
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ]
    )
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