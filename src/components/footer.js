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
          <a target="_blank" href="https://about.facebook.com/ko/meta/"
            ><img src="../../assets/images/icons/fb.png"
          /></a>
          <a target="_blank" href="https://twitter.com/?lang=ko"
            ><img src="../../assets/images/icons/tw.png"
          /></a>
          <a target="_blank" href="https://www.youtube.com/"
            ><img src="../../assets/images/icons/ytube.png"
          /></a>
          <a target="_blank" href="https://www.instagram.com/"
            ><img
              src="../../assets/images/icons/is.png"
              width="38px"
              style="margin-bottom: -3px"
          /></a>
        </div>
    `;
  return footer;
};

export const init_footer = () => {
  const footer_container = document.querySelector("#footer_container");
  console.log(footer_container)

  if (footer_container) {
    footer_container.appendChild(create_footer());
  }
};
