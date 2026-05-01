// 라이트박스 — 이미지 클릭 시 확대 보기
(function () {
    // 라이트박스 요소 생성
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    var img = document.createElement('img');
    img.className = 'lightbox-img';

    var closeBtn = document.createElement('span');
    closeBtn.className = 'lightbox-close';
    closeBtn.textContent = '×';

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    // 모든 작품 이미지에 클릭 이벤트 추가
    var workImages = document.querySelectorAll('.work-item img');
    workImages.forEach(function (image) {
        image.style.cursor = 'pointer';
        image.addEventListener('click', function () {
            img.src = this.src;
            overlay.classList.add('active');
        });
    });

    // 닫기
    overlay.addEventListener('click', function () {
        overlay.classList.remove('active');
    });
})();
