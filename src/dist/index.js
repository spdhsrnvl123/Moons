// import {init_header} from "../components/header.js";
// import {init_footer} from "../components/footer.js";
// import "../pages/home/main.js";
// import "../pages/home/scroll.js"
// import "../pages/about/index.js";
// import "../pages/service/index.js";
// import "../pages/media/index.js";

// // DOM이 로드된 후 초기화 함수들 실행
// document.addEventListener('DOMContentLoaded', function() {
//     init_header();
//     init_footer();
// });

import { init_header } from "../components/header.js";
import { init_footer } from "../components/footer.js";
import "../pages/home/main.js";
import "../pages/home/scroll.js";

const loadPageScripts = () => {
  // DOM 요소로 현재 페이지 확인
  if (
    document.querySelector("#about-page") ||
    document.querySelector(".about-container")
  ) {
    import("../pages/about/index.js");
  } else if (
    document.querySelector("#service-page") ||
    document.querySelector(".service-container")
  ) {
    import("../pages/service/index.js");
  } else if (
    document.querySelector("#media-page") ||
    document.querySelector(".media-container")
  ) {
    import("../pages/media/index.js");
  }
  // 홈페이지는 기본으로 이미 로드됨
};

document.addEventListener("DOMContentLoaded", function () {
  init_header();
  init_footer();
  loadPageScripts();
});