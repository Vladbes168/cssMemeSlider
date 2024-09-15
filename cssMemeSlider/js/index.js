window.addEventListener('DOMContentLoaded', function() {
const arrMemes = [
    {
        icon: "images/why.jpg",
        title: "Me every day!"
    }
    ,
    {
        icon: "images/weekend.webp",
        title: "Have a rest!"
    }
    ,
    {
        icon: "images\deleting-wrong-file-by-mistake.gif",
        title: "After deleting permanently the wrong file by mistake"
    }
    ,
    {
        icon: "images\defending-work-not-at-the-client-meeting.gif",
        title: "Defending my work when I’m not at the client meeting"
    }
]
const sliderContainer = document.querySelector('.slider__container')

addMemesToPage()

function addMemesToPage() {
    let {title} = arrMemes[0]
    changeTitle(title)
    arrMemes.forEach(({icon, title}) => {
        const img = document.createElement('img')
        img.classList.add('slider__container-item')
        img.src = icon || 'images/why.jpg'
        sliderContainer.appendChild(img)
    })
}

function changeTitle(title) {
    const titleEl = document.querySelector('.title')
    titleEl.classList.remove('fade-in');
    titleEl.classList.add('fade-out')
    setTimeout(() => {
        titleEl.textContent = title
        titleEl.classList.remove('fade-out');
        titleEl.classList.add('fade-in');
    }, 500)

}
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
    let {title} = arrMemes[index]
    const sliderContainerWidth = document.querySelector('.slider__container').offsetWidth
    const sliderContainer = document.querySelector('.slider__container')
    sliderContainer.style.transform = `translateX(-${sliderContainerWidth * index}px)`
    changeTitle(title)
}
})