document.addEventListener('DOMContentLoaded', () => {
    const otterContainer = document.querySelector('.otter-container');
    
    // 귀여운 애니메이션 수달 이미지 URL 목록
    const otterImages = [
        'https://www.flaticon.com/svg/static/icons/svg/1963/1963282.svg', // 수달1
        'https://www.flaticon.com/svg/static/icons/svg/1963/1963273.svg', // 수달2
        'https://www.flaticon.com/svg/static/icons/svg/1963/1963261.svg'  // 수달3
    ];

    // 수달을 추가하고 클릭 이벤트를 등록하는 함수
    const createOtter = (imageUrl) => {
        const otter = document.createElement('img');
        otter.src = imageUrl;
        otter.classList.add('otter');
        otter.alt = '귀여운 수달';
        otterContainer.appendChild(otter);

        otter.addEventListener('click', () => {
            const messages = [
                '안녕!',
                '나를 클릭했구나!',
                '헤헤헷',
                '사랑해!',
                '날 보러 와줘서 고마워!'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        });
    };

    // 웹사이트에 3마리의 수달을 추가
    otterImages.forEach(imageUrl => {
        createOtter(imageUrl);
    });
});