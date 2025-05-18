
// menu
const menu = document.getElementById('menu')
const menuIcon = document.getElementById('icon')
const menuItems = document.querySelectorAll('.menu-item')
const icon =()=> {
menuIcon.classList.toggle("change");
menu.classList.toggle('off')
}
const purple = (item, str) => {
    item.classList.toggle('purple');
    return cleanUp(item, str);
};

const cleanUp = (item, str) => {
    if (str === 'over') {
        item.removeEventListener('mouseover', item._mouseOverHandler);
        item.addEventListener('mouseout', item._mouseOutHandler);
    } else {
        item.removeEventListener('mouseout', item._mouseOutHandler);
        item.addEventListener('mouseover', item._mouseOverHandler);
    }
};

menuItems.forEach((item) => {
    item._mouseOverHandler = () => purple(item, 'over');
    item._mouseOutHandler = () => purple(item, 'out');

    item.addEventListener('mouseover', item._mouseOverHandler);
});
menuIcon.addEventListener('click', icon)

// animated banner
let limit = document.querySelector(".animate").children.length
let cur = 0

const rotate = () => {
    cur = cur+1 === limit ? 0 : cur+1
}

const increment = () => {
    document.getElementById(`t-${cur}`).style.display="none"
    rotate()
    document.getElementById(`t-${cur}`).style.display="block"
}
setInterval(increment, 2000)

// 