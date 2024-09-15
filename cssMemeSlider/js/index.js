const allBtn = document.querySelectorAll('.paginations-circle')
allBtn[0].classList.add('active')
allBtn.forEach((item, index) => {
    item.addEventListener('click', function() {
        allBtn.forEach(el => {
            el.classList.remove('active')
        })
        transformSlides(index)
        item.classList.add('active')
    })
})

function transformSlides(index) {
    const sliderContainerWidth = document.querySelector('.slider__container').offsetWidth
    const sliderContainer = document.querySelector('.slider__container')
    sliderContainer.style.transform = `translateX(-${sliderContainerWidth * index}px)`
}