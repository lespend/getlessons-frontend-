// Создаёт элемент overlay, но без класса определяющего его стиль
const overlay = document.createElement('div')
overlay.id = 'overlay'
document.body.append(overlay)

// Показ и скрытие меню по нажатию на кнопку
const btnclose = document.getElementsByClassName('navigation-button-menu')[0]
console.log(btnclose)

btnclose.onclick = function () {
    const nav = document.getElementsByClassName('header-navigation')[0]
    nav.classList.toggle('header-navigation--show');

    const btnicon = document.getElementsByClassName('navigation-button-menu')[0].getElementsByTagName('i')[0]
    
    if (btnicon.classList.contains('fa-bars')) {
        btnicon.classList.remove('fa-bars')
        btnicon.classList.add('fa-times')
    } else if (btnicon.classList.contains('fa-times')) {
        btnicon.classList.remove('fa-times')
        btnicon.classList.add('fa-bars')
    }

    const overlay = document.getElementById('overlay')
    overlay.classList.toggle('overlay');
}