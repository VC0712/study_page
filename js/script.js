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
