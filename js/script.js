document.addEventListener('DOMContentLoaded', function() {
    const glavDiv = document.querySelector('.glav');
    const countdownElem = document.querySelector('.countdown');
    const imageLink = document.querySelector('.image-link');
    const clickableImage = document.querySelector('.clickable-image');
    const showButton = document.querySelector('.ShowDiv');

    function showGlavDiv() {
        glavDiv.classList.remove('hidden'); 
        glavDiv.classList.add('Appear'); 

        let countdown = 5; 
        const countdownInterval = setInterval(function() {
            countdown--;
            countdownElem.textContent = countdown;

            if (countdown === 0) {
                clearInterval(countdownInterval); 
                countdownElem.style.display = 'none'; 
                imageLink.classList.remove('hidden'); 
            }
        }, 1000); 
    }


    setTimeout(showGlavDiv, 5000);

    setTimeout(function() {
        showButton.classList.remove('hidden'); 
    }, 10000);

    showButton.addEventListener('click', function() {
        glavDiv.classList.remove('disappear'); 
        showGlavDiv(); 
    });

    clickableImage.addEventListener('click', function(event) {
        event.preventDefault();
        glavDiv.classList.add('disappear'); 
        setTimeout(function() {
            glavDiv.classList.add('hidden'); 
            glavDiv.classList.remove('Appear');
            countdownElem.style.display = 'block'; 
            countdownElem.textContent = '5'; 
            imageLink.classList.add('hidden'); 
        }, 1000);
    });
});
