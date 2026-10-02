// .btn-menu
const btnMenu = document.querySelector('.btn-menu');
// main nav
const mainNav = document.querySelector('.main-nav');

// .btn-menu click event
btnMenu.addEventListener('click', () => {
    mainNav.classList.toggle('open-menu');
    // 
    if (btnMenu.innerHTML === 'Menu') {
        btnMenu.innerHTML = 'Close';
    } else {
        btnMenu.innerHTML = 'Menu';
    }
});

const themeBtn = document.querySelector('.btn-theme');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        themeBtn.innerHTML = '☀️';
    } else {
          themeBtn.innerHTML = '🌙';

    }
});

const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    if (length >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});

const clockDate = document.querySelector('.clock-date');
const clockTime = document.querySelector('.clock-time');
const days = ['일' ,'월' ,'화' ,'수' ,'목' ,'금' ,'토' ];

function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];
    clockDate.textContent = year + '년' + month + '월' + date + '일 (' + day + ')';

    const h = String(now.getHours()).padStart(2,'0');
     const m = String(now.getMinutes()).padStart(2,'0');
      const s = String(now.getSeconds()).padStart(2,'0');

      clockTime.textContent = h + ':' + m + ':' + s;
    

}

updateClock();

setInterval(updateClock,1000);

/* ==================================================
   3. 커리큘럼 탭 메뉴
================================================== */

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((tab) => {
    tab.addEventListener('click', () => {

        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((p) => p.classList.remove('active'));

       
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

/* ==================================================
   4. 스터디 사진 갤러리
================================================== */

const galleryMain = document.querySelector('.gallery-main');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');

galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {

        // 큰 이미지의 주소(src)와 설명(alt)을 클릭한 썸네일 것으로 바꾼다.
        galleryMain.src = thumb.src;
        galleryMain.alt = thumb.alt;

        // 선택 표시(active)를 클릭한 썸네일로 옮긴다.
        galleryThumbs.forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
    });
});
