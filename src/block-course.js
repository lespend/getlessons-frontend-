const titles = document.getElementsByClassName('block-course__title');
const windowWidth = window.innerWidth

if (windowWidth >= 768 && windowWidth < 1024) {
    for (title of titles) {
        if (title.innerText.length >= 23) {
            title.innerText = `${title.innerText.slice(0, 22)}...`
        }
    }
}