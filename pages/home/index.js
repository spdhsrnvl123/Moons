(() => {
    let currentScene = 0;
    let prevScrollHeight = 0; //이전 씬
    let yOffset = 0; // 스크롤 값
    let totalHeight = 0;
    let error_protect = false;
    let scrollRatio = 0; // 현재 씬의 스크롤 비율
    

    const scene = [
        {
            type: "normal",
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#container-0")
            }
        },
        {
            type: "scrollEvent",
            scrollHeight: 0,
            height_add: 3,
            objs: {
                container: document.querySelector("#container-1"),
                messageA: document.querySelector(".messageA"),
                messageB: document.querySelector(".messageB"),
                messageC: document.querySelector(".messageC")
            },
            value: {
                messageA_opacity_in: [0, 1, { start: 0, end: 0.16 }],
                messageA_opacity_out: [1, 0, { start: 0.19, end: 0.26 }],
                messageA_translateY_in: [30, 0, { start: 0, end: 0.15 }],
                messageA_translateY_out: [0, -40, { start: 0.19, end: 0.26 }],
                
                messageB_opacity_in: [0, 1, { start: 0.26, end: 0.42 }],
                messageB_opacity_out: [1, 0, { start: 0.45, end: 0.52 }],
                messageB_translateY_in: [30, 0, { start: 0.26, end: 0.41 }],
                messageB_translateY_out: [0, -40, { start: 0.45, end: 0.52 }],
                
                messageC_opacity_in: [0, 1, { start: 0.52, end: 0.68 }],
                messageC_opacity_out: [1, 0, { start: 0.71, end: 0.78 }],
                messageC_translateY_in: [30, 0, { start: 0.52, end: 0.67 }],
                messageC_translateY_out: [0, -450, { start: 0.71, end: 0.78 }],

            }
        },
        {
            type: "normal",
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#container-2")
            }
        }
    ]

    //높이 세팅
    const set_Height = () => {
        for (let i = 0; i < scene.length; i++) {
            //스크롤 영역에 3배 더해서 셋팅
            if (scene[i].type === "scrollEvent") {
                scene[i].scrollHeight = scene[i].height_add * window.innerHeight;
            } // 보통영역 세팅
             else if (scene[i].type === "normal") {
                // 특정 HTML 요소의 전체 높이 offsetHeight -> 브라우저 뷰포트 높이인 innerHeight로 변경
                // scene[i].scrollHeight = scene[i].objs.container.offsetHeight;
                scene[i].scrollHeight = window.innerHeight;
            }
            scene[i].objs.container.style.height = `${scene[i].scrollHeight}px`
        }
        
        //새로고침 했을때 잘못된 값 삽입 방지.
        totalHeight = 0;
        for (let i = 0; i < scene.length; i++) {
            totalHeight += scene[i].scrollHeight;
            if (totalHeight >= pageYOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);

        playAnimation()
    }


    const calculate = (value, currentYOffset) => {
        let result;
        let start_point = value[2].start * scene[currentScene].scrollHeight;
        let end_point = value[2].end * scene[currentScene].scrollHeight;
        let animation_point = end_point - start_point;

        if (currentYOffset >= start_point && currentYOffset <= end_point) {
            result = (currentYOffset - start_point) / animation_point * (value[1] - value[0]) + value[0];
        } else if (currentYOffset < start_point) {
            result = value[0]
        } else if (currentYOffset > end_point) {
            result = value[1]
        }

        return result;
    }

    const playAnimation = () => {
        let currentYOffset = 0;
        currentYOffset = yOffset - prevScrollHeight;
        let value = scene[currentScene].value;
        scrollRatio = currentYOffset / scene[currentScene].scrollHeight;

        switch (currentScene) {
            case 0:
                break;
            case 1:
                if (scrollRatio <= 0.17) {
                    scene[currentScene].objs.messageA.style.opacity = calculate(value.messageA_opacity_in, currentYOffset);
                    scene[currentScene].objs.messageA.style.transform = `translateY(${calculate(value.messageA_translateY_in, currentYOffset)}px)`
                } else {
                    scene[currentScene].objs.messageA.style.opacity = calculate(value.messageA_opacity_out, currentYOffset);
                    scene[currentScene].objs.messageA.style.transform = `translateY(${calculate(value.messageA_translateY_out, currentYOffset)}px)`
                }
                if (scrollRatio <= 0.43) {
                    scene[currentScene].objs.messageB.style.opacity = calculate(value.messageB_opacity_in, currentYOffset);
                    scene[currentScene].objs.messageB.style.transform = `translateY(${calculate(value.messageB_translateY_in, currentYOffset)}px)`
                } else {
                    scene[currentScene].objs.messageB.style.opacity = calculate(value.messageB_opacity_out, currentYOffset);
                    scene[currentScene].objs.messageB.style.transform = `translateY(${calculate(value.messageB_translateY_out, currentYOffset)}px)`
                }
                if (scrollRatio <= 0.69) {
                    scene[currentScene].objs.messageC.style.opacity = calculate(value.messageC_opacity_in, currentYOffset);
                    scene[currentScene].objs.messageC.style.transform = `translateY(${calculate(value.messageC_translateY_in, currentYOffset)}px)`
                } else {
                    scene[currentScene].objs.messageC.style.opacity = calculate(value.messageC_opacity_out, currentYOffset);
                    scene[currentScene].objs.messageC.style.transform = `translateY(${calculate(value.messageC_translateY_out, currentYOffset)}px)`
                }
                break;
            case 2:
                break;
        }
    }

    const update = () => {
        prevScrollHeight = 0;
        error_protect = false;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += scene[i].scrollHeight;
            // console.log(prevScrollHeight)
        }
        //아래로 스크롤
        if (yOffset > prevScrollHeight + scene[currentScene].scrollHeight) {
            error_protect = true;
            currentScene++;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        //위로 스크롤
        if (yOffset < prevScrollHeight) {
            error_protect = true;
            if (currentScene === 0) return; //바운스를 방지하기 위해.
            currentScene--;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        if (error_protect) return;

        playAnimation();
    }

    window.addEventListener("scroll", () => {
        console.log(currentScene)
        yOffset = pageYOffset;
        // console.log(yOffset)
        update();
    })

    window.addEventListener('load', set_Height);
    window.addEventListener('resize', set_Height);
})();

//슬라이드 쇼
const update = () => {
  const showingStatus = "showing";
  const container = document.querySelector("#container-0");

  const carousel = () => {
    const currentScene = document.querySelector(`.${showingStatus}`);
    if (currentScene) {
      currentScene.classList.remove("showing");
      const nextSlide = currentScene.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.add("showing");
      } else {
        container.firstElementChild.classList.add("showing");
      }
    } else {
      container.firstElementChild.classList.add("showing");
    }
    represent();
  };

  const represent = () => {
    const showing = document.querySelector(".section-0.showing");
    const main_title = document.querySelector(".main-title");
    const first_text = document.querySelector(".first-text");
    const second_text = document.querySelector(".second-text");

    if (showing) {
      main_title.classList.add("active");
      first_text.classList.add("active");
      second_text.classList.add("active");
    } else {
      main_title.classList.remove("active");
      first_text.classList.remove("active");
      second_text.classList.remove("active");
    }

    const showing_2 = document.querySelector(".section-1.showing");
    const section_1_text = document.querySelector(".section-1-text");
    const section_1_text2 = document.querySelector(".section-1-text2");

    if (showing_2) {
      section_1_text.classList.add("active");
      section_1_text2.classList.add("active");
    } else {
      section_1_text.classList.remove("active");
      section_1_text2.classList.remove("active");
    }

    const showing_3 = document.querySelector(".section-2.showing");
    const section_2_text = document.querySelector(".section-2-text");
    const section_2_text2 = document.querySelector(".section-2-text2");

    if (showing_3) {
      section_2_text.classList.add("active");
      section_2_text2.classList.add("active");
    } else {
      section_2_text.classList.remove("active");
      section_2_text2.classList.remove("active");
    }
  };
  carousel();
  setInterval(carousel, 4000);
};

window.addEventListener("load", update);