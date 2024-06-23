const switchBtn = document.getElementById('switch');

    switchBtn.addEventListener('change', () => {
        if (switchBtn.checked) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    });