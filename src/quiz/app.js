/* 새로고침 또는 RESTART 하면 세션 반영 */
if (sessionStorage.length > 2) {
    changeMode();
} else {
    setStorage('white', '/images/white.png', 'black', '다크모드로 보기', 'black', 'white', 'white');
}

/* 키 입력 이벤트 */
document.addEventListener('keydown', function (e) {
    let key = e.keyCode;

    if (key === 38 /* TOP */) {
        document.getElementById('left-top').src = '/images/theft.png';
        document.getElementById('left-bottom').src = sessionStorage.getItem('imageColor');
        setTimeout(() => {
            document.getElementById('left-top').src = '/images/police.png';
            document.getElementById('right-top').src = sessionStorage.getItem('imageColor');
            setTimeout(end, 500);
          }, 1000);
    }

    if (key === 39 /* RIGHT */) {
        document.getElementById('right-bottom').src = '/images/theft.png';
        document.getElementById('left-bottom').src = sessionStorage.getItem('imageColor');
        setTimeout(() => {
            document.getElementById('right-bottom').src = '/images/police.png';
            document.getElementById('right-top').src = sessionStorage.getItem('imageColor');
            setTimeout(end, 500);
        }, 1000);
    }
});

/* 다크모드 이벤트 */
const lightMode = document.getElementById('light-mode');
const body = document.querySelector('body');
const btn = document.getElementById('light-mode');
lightMode.addEventListener('click', () => {
  if (sessionStorage.getItem('backgroundColor') === 'white') {
    setStorage('#282828', '/images/dark.png', 'white', '일반모드로 보기', 'yellow', 'black');
  } else {
    setStorage('white', '/images/white.png', 'black', '다크모드로 보기', 'black', 'white');
  }
  changeMode();
});

/* sessionStorage 값 초기화 */
function setStorage(backgroundColor, imageColor, fontColor, buttonText, buttonColor, buttonFontColor) {
    sessionStorage.setItem('backgroundColor', backgroundColor);
    sessionStorage.setItem('imageColor', imageColor);
    sessionStorage.setItem('fontColor', fontColor);
    sessionStorage.setItem('buttonText', buttonText);
    sessionStorage.setItem('buttonColor', buttonColor);
    sessionStorage.setItem('buttonFontColor', buttonFontColor);
}

/* 세션에 저장된 값으로 다크/일반 모드 변경 */
function changeMode() {
    const caption = document.querySelector('caption');
    const button = document.getElementById('light-mode');

    document.body.style.backgroundColor = sessionStorage.getItem('backgroundColor');
    caption.style.color = sessionStorage.getItem('fontColor');
    button.textContent = sessionStorage.getItem('buttonText');
    button.style.backgroundColor = sessionStorage.getItem('buttonColor');
    button.style.color = sessionStorage.getItem('buttonFontColor');
    document.getElementById('left-top').src = sessionStorage.getItem('imageColor');
    document.getElementById('right-bottom').src = sessionStorage.getItem('imageColor');
}

/* 게임이 종료되면 팝업 이미지 보여줌 */
function end() {
    const popup = document.querySelector('.popup')
    popup.style.display = 'flex'
}