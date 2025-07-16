/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmoons"] = self["webpackChunkmoons"] || []).push([["src_pages_media_index_js"],{

/***/ "./src/pages/media/index.js":
/*!**********************************!*\
  !*** ./src/pages/media/index.js ***!
  \**********************************/
/***/ (() => {

eval("{//section-3 carousel\nconst update = () => {    \n    const content = document.querySelector(\".section-3 .container .content\");\n    const container = document.querySelector(\".section-3 .container\");\n    const next = document.querySelector(\".section-3 .button-box .next\");\n    const prev = document.querySelector(\".section-3 .button-box .prev\");\n\n\n    next.addEventListener(\"click\", () => {\n        content.style.transform = `translateX(${-49.6}vw)`\n        container.style.overflow = `hidden`;\n        container.classList.remove(\"box_opacity\");\n        container.classList.add(\"active\");\n    })\n\n    prev.addEventListener(\"click\", () => {\n        content.style.transform = `translateX(${0}vw)`\n        container.classList.remove(\"active\");\n        container.classList.add(\"box_opacity\");\n        // container.style.overflow = `hidden`;\n    })\n\n}\n\nwindow.addEventListener(\"load\", update);\n\n//section-2 carousel\nconst update_0 = () => {    \n    const content_0 = document.querySelector(\".section-2 .container .content\");\n    const container_0 = document.querySelector(\".section-2 .container\");\n    const next_0 = document.querySelector(\".section-2 .button-box .next\");\n    const prev_0 = document.querySelector(\".section-2 .button-box .prev\");\n\n\n    next_0.addEventListener(\"click\", () => {\n        content_0.style.transform = `translateX(${-44.2}vw)`\n        container_0.style.overflow = `hidden`;\n        container_0.classList.remove(\"box_opacity\");\n        container_0.classList.add(\"active\");\n    })\n\n    prev_0.addEventListener(\"click\", () => {\n        content_0.style.transform = `translateX(${0}vw)`\n        container_0.classList.remove(\"active\");\n        container_0.classList.add(\"box_opacity\");\n    })\n\n\n}\n\nwindow.addEventListener(\"load\", update_0);\n\n//# sourceURL=webpack://moons/./src/pages/media/index.js?\n}");

/***/ })

}]);