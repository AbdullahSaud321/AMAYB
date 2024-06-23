const slides = document.querySelector('.slides');
            const indicators = document.querySelectorAll('.slide-indicators label');
            let currentIndex = 0;
            const totalSlides = indicators.length;

            function updateSlide() {
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
                indicators.forEach((indicator, index) => {
                    indicator.style.backgroundColor = index === currentIndex ? '#333' : '#bbb';
                });
            }

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function () {
                    currentIndex = index;
                    updateSlide();
                });
            });

            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlide();
            }, 3000);