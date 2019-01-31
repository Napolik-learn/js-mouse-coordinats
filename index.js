
document.querySelector('#my_block').onmousemove = function(event) {
    event = event || window.event;
    let x = document.querySelector('#x');
    let y = document.querySelector('#y');

    x.innerHTML = event.offsetX;
    y.innerHTML = event.offsetY;
}