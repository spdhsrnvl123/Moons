import { init_header } from "../components/header.js";
import { init_footer } from "../components/footer.js";
import "../pages/home/index.js";

// 공통 CSS만 항상 로드
import "../styles/reset.css";

const loadPageScripts = () => {
  // DOM 요소로 현재 페이지 확인
  if (
    document.querySelector("#about-page") ||
    document.querySelector(".about-container")
  ) {
    import("../pages/about/index.js");
    import("../pages/about/index.css");
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
    import ("../pages/media/index.css");
  } else {
    import ("../pages/home/index.css");
    import ("../pages/home/scroll.css");
  }
  // 홈페이지는 기본으로 이미 로드됨
};

document.addEventListener("DOMContentLoaded", function () {
  init_header();
  init_footer();
  loadPageScripts();
});
