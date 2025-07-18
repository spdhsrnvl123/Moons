// 상단에 이미지들을 import
import fbIcon from "../assets/images/icons/fb.png";
import twIcon from "../assets/images/icons/tw.png";
import youtubeIcon from "../assets/images/icons/ytube.png";
import instagramIcon from "../assets/images/icons/is.png";

export const create_footer = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="text_container">
      <p>MOON:s</p>
      <div class="text_1">
        <p>서울특별시 서초구 반포대로 12길 22</p>
        <p>사업자등록번호 : 123-45-67890</p>
      </div>
      <div class="text_2">
        <p>전화 : 5367-6589</p>
        <p>Fax : 031-333-444</p>
        <p>이메일 : spdhsrnvl123@naver.com</p>
      </div>
      <p>COPYRIGHT 2022 MOON:s ALL RIGHTS RESERVED</p>
    </div>
    <div class="sns">
      <a target="_blank" href="https://about.facebook.com/ko/meta/">
        <img src="${fbIcon}" alt="Facebook" />
      </a>
      <a target="_blank" href="https://twitter.com/?lang=ko">
        <img src="${twIcon}" alt="Twitter" />
      </a>
      <a target="_blank" href="https://www.youtube.com/">
        <img src="${youtubeIcon}" alt="YouTube" />
      </a>
      <a target="_blank" href="https://www.instagram.com/">
        <img src="${instagramIcon}" alt="Instagram" width="38px" style="margin-bottom: -3px" />
      </a>
    </div>
  `;
  return footer;
};

export const init_footer = () => {
  const footer_container = document.querySelector("#footer_container");
  console.log(footer_container);

  if (footer_container) {
    footer_container.appendChild(create_footer());
  }
};
