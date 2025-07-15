/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create_footer: () => (/* binding */ create_footer),\n/* harmony export */   init_footer: () => (/* binding */ init_footer)\n/* harmony export */ });\nconst create_footer = () => {\n  const footer = document.createElement(\"footer\");\n  footer.innerHTML = `\n        <div class=\"text_container\">\n          <p>MOON:s</p>\n          <div class=\"text_1\">\n            <p>서울특별시 서초구 반포대로 12길 22</p>\n            <p>사업자등록번호 : 123-45-67890</p>\n          </div>\n          <div class=\"text_2\">\n            <p>전화 : 5367-6589</p>\n            <p>Fax : 031-333-444</p>\n            <p>이메일 : spdhsrnvl123@naver.com</p>\n          </div>\n          <p>COPYRIGHT 2022 MOON:s ALL RIGHTS RESERVED</p>\n        </div>\n        <div class=\"sns\">\n          <a target=\"_blank\" href=\"https://about.facebook.com/ko/meta/\"\n            ><img src=\"../../assets/images/icons/fb.png\"\n          /></a>\n          <a target=\"_blank\" href=\"https://twitter.com/?lang=ko\"\n            ><img src=\"../../assets/images/icons/tw.png\"\n          /></a>\n          <a target=\"_blank\" href=\"https://www.youtube.com/\"\n            ><img src=\"../../assets/images/icons/ytube.png\"\n          /></a>\n          <a target=\"_blank\" href=\"https://www.instagram.com/\"\n            ><img\n              src=\"../../assets/images/icons/is.png\"\n              width=\"38px\"\n              style=\"margin-bottom: -3px\"\n          /></a>\n        </div>\n    `;\n  return footer;\n};\n\nconst init_footer = () => {\n  const footer_container = document.querySelector(\"#footer_container\");\n  console.log(footer_container)\n\n  if (footer_container) {\n    footer_container.appendChild(create_footer());\n  }\n};\n\n\n//# sourceURL=webpack://moons/./src/components/footer.js?\n}");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create_header: () => (/* binding */ create_header),\n/* harmony export */   init_header: () => (/* binding */ init_header)\n/* harmony export */ });\nconst create_header = () => {\n  const header = document.createElement(\"header\");\n  header.innerHTML = `\n    <div class=\"menu\">\n      <h1>\n        <a href=\"/src/pages/home/index.html\">Moon:s</a>\n      </h1>\n      <ul class=\"menu_content\">\n        <li>\n          <a href=\"/src/pages/about/index.html\">About</a>\n        </li>\n        <li>\n          <a href=\"/src/pages/service/index.html\">Service</a>\n        </li>\n        <li>\n          <a href=\"/src/pages/media/index.html\">Media</a>\n        </li>\n      </ul>\n    </div>\n    `;\n    return header;\n};\n\n\nconst init_header = ()=>{\n    const header_container = document.querySelector(\"#header-container\");\n\n    if(header_container){\n        header_container.appendChild(create_header());\n    }\n}\n\n//# sourceURL=webpack://moons/./src/components/header.js?\n}");

/***/ }),

/***/ "./src/dist/index.js":
/*!***************************!*\
  !*** ./src/dist/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer.js */ \"./src/components/footer.js\");\n/* harmony import */ var _pages_home_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/home/main.js */ \"./src/pages/home/main.js\");\n/* harmony import */ var _pages_home_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_home_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_home_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home/scroll.js */ \"./src/pages/home/scroll.js\");\n/* harmony import */ var _pages_home_scroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_home_scroll_js__WEBPACK_IMPORTED_MODULE_3__);\n// import {init_header} from \"../components/header.js\";\n// import {init_footer} from \"../components/footer.js\";\n// import \"../pages/home/main.js\";\n// import \"../pages/home/scroll.js\"\n// import \"../pages/about/index.js\";\n// import \"../pages/service/index.js\";\n// import \"../pages/media/index.js\";\n\n// // DOM이 로드된 후 초기화 함수들 실행\n// document.addEventListener('DOMContentLoaded', function() {\n//     init_header();\n//     init_footer();\n// });\n\n\n\n\n\n\nconst loadPageScripts = () => {\n  // DOM 요소로 현재 페이지 확인\n  if (\n    document.querySelector(\"#about-page\") ||\n    document.querySelector(\".about-container\")\n  ) {\n    __webpack_require__.e(/*! import() */ \"src_pages_about_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../pages/about/index.js */ \"./src/pages/about/index.js\", 23));\n  } else if (\n    document.querySelector(\"#service-page\") ||\n    document.querySelector(\".service-container\")\n  ) {\n    __webpack_require__.e(/*! import() */ \"src_pages_service_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../pages/service/index.js */ \"./src/pages/service/index.js\", 23));\n  } else if (\n    document.querySelector(\"#media-page\") ||\n    document.querySelector(\".media-container\")\n  ) {\n    __webpack_require__.e(/*! import() */ \"src_pages_media_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../pages/media/index.js */ \"./src/pages/media/index.js\", 23));\n  }\n  // 홈페이지는 기본으로 이미 로드됨\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_components_header_js__WEBPACK_IMPORTED_MODULE_0__.init_header)();\n  (0,_components_footer_js__WEBPACK_IMPORTED_MODULE_1__.init_footer)();\n  loadPageScripts();\n});\n\n//# sourceURL=webpack://moons/./src/dist/index.js?\n}");

/***/ }),

/***/ "./src/pages/home/main.js":
/*!********************************!*\
  !*** ./src/pages/home/main.js ***!
  \********************************/
/***/ (() => {

eval("{const update = () => {\n    \n    const showingStatus = \"showing\"\n    const container = document.querySelector(\"#container-0\")\n    \n    const carousel = () => {\n        const currentScene = document.querySelector(`.${showingStatus}`)\n        if (currentScene) {\n            currentScene.classList.remove(\"showing\")\n            const nextSlide = currentScene.nextElementSibling;\n            if (nextSlide) {\n                nextSlide.classList.add(\"showing\");\n            } else {\n                container.firstElementChild.classList.add(\"showing\");\n            }\n        } else {\n            container.firstElementChild.classList.add(\"showing\");\n        }\n        represent()\n    }\n\n    const represent = () => {\n        const showing = document.querySelector(\".section-0.showing\");\n        const main_title = document.querySelector(\".main-title\");\n        const first_text = document.querySelector(\".first-text\");\n        const second_text = document.querySelector(\".second-text\");\n\n\n        if (showing) {\n            main_title.classList.add(\"active\");\n            first_text.classList.add(\"active\");\n            second_text.classList.add(\"active\");\n        } else {\n            main_title.classList.remove(\"active\");\n            first_text.classList.remove(\"active\");\n            second_text.classList.remove(\"active\");\n        }\n        \n        const showing_2 = document.querySelector(\".section-1.showing\");\n        const section_1_text = document.querySelector(\".section-1-text\");\n        const section_1_text2 = document.querySelector(\".section-1-text2\");\n\n        if (showing_2) {\n            section_1_text.classList.add(\"active\");\n            section_1_text2.classList.add(\"active\");\n        } else {\n            section_1_text.classList.remove(\"active\");\n            section_1_text2.classList.remove(\"active\");    \n        }\n        \n        \n        \n        const showing_3 = document.querySelector(\".section-2.showing\");\n        const section_2_text = document.querySelector(\".section-2-text\");\n        const section_2_text2 = document.querySelector(\".section-2-text2\");\n        \n        if (showing_3) {\n            section_2_text.classList.add(\"active\");\n            section_2_text2.classList.add(\"active\");\n        } else {\n            section_2_text.classList.remove(\"active\");\n            section_2_text2.classList.remove(\"active\");\n        }\n    }\n        carousel()\n        setInterval(carousel, 4000);\n}\n\nwindow.addEventListener(\"load\", update);\n\n//# sourceURL=webpack://moons/./src/pages/home/main.js?\n}");

/***/ }),

/***/ "./src/pages/home/scroll.js":
/*!**********************************!*\
  !*** ./src/pages/home/scroll.js ***!
  \**********************************/
/***/ (() => {

eval("{(() => {\n    let currentScene = 0;\n    let prevScrollHeight = 0; //이전 씬\n    let yOffset = 0; // 스크롤 값\n    let totalHeight = 0;\n    let error_protect = false;\n    let scrollRatio = 0; // 현재 씬의 스크롤 비율\n    \n\n    const scene = [\n        {\n            type: \"normal\",\n            scrollHeight: 0,\n            objs: {\n                container: document.querySelector(\"#container-0\")\n            }\n        },\n        {\n            type: \"scrollEvent\",\n            scrollHeight: 0,\n            height_add: 3,\n            objs: {\n                container: document.querySelector(\"#container-1\"),\n                messageA: document.querySelector(\".messageA\"),\n                messageB: document.querySelector(\".messageB\"),\n                messageC: document.querySelector(\".messageC\")\n            },\n            value: {\n                messageA_opacity_in: [0, 1, { start: 0, end: 0.16 }],\n                messageA_opacity_out: [1, 0, { start: 0.19, end: 0.26 }],\n                messageA_translateY_in: [30, 0, { start: 0, end: 0.15 }],\n                messageA_translateY_out: [0, -40, { start: 0.19, end: 0.26 }],\n                \n                messageB_opacity_in: [0, 1, { start: 0.26, end: 0.42 }],\n                messageB_opacity_out: [1, 0, { start: 0.45, end: 0.52 }],\n                messageB_translateY_in: [30, 0, { start: 0.26, end: 0.41 }],\n                messageB_translateY_out: [0, -40, { start: 0.45, end: 0.52 }],\n                \n                messageC_opacity_in: [0, 1, { start: 0.52, end: 0.68 }],\n                messageC_opacity_out: [1, 0, { start: 0.71, end: 0.78 }],\n                messageC_translateY_in: [30, 0, { start: 0.52, end: 0.67 }],\n                messageC_translateY_out: [0, -450, { start: 0.71, end: 0.78 }],\n\n            }\n        },\n        {\n            type: \"normal\",\n            scrollHeight: 0,\n            objs: {\n                container: document.querySelector(\"#container-2\")\n            }\n        }\n    ]\n\n    //높이 세팅\n    const set_Height = () => {\n        for (let i = 0; i < scene.length; i++) {\n            //스크롤 영역에 3배 더해서 셋팅\n            if (scene[i].type === \"scrollEvent\") {\n                scene[i].scrollHeight = scene[i].height_add * window.innerHeight;\n            } // 보통영역 세팅\n             else if (scene[i].type === \"normal\") {\n                // 특정 HTML 요소의 전체 높이 offsetHeight -> 브라우저 뷰포트 높이인 innerHeight로 변경\n                // scene[i].scrollHeight = scene[i].objs.container.offsetHeight;\n                scene[i].scrollHeight = window.innerHeight;\n            }\n            scene[i].objs.container.style.height = `${scene[i].scrollHeight}px`\n        }\n        \n        //새로고침 했을때 잘못된 값 삽입 방지.\n        totalHeight = 0;\n        for (let i = 0; i < scene.length; i++) {\n            totalHeight += scene[i].scrollHeight;\n            if (totalHeight >= pageYOffset) {\n                currentScene = i;\n                break;\n            }\n        }\n        document.body.setAttribute('id', `show-scene-${currentScene}`);\n\n        playAnimation()\n    }\n\n\n    const calculate = (value, currentYOffset) => {\n        let result;\n        let start_point = value[2].start * scene[currentScene].scrollHeight;\n        let end_point = value[2].end * scene[currentScene].scrollHeight;\n        let animation_point = end_point - start_point;\n\n        if (currentYOffset >= start_point && currentYOffset <= end_point) {\n            result = (currentYOffset - start_point) / animation_point * (value[1] - value[0]) + value[0];\n        } else if (currentYOffset < start_point) {\n            result = value[0]\n        } else if (currentYOffset > end_point) {\n            result = value[1]\n        }\n\n        return result;\n    }\n\n    const playAnimation = () => {\n        let currentYOffset = 0;\n        currentYOffset = yOffset - prevScrollHeight;\n        let value = scene[currentScene].value;\n        scrollRatio = currentYOffset / scene[currentScene].scrollHeight;\n\n        switch (currentScene) {\n            case 0:\n                break;\n            case 1:\n                if (scrollRatio <= 0.17) {\n                    scene[currentScene].objs.messageA.style.opacity = calculate(value.messageA_opacity_in, currentYOffset);\n                    scene[currentScene].objs.messageA.style.transform = `translateY(${calculate(value.messageA_translateY_in, currentYOffset)}px)`\n                } else {\n                    scene[currentScene].objs.messageA.style.opacity = calculate(value.messageA_opacity_out, currentYOffset);\n                    scene[currentScene].objs.messageA.style.transform = `translateY(${calculate(value.messageA_translateY_out, currentYOffset)}px)`\n                }\n                if (scrollRatio <= 0.43) {\n                    scene[currentScene].objs.messageB.style.opacity = calculate(value.messageB_opacity_in, currentYOffset);\n                    scene[currentScene].objs.messageB.style.transform = `translateY(${calculate(value.messageB_translateY_in, currentYOffset)}px)`\n                } else {\n                    scene[currentScene].objs.messageB.style.opacity = calculate(value.messageB_opacity_out, currentYOffset);\n                    scene[currentScene].objs.messageB.style.transform = `translateY(${calculate(value.messageB_translateY_out, currentYOffset)}px)`\n                }\n                if (scrollRatio <= 0.69) {\n                    scene[currentScene].objs.messageC.style.opacity = calculate(value.messageC_opacity_in, currentYOffset);\n                    scene[currentScene].objs.messageC.style.transform = `translateY(${calculate(value.messageC_translateY_in, currentYOffset)}px)`\n                } else {\n                    scene[currentScene].objs.messageC.style.opacity = calculate(value.messageC_opacity_out, currentYOffset);\n                    scene[currentScene].objs.messageC.style.transform = `translateY(${calculate(value.messageC_translateY_out, currentYOffset)}px)`\n                }\n                break;\n            case 2:\n                break;\n        }\n    }\n\n    const update = () => {\n        prevScrollHeight = 0;\n        error_protect = false;\n        for (let i = 0; i < currentScene; i++) {\n            prevScrollHeight += scene[i].scrollHeight;\n            // console.log(prevScrollHeight)\n        }\n        //아래로 스크롤\n        if (yOffset > prevScrollHeight + scene[currentScene].scrollHeight) {\n            error_protect = true;\n            currentScene++;\n            document.body.setAttribute(\"id\", `show-scene-${currentScene}`);\n        }\n\n        //위로 스크롤\n        if (yOffset < prevScrollHeight) {\n            error_protect = true;\n            if (currentScene === 0) return; //바운스를 방지하기 위해.\n            currentScene--;\n            document.body.setAttribute(\"id\", `show-scene-${currentScene}`);\n        }\n\n        if (error_protect) return;\n\n        playAnimation();\n    }\n\n    window.addEventListener(\"scroll\", () => {\n        console.log(currentScene)\n        yOffset = pageYOffset;\n        // console.log(yOffset)\n        update();\n    })\n\n    window.addEventListener('load', set_Height);\n    window.addEventListener('resize', set_Height);\n})();\n\n//# sourceURL=webpack://moons/./src/pages/home/scroll.js?\n}");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "moons:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmoons"] = self["webpackChunkmoons"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dist/index.js");
/******/ 	
/******/ })()
;