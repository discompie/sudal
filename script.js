document.addEventListener('DOMContentLoaded', () => {
    const otterContainer = document.querySelector('.otter-container');
    
    // 이모지 목록
    const otterEmojis = ['🦦', '🦦', '🦦']; 

    // 수달 이모지를 추가하고 클릭 이벤트를 등록하는 함수
    const createOtter = (emoji) => {
        const otter = document.createElement('div');
        otter.textContent = emoji;
        otter.classList.add('otter');
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

    // 웹사이트에 3마리의 수달 이모지를 추가
    otterEmojis.forEach(emoji => {
        createOtter(emoji);
    });
});